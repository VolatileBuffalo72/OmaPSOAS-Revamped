import React, { useState, useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Send, Phone, Users, Headphones } from 'lucide-react';

export function Chat() {
  const [activeChat, setActiveChat] = useState('support');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({
    support: [
      {
        id: 1,
        sender: 'support',
        name: 'Support Team',
        message: 'Hello! How can we help you today?',
        time: '10:30',
        avatar: 'S'
      },
      {
        id: 2,
        sender: 'user',
        name: 'You',
        message: 'Hi, I have a question about my laundry booking.',
        time: '10:32',
        avatar: 'Y'
      },
      {
        id: 3,
        sender: 'support',
        name: 'Support Team',
        message: 'Sure! I can help you with that. What specific issue are you having?',
        time: '10:33',
        avatar: 'S'
      }
    ],
    tenants: [
      {
        id: 1,
        sender: 'tenant',
        name: 'Jari Korhonen',
        message: 'Anyone available to help move furniture tomorrow?',
        time: '09:15',
        avatar: 'JK'
      },
      {
        id: 2,
        sender: 'tenant',
        name: 'Anna Salminen',
        message: 'I can help! What time?',
        time: '09:20',
        avatar: 'AS'
      },
      {
        id: 3,
        sender: 'user',
        name: 'You',
        message: 'I might be available too. What floor?',
        time: '09:25',
        avatar: 'Y'
      }
    ]
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChat]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        sender: 'user',
        name: 'You',
        message: message.trim(),
        time: new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' }),
        avatar: 'Y'
      };

      setMessages(prev => ({
        ...prev,
        [activeChat]: [...prev[activeChat], newMessage]
      }));
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const contacts = [
    {
      id: 'support',
      name: 'Customer Support',
      lastMessage: 'Sure! I can help you with that...',
      time: '10:33',
      unread: 0,
      avatar: 'S',
      online: true
    },
    {
      id: 'tenants',
      name: 'Building 15 Tenants',
      lastMessage: 'I might be available too. What floor?',
      time: '09:25',
      unread: 2,
      avatar: 'T',
      online: false
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="text-xl font-semibold text-gray-900">Chat</h2>
        <p className="text-sm text-gray-600">Connect with support and neighbors</p>
      </div>

      <Tabs value={activeChat} onValueChange={setActiveChat} className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4 grid w-auto grid-cols-2 bg-gray-100">
          <TabsTrigger value="support" className="text-sm">
            <Headphones className="w-4 h-4 mr-2" />
            Support
          </TabsTrigger>
          <TabsTrigger value="tenants" className="text-sm">
            <Users className="w-4 h-4 mr-2" />
            Tenants
          </TabsTrigger>
        </TabsList>

        <TabsContent value="support" className="flex-1 flex flex-col mx-4 mt-4">
          {/* Support Chat Header */}
          <Card className="p-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback style={{ backgroundColor: '#0db14b', color: 'white' }}>
                    S
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Customer Support</h3>
                  <p className="text-sm text-gray-600">Usually responds in a few minutes</p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
            </div>
          </Card>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto mb-4">
            {messages.support.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'order-2' : ''}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'text-white ml-auto'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                    style={msg.sender === 'user' ? { backgroundColor: '#0db14b' } : {}}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
                {msg.sender !== 'user' && (
                  <Avatar className="w-8 h-8 mr-2 order-1">
                    <AvatarFallback style={{ backgroundColor: '#0db14b', color: 'white' }}>
                      {msg.avatar}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </TabsContent>

        <TabsContent value="tenants" className="flex-1 flex flex-col mx-4 mt-4">
          {/* Tenants Chat Header */}
          <Card className="p-3 mb-4">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className="bg-gray-600 text-white">
                  T
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Building 15 Tenants</h3>
                <p className="text-sm text-gray-600">12 members • 3 online</p>
              </div>
            </div>
          </Card>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto mb-4">
            {messages.tenants.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'order-2' : ''}`}>
                  {msg.sender !== 'user' && (
                    <p className="text-xs text-gray-500 mb-1 ml-10">{msg.name}</p>
                  )}
                  <div
                    className={`rounded-lg p-3 ${
                      msg.sender === 'user'
                        ? 'text-white ml-auto'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                    style={msg.sender === 'user' ? { backgroundColor: '#0db14b' } : {}}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
                {msg.sender !== 'user' && (
                  <Avatar className="w-8 h-8 mr-2 order-1">
                    <AvatarFallback className="bg-gray-600 text-white text-xs">
                      {msg.avatar}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </TabsContent>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${activeChat === 'support' ? 'support' : 'tenants'}...`}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              size="sm"
              disabled={!message.trim()}
              style={{ backgroundColor: '#0db14b', color: 'white' }}
              className="hover:opacity-90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
}