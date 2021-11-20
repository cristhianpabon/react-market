import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FirestoreDb } from "../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = query(
          collection(FirestoreDb, "products"),
          where("id", "==", `${productId}`)
        );
        const citySnapshot = await getDocs(productsCollection);
        const cityList = citySnapshot.docs.map((doc) => doc.data());
        setProduct(cityList);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
  }, [productId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemDetail
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          stock={product.stock}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
