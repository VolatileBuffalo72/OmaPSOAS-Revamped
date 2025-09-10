import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';

export function Dashboard() {
  const upcomingReservations = [
    {
      id: 1,
      type: 'Laundry Room A',
      date: 'Today',
      time: '14:00 - 16:00',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Clubroom',
      date: 'Tomorrow',
      time: '18:00 - 22:00',
      status: 'pending'
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: 'Broken washing machine',
      location: 'Laundry Room B',
      status: 'in-progress',
      date: '2 days ago'
    },
    {
      id: 2,
      title: 'Heating issue',
      location: 'Apartment 4B',
      status: 'resolved',
      date: '1 week ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Welcome Section */}
      <div className="text-white p-6 rounded-lg" style={{ background: 'linear-gradient(135deg, #0db14b 0%, #0a8f3f 100%)' }}>
        <h2 className="text-xl mb-2">Welcome back!</h2>
        <p className="text-green-100">Apartment 3A, Building 15</p>
        <p className="text-green-100 text-sm">Kajaanintie 45, Oulu</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
          <Calendar className="w-8 h-8 mx-auto mb-2" style={{ color: '#0db14b' }} />
          <h3 className="font-medium">Book Laundry</h3>
          <p className="text-sm text-gray-600">Reserve washing time</p>
        </Card>
        <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
          <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
          <h3 className="font-medium">Report Fault</h3>
          <p className="text-sm text-gray-600">Submit maintenance request</p>
        </Card>
      </div>

      {/* Upcoming Reservations */}
      <div>
        <h3 className="text-lg font-medium mb-3">Upcoming Reservations</h3>
        <div className="space-y-3">
          {upcomingReservations.map((reservation) => (
            <Card key={reservation.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5" style={{ color: '#0db14b' }} />
                  <div>
                    <p className="font-medium">{reservation.type}</p>
                    <p className="text-sm text-gray-600">
                      {reservation.date} • {reservation.time}
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(reservation.status)}>
                  {reservation.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div>
        <h3 className="text-lg font-medium mb-3">Recent Reports</h3>
        <div className="space-y-3">
          {recentReports.map((report) => (
            <Card key={report.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {report.status === 'resolved' ? (
                    <CheckCircle className="w-5 h-5" style={{ color: '#0db14b' }} />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  )}
                  <div>
                    <p className="font-medium">{report.title}</p>
                    <p className="text-sm text-gray-600">
                      {report.location} • {report.date}
                    </p>
                  </div>
                </div>
                <Badge className={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}