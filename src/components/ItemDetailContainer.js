import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });

    getProduct.then((data) => {
      setProduct(data.find((i) => (i.id = productId)));
    });
    setLoading(false);
  }, [productId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
