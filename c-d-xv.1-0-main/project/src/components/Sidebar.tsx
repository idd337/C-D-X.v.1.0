import React from 'react';
import { 
  PanelLeft, 
  MessageSquare, 
  Box, 
  BarChart2, 
  Settings,
  Code,
  Play,
  HelpCircle
} from 'lucide-react';

const menuItems = [
  { id: 'flows', icon: MessageSquare, name: 'Bot Flows' },
  { id: 'templates', icon: Box, name: 'Templates' },
  { id: 'analytics', icon: BarChart2, name: 'Analytics' },
  { id: 'code', icon: Code, name: 'Code Editor' },
  { id: 'testing', icon: Play, name: 'Test Bot' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('flows');

  return (
    <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <h1 className={`font-bold ${collapsed ? 'hidden' : 'block'}`}>Bot Builder</h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          <PanelLeft size={20} />
        </button>
      </div>
      
      <div className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
              activeItem === item.id ? 'bg-blue-600' : 'hover:bg-gray-800'
            }`}
          >
            <item.icon size={20} />
            <span className={collapsed ? 'hidden' : 'block'}>{item.name}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-800 space-y-2">
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <Settings size={20} />
          <span className={collapsed ? 'hidden' : 'block'}>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
          <HelpCircle size={20} />
          <span className={collapsed ? 'hidden' : 'block'}>Help</span>
        </button>
      </div>
    </div>
  );
}