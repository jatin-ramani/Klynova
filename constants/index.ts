import type {
  NavItem,
  ServiceBox,
  FeatureCard,
  TeamMember,
  FunFactItem,
  WorkItem,
  PricingPlan,
  Testimonial,
  BlogPost,
  FooterLink,
  PartnerLogo,
} from "@/types";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

// ── Navigation ──────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "IT Startup", href: "/" },
      { label: "SaaS Startup", href: "#" },
      { label: "Agency", href: "#" },
    ],
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About Us", href: "#" },
      { label: "Features", href: "#" },
      { label: "Services", href: "#" },
      { label: "Team", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Features", href: "#" },
      { label: "Services", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Coming Soon", href: "#" },
      { label: "404 Error", href: "#" },
    ],
  },
  {
    label: "Portfolio",
    href: "#",
    children: [
      { label: "Portfolio One", href: "#" },
      { label: "Portfolio Two", href: "#" },
      { label: "Single Project", href: "#" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog Grid", href: "#" },
      { label: "Blog Right Sidebar", href: "#" },
      { label: "Blog Details", href: "#" },
    ],
  },
  { label: "Shop", href: "#" },
  { label: "Contact", href: "#" },
];

// ── Service Boxes (3 cards) ──────────────────────────────
export const SERVICE_BOXES: ServiceBox[] = [
  {
    icon: "flexibility",
    title: "Flexibility",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    bgColorClass: "bg-main",
  },
  {
    icon: "safety",
    title: "Safety",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    bgColorClass: "bg-secondary",
  },
  {
    icon: "convenient",
    title: "Convenient",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    bgColorClass: "bg-main",
  },
];

// ── Features (6 cards) ──────────────────────────────────
export const FEATURES: FeatureCard[] = [
  {
    icon: "responsive",
    iconBgColor: "#44CE6F",
    title: "Responsive Design",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
  {
    icon: "app",
    iconBgColor: "#C679E3",
    title: "App Development",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
  {
    icon: "software",
    iconBgColor: "#EB6B3D",
    title: "Software Development",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
  {
    icon: "security",
    iconBgColor: "#44CE6F",
    title: "Information Security",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
  {
    icon: "data",
    iconBgColor: "#C679E3",
    title: "Data Analyst",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
  {
    icon: "commerce",
    iconBgColor: "#EB6B3D",
    title: "E-commerce",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    link: "#",
  },
];

// ── Team Members ────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Josh Buttler",
    role: "CEO & Founder",
    image: `${IMG_BASE}/2020/11/team-1.jpg`,
    description:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
  {
    name: "Alex Maxwel",
    role: "Marketing Manager",
    image: `${IMG_BASE}/2020/11/team-2.jpg`,
    description:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
  {
    name: "Janny Cotller",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/team3-1.jpg`,
    description:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
  {
    name: "Jason Statham",
    role: "UX/UI Designer",
    image: `${IMG_BASE}/2020/11/team-4.jpg`,
    description:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
  {
    name: "Corey Anderson",
    role: "Project Manager",
    image: `${IMG_BASE}/2020/11/team-5.jpg`,
    description:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
];

// ── Fun Facts ───────────────────────────────────────────
export const FUN_FACTS: FunFactItem[] = [
  { count: 180, suffix: "K", label: "Downloaded" },
  { count: 30, suffix: "K", label: "Feedback" },
  { count: 500, suffix: "+", label: "Workers" },
  { count: 70, suffix: "+", label: "Contributors" },
];

// ── Recent Works ────────────────────────────────────────
export const WORKS_DATA: WorkItem[] = [
  {
    image: `${IMG_BASE}/2020/11/works-image-7.jpg`,
    title: "Logo Branding",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/works-image-6.jpg`,
    title: "Strategic Planning",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/works-image-8.jpg`,
    title: "Design & Development",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/works-image-5.jpg`,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/works-image-4.jpg`,
    title: "Social Media Marketing",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/works-image-3.jpg`,
    title: "Competitor Analysis",
    description:
      "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
    link: "#",
  },
];

// ── Pricing Plans ───────────────────────────────────────
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "BASIC PLAN",
    price: "15.00",
    period: "/Mon",
    isActive: false,
    features: [
      { text: "5 GB Bandwidth", active: true },
      { text: "Highest Speed", active: true },
      { text: "1 GB Storage", active: true },
      { text: "Unlimited Website", active: true },
      { text: "Unlimited Users", active: true },
      { text: "24x7 Great Support", active: true },
      { text: "Data Security and Backups", active: false },
      { text: "Monthly Reports and Analytics", active: false },
    ],
  },
  {
    name: "ADVANCED PLAN",
    price: "35.00",
    period: "/Mon",
    isActive: true,
    features: [
      { text: "5 GB Bandwidth", active: true },
      { text: "Highest Speed", active: true },
      { text: "1 GB Storage", active: true },
      { text: "Unlimited Website", active: true },
      { text: "Unlimited Users", active: true },
      { text: "24x7 Great Support", active: true },
      { text: "Data Security and Backups", active: true },
      { text: "Monthly Reports and Analytics", active: false },
    ],
  },
  {
    name: "EXPERT PLAN",
    price: "65.00",
    period: "/Mon",
    isActive: false,
    features: [
      { text: "5 GB Bandwidth", active: true },
      { text: "Highest Speed", active: true },
      { text: "1 GB Storage", active: true },
      { text: "Unlimited Website", active: true },
      { text: "Unlimited Users", active: true },
      { text: "24x7 Great Support", active: true },
      { text: "Data Security and Backups", active: true },
      { text: "Monthly Reports and Analytics", active: true },
    ],
  },
];

// ── Testimonials ────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maxwel Warner",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/client-1.jpg`,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Steven Smith",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/client-2.jpg`,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Luice Lucy",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/client-3.jpg`,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jhon Terry",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/client-4.jpg`,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ayan Mitchel",
    role: "Web Developer",
    image: `${IMG_BASE}/2020/11/client-5.jpg`,
    text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

// ── Partner Logos ───────────────────────────────────────
export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-10.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover10.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-11.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover11.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-12.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover12.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-13.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover13.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-14.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover14.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-15.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover15.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-17.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover17.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-18.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover18.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-6.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover6.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-2.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover2.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-10.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover10.png`,
    alt: "partner",
  },
  {
    defaultImage: `${IMG_BASE}/2021/02/partner-11.png`,
    hoverImage: `${IMG_BASE}/2021/02/partner-hover11.png`,
    alt: "partner",
  },
];

// ── Blog Posts ───────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    image: `${IMG_BASE}/2025/01/blog-18.jpg`,
    date: "January 12, 2025",
    title: "The security risks of changing package owners",
    author: "startp",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2020/11/blog-9.jpg`,
    date: "January 12, 2025",
    title: "Tips for protecting your business and family",
    author: "startp",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    link: "#",
  },
  {
    image: `${IMG_BASE}/2025/01/blog-17.jpg`,
    date: "January 12, 2025",
    title: "Protect your workplace from cyber attacks",
    author: "startp",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    link: "#",
  },
];

// ── Footer Links ────────────────────────────────────────
export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Features", href: "#" },
  { label: "Our Pricing", href: "#" },
  { label: "Latest News", href: "#" },
];

export const FOOTER_SUPPORT_LINKS: FooterLink[] = [
  { label: "FAQ's", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
  { label: "Community", href: "#" },
  { label: "Contact", href: "#" },
];
