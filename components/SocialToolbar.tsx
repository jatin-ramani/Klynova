/** Fixed right-edge toolbar with social links (theme demo-toolbar design). */
const links = [
  { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
  { icon: "fab fa-github", href: "#", label: "GitHub" },
  { icon: "fab fa-twitter", href: "#", label: "Twitter" },
  { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  { icon: "fas fa-envelope", href: "mailto:hello@klynova.in", label: "Email" },
];

export default function SocialToolbar() {
  return (
    <div className="et-demo-options-toolbar">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="hint--bounce hint--left hint--black"
          aria-label={l.label}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </div>
  );
}
