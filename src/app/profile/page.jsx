import React from "react";
import layout from "@/app/layout.module.css";
import styles from "./page.module.css";

const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/users/3");
  const user = await resp.json();
  return (
    <div className={`${styles.profileContainer} ${layout.container}`}>
      {user.email}
    </div>
  );
};

export default page;
