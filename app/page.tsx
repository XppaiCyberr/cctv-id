'use client';

import dynamic from 'next/dynamic';

const CCTVDashboard = dynamic(() => import('../src/CCTVDashboard'), {
  ssr: false,
});

export default function Page() {
  return <CCTVDashboard />;
}
