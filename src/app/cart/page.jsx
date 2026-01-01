"use client";
import React, { useEffect, useState } from "react";
import layout from "@/app/layout.module.css";
import styles from "./page.module.css";
import CartItem from "@/components/CartItem";

function page() {
  const [cartData, setCartData] = useState(null);
  const fetchCartData = async () => {
    const res = await fetch("https://fakestoreapi.com/carts/2");
    const response = await res.json();
    return setCartData(response);
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  if (!cartData) {
    return <div>fetching cart</div>;
  }
  return (
    <main className={`${styles.cartContainer} ${layout.container}`}>
      <div className={styles.cartItemsHeader}>
        <div>PRODUCTS</div>
        <div>QUANTITY</div>
        <div>PRICE</div>
      </div>
      {cartData.products.map((item) => (
        <CartItem
          key={item.productId}
          item={item.productId}
          quantity={item.quantity}
        />
      ))}
    </main>
  );
}

export default page;
