export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  image: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: { text: string; included: boolean }[];
  highlighted: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  serviceType: string;
  date: string;
  source: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ServiceArea {
  name: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
}

export interface MaintenanceSignupData {
  name: string;
  email: string;
  phone: string;
  address: string;
  plan: string;
}
