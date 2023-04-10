import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image"

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

const WebIcon = ({fill, style}: {fill: string, style?: Object}) => (
  <svg style={style} fill={fill} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 264 264" xmlSpace="preserve">
	<g>
		<path d="M246.997,33H17.926C8.225,33,0,40.892,0,50.593v163.071C0,223.385,8.061,231,17.926,231h229.071
			c9.721,0,17.003-7.615,17.003-17.336V50.593C264,40.728,256.718,33,246.997,33z M60.226,43.025c3.554,0,6.444,2.891,6.444,6.444
			s-2.891,6.444-6.444,6.444s-6.444-2.891-6.444-6.444S56.672,43.025,60.226,43.025z M41.726,43.025c3.554,0,6.444,2.891,6.444,6.444
			s-2.891,6.444-6.444,6.444s-6.444-2.891-6.444-6.444S38.172,43.025,41.726,43.025z M23.226,43.025c3.554,0,6.444,2.891,6.444,6.444
			s-2.891,6.444-6.444,6.444s-6.444-2.891-6.444-6.444S19.672,43.025,23.226,43.025z M248,214.5c0,0.276,0.109,0.5-0.167,0.5h-0.5
			h-230.5H16v-0.5V67v-0.5c0-0.276,0.557-0.5,0.833-0.5h231c0.276,0,0.167,0.224,0.167,0.5V214.5z M241.889,56h-70
			c-3.554,0-6.444-2.91-6.444-6.487c0-3.577,2.891-6.487,6.444-6.487l70,0.022c3.554,0,6.444,2.9,6.444,6.466
			C248.333,53.09,245.442,56,241.889,56z"/>
		<g>
			<path d="M39.889,106h70c3.554,0,6.444-2.913,6.444-6.494c0-3.566-2.891-6.469-6.444-6.469l-70-0.024
				c-3.554,0-6.444,2.913-6.444,6.493C33.444,103.087,36.335,106,39.889,106z"/>
			<path d="M109.889,115.037l-70-0.024c-3.554,0-6.444,2.913-6.444,6.493c0,3.581,2.891,6.494,6.444,6.494h70
				c3.554,0,6.444-2.913,6.444-6.494C116.333,117.939,113.442,115.037,109.889,115.037z"/>
			<path d="M109.889,137.037l-70-0.024c-3.554,0-6.444,2.913-6.444,6.493c0,3.581,2.891,6.494,6.444,6.494h70
				c3.554,0,6.444-2.913,6.444-6.494C116.333,139.939,113.442,137.037,109.889,137.037z"/>
			<path d="M109.889,159.037l-70-0.024c-3.554,0-6.444,2.913-6.444,6.493c0,3.581,2.891,6.494,6.444,6.494h70
				c3.554,0,6.444-2.913,6.444-6.494C116.333,161.939,113.442,159.037,109.889,159.037z"/>
		</g>
		<path d="M218.833,91h-74C137.94,91,132,96.607,132,103.5v0.5v73.5v0.5c0,6.627,5.706,12,12.333,12h0.5h73.5h0.5
			c6.893,0,12.167-5.607,12.167-12.5v-74C231,96.607,225.726,91,218.833,91z"/>
	</g>
</svg>
)

const GithubIcon = ({fill, style}: {fill: string, style?: Object}) => (
<svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill={fill}/>
</svg>
)

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
            className="flex flex-col gap-12 items-center w-min mx-auto mt-16 mb-7 max-w-7xl
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
          className="page gap-7 max-w-5xl
        md:flex-row md:justify-between md:mx-auto md:gap-14"
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
            <h5 className="tracking-widest">Skill set</h5>
            <h1 className="before:w-6 before:left-8 after:w-28 after:left-16">
              Tech Stack
            </h1>
          </div>
          {/* <ul
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
          </ul> */}
          <div className="flex flex-col gap-y-12">
            <div
              style={{
                background: '#1E5DFF',
                border: '#1351F1 solid 3px',
                borderRadius: '1.125rem'
              }}
              className="flex flex-col items-center gap-7 w-80 p-12"
            >
              <h3 style={{color: 'rgba(0,0,0,.25)'}} className="text-2xl text-jetbrainsmono-xb text-center">Back end</h3>
              <ul className="text-white font-semibold">
                <li className="flex gap-3">
                  <Image src="/src/img/png/Node_Logo.png" alt="Node_Logo.png" fill={true}/>
                  <p>Node js</p>
                </li>
                <li>
                  <p>Express js</p>
                </li>
                <li>
                  <p>GraphQL</p>
                </li>
                <li>
                  <p>REST API</p>
                </li>
                <li>
                  <p>Jest</p>
                </li>
                <li>
                  <p>MongoDB</p>
                </li>
                <li>
                  <p>MySQL</p>
                </li>
              </ul>
            </div>
            <div className="w-80 p-12">
              <h3 className="text-xl text-jetbrainsmono-xb text-center">Front end</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="w-80 p-12">
              <h3 className="text-xl text-jetbrainsmono-xb text-center">Other tools and languages</h3>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
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
              <div className="flex justify-around w-full
              md:w-[50px] md:flex-col md:gap-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://todoapp.tugasonly.repl.co/"
                  className="flex items-center rounded-full bg-[#0CFF8A] aspect-square w-[50px]"
                >
                  <WebIcon fill="#ffffffff" style={{width: '1.5rem', marginInline: 'auto'}} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/yangTauTauAjah/todoApp"
                  className="flex items-center rounded-full bg-[#0CFF8A] aspect-square w-[50px]"
                >
                  <GithubIcon fill="#ffffffff" style={{width: '2.5rem', marginInline: 'auto'}} />
                </a>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-100 item border-l-[#FFB74A]">
              <h3>NFT landing page</h3>
              <img
                src="/src/img/project/NftLandingPage.png"
                alt="preview"
                className="aspect-video ring ring-offset-2 ring-[#8D7AFF] rounded"
              />
              <div className="md:flex md:flex-col md:gap-6 md:w-[46%]">
                <h3
                  className="hidden
                md:!block"
                >
                  NFT landing page
                </h3>
                <div className="px-5 py-3 border-l-[#8D7AFF]">
                  <p
                    className="text-justify
                  md:text-xl"
                  >
                    React-based web application that uses Material UI for its design.
                    The goal of the project is to create an NFT landing page that
                    showcases unique and valuable digital assets created by talented
                    artists.
                  </p>
                </div>
              </div>
              <div className="flex justify-around w-full
              md:w-[50px] md:flex-col md:gap-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://genuine-marshmallow-2e78ee.netlify.app/"
                  className="flex items-center rounded-full bg-[#FFB74A] aspect-square w-[50px]"
                >
                  <WebIcon fill="#ffffffff" style={{width: '1.5rem', marginInline: 'auto'}} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/yangTauTauAjah/nft-page"
                  className="flex items-center rounded-full bg-[#FFB74A] aspect-square w-[50px]"
                >
                  <GithubIcon fill="#ffffffff" style={{width: '2.5rem', marginInline: 'auto'}} />
                </a>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-200 item border-l-[#0C8AFF]">
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
              {/* <a
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
              </a> */}
              <div className="flex justify-around w-full
              md:w-[50px] md:flex-col md:gap-8">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactmovieapp.tugasonly.repl.co/"
                  className="flex items-center rounded-full bg-[#0C8AFF] aspect-square w-[50px]"
                >
                  <WebIcon fill="#ffffffff" style={{width: '1.5rem', marginInline: 'auto'}} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/yangTauTauAjah/reactMovieApp"
                  className="flex items-center rounded-full bg-[#0C8AFF] aspect-square w-[50px]"
                >
                  <GithubIcon fill="#ffffffff" style={{width: '2.5rem', marginInline: 'auto'}} />
                </a>
              </div>
            </li>
            <li className="opacity-0 -translate-x-1/2 transition duration-700 delay-300 item border-l-red-500">
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
              {/* <Link
                prefetch={false}
                href="/projects"
                className="flex items-center rounded-full bg-red-500 aspect-square w-[50px]"
              >
                <img
                  className="w-6 mx-auto"
                  src="/src/img/svg/RightArrow.svg"
                  alt="right-arrow"
                />
              </Link> */}
              <div className="flex justify-around w-full
              md:w-[50px] md:flex-col md:gap-8">
                <Link
                  prefetch={false}
                  href="/projects"
                  className="flex items-center rounded-full bg-red-500 aspect-square w-[50px]"
                >
                  <WebIcon fill="#ffffffff" style={{width: '1.5rem', marginInline: 'auto'}} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  href="https://github.com/yangTauTauAjah/next-js-project/tree/main/pages/projects"
                  className="flex items-center rounded-full bg-red-500 aspect-square w-[50px]"
                >
                  <GithubIcon fill="#ffffffff" style={{width: '2.5rem', marginInline: 'auto'}} />
                </Link>
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
                className="opacity-0 translate-x-1/2 transition duration-700 item border-l-[#E34C41] text-[#E34C41]"
              >
                <img
                  className="aspect-square w-[40px]
                  min-[1200px]:w-24
                  md:w-10"
                  src="/src/img/png/Gmail_Logo.png"
                  alt="Gmail_Logo"
                />
                <p
                  className="font-extrabold text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  GMAIL :
                </p>
                <p
                  className="text-jetbrainsmono-xb tracking-widest text-xs
                  min-[1200px]:text-4xl
                  md:text-2xl"
                >
                  habibanwash2603@gmail.com
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yangTauTauAjah"
                className="opacity-0 translate-x-1/2 transition duration-700 delay-100 item border-l-[#333333] text-[#333333]"
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
                  yangTauTauAjah
                </p>
              </a>
            </li>
            <li className="w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/HabibAnwash"
                className="opacity-0 translate-x-1/2 transition duration-700 delay-200 item border-l-[#24A1DD] text-[#24A1DD]"
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
                className="opacity-0 translate-x-1/2 transition duration-700 delay-300 item border-l-[#5865F2] text-[#5865F2]"
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
