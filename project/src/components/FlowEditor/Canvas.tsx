import React from 'react';
import { Maximize2, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export function Canvas() {
  return (
    <div className="relative flex-1 bg-gray-950">
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg">
          <Maximize2 size={20} className="text-white" />
        </button>
        <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg">
          <RotateCcw size={20} className="text-white" />
        </button>
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg">
          <ZoomOut size={20} className="text-white" />
        </button>
        <button className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg">
          <ZoomIn size={20} className="text-white" />
        </button>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600">
        Drag and drop nodes to create your bot flow
      </div>
    </div>
  );
}