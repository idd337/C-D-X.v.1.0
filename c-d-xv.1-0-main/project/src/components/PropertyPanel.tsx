import React from 'react';
import { X } from 'lucide-react';

export function PropertyPanel() {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="w-80 bg-gray-900 text-white h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="font-semibold">Properties</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Transform</h3>
          <div className="space-y-2">
            {['Position', 'Rotation', 'Scale'].map((prop) => (
              <div key={prop} className="flex items-center gap-2">
                <span className="w-20 text-sm text-gray-400">{prop}</span>
                <input
                  type="number"
                  className="w-16 bg-gray-800 rounded px-2 py-1 text-sm"
                  placeholder="X"
                />
                <input
                  type="number"
                  className="w-16 bg-gray-800 rounded px-2 py-1 text-sm"
                  placeholder="Y"
                />
                <input
                  type="number"
                  className="w-16 bg-gray-800 rounded px-2 py-1 text-sm"
                  placeholder="Z"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Material</h3>
          <div className="space-y-2">
            {['Color', 'Metallic', 'Roughness'].map((prop) => (
              <div key={prop} className="flex items-center gap-2">
                <span className="w-20 text-sm text-gray-400">{prop}</span>
                <input
                  type="range"
                  className="flex-1 accent-blue-500"
                  min="0"
                  max="100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}