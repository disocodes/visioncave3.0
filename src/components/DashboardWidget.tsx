import React from 'react';

interface DashboardWidgetProps {
  title: string;
  children: React.ReactNode;
}

function DashboardWidget({ title, children }: DashboardWidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default DashboardWidget;