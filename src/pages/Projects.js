import Footer from "../components/Footer";

const PROJECTS = [
  {
    title: "Inmueblo",
    href: "https://inmueblo.com",
    description:
      "Real estate platform built with Elixir, Phoenix, and LiveView under a modular monolith architecture, using PostgreSQL, Cloudflare R2, and Fly.io, with real-time features and a solid foundation to scale and maintain.",
  },
  {
    title: "Partituras",
    href: "https://partituras.liuspatt.workers.dev",
    description:
      "Web app for teaching piano to kids using Boomwhacker color-coded sheet music. Built with TypeScript, Hono, and Cloudflare Workers, using Cloudflare D1 as the database; includes an admin panel, a public API, and a serverless architecture designed to scale.",
  },
  {
    title: "Music Demo",
    href: "https://music-demo.fly.dev",
    secondaryHref: "https://github.com/WilliamPerezBeltran/music_learning_platform",
    secondaryLabel: "source",
    description:
      "Music learning platform built with Elixir, Phoenix LiveView, and PostgreSQL. Implements real-time synchronization and integrates Tone.js and OpenSheetMusicDisplay (OSMD) for dynamic rendering and synchronized playback of sheet music.",
  },
];

function Projects() {
  return (
    <div className="container cv">
      <div className="row">
        <div className="intro twelve columns">
          <h1>William Fernando Pérez</h1>
        </div>
      </div>

      <h2>Projects</h2>

      {PROJECTS.map((project) => (
        <div className="row skills" key={project.title}>
          <div className="two columns hidden-small">&nbsp;</div>
          <div className="ten columns">
            <h4>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.title}
              </a>
              {project.secondaryHref && (
                <>
                  {" "}
                  (
                  <a
                    href={project.secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.secondaryLabel}
                  </a>
                  )
                </>
              )}
            </h4>
            <p>{project.description}</p>
            <p>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.href}
              </a>
            </p>
          </div>
        </div>
      ))}

      <hr />

      <Footer current="projects" />
    </div>
  );
}

export default Projects;
