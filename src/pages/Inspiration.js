import Footer from "../components/Footer";

const INSPIRATIONS = [
  {
    name: "José Ignacio Latorre",
    href: "https://joseignaciolatorre.com",
    description:
      "Quantum physicist, researcher in quantum information, and science communicator.",
  },
  {
    name: "George Hotz",
    href: "https://geohot.com",
    description:
      "Founder of comma.ai, creator of tinygrad, and renowned systems hacker.",
  },
  {
    name: "Paul Graham",
    href: "https://paulgraham.com",
    description:
      "Co-founder of Y Combinator, programmer, and influential startup essayist.",
  },
  {
    name: "Leslie Lamport",
    href: "https://lamport.azurewebsites.net",
    description:
      "Turing Award winner, creator of Paxos, TLA+, and Lamport timestamps.",
  },
  {
    name: "Erik Demaine",
    href: "https://erikdemaine.org",
    description:
      "MIT professor specializing in algorithms, computational geometry, and origami mathematics.",
  },
  {
    name: "David Nolen",
    href: "https://swannodette.github.io",
    description:
      "Clojure/ClojureScript core contributor, known for his work on Om and functional UI architecture.",
  },
];

function Inspiration() {
  return (
    <div className="container cv">
      <div className="row">
        <div className="intro twelve columns">
          <h1>William Fernando Pérez</h1>
        </div>
      </div>

      <h2>Inspiration</h2>

      <p>
        People whose ideas and work have deeply inspired how I think about
        engineering, math, and building things:
      </p>
      <br />

      {INSPIRATIONS.map((item) => (
        <div className="row skills" key={item.name}>
          <div className="ten columns">
            <h4>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}

      <hr />

      <Footer current="inspiration" />
    </div>
  );
}

export default Inspiration;
