export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isNew?: boolean;
}

export interface ServiceBox {
  icon: string;
  title: string;
  description: string;
  bgColorClass: string;
}

export interface FeatureCard {
  icon: string;
  iconBgColor: string;
  title: string;
  description: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface FunFactItem {
  count: number;
  suffix: string;
  label: string;
}

export interface WorkItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface PricingFeature {
  text: string;
  active: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isActive: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface BlogPost {
  image: string;
  date: string;
  title: string;
  author: string;
  excerpt: string;
  link: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface PartnerLogo {
  defaultImage: string;
  hoverImage: string;
  alt: string;
}
