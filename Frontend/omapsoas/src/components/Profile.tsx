import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  CreditCard, 
  Settings, 
  Bell, 
  Shield,
  LogOut,
  ChevronRight,
  Euro,
  Check,
  Wallet
} from 'lucide-react';

export function Profile() {
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const userInfo = {
    name: 'Maria Virtanen',
    email: 'maria.virtanen@email.com',
    phone: '+358 40 123 4567',
    apartment: '3A',
    building: 'Building 15',
    address: 'Kajaanintie 45, 90220 Oulu',
    moveInDate: '2023-03-15',
    rentStatus: 'paid',
    nextPayment: '2024-10-01',
    rentAmount: '850.00',
    currency: '€'
  };

  const handlePaymentSubmit = async () => {
    if (!paymentMethod) return;
    
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentCompleted(true);
      
      // Auto close after showing success
      setTimeout(() => {
        setIsPaymentDialogOpen(false);
        setPaymentCompleted(false);
        setPaymentMethod('');
      }, 2000);
    }, 2000);
  };

  const menuItems = [
    {
      icon: Bell,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      badge: '3'
    },
    {
      icon: CreditCard,
      title: 'Payment History',
      subtitle: 'View rent payments and invoices'
    },
    {
      icon: Calendar,
      title: 'Lease Information',
      subtitle: 'Contract details and renewals'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      subtitle: 'Manage privacy settings'
    },
    {
      icon: Settings,
      title: 'App Settings',
      subtitle: 'Language and preferences'
    }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="text-white text-lg" style={{ backgroundColor: '#0db14b' }}>
              {userInfo.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{userInfo.name}</h2>
            <p className="text-gray-600">{userInfo.email}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              Apartment {userInfo.apartment}, {userInfo.building}
            </div>
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">{userInfo.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">{userInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-3 text-gray-500" />
            <span className="text-sm">{userInfo.address}</span>
          </div>
        </div>
      </Card>

      {/* Tenancy Information */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Tenancy Information</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Move-in Date</span>
            <span className="text-sm font-medium">{userInfo.moveInDate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Rent Status</span>
            <Badge className={userInfo.rentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
              {userInfo.rentStatus === 'paid' ? 'Paid' : 'Overdue'}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Next Payment Due</span>
            <span className="text-sm font-medium">{userInfo.nextPayment}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Monthly Rent</span>
            <span className="text-sm font-medium">{userInfo.currency}{userInfo.rentAmount}</span>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        {/* Rent Payment Section */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Rent Payment</h4>
          <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="w-full text-white" 
                style={{ backgroundColor: '#0db14b' }}
              >
                <Euro className="w-4 h-4 mr-2" />
                Pay Rent - {userInfo.currency}{userInfo.rentAmount}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2" style={{ color: '#0db14b' }} />
                  Pay Monthly Rent
                </DialogTitle>
                <DialogDescription>
                  Complete your rent payment for {userInfo.apartment}, {userInfo.building}
                </DialogDescription>
              </DialogHeader>
              
              {paymentCompleted ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0db14b' }}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Payment Successful!</h3>
                  <p className="text-gray-600 text-sm">
                    Your rent payment of {userInfo.currency}{userInfo.rentAmount} has been processed successfully.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Amount Due</span>
                      <span className="font-medium text-lg">{userInfo.currency}{userInfo.rentAmount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Due Date</span>
                      <span className="text-sm">{userInfo.nextPayment}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Property</span>
                      <span className="text-sm">{userInfo.apartment}, {userInfo.building}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="debit-card">Debit Card</SelectItem>
                        <SelectItem value="mobile-pay">Mobile Pay</SelectItem>
                        <SelectItem value="online-banking">Online Banking</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {paymentMethod && (
                    <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                      <p className="font-medium mb-1">Payment Instructions:</p>
                      {paymentMethod === 'bank-transfer' && (
                        <p>You will be redirected to your online banking portal to complete the transfer.</p>
                      )}
                      {paymentMethod === 'debit-card' && (
                        <p>Enter your debit card details to process the payment securely.</p>
                      )}
                      {paymentMethod === 'mobile-pay' && (
                        <p>Use your mobile banking app to scan the QR code and complete payment.</p>
                      )}
                      {paymentMethod === 'online-banking' && (
                        <p>Login to your bank account to authorize the payment.</p>
                      )}
                    </div>
                  )}
                </div>
              )}
              
              {!paymentCompleted && (
                <DialogFooter className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsPaymentDialogOpen(false)}
                    disabled={isProcessingPayment}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handlePaymentSubmit}
                    disabled={!paymentMethod || isProcessingPayment}
                    className="text-white"
                    style={{ backgroundColor: '#0db14b' }}
                  >
                    {isProcessingPayment ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Euro className="w-4 h-4 mr-2" />
                        Pay {userInfo.currency}{userInfo.rentAmount}
                      </>
                    )}
                  </Button>
                </DialogFooter>
              )}
            </DialogContent>
          </Dialog>
          
          <p className="text-xs text-gray-500 text-center">
            Secure payment processing • All transactions are encrypted
          </p>
        </div>
      </Card>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Card key={index} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Emergency Contact */}
      <Card className="p-4 border-orange-200 bg-orange-50">
        <h3 className="font-medium mb-2 text-orange-800">Emergency Contact</h3>
        <p className="text-sm text-orange-700 mb-2">
          Building maintenance and emergency services
        </p>
        <div className="flex items-center text-sm font-medium text-orange-800">
          <Phone className="w-4 h-4 mr-2" />
          +358 8 558 4000
        </div>
      </Card>

      {/* Logout */}
      <Card className="p-4">
        <Button variant="outline" className="w-full flex items-center justify-center text-red-600 border-red-200 hover:bg-red-50">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </Card>

      {/* App Info */}
      <div className="text-center text-xs text-gray-500 pb-4">
        <p>OmaPSOAS Management App</p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}