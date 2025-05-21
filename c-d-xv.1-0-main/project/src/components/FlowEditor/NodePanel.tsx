import React from 'react';
import { MessageCircle, Box, Code, Database, GitBranch } from 'lucide-react';

const nodeTypes = [
  { id: 'message', icon: MessageCircle, name: 'Send Message', color: 'bg-green-500' },
  { id: 'input', icon: Box, name: 'Get Input', color: 'bg-blue-500' },
  { id: 'condition', icon: GitBranch, name: 'Condition', color: 'bg-yellow-500' },
  { id: 'api', icon: Database, name: 'API Call', color: 'bg-purple-500' },
  { id: 'code', icon: Code, name: 'Custom Code', color: 'bg-red-500' },
];

export function NodePanel() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-semibold">Flow Nodes</h2>
      </div>

      <div className="p-4 space-y-3">
        {nodeTypes.map((node) => (
          <div
            key={node.id}
            className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg cursor-move hover:bg-gray-700 transition-colors"
            draggable
          >
            <div className={`p-2 rounded-lg ${node.color}`}>
              <node.icon size={20} />
            </div>
            <span className="text-sm">{node.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}