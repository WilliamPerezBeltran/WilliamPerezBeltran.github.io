import Footer from "../components/Footer";

const INSPIRATIONS = [
  {
    name: "Dan Abramov",
    href: "https://twitter.com/dan_abramov",
    description: "Co-creator of Redux, part of the React core team.",
  },
  {
    name: "Kent C. Dodds",
    href: "https://kentcdodds.com/",
    description: "Software educator focused on testing and React.",
  },
  {
    name: "Thoughtbot",
    href: "https://thoughtbot.com/",
    description: "Design and development consultancy.",
  },
  {
    name: "DHH",
    href: "https://world.hey.com/dhh",
    description: "Creator of Ruby on Rails.",
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

      <p>People/companies that have inspired my work:</p>
      <br />

      {INSPIRATIONS.map((item) => (
        <div className="row skills" key={item.name}>
          <div className="two columns hidden-small">&nbsp;</div>
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
