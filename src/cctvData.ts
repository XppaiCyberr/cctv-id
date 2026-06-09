export type CCTVGroup = 'atcs' | 'diponegoro' | 'sukowati';

export type CCTV = {
  id: string;
  name: string;
  group: CCTVGroup;
  manager: string;
  streamUrl: string;
  lat: number;
  lng: number;
};

export const groupLabels: Record<CCTVGroup, string> = {
  atcs: 'ATCS',
  diponegoro: 'Jl. Diponegoro',
  sukowati: 'Kompleks Sukowati',
};

export const cctvs: CCTV[] = [
  { id: '1', name: 'Simpang Cebongan Utara', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/0597120c-9a17-43eb-9748-e9436973c958.m3u8', lat: -7.364844, lng: 110.513946 },
  { id: '2', name: 'Simpang Cebongan Selatan', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/edcfccff-7407-4f5a-9666-a3e263d8c6d2.m3u8', lat: -7.364664, lng: 110.514063 },
  { id: '3', name: 'Simpang Pulutan', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/a5710e54-39ba-483f-8e6b-999bbf7ac21a.m3u8', lat: -7.313429, lng: 110.476774 },
  { id: '4', name: 'Simpang Pulutan Selatan', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/c9134cb6-2b82-44fc-a072-160801d6867e.m3u8', lat: -7.313423, lng: 110.476779 },
  { id: '5', name: 'Simpang Pulutan Utara', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/6257f313-5db4-4b88-8f22-0ddc9427808e.m3u8', lat: -7.313242, lng: 110.476953 },
  { id: '6', name: 'Simpang 4 Pasar Sapi', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/290488df-9871-4a19-8752-565bee426e3f.m3u8', lat: -7.336655, lng: 110.49818 },
  { id: '7', name: 'Simpang 3 Pasar Sapi', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/eddbd084-36ea-4571-807e-415f3d38122e.m3u8', lat: -7.335875, lng: 110.497891 },
  { id: '8', name: 'Simpang Jetis', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/93e5efe0-cf8e-4e21-a3f5-2a4fe51db504.m3u8', lat: -7.322276, lng: 110.496562 },
  { id: '9', name: 'Simpang ABC (dari Solo)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/c7b21a16-6740-4576-b8d2-7438988895e7.m3u8', lat: -7.342758, lng: 110.509912 },
  { id: '10', name: 'Simpang ABC (Jl. Argoyuwono)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/cd4244c9-d881-48cd-b348-65b8eb5375b9.m3u8', lat: -7.342891, lng: 110.509859 },
  { id: '11', name: 'Simpang ABC (dari Kota)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/ee1e0d76-96b9-43ce-a1bb-d647245a35c0.m3u8', lat: -7.34246, lng: 110.509921 },
  { id: '12', name: 'Simpang ABC (Jl. Argotunggal)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/476d6a15-b1a4-494c-9112-205456799aa8.m3u8', lat: -7.342458, lng: 110.509977 },
  { id: '13', name: 'Simpang ABC (Dome)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/9ca726bb-429c-40af-9b42-6f798d53ea50.m3u8', lat: -7.342765, lng: 110.50993 },
  { id: '14', name: 'Simpang Tingkir (Jl. Soekarno Hatta)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/fd95302c-0895-429e-bb77-2b0b1d5e491f.m3u8', lat: -7.36181, lng: 110.513724 },
  { id: '15', name: 'Simpang Tingkir (DOME)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/142aad5b-6baf-494c-be5a-0bbdafab3ab4.m3u8', lat: -7.36196, lng: 110.513729 },
  { id: '16', name: 'Simpang Tingkir (Jl. Tingkir Raya)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/8a141a15-6083-4001-b157-94bbfc87204b.m3u8', lat: -7.36222, lng: 110.513686 },
  { id: '17', name: 'Simpang Tingkir (Jl. Cebongan Raya)', group: 'atcs', manager: 'Dinas Perhubungan Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/b094c5d7-4ec5-40e9-afdd-60b5ab030454.m3u8', lat: -7.361807, lng: 110.513624 },
  { id: '18', name: 'Bundaran Ramayana', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/43ce7803-4199-44ae-a886-00b0aa15325e.m3u8', lat: -7.324961, lng: 110.504566 },
  { id: '19', name: 'BTN', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/f87ee50e-6d86-461e-b142-f084223a789e.m3u8', lat: -7.324943, lng: 110.50454 },
  { id: '20', name: 'Pertigaan Depan BRI', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/6e8f97b5-221f-4541-838f-eb9dd8b8cd6f.m3u8', lat: -7.324315, lng: 110.50362 },
  { id: '21', name: 'Pertigaan BRI', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/d0477be8-96cf-4af3-8f0c-68b8c48363d5.m3u8', lat: -7.324037, lng: 110.503536 },
  { id: '22', name: 'Depan BCA', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/a998cfa8-164d-416b-95c8-bae9703d5a62.m3u8', lat: -7.32386, lng: 110.503061 },
  { id: '23', name: 'Depan PLN Timur', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/e5698f11-f067-41e4-a93a-f2528dbeb682.m3u8', lat: -7.323654, lng: 110.50275 },
  { id: '24', name: 'Korem', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/50a4a323-d9df-4660-a2a3-c7bf5ddf5128.m3u8', lat: -7.323132, lng: 110.502125 },
  { id: '25', name: 'Depan Korem Timur', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/e7892663-ef61-473f-a49e-bd9649390a0d.m3u8', lat: -7.322998, lng: 110.50215 },
  { id: '26', name: 'Gereja Paulus Miki', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/3dc9728f-0684-4f81-9e72-1c147c13a5fe.m3u8', lat: -7.322544, lng: 110.50134 },
  { id: '27', name: 'Depan Kodim Barat', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/f88a472e-4d6c-4b74-9cd9-2d81453245a8.m3u8', lat: -7.322052, lng: 110.500672 },
  { id: '28', name: 'Depan Stella Timur', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/86af7be1-2cde-4358-ae23-dbc2ac7f1b89.m3u8', lat: -7.320647, lng: 110.498941 },
  { id: '29', name: 'Depan Stella Barat', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/ca603c6e-a978-47e1-991a-03b1f67411a5.m3u8', lat: -7.320588, lng: 110.498872 },
  { id: '30', name: 'Perempatan Rutan Barat', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/6ebe5a11-cd74-44f3-b244-2567a5b817a1.m3u8', lat: -7.321078, lng: 110.499626 },
  { id: '31', name: 'GKJ', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/17b95469-b1ef-450a-bce7-9555f3f5fa6c.m3u8', lat: -7.320089, lng: 110.498598 },
  { id: '32', name: 'Gerbang UKSW Barat', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/a06ffe1d-1490-4b46-9189-c2b951c7c946.m3u8', lat: -7.320077, lng: 110.498249 },
  { id: '33', name: 'Gerbang UKSW Timur', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/47c4b307-e909-4c79-bd94-f667f6676427.m3u8', lat: -7.320167, lng: 110.498306 },
  { id: '34', name: 'Depan Pizza Hut', group: 'diponegoro', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/7f390c90-9305-40ac-af63-621bab2f212f.m3u8', lat: -7.319822, lng: 110.498011 },
  { id: '35', name: 'Parkiran DPRD', group: 'sukowati', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/4cbc8623-6f48-47f7-a0fd-6c59e2e54f86.m3u8', lat: -7.331069, lng: 110.501057 },
  { id: '36', name: 'Lapangan Tengah', group: 'sukowati', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/e1bef167-6cf8-40af-8c1a-c3481e484445.m3u8', lat: -7.331209, lng: 110.500521 },
  { id: '37', name: 'Lapangan Barat', group: 'sukowati', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/58c8cc68-59f9-41e9-9fcf-3ead63b4cc0a.m3u8', lat: -7.331196, lng: 110.500475 },
  { id: '38', name: 'Lapangan Timur', group: 'sukowati', manager: 'Dinas Komunikasi dan Informatika Kota Salatiga', streamUrl: 'https://restreamer.salatiga.go.id/memfs/1ba44fd3-f269-4b1e-aa5d-90256ec360a3.m3u8', lat: -7.331213, lng: 110.500562 },
];
