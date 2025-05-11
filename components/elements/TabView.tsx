'use client'

import { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabViewProps {
  tabs: Tab[];
  defaultTab: string;
  children: ReactNode[];
}

export default function TabView({ tabs, defaultTab, children }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tab-view">
      <div className="tab-navigation mb-4">
        <ul className="nav nav-tabs border-0 justify-content-center">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#0075DC' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#ccc',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '4px',
                  margin: '0 10px',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="tab-content p-4">
        {children.map((child, index) => (
          <div 
            key={tabs[index].id} 
            style={{ display: activeTab === tabs[index].id ? 'block' : 'none' }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}