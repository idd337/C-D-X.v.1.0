import React from 'react';
import { Canvas } from './Canvas';
import { NodePanel } from './NodePanel';

export function FlowEditor() {
  return (
    <div className="flex flex-1">
      <Canvas />
      <NodePanel />
    </div>
  );
}