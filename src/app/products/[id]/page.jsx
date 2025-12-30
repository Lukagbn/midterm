"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((resp) => setSingleProduct(resp));
  }, []);
  return <div>{singleProduct?.title}</div>;
}

export default page;
