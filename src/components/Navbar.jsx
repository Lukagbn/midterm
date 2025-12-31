"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import layout from "@/app/layout.module.css";

function Navbar() {
  const NAVBAR_LIST = [
    {
      name: "Products",
      url: "/",
      img: "/products.svg",
      className: styles.products,
    },
    {
      name: "Profile",
      url: "/profile",
      img: "/profile.svg",
      className: styles.profile,
    },
    { name: "Cart", url: "/cart", img: "/cart.svg", className: styles.cart },
  ];
  return (
    <header className={`${styles.header} ${layout.container}`}>
      <ul>
        {NAVBAR_LIST.map((item) => (
          <li key={item.name}>
            <Link href={`${item.url}`}>
              {item.name}
              <Image
                className={item.className}
                width={18}
                height={18}
                src={`${item.img}`}
                alt={`${item.name}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
