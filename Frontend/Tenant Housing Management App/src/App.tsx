import React, { useState } from 'react';
import { Home, Calendar, AlertTriangle, User, MessageCircle } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Reservations } from './components/Reservations';
import { FaultReporting } from './components/FaultReporting';
import { Profile } from './components/Profile';
import { Chat } from './components/Chat';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'reservations':
        return <Reservations />;
      case 'faults':
        return <FaultReporting />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="bg-white text-gray-900 p-4 shadow-md border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0db14b' }}>
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">OmaPSOAS</h1>
            <p className="text-gray-600 text-sm">Tenant Management</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-4 py-2 shadow-lg">
        <div className="flex justify-around">
          {[
            { id: 'dashboard', icon: Home, label: 'Home' },
            { id: 'reservations', icon: Calendar, label: 'Bookings' },
            { id: 'faults', icon: AlertTriangle, label: 'Reports' },
            { id: 'chat', icon: MessageCircle, label: 'Chat' },
            { id: 'profile', icon: User, label: 'Profile' },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex flex-col items-center py-2 px-1 rounded-md transition-colors ${
                activeTab === id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === id ? { backgroundColor: '#0db14b' } : {}}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}