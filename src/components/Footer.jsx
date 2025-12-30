import React from "react";
import styles from "./Footer.module.css";
import layout from "@/app/layout.module.css";

function Footer() {
  const FOOTER_LIST = [
    {
      name: "Condition of Use",
      url: "/",
      className: styles.condition,
    },
    {
      name: "Privacy Notice",
      url: "/",
      className: styles.privacy,
    },
    {
      name: "Interest-Based Ads",
      url: "/",
      className: styles.interest,
    },
    {
      name: `©Date`,
      url: "/",
      className: styles.date,
    },
  ];
  return (
    <footer className={`${styles.footer} ${layout.container}`}>
      <ul>
        {FOOTER_LIST.map((item) => (
          <li key={item.name} className={item.className}>
            {item.name}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
