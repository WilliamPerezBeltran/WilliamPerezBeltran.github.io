import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="intro twelve columns">
          <h1>William Fernando Pérez</h1>
          <p>
            Hello, I'm a Senior Software Engineer. I've been building
            production systems across fintech, healthcare, energy, and media
            for 9+ years.
          </p>
        </div>
      </div>

      <div className="row links">
        <div className="four columns">
          <Link to="/cv">Résumé</Link>
        </div>
        <div className="four columns">
          <Link to="/inspiration">Inspiration</Link>
        </div>
        <div className="four columns">
          <Link to="/projects">Projects</Link>
        </div>
      </div>

      <hr />

      <Footer current="home" />
    </div>
  );
}

export default Home;
