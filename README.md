# CCTV ID

An interactive map for browsing public CCTV streams across Indonesian regions.

The dashboard displays camera locations on an OpenStreetMap map, supports search
and regional filtering, plays HLS live streams for the selected camera, and logs
stream playback issues in a compact collapsible widget.

## Features

- Interactive Leaflet map with CCTV markers
- Live HLS playback
- Camera search and regional filters
- Collapsible camera panel
- Compact stream issue log
- Responsive dashboard layout
- Direct links to camera locations on OpenStreetMap

## Tech Stack

- Next.js
- React
- TypeScript
- Leaflet and React Leaflet
- hls.js

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Start the production server
```

## CCTV Data

Camera names, coordinates, groups, managers, and stream URLs are maintained in
[`src/cctvData.ts`](src/cctvData.ts).

Current groups:

- Salatiga
- Magelang
- Boyolali
- Wonosobo
- Pekalongan

Public stream availability is controlled by the respective CCTV providers and
may change or become temporarily unavailable.

## License

Licensed under the [MIT License](LICENSE).
