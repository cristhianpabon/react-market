import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import { FirestoreDb } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const productsCollection = collection(FirestoreDb, "products");
        const citySnapshot = await getDocs(productsCollection);
        const cityList = citySnapshot.docs.map((doc) => doc.data());
        setProducts(cityList);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>{loading ? <p>Loading...</p> : <ItemList products={products} />}</div>
  );
};

export default ItemListContainer;
