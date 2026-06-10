# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — start the Next.js development server at `http://localhost:3000`.
- `npm run build` — create a production build and run Next.js/TypeScript build checks.
- `npm run start` — start the production server after `npm run build`.

There are no lint or test scripts configured in `package.json`. There is also no single-test command until a test runner is added.

## Architecture

This is a small Next.js App Router project for an interactive Salatiga public CCTV dashboard.

- `app/layout.tsx` defines global metadata and imports `app/globals.css`.
- `app/page.tsx` is a client page that dynamically imports `src/CCTVDashboard.tsx` with `ssr: false`. Keep browser-only map/video code behind this dynamic import because Leaflet and media playback depend on browser APIs.
- `src/CCTVDashboard.tsx` contains the dashboard UI and state: group filter, search query, selected camera, Leaflet map markers, map focus behavior, and HLS video playback.
- `src/cctvData.ts` is the source of camera data and exported types. Camera groups are constrained by `CCTVGroup`; if adding a new group, update `CCTVGroup`, `groupLabels`, and the filter list in `CCTVDashboard.tsx`.
- `app/globals.css` contains both global reset/theme styles and all dashboard-specific layout, Leaflet marker, panel, video-card, and responsive styles.

## Data and playback notes

Camera names, coordinates, managers, groups, and `.m3u8` stream URLs live in `src/cctvData.ts`. Public stream availability depends on the CCTV providers and may change independently of the app.

Video playback uses `hls.js` when Media Source Extensions are supported, with native HLS fallback via `video.canPlayType('application/vnd.apple.mpegurl')`. The effect in `VideoPlayer` destroys the HLS instance and clears the video source when the selected camera changes.

## Styling notes

The map uses OpenStreetMap tiles through React Leaflet. Global CSS customizes Leaflet styles directly, including dark tile filtering and custom `L.divIcon` marker classes (`cctv-pin`, `pin-body`, `pin-pulse`). Mobile layout switches from absolute overlay panels to a stacked flex layout at `max-width: 860px`.
