import React from "react";
import { IoArrowForward } from "react-icons/io5/index";

const Button = ({
  label,
  link,
  produto,
  style,
  phoneNumber,
  rel,
  tag,
}: {
  label: string;
  link: string;
  produto?: string;
  phoneNumber?: string;
  style?: string;
  rel?: string;
  tag?: string;
}) => {
  const generateWhatsAppLink = (phoneNumber: string, produto: string) => {
    const encodedProduto = encodeURIComponent(produto);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Gostaria+de+um+or%C3%A7amento+de+${encodedProduto}`;
    return whatsappUrl;
  };

  const href =
    phoneNumber && produto ? generateWhatsAppLink(phoneNumber, produto) : link;

  return (
    <div className="flex-col flex mt-12 md:block ">
      <a
        href={href}
        target={tag}
        rel={`noopener noreferrer ${
          rel ? (rel === "follow" ? "" : rel) : "nofollow"
        }`}
        className={`btn mb-4  gap-2 items-center justify-center flex md:inline-flex hover:text-white hover:no-underline ${
          style === "outline" ? "btn-outline-primary" : "btn-primary"
        }`}
      >
        {label}
        <IoArrowForward size={18} />
      </a>
    </div>
  );
};

export default Button;
