import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image"
import { Separator, TechStack, Project, SocialMedia, Form, DialogBox } from '@/components/Main'
import { GitHub, Reorder, Download } from '@mui/icons-material'
import Link from "next/link";
import { Backdrop, CircularProgress } from "@mui/material";
import { Accounts, Projects, Technologies } from '@/components/Main/Collection'

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
  padding-right: 0;
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

export default function Main() {
  /* useEffect(() => {
    document.body.style.fontFamily = "'Roboto', sans-serif";
  }, []); */

  const [openDialogBox, setOpenDialogBox] = React.useState(false);
  const [isError, setIsError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
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
                Hi, my name is Habib Anwash. I&apos;m a web developer and
                I love learning new things. If you are looking for a web
                developer who can create a website that stands out and provides
                an exceptional user experience, I am here to help.
              </p>
              <div
                className="flex flex-col gap-5
              md:mt-10 md:flex-row md:gap-6"
              >
                <button
                  onClick={() =>
                    document.querySelector("#projects")?.scrollIntoView()
                  }
                  className="w-32 h-10 bg-[#FF122E]"
                >
                  Project
                </button>
                <button onClick={() => window.open('https://wellfound.com/link/16090619/096e000cd61ff13399401b2c3614ce3c/resume_url', '_blank')} className="w-44 h-10 bg-transparent outline outline-[#6A6A6A] outline-1">
                  <Download className="mr-2" />
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

        <section id="about" className="page gap-7 md:flex-row md:mx-20 md:justify-center md:gap-14">
          <div className="title md:hidden"><h1 className="before:left-3 before:w-16">About Me</h1></div>
          <div className="aspect-square w-28 rounded-full overflow-hidden ring ring-[#8D7AFF] ring-offset-4 md:w-64">
            <Image src="/src/img/me.jpg" width={300} height={300} className="object-contain" alt="Profile_Photo" />
          </div>
          <div className="flex flex-col gap-8 w-[65%] items-center md:w-[680px] md:items-start">
            <div className="title hidden md:flex">
              <h1 className="before:left-3 before:w-16 md:before:w-28">About Me</h1>
            </div>
            <p className="text-justify leading-5 md:text-xl max-w-[680px]">
              Hi, my name is Habib Anwash. I&apos;m a skilled web
              developer with expertise in front-end development, as well as back-end
              programming and database management. I have a good understanding in
              React, Node JS and also have been practicing myself with it by building
              projects. With a commitment to delivering exceptional results and a
              collaborative approach, I am dedicated to creating unique and user-friendly
              websites that meet the specific needs of my clients.
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
            {Technologies.map(({ type, tech, bgColor, borderColor }, i) => (
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
          <ul style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))'
          }} className="mx-[10%] flex justify-center flex-wrap gap-x-14 gap-y-20">
            {
              Projects.map(({ title, thumbnail, link, source, tags }, i) => (
                <Project
                  key={i}
                  title={title}
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
            <h1>Get In Touch</h1>
          </div>
          <div className="flex flex-col gap-8 w-full md:gap-28 min-[1200px]:flex-row min-[1200px]:justify-between">
            <ul className="shrink-0 flex flex-col items-center gap-7 w-full min-[1200px]:w-96">
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
                Contact
              </h3>
              {Accounts.map(({ href, color, thumbnail, value, thumbnail_alt }, i) => {
                let delay = `${i * 100}`
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
            <Form setIsLoading={setIsLoading} setIsError={setIsError} setOpenDialogBox={setOpenDialogBox} />
          </div>
        </section>
      </main>
      <footer className="bg-[#242A33] flex flex-col items-center py-4 gap-2 md:h-40 md:py-11 md:gap-3">
        <p className="text-white text-xs tracking-widest md:text-2xl">
          Copyright @ Jan 2023 -{" "} <span className="text-yellow-200 font-black ">Habib Anwash</span>
        </p>
        <p className="text-jetbrainsmono-xb tracking-widest text-white w-52 text-center text-xs md:text-xl md:w-full">Build with Next, Typescript, and Tailwind</p>
        <Link target="_blank" rel="noopener noreferrer" href="https://github.com/yangTauTauAjah/next-js-project" className="text-white text-xs underline flex items-center gap-2">
          <GitHub fontSize="small" />
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
        </nav>
      </div>
      <div className="none delay-100" />
      <div className="none delay-200" />
      <div className="none delay-300" />
      <div className="none delay-[400ms]" />
      <DialogBox header={isError ? "Error" : "Success"} open={openDialogBox} setOpen={setOpenDialogBox}>
        {
          isError
            ? "Something went wrong while sending the message, please contact manually"
            : "Message has been sent successfully"
        }
      </DialogBox>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
