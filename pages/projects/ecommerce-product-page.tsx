import Image from "next/image";
import { useEffect, useState } from "react";
import Product1 from "../../public/ecommerce-product-page/images/image-product-1.jpg";
import Product1Thumbnail from "../../public/ecommerce-product-page/images/image-product-1-thumbnail.jpg";
import Product2 from "../../public/ecommerce-product-page/images/image-product-2.jpg";
import Product2Thumbnail from "../../public/ecommerce-product-page/images/image-product-2-thumbnail.jpg";
import Product3 from "../../public/ecommerce-product-page/images/image-product-3.jpg";
import Product3Thumbnail from "../../public/ecommerce-product-page/images/image-product-3-thumbnail.jpg";
import Product4 from "../../public/ecommerce-product-page/images/image-product-4.jpg";
import Product4Thumbnail from "../../public/ecommerce-product-page/images/image-product-4-thumbnail.jpg";
import Avatar from "../../public/ecommerce-product-page/images/image-avatar.png";
import Cart from "../../public/ecommerce-product-page/images/icon-cart.svg";
import Next from "../../public/ecommerce-product-page/images/icon-next.svg";
import Prev from "../../public/ecommerce-product-page/images/icon-previous.svg";
import Plus from "../../public/ecommerce-product-page/images/icon-plus.svg";
import Minus from "../../public/ecommerce-product-page/images/icon-minus.svg";
import Menu from "../../public/ecommerce-product-page/images/icon-menu.svg";
import Delete from "../../public/ecommerce-product-page/images/icon-delete.svg";
import Close from "../../public/ecommerce-product-page/images/icon-close.svg";
import Head from "next/head";
import Icon from "../../public/ecommerce-product-page/images/favicon-32x32.png";

const COLORS = {
  orange: "#FF7d1A",
  paleOrange: "#FFEdE0",
  darkGrayishBlue: "#68707D",
  grayishBlue: "#B6BCC8",
  lightGrayishBlue: "#F7F8FD",
  black75: "#000000BF",
};

const PREVIEW = [Product1, Product2, Product3, Product4];

const THUMBNAILS = [
  Product1Thumbnail,
  Product2Thumbnail,
  Product3Thumbnail,
  Product4Thumbnail,
];

function Preview({
  thumbnail,
  setThumbnail,
  setShowPreview,
}: {
  thumbnail: number;
  setThumbnail: (
    arg: (1 | 2 | 3 | 4) | ((arg: 1 | 2 | 3 | 4) => 1 | 2 | 3 | 4)
  ) => any;
  setShowPreview: (arg: boolean) => any;
}) {
  useEffect(() => {
    document.documentElement.style.setProperty("overflow", "hidden");

    return () => {
      document.documentElement.style.setProperty("overflow", "initial");
    };
  }, []);
  return (
    <div
      style={{ background: "rgba(0,0,0,.75)" }}
      className="fixed top-0 left-0 w-full h-100vh flex flex-col justify-center items-center"
    >
      <div className="relative flex flex-col items-end gap-6">
        <button
          onClick={() => {
            setShowPreview(false);
          }}
          className="invert brightness-0
          hover:invert-0 hover:brightness-100 hover:saturate-[30] hover:hue-rotate-[191deg]"
        >
          <Image
            src={Close}
            alt="close"
            width={Close.width}
            height={Close.height}
            className="cursor-pointer rounded-xl w-6 h-auto"
          />
        </button>
        <Image
          src={PREVIEW[thumbnail - 1]}
          alt="product"
          width={PREVIEW[thumbnail - 1].width}
          height={PREVIEW[thumbnail - 1].height}
          className="rounded-xl w-auto h-full max-w-[38.19vw] max-h-[67vh]"
        />
        <button
          /* @ts-ignore */
          onClick={() => setThumbnail((prev) => ((prev + 2) % 4) + 1)}
          className="absolute top-1/2 left-0 -translate-x-1/2 flex justify-center items-center aspect-square bg-white rounded-full w-14 drop-shadow-2xl"
        >
          <Image
            src={Prev}
            width={Prev.width}
            height={Prev.height}
            alt="prev"
            className="cursor-pointer w-3 h-auto"
          />
        </button>
        <button
          /* @ts-ignore */
          onClick={() => setThumbnail((prev) => (prev % 4) + 1)}
          className="absolute top-1/2 right-0 translate-x-1/2 flex justify-center items-center aspect-square bg-white rounded-full w-14 drop-shadow-2xl"
        >
          <Image
            src={Next}
            width={Next.width}
            height={Next.height}
            alt="next"
            className="cursor-pointer w-3 h-auto"
          />
        </button>
      </div>
      <ul className="mt-7 flex gap-8 max-h-[88px] justify-center">
        {THUMBNAILS.map((e, i) => (
          <li
            key={i}
            onClick={() => setThumbnail((i + 1) as 1 | 2 | 3 | 4)}
            style={{
              border: thumbnail === i + 1 ? `${COLORS.orange} 2px solid` : "",
            }}
            className="relative overflow-hidden rounded-lg h-full"
          >
            <div
              className={`cursor-pointer absolute top-0 w-full h-full ${
                thumbnail === i + 1 ? "bg-white" : "hover:bg-white"
              } opacity-50 transition`}
            />
            <Image
              src={e}
              alt={`product${i}thumbnail`}
              width={e.width}
              height={e.height}
              className="w-auto h-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideBar({
  setShowSideBar,
}: {
  setShowSideBar: (args: boolean) => any;
}) {
  useEffect(() => {
    document.documentElement.style.setProperty("overflow", "hidden");
    document.querySelector("#sidebar")?.animate(
      {
        transform: ["translateX(-100%)", "translateX(0%)"],
      },
      { composite: "replace", duration: 200, easing: "ease-out" }
    );

    return () => {
      document.documentElement.style.setProperty("overflow", "initial");
    };
  }, []);

  return (
    <div
      style={{ background: "rgba(0,0,0,.75)" }}
      className="top-0 absolute w-full h-[100vh]"
    >
      <aside id="sidebar" className="p-6 w-64 h-full bg-white">
        <button
          onClick={() => {
            document.querySelector("#sidebar")?.animate(
              {
                transform: ["translateX(0%)", "translateX(-100%)"],
              },
              { duration: 150, easing: "ease-out", fill: "forwards" }
            );
            setTimeout(() => setShowSideBar(false), 200);
          }}
          className="aspect-square w-4"
        >
          <Image
            src={Close}
            width={Close.width}
            height={Close.height}
            alt="close"
            className="cursor-pointer h-full w-auto"
          />
        </button>
        <ul className="mt-14 flex flex-col gap-8 font-bold ">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </aside>
    </div>
  );
}

function Modal({
  setTotal,
  total,
}: {
  setTotal: (total: number) => any;
  total: number;
}) {
  return (
    <div className="drop-shadow-2xl w-[360px] absolute bg-white rounded-xl right-2 top-2">
      <header className="px-6 py-7">
        <h1 className="font-bold">Cart</h1>
      </header>
      <main className="px-6 py-7 border-t-2 min-h-[198px] flex flex-col justify-center">
        {total > 0 ? (
          <>
            <div className="flex justify-between items-center">
              <Image
                className="cursor-pointer rounded h-12 w-12"
                src={Product1Thumbnail}
                alt="product"
                width={100}
                height={100}
              />
              <div className="flex flex-col justify-between text-gray-400 h-full shrink-0">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 × {total}{" "}
                  <span className="text-black font-bold">
                    ${(125.0 * total).toFixed(2)}
                  </span>
                </p>
              </div>
              <Image
                onClick={() => setTotal(0)}
                className="cursor-pointer h-5 w-auto"
                src={Delete}
                alt="delete"
                width={Delete.width}
                height={Delete.height}
              />
            </div>
            <button
              style={{ background: COLORS.orange }}
              className="mt-7 rounded-xl w-full h-14 text-white leading-14 text-center font-semibold"
            >
              Checkout
            </button>
          </>
        ) : (
          <h1 className="font-semibold tracking-wide text-gray-400 text-2xl text-center w-full">
            Your cart is empty.
          </h1>
        )}
      </main>
    </div>
  );
}

export default function () {
  let [showModal, setShowModal] = useState(false);
  let [showSidebar, setShowSidebar] = useState(false);
  let [showPreview, setShowPreview] = useState(false);
  let [isMobile, setIsMobile] = useState(true);
  let [thumbnail, setThumbnail] = useState<1 | 2 | 3 | 4>(1);
  let [quantity, setQuantity] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    /* document.body.style.fontFamily = "Kumbh Sans"
    document.body.style.color = "black"
    document.body.style.setProperty("background", "white"); */

    if (innerWidth >= 768) setIsMobile(false);

    document.body.onresize = () => {
      if (innerWidth >= 768) setIsMobile(false);
      else if (innerWidth < 768) setIsMobile(true);
    };
  }, []);

  return (
    <div
      style={{
        width: "auto",
        fontFamily: "Kumbh Sans",
        color: "black",
        background: "white",
      }}
    >
      <div className="md:mx-auto md:max-w-[1112px]">
        <Head>
          <title>Ecommerce Product Page</title>
          <meta
            name="description"
            content="A challange provided by fron-end mentor"
          />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href={Icon.src} />
        </Head>
        <header
          className="relative flex justify-between items-center h-16 px-6 drop-shadow-2xl
        md:h-[112px] md:border-b-2"
        >
          <div className={`flex ${isMobile ? "gap-4" : "gap-14"}`}>
            {isMobile && (
              <button onClick={() => setShowSidebar(true)}>
                <Image
                  src={Menu}
                  width={16}
                  height={16}
                  alt="menu"
                  className="cursor-pointer"
                />
              </button>
            )}
            <h1 className="text-2xl font-bold md:leading-[112px]">sneakers</h1>
            {!isMobile && (
              <ul className="absolute top-0 left-[196px] flex gap-8 text-gray-400">
                <li className="leading-[110px] hover:border-b-2 hover:border-b-orange-400 cursor-pointer">
                  Collections
                </li>
                <li className="leading-[110px] hover:border-b-2 hover:border-b-orange-400 cursor-pointer">
                  Men
                </li>
                <li className="leading-[110px] hover:border-b-2 hover:border-b-orange-400 cursor-pointer">
                  Women
                </li>
                <li className="leading-[110px] hover:border-b-2 hover:border-b-orange-400 cursor-pointer">
                  About
                </li>
                <li className="leading-[110px] hover:border-b-2 hover:border-b-orange-400 cursor-pointer">
                  Contact
                </li>
              </ul>
            )}
          </div>
          <div className="flex gap-5 items-center md:gap-9">
            <div className="relative" onClick={() => setShowModal(!showModal)}>
              <Image
                src={Cart}
                width={24}
                height={24}
                alt="cart"
                className="cursor-pointer brightness-0"
              />
              {total > 0 && (
                <div className="absolute -top-2 -right-2 bg-[#FF7d1A] rounded-full w-5 text-white text-xs text-center">
                  {total}
                </div>
              )}
            </div>
            <div>
              <Image
                className={`rounded-full cursor-pointer w-auto border-2 border-transparent h-8 hover:border-[#FF7d1A]
              md:h-12`}
                src={Avatar}
                width={Avatar.width}
                height={Avatar.height}
                alt="avatar"
              />
            </div>
          </div>
        </header>
        <article
          className="relative flex flex-col
      md:flex-row md:px-12 md:py-20 md:gap-2 md:justify-between md:items-center"
        >
          <section>
            <div className="relative">
              <Image
                onClick={() => setShowPreview(true)}
                src={PREVIEW[thumbnail - 1]}
                alt="product"
                width={PREVIEW[thumbnail - 1].width}
                height={PREVIEW[thumbnail - 1].height}
                className="cursor-pointer w-full h-auto
              md:rounded-xl md:w-[445px]"
              />
              {isMobile && (
                <div className="flex justify-between items-center p-4 absolute w-full h-full top-0 ">
                  <button
                    /* @ts-ignore */
                    onClick={() => setThumbnail((prev) => ((prev + 2) % 4) + 1)}
                    className="flex justify-center items-center aspect-square bg-white rounded-full w-10 drop-shadow-2xl
                  md:hidden"
                  >
                    <Image
                      src={Prev}
                      width={8}
                      height={8}
                      alt="prev"
                      className="cursor-pointer"
                    />
                  </button>
                  <button
                    /* @ts-ignore */
                    onClick={() => setThumbnail((prev) => (prev % 4) + 1)}
                    className="flex justify-center items-center aspect-square bg-white rounded-full w-10 drop-shadow-2xl
                   md:hidden"
                  >
                    <Image
                      src={Next}
                      width={8}
                      height={8}
                      alt="next"
                      className="cursor-pointer"
                    />
                  </button>
                </div>
              )}
            </div>
            {!isMobile && (
              <ul className="mt-7 flex gap-2 w-full h-[88px] justify-between">
                {THUMBNAILS.map((e, i) => (
                  <li
                    key={i}
                    onClick={() => setThumbnail((i + 1) as 1 | 2 | 3 | 4)}
                    style={{
                      border:
                        thumbnail === i + 1 ? `${COLORS.orange} 2px solid` : "",
                    }}
                    className="overflow-hidden rounded-lg h-full hover:opacity-60 transition-opacity"
                  >
                    <Image
                      style={{
                        opacity: thumbnail === i + 1 ? 0.5 : 1,
                      }}
                      src={e}
                      alt={`product${i}thumbnail`}
                      width={e.width}
                      height={e.height}
                      className="cursor-pointer w-auto h-full"
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
          <main className="p-6 md:w-[445px] md:shrink-0">
            <h3
              style={{ color: COLORS.orange }}
              className="font-semibold text-sm tracking-widest"
            >
              SNEAKER COMPANY
            </h3>
            <h1 className="mt-5 text-3xl font-bold">
              Fall Limited Edition Sneakers
            </h1>
            <p className="mt-6 text-gray-400">
              These low-profile sneakers are your perfect casual wear com
              panion. Featuring a durable rubber outer sole. They'll withstand
              everything the weather can offer.
            </p>
            <div
              className="mt-9 flex justify-between items-center
          md:flex-col md:items-start md:gap-2"
            >
              <div className="flex gap-4 items-center">
                <h1 className="text-2xl font-bold">$125.00</h1>
                <h3
                  style={{
                    background: COLORS.paleOrange,
                    color: COLORS.orange,
                  }}
                  className="leading-7 w-12 text-center rounded-md font-bold"
                >
                  50%
                </h3>
              </div>
              <h4 className="text-gray-500 text-md font-semibold line-through">
                $250.00
              </h4>
            </div>
            <div
              className="mt-7 flex flex-col gap-4
          md:flex-row"
            >
              <div
                style={{ background: COLORS.lightGrayishBlue }}
                className="flex justify-between items-center px-6 w-full h-14 font-bold rounded-xl
              md:w-[35%]"
              >
                <button
                  className="aspect-square opacity-100 transition
                hover:opacity-50"
                  onClick={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                >
                  <Image
                    src={Minus}
                    width={12}
                    height={12}
                    alt="minus"
                    className="cursor-pointer"
                  />
                </button>
                <p>{quantity}</p>
                <button
                  className="aspect-square opacity-100 transition
                hover:opacity-50"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Image src={Plus} width={12} height={12} alt="plus" />
                </button>
              </div>
              <button
                onClick={() => setTotal((prev) => prev + quantity)}
                className="flex justify-center items-center gap-4 w-full h-14 rounded-xl text-white font-semibold bg-[#FF7d1A] transition
              md:w-[61%] hover:bg-[#ffa662]"
              >
                <Image
                  style={{ filter: "invert(100%) contrast(10)" }}
                  src={Cart}
                  width={16}
                  height={16}
                  alt="cart"
                />
                <p>Add to cart</p>
              </button>
            </div>
          </main>
          {showModal && <Modal setTotal={setTotal} total={total} />}
        </article>
        {showPreview && !isMobile && (
          <Preview
            thumbnail={thumbnail}
            setThumbnail={setThumbnail}
            setShowPreview={setShowPreview}
          />
        )}
        {showSidebar && isMobile && <SideBar setShowSideBar={setShowSidebar} />}
      </div>
    </div>
  );
}
