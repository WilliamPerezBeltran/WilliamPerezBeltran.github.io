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
          Senior software engineer with 9+ years building production systems
          across fintech, healthcare, energy, and media. I'm currently
          focused on functional programming, primarily Elixir and Phoenix,
          while maintaining broad experience across Java (Spring Boot), Ruby
          on Rails, React, Django, Node.js, and Go. I favor simple,
          maintainable solutions over clever ones, and I care about the full
          SDLC – clean APIs, automated testing, code review, and mentoring
          the engineers around me. I'm drawn to using math and data to guide
          decisions, and outside of work that same curiosity shows up in
          music, which I've also brought into a couple of my recent
          projects. AI tools, especially Claude, are part of how I work day
          to day, not an afterthought – I use them to accelerate
          development, improve code quality, support architecture decisions,
          generate automated tests, and produce technical documentation,
          always keeping sound engineering practices.
        </p>
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
            Elasticsearch
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

      <h2>Experience</h2>

      <div className="row experience">
        <div className="two columns">
          <h3>2023 – Present</h3>
        </div>
        <div className="ten columns">
          <h3>Software Developer – Independent Projects</h3>
          <h4 className="location">Freelance. Remote.</h4>
          <ul>
            <li>
              <strong>Inmueblo</strong> – Real estate platform built with
              Elixir, Phoenix, and LiveView under a modular monolith
              architecture, using PostgreSQL, Cloudflare R2, and Fly.io,
              with real-time features and a solid foundation to scale and
              maintain.{" "}
              <a
                href="https://inmueblo.com"
                target="_blank"
                rel="noreferrer"
              >
                https://inmueblo.com
              </a>
            </li>
            <li>
              <strong>Partituras</strong> – Web app for teaching piano to
              kids using Boomwhacker color-coded sheet music. Built with
              TypeScript, Hono, and Cloudflare Workers, using Cloudflare D1
              as the database; includes an admin panel, a public API, and a
              serverless architecture designed to scale.{" "}
              <a
                href="https://partituras.liuspatt.workers.dev"
                target="_blank"
                rel="noreferrer"
              >
                https://partituras.liuspatt.workers.dev
              </a>
            </li>
            <li>
              <strong>Music Demo</strong> – Music learning platform built
              with Elixir, Phoenix LiveView, and PostgreSQL. Implements
              real-time synchronization and integrates Tone.js and
              OpenSheetMusicDisplay (OSMD) for dynamic rendering and
              synchronized playback of sheet music.{" "}
              <a
                href="https://music-demo.fly.dev"
                target="_blank"
                rel="noreferrer"
              >
                https://music-demo.fly.dev
              </a>{" "}
              ·{" "}
              <a
                href="https://github.com/WilliamPerezBeltran/music_learning_platform"
                target="_blank"
                rel="noreferrer"
              >
                source
              </a>
            </li>
          </ul>
          <h4>Tools used</h4>
          <p>
            Elixir, Phoenix, LiveView, PostgreSQL, TypeScript, Hono,
            Cloudflare Workers, Cloudflare D1, Cloudflare R2, Fly.io.
          </p>
        </div>
      </div>

      <div className="row experience">
        <div className="two columns">
          <h3>2023 – Present</h3>
        </div>
        <div className="ten columns">
          <h3>Full-Stack Engineer &amp; Technical Consultant</h3>
          <h4 className="location">
            Mc Guffin Estudio Audiovisual. Spain, Remote, Part-time.
          </h4>
          <ul>
            <li>
              Use Claude (CLI, Claude Code) daily to accelerate delivery,
              automate repetitive tasks, and improve code quality across
              full-stack projects.
            </li>
            <li>
              Build resilient systems with functional programming, OTP
              concurrency, LiveView, and PostgreSQL.
            </li>
            <li>
              Participated in the development of 4 SaaS products,
              contributing to a 35% reduction in time-to-market.
            </li>
            <li>
              Designed RESTful APIs and WebSocket channels for systems
              handling 50,000+ concurrent users.
            </li>
            <li>
              Migrated a monolith to a modular, context-based architecture,
              reducing latency from 420ms to 95ms.
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
              Split time between hands-on development/PR reviews (50%) and
              technical coordination (50%).
            </li>
            <li>
              Built a new React application from scratch and migrated a
              legacy EmberJS app for 3,200 users, improving load time by
              40%.
            </li>
            <li>
              Optimized backend endpoints; configured Kubernetes + Docker;
              implemented Jenkins CI scripts.
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
              Developed 6 microservices with RESTful APIs processing
              180,000+ policies/day at p95 latency under 200ms.
            </li>
            <li>
              Implemented async messaging with Apache Kafka (3 brokers) with
              zero message loss over 7 months.
            </li>
            <li>
              Built a policy cancellation API that automated a manual
              process, saving 320 hours/month.
            </li>
            <li>
              Integrated Spring Security to strengthen authentication and
              authorization mechanisms.
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
              Led the design, planning, and development of a web and mobile
              application for teaching set theory, in collaboration with the
              mathematics department.
            </li>
            <li>
              Delivered a web + mobile educational app adopted by 1,200
              students, full SDLC cycle with 82% automated test coverage.
            </li>
            <li>
              Designed and implemented the app's data model and REST API
              layer, integrating with the university's academic systems.
            </li>
            <li>
              Collaborated directly with faculty to translate curriculum
              requirements into working product features.
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
              Optimized operations research algorithms, reducing computation
              time from 8 minutes to 47 seconds.
            </li>
            <li>
              Implemented and tested mathematical optimization models used
              in decision-support tools for research projects.
            </li>
            <li>
              Worked closely with a multidisciplinary research team to turn
              operations research models into production code.
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
              Built an energy tariff scraping system processing 2M+
              records/week, automating tasks and eliminating 14 hours/week
              of manual work.
            </li>
            <li>
              Designed the data pipeline architecture for ingesting,
              cleaning, and storing energy tariff data at scale.
            </li>
            <li>
              Developed custom spiders with Scrapy, managed HTTP requests,
              and handled exceptions; contributed to data-integrity tests.
            </li>
            <li>
              Delivered the project fully remotely as a freelancer,
              coordinating directly with a UK-based team across time zones.
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
              Built an inventory control automation system with RFID
              integration and real-time reports for Servicios Industriales y
              Marítimos S.A.S. (SEIMAR), reducing audit time by 65%.
            </li>
            <li>
              Developed a web app with AI to analyze fungal percentages on
              red rose petals.
            </li>
            <li>
              Built a mobile application for payment receipt control on
              Android and iOS.
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
