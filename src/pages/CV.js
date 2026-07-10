import Footer from "../components/Footer";

function CV() {
  return (
    <div className="container cv">
      <div className="row">
        <div className="intro twelve columns">
          <h1>William Fernando Pérez</h1>
          <h4>Résumé</h4>
        </div>
      </div>

      <h2>Summary</h2>

      <div className="row profile">
        <p>
          Senior software engineer, 9+ years shipping production systems in
          fintech, healthcare, energy, and media. Functional-programming-first
          – Elixir and Phoenix by choice, fluent across Java, Ruby on Rails,
          React, Django, Node.js, and Go. I favor simple over clever, own the
          full SDLC, and mentor the engineers around me. Math and data drive
          my decisions; music drives my curiosity. Claude and AI tooling are
          part of my daily workflow, not a crutch – they make me faster
          without cutting corners.
        </p>
      </div>

      <h2>Experience</h2>

      <div className="row experience">
        <div className="two columns">
          <h3>2026 – Present</h3>
        </div>
        <div className="ten columns">
          <h3>Software Developer – Independent Projects</h3>
          <h4 className="location">Freelance. Remote.</h4>
          <ul>
            <li>
              <strong>
                <a
                  href="https://inmueblo.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inmueblo
                </a>
              </strong>{" "}
              – Real estate platform built with Elixir, Phoenix, and
              LiveView under a modular monolith architecture, using
              PostgreSQL, Cloudflare R2, and Fly.io, with real-time features
              and a solid foundation to scale and maintain.
            </li>
            <li>
              <strong>
                <a
                  href="https://partituras.liuspatt.workers.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Partituras
                </a>
              </strong>{" "}
              – Web app for teaching piano to kids using Boomwhacker
              color-coded sheet music. Built with TypeScript, Hono, and
              Cloudflare Workers, using Cloudflare D1 as the database;
              includes an admin panel, a public API, and a serverless
              architecture designed to scale.
            </li>
            <li>
              <strong>
                <a
                  href="https://music-demo.fly.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Music Demo
                </a>
              </strong>{" "}
              – Music learning platform built with Elixir, Phoenix LiveView,
              and PostgreSQL. Implements real-time synchronization and
              integrates Tone.js and OpenSheetMusicDisplay (OSMD) for
              dynamic rendering and synchronized playback of sheet music. (
              <a
                href="https://github.com/WilliamPerezBeltran/music_learning_platform"
                target="_blank"
                rel="noreferrer"
              >
                source
              </a>
              )
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            <strong>Dev</strong>: Elixir, Phoenix, LiveView, PostgreSQL,
            TypeScript, Hono, Cloudflare Workers, Cloudflare D1, Cloudflare
            R2, Fly.io. <strong>Analytics</strong>: Segment, MixPanel,
            FullStory. <strong>Monitoring</strong>: Sentry, New Relic.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2023 – 2026</h3>
        </div>
        <div className="ten columns">
          <h3>Full-Stack Engineer &amp; Technical Consultant</h3>
          <h4 className="location">
            Mc Guffin Estudio Audiovisual. Spain, Remote, Part-time.
          </h4>
          <ul>
            <li>
              Built resilient systems with functional programming (OTP,
              LiveView, PostgreSQL); shipped 4 SaaS products, cutting
              time-to-market by 35%.
            </li>
            <li>
              Designed RESTful APIs/WebSockets for 50,000+ concurrent users
              and migrated a monolith to a modular architecture (420ms →
              95ms latency), using Claude daily to accelerate delivery.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            Elixir, Phoenix, LiveView, PostgreSQL, React, TypeScript, Claude
            Code.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2022</h3>
        </div>
        <div className="ten columns">
          <h3>Senior Software Engineer</h3>
          <h4 className="location">
            IQVIA. United States, Remote, Contract.
          </h4>
          <ul>
            <li>
              Built a new React app from scratch and migrated a legacy
              EmberJS app for 3,200 users, improving load time by 40%.
            </li>
            <li>
              Split time between development and technical coordination;
              optimized backend endpoints and set up Kubernetes/Docker/
              Jenkins CI.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>React, EmberJS, Kubernetes, Docker, Pulumi, Jenkins.</p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2021</h3>
        </div>
        <div className="ten columns">
          <h3>Back-End Developer</h3>
          <h4 className="location">BNP Paribas Cardif. Bogotá, Full-time.</h4>
          <ul>
            <li>
              Built 6 microservices processing 180,000+ policies/day (p95
              &lt;200ms) with Kafka async messaging and zero message loss
              over 7 months.
            </li>
            <li>
              Automated policy cancellation via a new API, saving 320
              hours/month; hardened auth with Spring Security.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            Java, Spring Boot, JUnit5, Apache Kafka, Oracle Database, SQL
            Server, MySQL, Stored Procedures, AWS, Confluence.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2020 – 2021</h3>
        </div>
        <div className="ten columns">
          <h3>Full-Stack Developer</h3>
          <h4 className="location">Universidad UPTC. Bogotá, Remote.</h4>
          <ul>
            <li>
              Led a web + mobile app for teaching set theory with the math
              department, adopted by 1,200 students (82% automated test
              coverage).
            </li>
            <li>
              Designed the data model and REST API integrating with academic
              systems, working directly with faculty on requirements.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            JavaScript, TypeScript, React, React Native, GraphQL, ESLint,
            Prettier, Node.js, Redux, React Query, React Router, Jest,
            Python, Django, GitHub Actions, PostgreSQL, Firebase.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2019</h3>
        </div>
        <div className="ten columns">
          <h3>Software Developer</h3>
          <h4 className="location">
            Melius Investigación y Desarrollo. Bogotá, Full-time.
          </h4>
          <ul>
            <li>
              Optimized operations research algorithms (8 min → 47 sec) and
              implemented math optimization models for decision-support
              tools, working with a multidisciplinary research team.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            Java, Spring Boot, JavaScript, Ruby, Ruby on Rails, React
            Native, GraphQL (Apollo), PostgreSQL, Redis, Docker, JUnit,
            RSpec, GitHub Actions, Jira, Trello.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2017 – 2019</h3>
        </div>
        <div className="ten columns">
          <h3>Back-End Developer, Freelance</h3>
          <h4 className="location">
            Octopus Energy. London, United Kingdom, Remote.
          </h4>
          <ul>
            <li>
              Built an energy tariff scraping pipeline (Scrapy/Django)
              processing 2M+ records/week, eliminating 14 hours/week of
              manual work.
            </li>
            <li>
              Designed the ingestion/cleaning/storage pipeline; delivered
              fully remotely, coordinating with a UK-based team.
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            Python, Django, PostgreSQL, Scrapy, Cron Jobs, Pytest, AWS.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2016 – 2019</h3>
        </div>
        <div className="ten columns">
          <h3>Software Developer, Independent Contractor</h3>
          <h4 className="location">Freelance. Colombia.</h4>
          <ul>
            <li>
              Built an RFID-based inventory automation system for SEIMAR,
              cutting audit time by 65%.
            </li>
            <li>
              Shipped an AI web app for rose-petal fungus analysis and a
              mobile payment-receipt tracker (Android/iOS).
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            JavaScript, React, React Native, Electron, Node.js, SQLite,
            PostgreSQL, Firebase, Android, JUnit, Jest, React Testing
            Library, Angular, Vue.js.
          </p>
        </div>
      </div>

      <h2>Technical Skills</h2>

      <div className="row skills">
        <div className="two columns hidden-small">&nbsp;</div>
        <div className="ten columns">
          <h4>Backend</h4>
          <p>
            Go (Golang), Elixir/Phoenix (OTP, LiveView, GenServer, Ecto),
            Python (Django, FastAPI, Flask), Ruby on Rails, Java Spring
            Boot, Node.js
          </p>
          <h4>Frontend</h4>
          <p>
            React, React Native, TypeScript, Next.js, Tailwind CSS,
            GraphQL, EmberJS
          </p>
          <h4>Databases</h4>
          <p>
            MySQL, PostgreSQL, SQLite, Redis, Oracle DB, SQL Server,
            Elasticsearch, pgvector/Pinecone (vector databases)
          </p>
          <h4>AI Tools</h4>
          <p>
            Claude (CLI, Claude Code) – daily use to accelerate development,
            improve code quality, support architecture decisions, generate
            automated tests, and produce technical documentation
          </p>
          <h4>DevOps / Cloud</h4>
          <p>
            Docker, Kubernetes, AWS (EC2, EKS, S3, RDS), Pulumi, GitHub
            Actions, Jenkins, GitLab CI/CD
          </p>
          <h4>Testing</h4>
          <p>
            ExUnit, RSpec, Jest, Pytest, JUnit5, FactoryBot – unit,
            integration &amp; end-to-end testing, avg. 87% coverage
          </p>
          <h4>Architecture</h4>
          <p>
            RESTful APIs, Microservices, Event-Driven, Hexagonal/Clean
            Architecture, MVC, Concurrency
          </p>
          <h4>Methodologies</h4>
          <p>Scrum, Kanban, Code Review, Pair Programming, Jira, Confluence</p>
        </div>
      </div>

      <h2>Education</h2>

      <div className="row education">
        <div className="two columns">
          <h3>2008 – 2012</h3>
        </div>
        <div className="ten columns">
          <h3>Bachelor's Degree in Industrial Engineering</h3>
          <h4 className="location">
            Sergio Arboleda University. Bogotá, Colombia.
          </h4>
        </div>
      </div>

      <div className="row education">
        <div className="two columns">
          <h3>2016</h3>
        </div>
        <div className="ten columns">
          <h3>Software Development Bootcamp</h3>
          <h4 className="location">Make It Real. Bogotá, Colombia.</h4>
        </div>
      </div>

      <div className="row education">
        <div className="two columns">
          <h3>2016</h3>
        </div>
        <div className="ten columns">
          <h3>Software Development Bootcamp</h3>
          <h4 className="location">IT Group. Bogotá, Colombia.</h4>
        </div>
      </div>

      <h2>Certifications</h2>

      <div className="row skills">
        <div className="two columns hidden-small">&nbsp;</div>
        <div className="ten columns">
          <p>
            Programming in Go (Golang) · Docker: Fundamentals · TypeScript ·
            Jenkins Basics — Platzi
          </p>
        </div>
      </div>

      <h2>Languages</h2>

      <div className="row skills">
        <div className="two columns hidden-small">&nbsp;</div>
        <div className="ten columns">
          <p>Spanish: Native · English: C1</p>
        </div>
      </div>

      <hr />

      <Footer current="cv" />
    </div>
  );
}

export default CV;
