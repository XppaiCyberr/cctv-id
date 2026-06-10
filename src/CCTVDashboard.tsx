'use client';

import Hls from 'hls.js';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import { CCTV, CCTVGroup, cctvs, groupLabels } from './cctvData';

const groups: Array<CCTVGroup | 'all'> = ['all', 'salatiga', 'magelang', 'boyolali', 'wonosobo', 'pekalongan'];
const salatigaCenter: [number, number] = [-7.330958, 110.500573];

const cameraIcon = L.divIcon({
  className: 'cctv-pin',
  html: '<div class="pin-body"><span></span></div>',
  iconSize: [24, 32],
  iconAnchor: [12, 32],
});

const activeCameraIcon = L.divIcon({
  className: 'cctv-pin active',
  html: '<div class="pin-body"><span></span></div><div class="pin-pulse"></div>',
  iconSize: [32, 42],
  iconAnchor: [16, 42],
});

function VideoPlayer({ camera }: { camera: CCTV }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ lowLatencyMode: true });
      hls.loadSource(camera.streamUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = camera.streamUrl;
    }

    return () => {
      hls?.destroy();
      video.removeAttribute('src');
      video.load();
    };
  }, [camera]);

  return <video ref={videoRef} controls autoPlay muted playsInline />;
}

function MapFocus({ camera }: { camera: CCTV }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([camera.lat, camera.lng], Math.max(map.getZoom(), 16), { duration: 0.45 });
  }, [camera, map]);

  return null;
}

export default function CCTVDashboard() {
  const [activeGroup, setActiveGroup] = useState<CCTVGroup | 'all'>('all');
  const [query, setQuery] = useState('');
  const [activeCamera, setActiveCamera] = useState<CCTV>(cctvs[0]);

  const filteredCctvs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cctvs.filter((camera) => {
      const matchesGroup = activeGroup === 'all' || camera.group === activeGroup;
      const matchesQuery = !normalizedQuery || camera.name.toLowerCase().includes(normalizedQuery) || groupLabels[camera.group].toLowerCase().includes(normalizedQuery);
      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  useEffect(() => {
    if (!filteredCctvs.some((camera) => camera.id === activeCamera.id) && filteredCctvs[0]) {
      setActiveCamera(filteredCctvs[0]);
    }
  }, [activeCamera.id, filteredCctvs]);

  return (
    <main className="map-shell">
      <MapContainer center={salatigaCenter} zoom={13} scrollWheelZoom className="map" zoomControl={false}>
        <ZoomControl position="topright" />
        <TileLayer attribution="&copy; OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapFocus camera={activeCamera} />
        {filteredCctvs.map((camera) => (
          <Marker key={camera.id} position={[camera.lat, camera.lng]} icon={activeCamera.id === camera.id ? activeCameraIcon : cameraIcon} eventHandlers={{ click: () => setActiveCamera(camera) }} />
        ))}
      </MapContainer>

      <header className="map-header">
        <div>
          <p className="mono-label">CCTV ID</p>
          <h1>Live map</h1>
        </div>
        <div className="status-pill">{filteredCctvs.length}/{cctvs.length}</div>
      </header>

      <aside className="camera-panel">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search camera" />
        <nav className="filters">
          {groups.map((group) => (
            <button key={group} className={activeGroup === group ? 'active' : ''} onClick={() => setActiveGroup(group)}>
              {group === 'all' ? 'All' : groupLabels[group]}
            </button>
          ))}
        </nav>
        <div className="camera-list">
          {filteredCctvs.map((camera) => (
            <button key={camera.id} className={`camera-row ${activeCamera.id === camera.id ? 'selected' : ''}`} onClick={() => setActiveCamera(camera)}>
              <strong>{camera.name}</strong>
              <span>{groupLabels[camera.group]}</span>
            </button>
          ))}
        </div>
      </aside>

      <section className="player-card">
        <div className="player-frame">
          <VideoPlayer camera={activeCamera} />
        </div>
        <div className="player-info">
          <div>
            <p className="mono-label">LIVE STREAM</p>
            <strong>{activeCamera.name}</strong>
            <span>{activeCamera.manager}</span>
          </div>
          <a href={`https://www.openstreetmap.org/?mlat=${activeCamera.lat}&mlon=${activeCamera.lng}#map=18/${activeCamera.lat}/${activeCamera.lng}`} target="_blank" rel="noreferrer">
            Locate
          </a>
        </div>
      </section>
    </main>
  );
}
