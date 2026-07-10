import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { key: "home", label: "Home", to: "/" },
  { key: "cv", label: "Résumé", to: "/cv" },
  { key: "inspiration", label: "Inspiration", to: "/inspiration" },
  { key: "projects", label: "Projects", to: "/projects" },
];

function Footer({ current }) {
  return (
    <footer>
      <div className="row">
        <div className="four columns">
          WILLIAM FERNANDO PÉREZ
          <br />
          Senior Software Engineer
          <br />-<br />
          {NAV_ITEMS.map((item) => (
            <span key={item.key}>
              {item.key === current ? item.label : <Link to={item.to}>{item.label}</Link>}
              <br />
            </span>
          ))}
        </div>
        <div className="four columns">
          CONTACT
          <br />
          <a
            href="mailto:williampbeltranprogramador@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            williampbeltranprogramador@gmail.com
          </a>
        </div>
        <div className="four columns">
          ELSEWHERE
          <br />
          <a
            href="https://github.com/WilliamPerezBeltran/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/williamperezb"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
