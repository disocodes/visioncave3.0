import React from 'react';
import AnalyticsWidget from '../components/AnalyticsWidget';
import LiveCamWidget from '../components/LiveCamWidget';
import DashboardWidget from '../components/DashboardWidget';

function Dashboard() {
  const analyticsData = {
    totalDetections: 1234,
    accuracy: 98.5,
    processingTime: 150
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Vision System Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LiveCamWidget streamUrl="http://example.com/stream" />
        <AnalyticsWidget data={analyticsData} />
      </div>
    </div>
  );
}

export default Dashboard;