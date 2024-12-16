"use client"
import React from "react";
import Link from "next/link";

function Footer() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const help = [
    { title: "Payment Options", link: "/help/payment-options" },
    { title: "Returns", link: "/help/returns" },
    { title: "Privacy Policies", link: "/help/privacy" },
  ];

  return (
    <section className="pb-16">
      <div className="px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-4 pt-36">
        <div>
        <img src="/Furniro.jpg" alt="Footer logo" className="mb-4" />
          <address className="text-gray-400 mt-8">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </address>
        </div>
        <div>
          <p className="text-gray-400 text-bold mb-[55px]">Links</p>
          <div className="flex flex-col gap-4 font-medium">
            {links.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-bold mb-[55px]">Help</p>
          <div className="flex flex-col gap-4 font-medium">
            {help.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-normal mb-[55px]">Newsletter</p>
          <input type="text" placeholder="Your Email" />
          <button className="font-medium underline underline-offset-[6px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="px-4 md:px-[70px] ">
        <p className="text-customGray mt-8 py-8">2024 Furniro. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Footer;