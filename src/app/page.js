"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import layout from "@/app/layout.module.css";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating/StarRating";

function Page() {
  const [product, setProduct] = useState(null);
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return setProduct(result);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  if (!product) {
    return (
      <h2 className={styles.loadingData}>products loading, please wait...</h2>
    );
  }
  return (
    <section className={`${styles.cardContainer} ${layout.container}`}>
      {product?.map((item) => (
        <Link key={item.id} href={`/products/details/${item.id}`}>
          <div className={styles.card}>
            <Image src={item.image} width={150} height={150} alt={item.title} />
            <div className={styles.cardBody}>
              <p className={styles.location}>Ships to ukraine</p>
              <h3>{item.title}</h3>
              <StarRating rating={item.rating.rate} count={item.rating.count} />
              <h2>${item.price}</h2>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Page;
