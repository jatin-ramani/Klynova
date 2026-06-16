import FeatherIcon from "@/components/FeatherIcon";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads/2020/03";

// Placeholder articles — replace with real posts when the blog is live.
const posts = [
  {
    img: "blog-18.jpg",
    date: "June 2, 2026",
    title: "Why We Build with Next.js in 2026",
    excerpt:
      "A look at why Next.js stays our default for fast, scalable, SEO-friendly web apps — and the few cases where we reach for something else.",
  },
  {
    img: "blog-9.jpg",
    date: "May 18, 2026",
    title: "Practical AI Integration for Early-Stage Startups",
    excerpt:
      "AI doesn't have to be a moonshot. Here's how we add genuinely useful AI features to products without overcomplicating the build.",
  },
  {
    img: "blog-17.jpg",
    date: "April 24, 2026",
    title: "Designing Products That Actually Convert",
    excerpt:
      "Clean design is more than looks. We break down the UX decisions that turn first-time visitors into paying customers.",
  },
];

export default function Blog() {
  return (
    <section className="blog-area pt-80 pb-50">
      <div className="section-title ">
        <span className="klynova-tag">Insights</span>
        <h2>From the Klynova Blog</h2>
        <div className="bar"></div>
        <p>
          Notes on building modern products — engineering, AI, and design from
          the studio.
        </p>
      </div>

      <div className="container">
        <div className="row ">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.title}>
              <div className="single-blog-post ">
                <div className="blog-image">
                  <a href="#">
                    <img src={`${UPLOAD}/${post.img}`} alt={post.title} />
                  </a>
                  <div className="date">
                    <FeatherIcon name="calendar" />
                    {post.date}
                  </div>
                </div>

                <div className="blog-post-content custom-padding">
                  <h3>
                    <a href="#">{post.title}</a>
                  </h3>
                  <ul>
                    <li>
                      <i className="fa fa-user"></i>
                      <a href="#">Klynova</a>
                    </li>
                  </ul>
                  <p>{post.excerpt}</p>
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
