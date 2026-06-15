const plans = [
  {
    name: "Starter",
    sub: "Best for landing pages & MVPs",
    priceLabel: "Starting at",
    price: "₹15,000",
    active: false,
    features: [
      "Single page or small site",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    name: "Standard",
    sub: "Best for business websites",
    priceLabel: "Starting at",
    price: "₹35,000",
    active: true,
    features: [
      "Multi-page website",
      "CMS integration",
      "Custom design",
      "2 rounds of revisions",
      "1 month of support",
    ],
  },
  {
    name: "Custom / AI Projects",
    sub: "Best for web apps & AI integrations",
    priceLabel: "",
    price: "Custom quote",
    active: false,
    features: [
      "Full web application",
      "AI feature integration",
      "Database & backend",
      "Ongoing support available",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="pricing-area ptb-80">
      <div className="section-title ">
        <span className="klynova-tag">Pricing</span>
        <h2>Simple, Project-Based Pricing</h2>
        <div className="bar"></div>
        <p>
          Clear, upfront pricing for every kind of project — no subscriptions,
          no surprises.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {plans.map((plan) => (
            <div className="col-lg-4 col-md-6 col-sm-4" key={plan.name}>
              <div className={`pricing-table ${plan.active ? "active-plan" : ""}`}>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <span className="klynova-plan-sub">{plan.sub}</span>
                </div>

                <div className="price">
                  <span className="klynova-price">
                    {plan.priceLabel && (
                      <small className="klynova-price-label">
                        {plan.priceLabel}
                      </small>
                    )}
                    {plan.price}
                  </span>
                </div>

                <div className="pricing-features">
                  <ul className="klynova-list">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-footer">
                  <a href="#contact" className="btn btn-primary">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
