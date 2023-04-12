import Head from "next/head";
import Script from "next/script";
import Image from "next/image"
import { Separator, TechStack, Project, SocialMedia, WebIcon, GithubIcon } from '@/components/Main'
import {GitHub, Reorder} from '@mui/icons-material'
import Link from "next/link";

const STYLE = `
@font-face {
  font-family: 'JetBrainsMono-Bold';
  src: url('/src/font/JetBrainsMono/JetBrainsMono-Bold.ttf');
}

@font-face {
  font-family: 'JetBrainsMono-ExtraBold';
  src: url('/src/font/JetBrainsMono/JetBrainsMono-ExtraBold.ttf');
}

@font-face {
  font-family: 'JetBrainsMono';
  src: url('/src/font/JetBrainsMono/JetBrainsMono-Medium.ttf');
}

* {
  position: relative;
}

html {
  min-width: 430px;
  scroll-behavior: smooth;
}

body {
  min-width: 430px;
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
  letter-spacing: 0.1rem;
}
`;

const Projects = [
  {
    thumbnail: '/src/img/project/NftLandingPage.png',
    link: 'https://genuine-marshmallow-2e78ee.netlify.app/',
    source: 'https://github.com/yangTauTauAjah/nft-page',
    tags: ['React', 'Material UI', 'NFT', 'Front end']
  },
  {
    thumbnail: '/src/img/project/EcommerceProductPage.jpg',
    link: 'https://next-js-project-ruddy.vercel.app/projects/ecommerce-product-page',
    source: 'https://github.com/yangTauTauAjah/next-js-project/blob/main/pages/projects/ecommerce-product-page.tsx',
    tags: ['React', 'Responsive', 'Ecommerce', 'Tailwind']
  },
  {
    thumbnail: '/src/img/project/MultiStepForm.jpg',
    link: 'https://next-js-project-ruddy.vercel.app/projects/multi-step-form',
    source: 'https://github.com/yangTauTauAjah/next-js-project/blob/main/pages/projects/multi-step-form.tsx',
    tags: ['React', 'Responsive', 'Tailwind', 'Form']
  },
  {
    thumbnail: '/src/img/project/RestCountryAPI.jpg',
    link: 'https://next-js-project-ruddy.vercel.app/projects/rest-country-api?page=1',
    source: 'https://github.com/yangTauTauAjah/next-js-project/tree/main/pages/projects/rest-country-api',
    tags: ['React', 'Responsive', 'Rest API', 'Tailwind', 'Dark', 'Light']
  },
  {
    thumbnail: '/src/img/project/ReactMovieApp.png',
    link: 'https://reactmovieapp.tugasonly.repl.co/',
    source: 'https://github.com/yangTauTauAjah/reactMovieApp',
    tags: ['React', 'Fullstack', 'MERN', 'Responsive', 'Ant Design']
  },
  {
    thumbnail: '/src/img/project/TodoApp.jpg',
    link: 'https://todoapp.tugasonly.repl.co/',
    source: 'https://github.com/yangTauTauAjah/todoApp',
    tags: ['Fullstack', 'Native', 'MongoDB', 'Express', 'Responsive']
  }
]

const Accounts = [
  {
    color: '#E34C41',
    thumbnail: "/src/img/png/Gmail_Logo.png",
    thumbnail_alt: "Gmail_Logo",
    value: 'habibanwash2603@gmail.com'
  },
  {
    color: '#333333',
    href: 'https://github.com/yangTauTauAjah',
    thumbnail: "/src/img/png/GitHub_Logo.png",
    thumbnail_alt: "GitHub_Logo",
    value: 'yangTauTauAjah'
  },
  {
    color: '#24A1DD',
    href: 'https://t.me/HabibAnwash',
    thumbnail: "/src/img/png/Telegram_Logo.png",
    thumbnail_alt: "Telegram_Logo",
    value: 'Habib Anwash'
  },
  {
    color: '#5865F2',
    href: 'https://discordapp.com/users/372738941155147777',
    thumbnail: "/src/img/png/Discord_Logo.png",
    thumbnail_alt: "Discord_Logo.png",
    value: 'HabibAnwash1447@7305'
  },
  {
    color: '#3FE35C',
    href: 'https://wa.me/6281217675797',
    thumbnail: "/src/img/png/Whatsapp_Logo.png",
    thumbnail_alt: "Whatsapp_Logo",
    value: '+62 812-1767-5797'
  }
]

const Technologies = [
  {
    type: 'Back End',
    tech: [
      {
        logo: '/src/img/png/Node_Logo.png',
        logo_alt: 'Node_Logo',
        name: 'Node JS'
      },
      {
        logo: '/src/img/logo/Express_Logo.png',
        logo_alt: 'Express_Logo',
        name: 'Express js'
      },
      {
        logo: '/src/img/png/Graphql_Logo.png',
        logo_alt: 'Graphql_Logo',
        name: 'GraphQL'
      },
      {
        logo: '/src/img/png/Rest_Logo.png',
        logo_alt: 'Rest_Logo',
        name: 'REST API'
      },
      {
        logo: '/src/img/png/Jest_Logo.png',
        logo_alt: 'Jest_Logo',
        name: 'Jest'
      },
      {
        logo: '/src/img/png/MongoDB_Logo.png',
        logo_alt: 'MongoDB_Logo',
        name: 'MongoDB'
      },
      {
        logo: '/src/img/logo/Mysql_Logo.png',
        logo_alt: 'MySQL_Logo',
        name: 'MySQL'
      }
    ],
    bgColor: '#1E5DFF',
    borderColor: '#1351F1'
  },
  {
    type: 'Front end',
    tech: [
      {
        logo: '/src/img/png/React_Logo.png',
        logo_alt: 'React_Logo',
        name: 'React'
      },
      {
        logo: '/src/img/png/Redux_Logo.png',
        logo_alt: 'Redux',
        name: 'Redux'
      },
      {
        logo: '/src/img/png/Vite_Logo.png',
        logo_alt: 'Vite_Logo',
        name: 'Vite'
      },
      {
        logo: '/src/img/png/Mui_Logo.png',
        logo_alt: 'Mui_Logo',
        name: 'Material UI'
      },
      {
        logo: '/src/img/png/Tailwind_Logo.png',
        logo_alt: 'Tailwind_Logo',
        name: 'Tailwind CSS'
      },
      {
        logo: '/src/img/png/Antdesign_Logo.png',
        logo_alt: 'Antdesign_Logo',
        name: 'Ant Design'
      },
      {
        logo: '/src/img/png/Jquery_Logo.png',
        logo_alt: 'Jquery_Logo',
        name: 'JQuery'
      }
    ],
    bgColor: '#363F4D',
    borderColor: '#33363C'
  },
  {
    type: 'Other tools and languages',
    tech: [
      {
        logo: '/src/img/png/Next_Logo.png',
        logo_alt: 'Next_Logo',
        name: 'Next JS'
      },
      {
        logo: '/src/img/png/Vscode_Logo.png',
        logo_alt: 'Vscode_Logo',
        name: 'VS Code'
      },
      {
        logo: '/src/img/logo/Js_Logo.jpg',
        logo_alt: 'Js_Logo',
        name: 'Javascript'
      },
      {
        logo: '/src/img/png/Typescript_Logo.png',
        logo_alt: 'Typescript_Logo',
        name: 'Typescript'
      },
      {
        logo: '/src/img/png/Java_Logo.png',
        logo_alt: 'Java_Logo',
        name: 'Java'
      },
      {
        logo: '/src/img/png/Git_Logo.png',
        logo_alt: 'Git_Logo',
        name: 'Git VCS'
      },
      {
        logo: '/src/img/png/Figma_Logo.png',
        logo_alt: 'Figma_Logo',
        name: 'Figma'
      }
    ],
    bgColor: '#27FF7E',
    borderColor: '#17D061'
  }
]

export default function Main() {
  /* useEffect(() => {
    document.body.style.fontFamily = "'Roboto', sans-serif";
  }, []); */

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <Head>
        <title>Personal landing page</title>
        <meta name="author" content="Habib Anwash" />
        <meta name="description" content="A simple personal portfolio webpage"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Script src="/src/scripts/headingAnimation.js" />
      <Script src="/src/scripts/render.js" />
      <Script src="/src/scripts/navigation.js" />
      <style jsx>{STYLE}</style>
      <header id="home" className="overflow-x-hidden md:flex flex-col" style={{ minHeight: "calc(100vh - 128px)" }}>
        <div className="static flex justify-between items-center h-20 px-6 text-white text-2xl font-extrabold tracking-wider md:h-28 md:px-36">
          <div className="flex justify-between items-center gap-[20px]">
            <Image
              style={{ height: "30px" }}
              src="/src/img/png/Logo.png"
              alt="logo"
              width={50}
              height={30}
            />
            <h1>PORTFOLIO</h1>
          </div>
          <button id="sidebar-toggle" className="absolute right-4 rounded-lg border-2 border-white border-opacity-20 w-[45px] h-[35px] md:right-36 min-[1200px]:hidden">
            <Reorder
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              fontSize="medium"
            />
          </button>
          <nav id="navbar" className="hidden relative flex-row transition z-10 p-0 items-center gap-11 text-[rgba(255,255,255,0.5)] font-light min-[1200px]:flex">
            <a href="#home" className="selected">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Portfolio</a>
            <a href="#socials">Contact</a>
          </nav>
        </div>
        <div className="md:flex items-center flex-grow">
          <main className="flex flex-col gap-12 items-center w-min mx-auto mt-16 mb-7 max-w-7xl md:flex-row md:gap-10 md:my-0 md:w-max">
            <div id="main-heading" className="flex flex-col gap-5 w-80 md:w-[50vw] md:gap-0">
              <div>
                <h5 id="name" className="opacity-0 -translate-x-1/4 transition duration-700 text-white text-sm font-semibold tracking-[0.25em] md:leading-[1.5]">
                  Habib Anwash
                </h5>
                <h1 id="heading" className="text-[#0CFF8A] text-4xl text-jetbrainsmono-xb md:text-5xl  md:leading-[1.5]">
                  <span id="animate-heading">Front End </span>developer
                </h1>
              </div>
              <p id="description" className="opacity-0 translate-x-1/4 transition duration-700 delay-200 text-[#6A6A6A] text-xs indent-9 md:text-[16px] md:leading-[1.5]">
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
                  Download CV
                </button>
              </div>
            </div>
            <div style={{ overflow: "hidden" }}>
              <Image
                className="right-[-30px] w-96 md:static md:w-[33vw]"
                src="/src/img/png/Vector.png"
                width={500}
                height={500}
                alt="decoration"
              />
            </div>
          </main>
        </div>
      </header>
      <main className="bg-white overflow-x-hidden">
        {/* <!-- Separator --> */}
        <Separator />
        {/* <!-- Separator --> */}

        <section id="about" className="page gap-7 max-w-5xl md:flex-row md:justify-between md:mx-auto md:gap-14">
          <div className="title md:hidden">
            <h1 className="before:left-3 before:w-16">About Me</h1>
          </div>
          <div className="aspect-square w-28 rounded-full overflow-hidden ring ring-[#8D7AFF] ring-offset-4 md:w-64">
            <Image src="/src/img/me.jpg" width={300} height={300} className="object-contain" alt="Profile_Photo" />
          </div>
          <div className="flex flex-col gap-8 w-[65%] items-center md:w-[680px] md:items-start">
            <div className="title hidden md:flex">
              <h1 className="before:left-3 before:w-16 md:before:w-28">About Me</h1>
            </div>
            <p className="text-justify leading-5 md:text-xl">
              Hi, my name is Habib Anwash. As a self-learner, I got all of these
              knowledge by learning on YouTube, some online bootcamp like
              freeCodeCamp, and experimenting myself by building projects. But
              with all those, I am still excited to continue learning and
              growing as a developer and I am eager to take on new challenges. I
              have been working on my own projects and honing my skills with it.
            </p>
            <button
              onClick={() => document.querySelector("#socials")?.scrollIntoView()}
              className="w-36 h-10 bg-[#FF122E] md:w-56 md:h-14 md:text-2xl"
            >
              Contact me
            </button>
          </div>
        </section>

        {/* <!-- Separator --> */}
        <Separator />
        {/* <!-- Separator --> */}

        <section id="skills" className="page gap-7 md:gap-24 md:mx-[3vw]">
          <div className="title">
            <h5 className="tracking-widest">Skill set</h5>
            <h1 className="before:w-6 before:left-8 after:w-28 after:left-16">Tech Stack</h1>
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-y-12 md:flex-row md:gap-x-28">
            {Technologies.map(({type, tech, bgColor, borderColor}, i) => (
              <TechStack
                key={i}
                type={type}
                tech={tech}
                bgColor={bgColor}
                borderColor={borderColor}
              />
            ))}
          </div>
        </section>

        {/* <!-- Separator --> */}
        <Separator />
        {/* <!-- Separator --> */}

        <section id="projects" className="page gap-7 md:gap-24">
          <div className="title">
            <h5 className="tracking-widest">My projects</h5>
            <h1 className="before:w-full">Portfolio</h1>
          </div>
          <ul className="text-jetbrainsmono flex justify-center flex-wrap gap-x-8 gap-y-14">
            {
              Projects.map(({ thumbnail, link, source, tags }, i) => (
                <Project
                  key={i}
                  thumbnail={thumbnail}
                  link={link}
                  source={source}
                  tags={tags}
                />
              ))
            }
          </ul>
        </section>

        {/* <!-- Separator --> */}
        <Separator />
        {/* <!-- Separator --> */}

        <section id="socials" className="page gap-8 mx-[10%] min-[1200px]:gap-28">
          <div className="title">
            <h3 className="inline-block text-xs font-medium text-[#8D7AFF] text-center tracking-widest min-[1200px]:hidden">Contact me</h3>
            <h1>My Social Media</h1>
          </div>
          <div className="flex flex-col gap-8 w-full min-[1200px]:flex-row md:gap-28">
            <ul className="flex flex-col items-center gap-7 w-full min-w-[400px] min-[1200px]:w-96">
              <h3
                className="hidden tracking-widest text-jetbrainsmono-xb min-[1200px]:inline-block"
                style={{
                  width: '100%',
                  lineHeight: 1,
                  color: '#8D7AFF',
                  fontWeight: 500,
                  fontSize: '32px',
                }}
              >
                Contact Me
              </h3>
              {Accounts.map(({ href, color, thumbnail, value, thumbnail_alt }, i) => {
                let delay = `${i*100}`
                if (i === 4) delay = '[400ms]'
                return (
                  <SocialMedia
                    className={`opacity-0 translate-x-1/2 transition duration-700 item delay-${delay}`}
                    href={href}
                    key={i}
                    color={color}
                    thumbnail={thumbnail}
                    thumbnail_alt={thumbnail_alt}
                    value={value}
                  />
                )
              })}
            </ul>
            <form className="w-full flex flex-col items-center gap-8 min-[1200px]:items-start">
              <h3
                className="hidden tracking-widest text-jetbrainsmono-xb min-[1200px]:inline-block"
                style={{
                  width: '100%',
                  lineHeight: 1,
                  color: '#8D7AFF',
                  fontWeight: 500,
                  fontSize: '32px',
                }}
              >
                Send Me A Message
              </h3>
              <div className="w-full flex flex-col gap-7 md:flex-row">
                <input
                  placeholder="Name"
                  style={{
                    outline: 'none',
                    padding: '20px',
                    height: '60px',
                    background: "rgba(0,0,0,.02)",
                    border: '1px solid rgba(0,0,0,.15)',
                    borderRadius: '5px',
                    width: '100%'
                  }}
                  type="text"
                />
                <input
                  placeholder="Email"
                  style={{
                    outline: 'none',
                    padding: '20px',
                    height: '60px',
                    background: "rgba(0,0,0,.02)",
                    border: '1px solid rgba(0,0,0,.15)',
                    borderRadius: '5px',
                    width: '100%'
                  }}
                  type="text"
                />
              </div>
              <textarea
                placeholder="Write your message here"
                style={{
                  resize: 'none',
                  outline: 'none',
                  padding: '20px',
                  width: '100%',
                  height: '250px',
                  background: "rgba(0,0,0,.02)",
                  border: '1px solid rgba(0,0,0,.15)',
                  borderRadius: '5px',
                }}
                rows={10}
              />
              <button className="text-xl w-24 h-14 bg-[#FF122E]">Send</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#242A33] flex flex-col items-center py-4 gap-2 md:h-40 md:py-11 md:gap-3">
        <p className="text-white text-xs tracking-widest md:text-2xl">
          Copyright @ Jan 2023 -{" "} <span className="text-yellow-200 font-black ">Habib Anwash</span>
        </p>
        <p className="text-jetbrainsmono-xb tracking-widest text-white w-52 text-center text-xs md:text-xl md:w-full">Build with Next, Typescript, and Tailwind</p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yangTauTauAjah/next-js-project"
          className="text-white text-xs underline flex items-center gap-2"
        >
          <GitHub fontSize="small"/>
          <span>Refer to source code</span>
        </Link>
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
        />
        <Image
          className="origin-top-left -rotate-12 scale-[11] translate-x-1/2 translate-y-1/2 absolute z-[-1] top-[150px] right-[400px] md:top-0 md:right-[800px] md:scale-[17]"
          src="/src/img/svg/Decoration.svg"
          alt="Decoration"
          width={50}
          height={50}
        />
      </div>
      <div id="backdrop" className="hidden absolute overflow-hidden top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.3)]">
        <nav
          tabIndex={1}
          id="sidebar"
          className="absolute transition translate-x-full z-10 right-0 top-0 w-80 border-l-4 border-l-[rgba(47,40,67,.5)] bg-[rgba(12,5,30,.6)] backdrop-blur-lg h-[500vh] backdrop-brightness-50"
        >
          <ul className="flex flex-col items-stretch p-9 gap-11 text-[rgba(255,255,255,0.5)] font-light">
            <li><a href="#home" className="selected">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#socials">Contact</a></li>
          </ul>
          <div className="none delay-100"/>
          <div className="none delay-200"/>
          <div className="none delay-300"/>
          <div className="none delay-[400ms]"/>
        </nav>
      </div>
    </div>
  );
}
