import React from 'react';

interface AnalyticsWidgetProps {
  data: {
    totalDetections: number;
    accuracy: number;
    processingTime: number;
  };
}

function AnalyticsWidget({ data }: AnalyticsWidgetProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-600">Total Detections</p>
          <p className="text-2xl font-bold">{data.totalDetections}</p>
        </div>
        <div>
          <p className="text-gray-600">Accuracy</p>
          <p className="text-2xl font-bold">{data.accuracy}%</p>
        </div>
        <div>
          <p className="text-gray-600">Processing Time</p>
          <p className="text-2xl font-bold">{data.processingTime}ms</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsWidget;