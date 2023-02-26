import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NextLogo from "../../public/next.svg";
import Head from "next/head";

export function getServerSideProps() {
  return {props: {wow: 'test'}}
}

export default function () {
  let [HOST, setHost] = useState("");

  useEffect(() => {
    setHost(location.host);
  }, []);

  return (
    <>
      <Head>
        <title>NEXTjs PORTFOLIO</title>
        <meta name="description" content="A next-js-powered web app portfolio" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href='/favicon.png' />
      </Head>
      <style jsx>{`
        body {
          background: linear-gradient( to bottom, transparent, rgb(var(--background-end-rgb)) ) rgb(var(--background-start-rgb));
          font-family: 'Poppins', sans-serif;
          color: rgb(var(--foreground-rgb));
        }
      `}</style>
      <header className="h-24 bg-black w-auto flex justify-between items-center px-7 drop-shadow-2xl">
        <div className="flex gap-7 items-center">
          <Image
            src={NextLogo}
            alt="next_logo"
            width={NextLogo.width}
            height={NextLogo.height}
            className="h-7 w-auto invert"
          />
          <h1 className="font-medium text-white text-4xl">PORTFOLIO</h1>
        </div>
        <nav className="flex gap-7 text-xl text-gray-700 font-light">
          {/* <Link className="hover:text-white transition" href="#">
            test1
          </Link>
          <Link className="hover:text-white transition" href="#">
            test2
          </Link>
          <Link className="hover:text-white transition" href="#">
            test3
          </Link>
          <Link className="hover:text-white transition" href="#">
            test4
          </Link> */}
        </nav>
      </header>
      <table className="mx-auto mt-14 w-[78.5vw] bg-[#8B8FF8] rounded-md overflow-hidden drop-shadow-2xl text-lg">
        <thead className="text-white">
          <tr className="h-12">
            <th className="w-[8%] text-center">
              <p>No.</p>
            </th>
            <th className="w-[42%] text-start pl-5">
              <p>Project Name</p>
            </th>
            <th className="w-[50%] text-start pl-5">
              <p>URL</p>
            </th>
          </tr>
        </thead>
        <tbody className="font-light text-gray-500 text-sm">
          <tr className="h-12 bg-white">
            <td className="text-center">
              <p>1</p>
            </td>
            <td className="pl-5">
              <p>Multi Step Form</p>
            </td>
            <td className="pl-5">
              <Link href="/projects/multi-step-form">
                {HOST + "/projects/multi-step-form"}
              </Link>
            </td>
          </tr>
          <tr className="h-12 bg-[rgba(255,255,255,0.8)]">
            <td className="text-center">
              <p>2</p>
            </td>
            <td className="pl-5">
              <p>Rest Country API</p>
            </td>
            <td className="pl-5">
              <Link href="/projects/rest-country-api">
                {HOST + "/projects/rest-country-api"}
              </Link>
            </td>
          </tr>
          <tr className="h-12 bg-white">
            <td className="text-center">
              <p>3</p>
            </td>
            <td className="pl-5">
              <p>Ecommerce Product Page</p>
            </td>
            <td className="pl-5">
              <Link href="/projects/ecommerce-product-page">
                {HOST + "/projects/ecommerce-product-page"}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
