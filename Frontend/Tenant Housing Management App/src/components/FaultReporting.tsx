import React, { useState, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Camera, Image, Upload, AlertTriangle, CheckCircle, Clock, X } from 'lucide-react';

export function FaultReporting() {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    priority: ''
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const existingReports = [
    {
      id: 1,
      title: 'Broken washing machine',
      description: 'Machine 2 is not starting properly',
      location: 'Laundry Room B',
      priority: 'high',
      status: 'in-progress',
      date: '2024-09-07',
      images: 1
    },
    {
      id: 2,
      title: 'Heating issue',
      description: 'Radiator not heating properly in bedroom',
      location: 'Apartment 4B',
      priority: 'medium',
      status: 'resolved',
      date: '2024-09-02',
      images: 2
    },
    {
      id: 3,
      title: 'Leaky faucet',
      description: 'Kitchen faucet dripping constantly',
      location: 'Apartment 3A',
      priority: 'low',
      status: 'pending',
      date: '2024-09-09',
      images: 0
    }
  ];

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setIsCameraOpen(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
            setSelectedImages(prev => [...prev, file]);
          }
        }, 'image/jpeg', 0.8);
      }
    }
    stopCamera();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (formData.title && formData.description && formData.location && formData.priority) {
      // Handle form submission here
      console.log('Submitting report:', formData, selectedImages);
      setIsReportDialogOpen(false);
      setFormData({ title: '', description: '', location: '', priority: '' });
      setSelectedImages([]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'in-progress':
        return <AlertTriangle className="w-4 h-4" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Fault Reports</h2>
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button style={{ backgroundColor: '#0db14b', color: 'white' }} className="hover:opacity-90">
              <AlertTriangle className="w-4 h-4 mr-2" />
              New Report
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Report a Fault</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <Input
                  placeholder="Brief description of the problem"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">My Apartment</SelectItem>
                    <SelectItem value="laundry-a">Laundry Room A</SelectItem>
                    <SelectItem value="laundry-b">Laundry Room B</SelectItem>
                    <SelectItem value="clubroom">Clubroom</SelectItem>
                    <SelectItem value="hallway">Hallway</SelectItem>
                    <SelectItem value="parking">Parking Area</SelectItem>
                    <SelectItem value="elevator">Elevator</SelectItem>
                    <SelectItem value="stairwell">Stairwell</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Priority</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low - Can wait</SelectItem>
                    <SelectItem value="medium">Medium - Should be fixed soon</SelectItem>
                    <SelectItem value="high">High - Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea
                  placeholder="Detailed description of the problem"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Photos</label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={startCamera}
                      className="flex-1"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Take Photo
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileSelect}
                  />

                  {/* Camera View */}
                  {isCameraOpen && (
                    <div className="relative">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full rounded-lg"
                      />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        <Button onClick={capturePhoto} size="sm">
                          Capture
                        </Button>
                        <Button onClick={stopCamera} variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <canvas ref={canvasRef} className="hidden" />

                  {/* Selected Images */}
                  {selectedImages.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedImages.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Selected ${index + 1}`}
                            className="w-full h-20 object-cover rounded border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 w-6 h-6 p-0 rounded-full"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  onClick={handleSubmit}
                  className="flex-1 hover:opacity-90"
                  style={{ backgroundColor: '#0db14b', color: 'white' }}
                  disabled={!formData.title || !formData.description || !formData.location || !formData.priority}
                >
                  Submit Report
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsReportDialogOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Existing Reports */}
      <div className="space-y-3">
        {existingReports.map((report) => (
          <Card key={report.id} className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-medium">{report.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{report.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge className={getStatusColor(report.status)}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(report.status)}
                    {report.status}
                  </span>
                </Badge>
                <Badge className={getPriorityColor(report.priority)}>
                  {report.priority} priority
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
              <span>{report.location}</span>
              <div className="flex items-center gap-3">
                {report.images > 0 && (
                  <span className="flex items-center gap-1">
                    <Image className="w-4 h-4" />
                    {report.images}
                  </span>
                )}
                <span>{report.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}