import Image from "next/image";
import Picture from "../public/ecommerce-product-page/images/image-product-1.jpg";

export default function () {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "rgba(0,0,0,.75)",
        width: "auto",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: "100vw",
          maxHeight: "100vh",
        }}
      >
        <Image
          alt="test"
          src={Picture}
          width={Picture.height}
          height={Picture.height}
          style={{
            width: 'auto',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}
