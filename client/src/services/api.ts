import axios, { type AxiosInstance } from 'axios';
import type { Tour, Destination, Testimonial } from '../data/tours';

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data functions (simulating API calls)
export const mockApi = {
  // Get all tours
  getTours: async (): Promise<Tour[]> => {
    await simulateDelay();
    const { tours } = await import('../data/tours');
    return tours;
  },

  // Get tour by ID
  getTourById: async (id: number): Promise<Tour | undefined> => {
    await simulateDelay();
    const { tours } = await import('../data/tours');
    return tours.find(tour => tour.id === id);
  },

  // Get tours by country
  getToursByCountry: async (country: string): Promise<Tour[]> => {
    await simulateDelay();
    const { tours } = await import('../data/tours');
    return tours.filter(tour => tour.country.toLowerCase() === country.toLowerCase());
  },

  // Get destinations
  getDestinations: async (): Promise<Destination[]> => {
    await simulateDelay();
    const { destinations } = await import('../data/tours');
    return destinations;
  },

  // Get destinations by country
  getDestinationsByCountry: async (country: string): Promise<Destination[]> => {
    await simulateDelay();
    const { destinations } = await import('../data/tours');
    return destinations.filter(dest => dest.country.toLowerCase() === country.toLowerCase());
  },

  // Get testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    await simulateDelay();
    const { testimonials } = await import('../data/tours');
    return testimonials;
  },

  // Submit booking form
  submitBooking: async (bookingData: any): Promise<{ success: boolean; message: string; bookingId?: string }> => {
    await simulateDelay(1500);
    console.log('Booking submitted:', bookingData);
    
    // Simulate successful booking
    return {
      success: true,
      message: 'Your booking request has been submitted successfully! We will contact you within 24 hours.',
      bookingId: `ABW-${Date.now()}`
    };
  },

  // Submit contact form
  submitContactForm: async (contactData: any): Promise<{ success: boolean; message: string }> => {
    await simulateDelay(1000);
    console.log('Contact form submitted:', contactData);
    
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    };
  },
};

// Helper function to simulate network delay
const simulateDelay = (ms: number = 800): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Real API functions (for future backend integration)
export const realApi = {
  // Tours
  fetchAllTours: async () => {
    const response = await api.get('/tours');
    return response.data;
  },

  fetchTourById: async (id: number) => {
    const response = await api.get(`/tours/${id}`);
    return response.data;
  },

  // Destinations
  fetchAllDestinations: async () => {
    const response = await api.get('/destinations');
    return response.data;
  },

  // Bookings
  createBooking: async (bookingData: any) => {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  },

  // Contact
  sendContactMessage: async (contactData: any) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  },
};

// Export mock API as default for now
export default mockApi;
