/** Fixed right-edge demo toolbar (RTL / support / docs / purchase). */
export default function DemoToolbar() {
  return (
    <div className="et-demo-options-toolbar">
      <a
        href="#"
        className="hint--bounce hint--left hint--black"
        id="toggle-quick-options"
        aria-label="RTL Demo"
      >
        <i className="bx bx-right-indent"></i>
      </a>
      <a
        href="#"
        target="_blank"
        rel="nofollow"
        className="hint--bounce hint--left hint--black"
        aria-label="Reach Us"
      >
        <i className="bx bx-support"></i>
      </a>
      <a
        href="#"
        target="_blank"
        rel="nofollow"
        className="hint--bounce hint--left hint--black"
        aria-label="Documentation"
      >
        <i className="bx bx-book"></i>
      </a>
      <a
        href="#"
        target="_blank"
        rel="nofollow"
        className="hint--bounce hint--left hint--black"
        aria-label="Purchase StartNext"
      >
        <i className="bx bx-cart-alt bx-flashing"></i>
      </a>
    </div>
  );
}
