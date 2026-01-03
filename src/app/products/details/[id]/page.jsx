"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import layout from "@/app/layout.module.css";
import Image from "next/image";
import StarRating from "@/components/StarRating/StarRating";

function page() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((resp) => setSingleProduct(resp));
  }, []);
  if (singleProduct === null) {
    return <div>loading product</div>;
  }
  return (
    <section className={`${layout.container} ${styles.cardSection}`}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h1>{singleProduct.title}</h1>
          <Image
            width={200}
            height={200}
            alt={singleProduct.title}
            src={singleProduct.image}
          />
        </div>
        <div className={styles.cardBody}>
          <StarRating
            className={styles.star}
            rating={singleProduct.rating.rate}
            count={singleProduct.rating.count}
          />
          <h3 className={styles.category}>{singleProduct.category}</h3>
          <p>{singleProduct.description}</p>
          <span className={styles.productPrice}>${singleProduct.price}</span>
        </div>
      </div>
    </section>
  );
}

export default page;
