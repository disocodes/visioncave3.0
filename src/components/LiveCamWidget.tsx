import React, { useEffect, useRef } from 'react';

interface LiveCamWidgetProps {
  streamUrl: string;
}

function LiveCamWidget({ streamUrl }: LiveCamWidgetProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = streamUrl;
    }
  }, [streamUrl]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Live Camera Feed</h2>
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
        />
      </div>
    </div>
  );
}

export default LiveCamWidget;