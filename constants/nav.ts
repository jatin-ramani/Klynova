export interface NavNode {
  label: string;
  active?: boolean;
  children?: NavNode[];
}

const colorChildren = (
  order: string[] = ["Light Green", "Brink Pink", "Purple", "Pink"],
  activeLabel?: string
): NavNode[] => order.map((label) => ({ label, active: label === activeLabel }));

export const NAV_TREE: NavNode[] = [
  {
    label: "Home",
    children: [
      { label: "IT Startup", children: colorChildren(undefined, "Brink Pink"), active: true },
      { label: "Lead Generation", children: colorChildren() },
      { label: "Hosting Company", children: colorChildren() },
      { label: "PC Repair", children: colorChildren() },
      { label: "IOT" },
      { label: "Digital Agency" },
      { label: "AI & Machine Learning" },
      {
        label: "Digital Agency Variation – 2",
        children: colorChildren(["Light Green", "Brink Pink", "Pink", "Purple"]),
      },
      {
        label: "Portfolio Agency",
        children: colorChildren(["Light Green", "Brink Pink", "Pink", "Purple"]),
      },
      {
        label: "Big Data",
        children: colorChildren(["Light Green", "Brink Pink", "Pink", "Purple"]),
      },
      { label: "SaaS Home" },
      { label: "FinTech Home" },
      { label: "HealthTech Home" },
      {
        label: "Home Static Image",
        children: [
          { label: "IT Startup" },
          { label: "Lead Generation" },
          { label: "Hosting Company" },
          { label: "AI & Machine Learning" },
        ],
      },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Style One" },
      { label: "About Style Two" },
      { label: "About Style Three" },
    ],
  },
  {
    label: "Features",
    children: [{ label: "Features" }, { label: "Single Feature" }],
  },
  {
    label: "Pages",
    children: [
      { label: "Features", children: [{ label: "Features" }, { label: "Single Feature" }] },
      { label: "Services", children: [{ label: "Services" }, { label: "Single Service" }] },
      { label: "Projects", children: [{ label: "Projects" }, { label: "Single Project" }] },
      { label: "Feedback" },
      { label: "Team" },
      { label: "Pricing" },
      { label: "FAQ" },
      { label: "Contact" },
    ],
  },
  {
    label: "Shop",
    children: [
      { label: "Products" },
      { label: "Single Product" },
      { label: "My account" },
      { label: "Cart" },
      { label: "Checkout" },
    ],
  },
  {
    label: "Blog",
    children: [{ label: "Blog" }, { label: "Blog Details" }],
  },
  { label: "Contact" },
];
