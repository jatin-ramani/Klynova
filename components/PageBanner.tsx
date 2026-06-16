import Link from "next/link";

const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img";

const shapes = [
  { cls: "shape1", file: "shape1.png" },
  { cls: "shape2 rotateme", file: "shape2.svg" },
  { cls: "shape3", file: "shape3.svg" },
  { cls: "shape4", file: "shape4.svg" },
  { cls: "shape5", file: "shape5.png" },
  { cls: "shape6 rotateme", file: "shape4.svg" },
  { cls: "shape7", file: "shape4.svg" },
  { cls: "shape8 rotateme", file: "shape2.svg" },
];

export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <h2>{title}</h2>
            <ul className="klynova-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </div>

      {shapes.map((s) => (
        <div className={s.cls} key={s.cls}>
          <img src={`${ASSET}/${s.file}`} alt="shape" />
        </div>
      ))}
    </div>
  );
}
