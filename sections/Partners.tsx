const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads/2020/11";

const partners = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 6, 2];

export default function Partners() {
  return (
    <div className="partner-area partner-section ">
      <div className="container">
        <h5>
          More that 1.5 million businesses and organizations use StartNext
        </h5>
        <div className="partner-inner">
          <div className="row">
            {partners.map((n, i) => (
              <div className="col-lg-2 col-md-3 col-6" key={`${n}-${i}`}>
                <a href="#">
                  <img src={`${UPLOAD}/partner-${n}.png`} alt="partner" />
                  <img src={`${UPLOAD}/partner-hover${n}.png`} alt="partner" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
