import React from "react";
import Image from "next/image"
import { GitHub, Web } from '@mui/icons-material'
import Link from "next/link";
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText } from "@mui/material";

interface ProjectInterface {
  title: string;
  thumbnail: string;
  link: string;
  source: string;
  tags: string[];
}

interface IconComponentInterface {
  fill: string;
  style?: Object;
}

interface SocialMediaComponentInterface {
  className: string;
  href?: string;
  color: string;
  thumbnail: string;
  value: string;
  thumbnail_alt: string;
}

interface TechInterface {
  logo: string;
  name: string;
  logo_alt: string;
}

interface TechStackComponentInterface {
  type: string;
  tech: TechInterface[];
  bgColor: string;
  borderColor: string;
}

const Separator = () => (
  <div
    className="py-5
    md:py-10"
  >
    <Image
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.02) 100%)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        objectFit: 'contain'
      }}
      width={700}
      height={40}
      className="mx-auto px-4 py-2 rounded-md w-3/5 max-w-[760px] max-h-20
      md:px-12 md:py-4 md:rounded-xl"
      src="/src/img/svg/Separator.svg"
      alt="separator"
    />
  </div>
)

const Project = ({ title, thumbnail, link, source, tags }: ProjectInterface) => (
  <li className="group duration-300 transition-[box-shadow] shadow-[0_15px_30px_-15px_rgba(0,0,0,.5)] hover:shadow-none" style={{ /* width: '400px', */ padding: '10px', borderRadius: '10px', border: 'rgba(0,0,0,.3) solid 1px' }}>
    <h3 className="font-medium text-center text-[rgba(0,0,0,.8)]">{title}</h3>
    <div className="mt-2 overflow-hidden rounded-md border-[1px] border-[rgba(0,0,0,.3)] ">
      <Image className="w-full aspect-video blur-none duration-300 transition-[filter_transform] group-hover:blur-sm group-hover:scale-125" alt="NftLandingPage" width={1440} height={720} src={thumbnail} style={{ objectFit: 'cover' }} />
      <div className="absolute duration-300 transition-all top-0 left-0 w-full h-full bg-none group-hover:bg-[rgba(0,0,0,.1)]">
        <Link
          className="absolute -translate-y-1/2 top-1/2 -left-[20%] duration-300 transition-all hover:cursor-pointer group-hover:left-[35%] "
          target="_blank"
          rel="noopener noreferrer"
          href={source}
        >
          <GitHub className="scale-150" fontSize="large" />
        </Link>
        <Link
          className="absolute -translate-y-1/2 top-1/2 -right-[20%] duration-300 transition-all hover:cursor-pointer group-hover:right-[35%]"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          <Web className="scale-150" fontSize="large" />
        </Link>

      </div>
    </div>
    <div className="flex text-jetbrainsmono gap-5 flex-wrap mt-3">
      {
        tags.map((e, i) => (
          <p
            key={i}
            className="cursor-default tracking-wider rounded-full text-base font-light px-4 text-white"
            style={{
              background: '#1E5DFF',
              lineHeight: '2rem'
            }}
          >
            {e}
          </p>
        ))
      }
    </div>
  </li>
)

const SocialMedia = ({ href, className, color, thumbnail, value, thumbnail_alt }: SocialMediaComponentInterface) => (
  <li className="w-full">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      style={{
        alignItems: 'center',
        borderLeft: `${color} solid 5px`,
        color
      }}
      className={className}
    >
      <Image
        className="aspect-square w-[40px]"
        width={500}
        height={500}
        src={thumbnail}
        alt={thumbnail_alt}
      />
      <p
        className="text-jetbrainsmono-xb tracking-widest"
      >
        {value}
      </p>
    </a>
  </li>
)

const TechStack = ({ type, tech, bgColor: background, borderColor }: TechStackComponentInterface) => (
  <div
    style={{
      cursor: 'default',
      background,
      border: `${borderColor} solid 3px`,
      borderRadius: '1.125rem',
      boxShadow: '0 4px 10px rgba(0,0,0,.25)'
    }}
    className="flex flex-col items-center gap-7 w-80 p-12 shadow shadow-gray-500 transition-transform hover:scale-105"
  >
    <h3 style={{ color: 'rgba(0,0,0,.25)' }} className="text-2xl text-jetbrainsmono-xb text-center">{type}</h3>
    <ul className="flex flex-col gap-7 text-white font-semibold">
      {tech.map(({ logo, name, logo_alt }, i) => (
        <li key={i} className="flex gap-3 items-center">
          <Image src={logo} width={1000} height={1000} className="w-10 h-10 object-contain" alt={logo_alt} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  </div>
)

const WebIcon = ({ fill, style }: IconComponentInterface) => (
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

const GithubIcon = ({ fill, style }: IconComponentInterface) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" fill={fill} />
  </svg>
)

const Form = ({ setIsLoading, setIsError, setOpenDialogBox: setOpen }: { setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, setIsError: React.Dispatch<React.SetStateAction<boolean>>, setOpenDialogBox: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        // @ts-ignore
        let from_name = document.querySelector('#name-input').value
        // @ts-ignore
        let email = document.querySelector('#email-input').value
        // @ts-ignore
        let message = document.querySelector('#message-input').value
        const to_name = 'Habib Anwash'

        fetch(/* 'https://youtube.com', {mode: 'no-cors'} */'https://api.emailjs.com/api/v1.0/email/send', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            service_id: 'gmail',
            template_id: 'template_92tqtrs',
            user_id: 'f_kF_Ju7KPgjG77Wq',
            template_params: { from_name, to_name, email, message }
          })
        })
        .then(e => {
          setIsError(!e.ok)
          setOpen(true)
          setIsLoading(false)
          document.documentElement.style.overflow = 'hidden'
        })
        .catch(() => {
          setIsError(true)
          setOpen(true)
          setIsLoading(false)
          document.documentElement.style.overflow = 'hidden'
        })

        setIsLoading(true)

      }}
      className="shrink w-full flex flex-col items-center gap-8 min-[1200px]:items-start min-[1200px]:max-w-[650px]"
    >
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
        Send A Message
      </h3>
      <div className="w-full flex flex-col gap-7 md:flex-row">
        <input
          id="name-input"
          required
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
          id="email-input"
          required
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
          type="email"
        />
      </div>
      <textarea
        id="message-input"
        required
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
      <button type="submit" className="text-xl w-24 h-14 bg-[#FF122E]">Send</button>
    </form>
  )
}

const DialogBox = ({ header, children, open, setOpen }: { header: any, children: any, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <Dialog
    open={open}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{children}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => {
          setOpen(false);
          document.documentElement.style.overflow = 'auto'
        }}
        autoFocus
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export { Separator, TechStack, Project, Form, SocialMedia, WebIcon, GithubIcon, DialogBox }