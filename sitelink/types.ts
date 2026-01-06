
import React from 'react';

export type StatusType = 'live' | 'beta' | 'coming-soon';

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: StatusType;
  path: string;
  accentColor?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string | number;
  period?: string;
  features: string[];
  cta: string;
  featured?: boolean;
  path: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}
