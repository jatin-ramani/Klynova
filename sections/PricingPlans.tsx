const FEATURES = [
  "5 GB Bandwidth",
  "Highest Speed",
  "1 GB Storage",
  "Unlimited Website",
  "Unlimited Users",
  "24x7 Great Support",
  "Data Security and Backups",
  "Monthly Reports and Analytics",
];

const plans = [
  { name: "BASIC PLAN", price: "15.00", active: false, activeCount: 6 },
  { name: "ADVANCED PLAN", price: "35.00", active: true, activeCount: 7 },
  { name: "EXPERT PLAN", price: "65.00", active: false, activeCount: 8 },
];

export default function PricingPlans() {
  return (
    <section className="pricing-area ptb-80 bg-f9f6f6">
      <div className="section-title ">
        <h2>Pricing Plans</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {plans.map((plan) => (
            <div className="col-lg-4 col-md-6 col-sm-4" key={plan.name}>
              <div className={`pricing-table ${plan.active ? "active-plan" : ""}`}>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>
                    {plan.price} <span>/Mon</span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    {FEATURES.map((feat, i) => (
                      <li className={i < plan.activeCount ? "active" : ""} key={feat}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-footer">
                  <a href="#" className="btn btn-primary">
                    Select Plan
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
