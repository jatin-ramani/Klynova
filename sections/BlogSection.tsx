import FeatherIcon from "@/components/FeatherIcon";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads/2020/03";

const posts = [
  { img: "blog-18.jpg", title: "The security risks of changing package owners" },
  { img: "blog-9.jpg", title: "Tips for protecting your business and family" },
  { img: "blog-17.jpg", title: "Protect your workplace from cyber attacks" },
];

export default function BlogSection() {
  return (
    <section className="blog-area pt-80 pb-50">
      <div className="section-title ">
        <h2>The News From Our Blog</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container">
        <div className="row ">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.title}>
              <div className="single-blog-post ">
                <div className="blog-image">
                  <a href="#">
                    <img src={`${UPLOAD}/${post.img}`} alt="blog image" />
                  </a>
                  <div className="date">
                    <FeatherIcon name="calendar" />
                    January 12, 2025
                  </div>
                </div>

                <div className="blog-post-content custom-padding">
                  <h3>
                    <a href="#">{post.title}</a>
                  </h3>
                  <ul>
                    <li>
                      <i className="fa fa-user"></i>
                      <a href="#">startp</a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <div className="mt-2">
                    <a href="#" className="read-more-btn">
                      Read More <FeatherIcon name="arrow-right" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
