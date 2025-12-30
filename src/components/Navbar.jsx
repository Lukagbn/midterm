"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const NAVBAR_LIST = [
    { name: "Home", url: "/", img: "/home.svg", className: styles.home },
    {
      name: "Profile",
      url: "/profile",
      img: "/profile.svg",
      className: styles.profile,
    },
    { name: "Cart", url: "/cart", img: "/cart.svg", className: styles.cart },
    {
      name: "Products",
      url: "/products",
      img: "/products.svg",
      className: styles.products,
    },
  ];
  return (
    <ul className={styles.navList}>
      {NAVBAR_LIST.map((item) => (
        <li key={item.name}>
          <Link href={`${item.url}`}>
            {item.name}
            <Image
              className={item.className}
              width={20}
              height={20}
              src={`${item.img}`}
              alt="Picture of the author"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
