"use client";
import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";
import Link from "next/link";

function CartItem({ item, quantity }) {
  const [cartItem, setCartItem] = useState(null);
  const [number, setnumber] = useState(quantity);
  const fetchCartItem = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${item}`);
    const resp = await res.json();
    return setCartItem(resp);
  };
  const handleClick = (event) => {
    if (event === "-") {
      setnumber(number - 1);
    } else {
      setnumber(number + 1);
    }
  };
  useEffect(() => {
    fetchCartItem();
  }, []);
  if (!cartItem) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartHeadWrapper}>
        <Image
          src={cartItem.image}
          width={80}
          height={90}
          alt={cartItem.title}
        />
        <div className={styles.cartImgTextWrapper}>
          <p>{cartItem.title}</p>
          <h5>{cartItem.category}</h5>
        </div>
      </div>
      <div className={styles.cartBodyWrapper}>
        <div className={styles.cartQuantityContainer}>
          <button
            disabled={number === 1}
            className={styles.plus}
            onClick={(event) => {
              handleClick(event.target.innerText);
            }}
          >
            -
          </button>
          <p>{number}</p>
          <button
            disabled={number === 10}
            className={styles.substract}
            onClick={handleClick}
          >
            +
          </button>
        </div>
        <div>
          <span>${Math.floor(cartItem.price * number)}</span>
        </div>
        <div>
          <button>🗑️</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
