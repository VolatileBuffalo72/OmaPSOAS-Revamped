import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Clock, MapPin, Users } from 'lucide-react';

export function Reservations() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const laundryTimeSlots = [
    { time: '08:00 - 10:00', available: true },
    { time: '10:00 - 12:00', available: false },
    { time: '12:00 - 14:00', available: true },
    { time: '14:00 - 16:00', available: false },
    { time: '16:00 - 18:00', available: true },
    { time: '18:00 - 20:00', available: true },
    { time: '20:00 - 22:00', available: false },
  ];

  const clubroomSlots = [
    { time: '09:00 - 13:00', available: true, capacity: '15 people' },
    { time: '14:00 - 18:00', available: false, capacity: '15 people' },
    { time: '19:00 - 23:00', available: true, capacity: '15 people' },
  ];

  const myReservations = [
    {
      id: 1,
      type: 'Laundry Room A',
      date: '2024-09-10',
      time: '14:00 - 16:00',
      status: 'confirmed',
      location: 'Building 15, Basement'
    },
    {
      id: 2,
      type: 'Clubroom',
      date: '2024-09-11',
      time: '18:00 - 22:00',
      status: 'pending',
      location: 'Building 15, 1st Floor'
    }
  ];

  const handleBooking = () => {
    if (selectedTimeSlot) {
      // Handle booking logic here
      setIsBookingDialogOpen(false);
      setSelectedTimeSlot('');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Reservations</h2>
      
      <Tabs defaultValue="book" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="book">New Booking</TabsTrigger>
          <TabsTrigger value="my">My Bookings</TabsTrigger>
        </TabsList>

        <TabsContent value="book" className="space-y-4">
          <Tabs defaultValue="laundry" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="laundry">Laundry Room</TabsTrigger>
              <TabsTrigger value="clubroom">Clubroom</TabsTrigger>
            </TabsList>

            <TabsContent value="laundry" className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Laundry Room A - Building 15
                </h3>
                <p className="text-sm text-gray-600 mb-4">2 washing machines, 2 dryers</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Available Time Slots</label>
                    <div className="grid grid-cols-1 gap-2">
                      {laundryTimeSlots.map((slot) => (
                        <Dialog key={slot.time}>
                          <DialogTrigger asChild>
                            <Button
                              variant={slot.available ? "outline" : "secondary"}
                              disabled={!slot.available}
                              className="justify-between w-full"
                              onClick={() => setSelectedTimeSlot(slot.time)}
                            >
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {slot.time}
                              </span>
                              <Badge variant={slot.available ? "default" : "secondary"}>
                                {slot.available ? "Available" : "Booked"}
                              </Badge>
                            </Button>
                          </DialogTrigger>
                          {slot.available && (
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirm Booking</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p>Book Laundry Room A for {slot.time}?</p>
                                <p className="text-sm text-gray-600">
                                  Date: {selectedDate?.toDateString()}
                                </p>
                                <div className="flex gap-2">
                                  <Button onClick={handleBooking} className="flex-1 hover:opacity-90" style={{ backgroundColor: '#0db14b', color: 'white' }}>
                                    Confirm Booking
                                  </Button>
                                  <Button variant="outline" onClick={() => setIsBookingDialogOpen(false)} className="flex-1">
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          )}
                        </Dialog>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="clubroom" className="space-y-4">
              <Card className="p-4">
                <h3 className="font-medium mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Community Clubroom - Building 15
                </h3>
                <p className="text-sm text-gray-600 mb-4">Perfect for parties and gatherings</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Select Date</label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Available Time Slots</label>
                    <div className="grid grid-cols-1 gap-2">
                      {clubroomSlots.map((slot) => (
                        <Dialog key={slot.time}>
                          <DialogTrigger asChild>
                            <Button
                              variant={slot.available ? "outline" : "secondary"}
                              disabled={!slot.available}
                              className="justify-between w-full"
                              onClick={() => setSelectedTimeSlot(slot.time)}
                            >
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {slot.time}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600">{slot.capacity}</span>
                                <Badge variant={slot.available ? "default" : "secondary"}>
                                  {slot.available ? "Available" : "Booked"}
                                </Badge>
                              </div>
                            </Button>
                          </DialogTrigger>
                          {slot.available && (
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirm Booking</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p>Book Community Clubroom for {slot.time}?</p>
                                <p className="text-sm text-gray-600">
                                  Date: {selectedDate?.toDateString()}<br />
                                  Capacity: {slot.capacity}
                                </p>
                                <div className="flex gap-2">
                                  <Button onClick={handleBooking} className="flex-1 hover:opacity-90" style={{ backgroundColor: '#0db14b', color: 'white' }}>
                                    Confirm Booking
                                  </Button>
                                  <Button variant="outline" onClick={() => setIsBookingDialogOpen(false)} className="flex-1">
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          )}
                        </Dialog>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="my" className="space-y-4">
          <div className="space-y-3">
            {myReservations.map((reservation) => (
              <Card key={reservation.id} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{reservation.type}</h3>
                  <Badge className={getStatusColor(reservation.status)}>
                    {reservation.status}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {reservation.date} • {reservation.time}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {reservation.location}
                  </p>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Modify
                  </Button>
                  <Button variant="destructive" size="sm" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}