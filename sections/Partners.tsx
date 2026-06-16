const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const tech = [
  { name: "React", path: "react/react-original.svg" },
  { name: "Next.js", path: "nextjs/nextjs-original.svg" },
  { name: "TypeScript", path: "typescript/typescript-original.svg" },
  { name: "JavaScript", path: "javascript/javascript-original.svg" },
  { name: "Node.js", path: "nodejs/nodejs-original.svg" },
  { name: "Express", path: "express/express-original.svg" },
  { name: "Tailwind CSS", path: "tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", path: "mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", path: "postgresql/postgresql-original.svg" },
  { name: "GraphQL", path: "graphql/graphql-plain.svg" },
  { name: "Docker", path: "docker/docker-original.svg" },
  { name: "Figma", path: "figma/figma-original.svg" },
];

export default function Partners() {
  return (
    <div className="partner-area partner-section klynova-tech">
      <div className="container">
        <h5>The modern stack we build with</h5>
        <div className="partner-inner">
          <div className="row">
            {tech.map((t) => (
              <div className="col-lg-2 col-md-3 col-6" key={t.name}>
                <a href="#" title={t.name} aria-label={t.name}>
                  <img src={`${DEVICON}/${t.path}`} alt={t.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
