import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

const STYLE = `
@font-face {
  font-family: 'JetBrainsMono-Bold';
  src: url('/src/font/JetBrainsMono/JetBrainsMono-Bold.ttf');
}

@font-face {
  font-family: 'JetBrainsMono-ExtraBold';
  src: url('/src/font/JetBrainsMono/JetBrainsMono-ExtraBold.ttf');
}

* {
  position: relative;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  color: rgba(0,0,0,.5);
}

h1, h3, h5 {
  pointer-events: none;
}

button {
  color: white;
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: 0.2rem;
}
`;

export default function Main() {
  /* useEffect(() => {
    document.body.style.fontFamily = "'Roboto', sans-serif";
  }, []); */

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Head>
        <title>Personal landing page</title>
        <meta name="author" content="Habib Anwash" />
        <meta
          name="description"
          content="A simple personal portfolio webpage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Script src="/src/scripts/headingAnimation.js" />
      <Script src="/src/scripts/render.js" />
      <Script src="/src/scripts/navigation.js" />
      <style jsx>{STYLE}</style>
      <header
        id="home"
        className="overflow-x-hidden md:flex flex-col"
        style={{ minHeight: "calc(100vh - 128px)" }}
      >
        <div
          className="static flex justify-between items-center h-20 px-6 text-white text-2xl font-extrabold tracking-wider
        md:h-28 md:px-36"
        >
          <div className="flex justify-between items-center gap-[20px]">
            <img
              style={{ height: "30px" }}
              src="/src/img/png/Logo.png"
              alt="logo"
            />
            <h1>PORTFOLIO</h1>
          </div>
          <button
            id="sidebar-toggle"
            className="absolute right-4 rounded-lg border-2 border-white border-opacity-20 w-[45px] h-[35px]
          md:right-36
          min-[1200px]:hidden"
          >
            <img
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              src="/src/img/svg/LeftArrow.svg"
              alt="left-arrow"
            />
          </button>
          <nav
            id="navbar"
            className="hidden relative flex-row transition z-10 p-0 items-center gap-11 text-[rgba(255,255,255,0.5)] font-light
          min-[1200px]:flex"
          >
            <a href="#home" className="selected">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#socials">Contact</a>
          </nav>
        </div>
        <div className="md:flex items-center flex-grow">
          <main
            className="flex flex-col gap-12 items-center w-min mx-auto mt-16 mb-7
          md:flex-row md:gap-10 md:my-0 md:w-max"
          >
            <div
              id="main-heading"
              className="flex flex-col gap-5 w-80
            md:w-[50vw] md:gap-0"
            >
              <div>
                <h5
                  id="name"
                  className="opacity-0 -translate-x-1/4 transition duration-700 text-white text-sm font-semibold tracking-[0.25em]
                md:leading-[1.5]"
                >
                  Habib Anwash
                </h5>
                <h1
                  id="heading"
                  className="text-[#0CFF8A] text-4xl text-jetbrainsmono-xb
                md:text-5xl  md:leading-[1.5]"
                >
                  <span id="animate-heading">Front End </span>developer
                </h1>
              </div>
              <p
                id="description"
                className="opacity-0 translate-x-1/4 transition duration-700 delay-200 text-[#6A6A6A] text-xs indent-9
              md:text-[16px] md:leading-[1.5]"
              >
                Hi, my name is Habib Anwash. I&apos;m a self-taught developer and
                passionate about learning something new. I am excited to
                continue learning and growing as a developer and I am eager to
                take on new challenges.
              </p>
              <div
                className="flex flex-col gap-5
              md:mt-10 md:flex-row md:gap-6"
              >
                <button
                  onClick={() =>
                    document.querySelector("#socials")?.scrollIntoView()
                  }
                  className="w-32 h-10 bg-[#FF122E]"
                >
                  Contact
                </button>
                <button
                  onClick={() =>
                    document.querySelector("#projects")?.scrollIntoView()
                  }
                  className="w-44 h-10 bg-transparent outline outline-[#6A6A6A] outline-1"
                >
                  View portfolio
                </button>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <img
                className="right-[-30px] w-96
              md:static md:w-[33vw]"
                src="/src/img/png/Vector.png"
                alt="decoration"
              />
            </div>
          </main>
        </div>
      </header>
      <main className="bg-white overflow-x-hidden">
        {/* <!-- Separator --> */}
        <div
          className="py-5
        md:py-10"
        >
          <img
            className="mx-auto
          md:h-12"
            src="/src/img/svg/Separator.svg"
            alt="separator"
          />
        </div>
        {/* <!-- Separator --> */}

        <section
          id="about"
          className="page gap-7
        md:flex-row md:justify-between md:mx-[15vw] md:gap-14"
        >
          <div
            className="title
          md:hidden"
          >
            <h1 className="before:left-3 before:w-16">About Me</h1>
          </div>
          <div
            className="aspect-square w-28 rounded-full overflow-hidden ring ring-[#8D7AFF] ring-offset-4
          md:w-64"
          >
            <img src="/src/img/me.jpg" alt="Profile_Photo" />
          </div>
          <div
            className="flex flex-col gap-8 w-[65%] items-center
          md:w-[680px] md:items-start"
          >
            <div
              className="title hidden
            md:flex"
            >
              <h1
                className="before:left-3 before:w-16
              md:before:w-28"
              >
                About Me
              </h1>
            </div>
            <p
              className="text-justify leading-5
            md:text-xl"
            >
              Hi, my name is Habib Anwash. As a self-learner, I got all of these
              knowledge by learning on YouTube, some online bootcamp like
              freeCodeCamp, and experimenting myself by building projects. But
              with all those, I am still excited to continue learning and
              growing as a developer and I am eager to take on new challenges. I
              have been working on my own projects and honing my skills with it.
            </p>
            <button
              onClick={() =>
                document.querySelector("#socials")?.scrollIntoView()
              }
              className="w-36 h-10 bg-[#FF122E]
            md:w-56 md:h-14 md:text-2xl"
            >
              Contact me
            </button>
          </div>
        </section>

        {/* <!-- Separator --> */}
        <div
          className="py-5
        md:py-10"
        >
          <img
            className="mx-auto
          md:h-12"
            src="/src/img/svg/Separator.svg"
            alt="separator"
          />
        </div>
        {/* <!-- Separator --> */}

        <section
          id="skills"
          className="page gap-7
        md:gap-24 md:mx-[10vw]"
        >
          <div className="title">
            <h5 className="tracking-widest">Skills</h5>
            <h1 className="before:w-6 before:left-8 after:w-28 after:left-16">
              What i work for
            </h1>
          </div>
          <ul
            className="grid grid-cols-[repeat(auto-fill,273px)] justify-center gap-x-4 gap-y-16 w-full md:justify-around"
            // className="flex flex-wrap justify-center gap-x-4 gap-y-16 w-full"
          >
            <li className="opacity-0 -translate-x-1/2 transition duration-700 item">
              <div>
                <img src="/src/img/png/MongoDB_Logo.png" alt="MongoDB_Logo" />
              </div>
              <div>
                <h3>MongoDB</h3>
                <p>
                  Cross-platform document-oriented database program. Classified
                  as a NoSQL database program, MongoDB uses JSON-like documents
                  with optional schemas.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-100 item">
              <div>
                <img src="/src/img/png/Express_Logo.png" alt="Express_Logo" />
              </div>
              <div>
                <h3>Express JS</h3>
                <p>
                  Back end web application framework for building RESTful APIs
                  with NodeJS, released as free and open-source software under
                  the MIT License.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-200 item">
              <div>
                <img src="/src/img/png/React_Logo.png" alt="React_Logo" />
              </div>
              <div>
                <h3>React</h3>
                <p>
                  JavaScript library for building user interfaces. React has
                  been designed from the start for gradual adoption, and you can
                  use as little or as much React as you need.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-300 item">
              <div>
                <img src="/src/img/png/Node_Logo.png" alt="Node_Logo.png" />
              </div>
              <div>
                <h3>Node JS</h3>
                <p>
                  Back end JavaScript runtime environment, runs on the V8
                  JavaScript Engine, and executes JavaScript code outside a web
                  browser.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-300 item">
              <div>
                <img src="/src/img/png/Typescript_Logo.png" alt="Node_Logo.png" />
              </div>
              <div>
                <h3>Typescript</h3>
                <p>
                  TypeScript is a strongly typed programming language that
                  builds on JavaScript, giving you better tooling at any scale.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-[400ms] item">
              <div>
                <img src="/src/img/png/HTML_Logo.png" alt="HTML_Logo.png" />
                <img src="/src/img/png/CSS_Logo.png" alt="CSS_Logo.png" />
                <img src="/src/img/png/JS_Logo.png" alt="JS_Logo.png" />
              </div>
              <div>
                <h3>Web Development</h3>
                <p>
                  Web development is the work involved in developing a website
                  for the Internet (World Wide Web) or an intranet (a private
                  network).
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-500 item">
              <div>
                <img src="/src/img/png/Git_Logo.png" alt="Git_Logo.png" />
              </div>
              <div>
                <h3>Git Version Control</h3>
                <p>
                  Distributed version control system, tracking changes in any
                  set of files, usually used for coordinating work among
                  programmers collaboratively developing source code during
                  software development.
                </p>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-[600ms] item">
              <div>
                <img src="/src/img/png/MySQL_Logo.png" alt="MySQL_Logo.png" />
              </div>
              <div>
                <h3>MySQL</h3>
                <p>
                  MySQL is a widely used relational database management system
                  (RDBMS). MySQL is free and open-source. MySQL is ideal for
                  both small and large applications.
                </p>
              </div>
            </li>
          </ul>
        </section>

        {/* <!-- Separator --> */}
        <div
          className="py-5
        md:py-10"
        >
          <img
            className="mx-auto
          md:h-12"
            src="/src/img/svg/Separator.svg"
            alt="separator"
          />
        </div>
        {/* <!-- Separator --> */}

        <section
          id="projects"
          className="page gap-7
        md:gap-24"
        >
          <div className="title">
            <h5 className="tracking-widest">My projects</h5>
            <h1 className="before:w-full">Portfolio</h1>
          </div>
          <ul>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 item border-l-[#0CFF8A]">
              <h3>Todo-list app</h3>
              <img
                src="/src/img/project/TodoApp.jpg"
                alt="preview"
                className="aspect-video ring ring-offset-2 ring-[#8D7AFF] rounded"
              />
              <div className="md:flex md:flex-col md:gap-6 md:w-[46%]">
                <h3
                  className="hidden
                md:!block"
                >
                  Todo-list app
                </h3>
                <div className="px-5 py-3 border-l-[#8D7AFF]">
                  <p
                    className="text-justify
                  md:text-xl"
                  >
                    Basic todo app for managing tasks. Build with vanilla html,
                    css, and javascript as front-end. Using NodeJS, express and
                    MongoDB as backend.
                  </p>
                </div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://todoapp.tugasonly.repl.co/"
                className="flex items-center rounded-full bg-[#0CFF8A] aspect-square w-[50px]"
              >
                <img
                  className="w-6 mx-auto"
                  src="/src/img/svg/RightArrow.svg"
                  alt="right-arrow"
                />
              </a>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-100 item border-l-[#0C8AFF]">
              <h3>React movie app</h3>
              <img
                src="/src/img/project/ReactMovieApp.png"
                alt="preview"
                className="aspect-video ring ring-offset-2 ring-[#8D7AFF] rounded"
              />
              <div className="md:flex md:flex-col md:gap-6 md:w-[46%]">
                <h3
                  className="hidden
                md:!block"
                >
                  React movie app
                </h3>
                <div className="px-5 py-3 border-l-[#8D7AFF]">
                  <p
                    className="text-justify
                  md:text-xl"
                  >
                    MERN stack application used for searching and collection
                    movies. Build with react, ant-design, and a little bit
                    bootstrap react ui library as front-end. And NodeJS, MongoDB
                    as backend.
                  </p>
                </div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reactmovieapp.tugasonly.repl.co/"
                className="flex items-center rounded-full bg-[#0C8AFF] aspect-square w-[50px]"
              >
                <img
                  className="w-6 mx-auto"
                  src="/src/img/svg/RightArrow.svg"
                  alt="right-arrow"
                />
              </a>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-100 item border-l-red-500">
              <h3>Front-end mentor challanges</h3>
              <img
                src="/src/img/project/FrontEndMentor.png"
                alt="preview"
                className="aspect-video ring ring-offset-2 ring-[#8D7AFF] rounded"
              />
              <div className="md:flex md:flex-col md:gap-6 md:w-[46%]">
                <h3
                  className="hidden
                md:!block"
                >
                  Front-end mentor challanges
                </h3>
                <div className="px-5 py-3 border-l-[#8D7AFF]">
                  <p
                    className="text-justify
                  md:text-xl"
                  >
                    Frontendmentor.io is a platform that provides challanges to
                    make a real web frontend projects. With all of my skills, I
                    managed to finish some &quot;Advanced-level&quot; challanges provided
                    by them
                  </p>
                </div>
              </div>
              <Link
                prefetch={false}
                href="/projects"
                className="flex items-center rounded-full bg-red-500 aspect-square w-[50px]"
              >
                <img
                  className="w-6 mx-auto"
                  src="/src/img/svg/RightArrow.svg"
                  alt="right-arrow"
                />
              </Link>
            </li>
          </ul>
        </section>

        {/* <!-- Separator --> */}
        <div
          className="py-5
        md:py-10"
        >
          <img
            className="mx-auto
          md:h-12"
            src="/src/img/svg/Separator.svg"
            alt="separator"
          />
        </div>
        {/* <!-- Separator --> */}

        <section
          id="socials"
          className="page gap-7
        md:gap-24"
        >
          <div className="title">
            <h5 className="text-center tracking-widest">Contact me</h5>
            <h1>My Social Media</h1>
          </div>
          <ul>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ans54bit"
                className="opacity-0 translate-x-1/2 transition duration-700 item border-l-[#333333] text-[#333333]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/GitHub_Logo.png"
                  alt="GitHub_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  GITHUB :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  ans54bit
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/HabibAnwash"
                className="opacity-0 translate-x-1/2 transition duration-700 delay-100 item border-l-[#24A1DD] text-[#24A1DD]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/Telegram_Logo.png"
                  alt="Telegram_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  TELEGRAM :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  Habib Anwash
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discordapp.com/users/372738941155147777"
                className="opacity-0 translate-x-1/2 transition duration-700 delay-200 item border-l-[#5865F2] text-[#5865F2]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/Discord_Logo.png"
                  alt="Discord_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  DISCORD :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  HabibAnwash1447@7305
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/ans54bit?igshid=ZDdkNTZiNTM="
                className="opacity-0 translate-x-1/2 transition duration-700 delay-300 item border-l-[#CC426A] text-[#CC426A]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/Instagram_Logo.png"
                  alt="Instagram_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  INSTAGRAM :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  @ans54bit
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/6281217675797"
                className="opacity-0 translate-x-1/2 transition duration-700 delay-[400ms] item border-l-[#3FE35C] text-[#3FE35C]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/Whatsapp_Logo.png"
                  alt="Whatsapp_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  WHATSAPP :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  +62 812-1767-5797
                </p>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer
        className="bg-[#242A33] flex flex-col items-center py-4 gap-2
      md:h-40 md:py-11 md:gap-3"
      >
        <p
          className="text-white text-xs tracking-widest
        md:text-2xl"
        >
          Copyright @ Jan 2023 -{" "}
          <span className="text-yellow-200 font-black ">Habib Anwash</span>
        </p>
        <p
          className="text-jetbrainsmono-xb tracking-widest
        text-white w-52 text-center text-xs
        md:text-xl md:w-full"
        >
          Build with basic html and tailwind classes
        </p>
      </footer>
      <div
        id="background"
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          height: "3000px",
          width: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "rgba(12,5,30,.95)",
          }}
        ></div>
        <img
          className="origin-top-left -rotate-12 scale-[11] translate-x-1/2 translate-y-1/2 absolute z-[-1] top-[150px] right-[400px]
          md:top-0 md:right-[800px] md:scale-[17]"
          src="/src/img/svg/Decoration.svg"
          alt="Decoration"
        />
      </div>
      <div
        id="backdrop"
        className="hidden absolute overflow-hidden top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.3)]"
      >
        <nav
          tabIndex={1}
          id="sidebar"
          className="absolute transition translate-x-full z-10 right-0 top-0 w-80 border-l-4 border-l-[rgba(47,40,67,.5)] bg-[rgba(12,5,30,.6)] backdrop-blur-lg h-[500vh] backdrop-brightness-50"
        >
          <ul className="flex flex-col items-stretch p-9 gap-11 text-[rgba(255,255,255,0.5)] font-light">
            <li>
              <a href="#home" className="selected">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#socials">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
