export type NavigationPath =
  | 'home'
  | 'for-schools'
  | 'lab-setup'
  | 'stem-kits'
  | 'programs'
  | 'projects'
  | 'about-us'
  | 'resources'
  | 'book-a-demo';

export interface StemKit {
  id: string;
  name: string;
  grade: 'Grade 1-3' | 'Grade 4-6' | 'Grade 7-9' | 'Grade 10-12' | 'Classroom Multi-Pack';
  domain: 'Robotics' | 'IoT' | 'AI & Vision' | 'Electronics' | 'Aerospace' | 'Institutional';
  categoryLabel: string;
  mcu: string;
  sensors: string;
  platform: string;
  hours: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  imageUrl: string;
  inStock: boolean;
  isMultiPack?: boolean;
  packDetails?: string;
}

export interface StudentProject {
  id: string;
  title: string;
  category: 'Robotics' | 'IoT' | 'AI & Computer Vision' | 'Neuroscience' | 'Aerospace' | 'Electronics';
  studentClass: string;
  schoolName: string;
  description: string;
  hardware: string;
  recognition: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  school: string;
  avatarUrl?: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface DemoBookingState {
  enquiryType: string;
  schoolName: string;
  cityState: string;
  affiliationBoard: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  contactPhone: string;
  communicationChannel: string;
  studentStrength: string;
  currentStatus: string;
  demoModality: string;
  demoDate: string;
  timeSlot: string;
  specialNotes: string;
  agreedToTerms: boolean;
}
