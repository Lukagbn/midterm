import React from "react";
import styles from "./Footer.module.css";
import layout from "@/app/layout.module.css";

function Footer() {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  const FOOTER_LIST = [
    {
      name: "Condition of Use",
      className: styles.condition,
    },
    {
      name: "Privacy Notice",
      className: styles.privacy,
    },
    {
      name: "Interest-Based Ads",
      className: styles.interest,
    },
    {
      name: `©2025 - ${currentYear} All Rights Reserved`,
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
