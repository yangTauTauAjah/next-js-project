import Image from "next/image";
import { useEffect } from "react";
import Product from '../../../public/ecommerce-product-page/images/image-product-1.jpg'
import Avatar from '../../../public/ecommerce-product-page/images/image-avatar.png'
import Cart from '../../../public/ecommerce-product-page/images/icon-cart.svg'
import Next from '../../../public/ecommerce-product-page/images/icon-next.svg'
import Prev from '../../../public/ecommerce-product-page/images/icon-previous.svg'
import Plus from '../../../public/ecommerce-product-page/images/icon-plus.svg'
import Minus from '../../../public/ecommerce-product-page/images/icon-minus.svg'
import Menu from '../../../public/ecommerce-product-page/images/icon-menu.svg'
import Delete from '../../../public/ecommerce-product-page/images/icon-delete.svg'


const COLORS = {
  orange: "hsl(26, 100%, 55%)",
  paleOrange: "hsl(25, 100%, 94%)",
  veryDarkBlue: "hsl(220, 13%, 13%)",
  veryGrayishBlue: "hsl(219, 9%, 45%)",
  grayishBlue: "hsl(220, 14%, 75%)",
  lightGrayishBlue: "hsl(223, 64%, 98%)",
  black75: "hsl(0, 0%, 75%)",
};

export default function () {
  useEffect(() => document.body.style.setProperty("background", "white"), []);

  return (
    <div style={{ fontFamily: "Kumbh Sans", color: "black" }}>
      <header className="flex justify-between items-center h-16 px-6 drop-shadow-2xl">
        <div className="flex gap-4">
          <button>
            <Image src={Menu} width={16} height={16} alt='menu' />
          </button>
          <h1 className="text-2xl font-bold">sneakers</h1>
          {/* <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul> */}
        </div>
        <div className="flex gap-5">
          <div>
            <Image src={Cart} width={24} height={24} alt='cart' />
          </div>
          <div>
            <Image src={Avatar} width={24} height={24} alt='avatar' />
          </div>
        </div>
      </header>
      <article className="flex flex-col">
        <section>
          <div className="relative">
            <Image src={Product} alt='product' width={100} height={100} className='w-full' />
            <div className="flex justify-between items-center p-4 absolute w-full h-full top-0 ">
              <button className="flex justify-center items-center aspect-square bg-white rounded-full w-10 drop-shadow-2xl">
                <Image src={Prev} width={8} height={8} alt='prev' />
              </button>
              <button className="flex justify-center items-center aspect-square bg-white rounded-full w-10 drop-shadow-2xl">
                <Image src={Next} width={8} height={8} alt='next' />
              </button>
            </div>
          </div>
          <ul>
            <li>
              <Image />
            </li>
            <li>
              <Image />
            </li>
            <li>
              <Image />
            </li>
            <li>
              <Image />
            </li>
          </ul>
        </section>
        <main className="p-6">
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
            These low-profile sneakers are your perfect casual wear com panion.
            Featuring a durable rubber outer sole. They'll withstand everything
            the weather can offer.
          </p>
          <div className="mt-9 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <h1 className="text-2xl font-bold">$125.00</h1>
              <h3
                style={{ background: COLORS.paleOrange, color: COLORS.orange }}
                className="leading-7 w-12 text-center rounded-md font-bold"
              >
                50%
              </h3>
            </div>
            <h4 className="text-gray-500 text-md font-semibold line-through">
              $250.00
            </h4>
          </div>
          <div className="mt-7 flex flex-col gap-4">
            <div
              style={{ background: COLORS.lightGrayishBlue }}
              className="flex justify-between items-center px-6 w-full h-14 font-bold"
            >
              <button>
                <Image src={Minus} width={12} height={12} alt='minus' />
              </button>
              <p className="text-2xl">0</p>
              <button>
                <Image src={Plus} width={12} height={12} alt='plus' />
              </button>
            </div>
            <button
              style={{ background: COLORS.orange }}
              className="flex justify-center items-center gap-4 w-full h-14 rounded-xl text-white font-semibold"
            >
              <Image style={{filter: 'invert(100%) contrast(10)'}} src={Cart} width={16} height={16} alt='avatar' />
              <p>Add to cart</p>
            </button>
          </div>
        </main>
      </article>
    </div>
  );
}
