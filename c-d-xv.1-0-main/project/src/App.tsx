import React from 'react';
import { Sidebar } from './components/Sidebar';
import { FlowEditor } from './components/FlowEditor';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <FlowEditor />
    </div>
  );
}

export default App;