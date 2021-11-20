import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const { products, removeItem } = useContext(CartContext);
  return (
    <div>
      <p>Tu carrito tiene:</p>
      {products.length ? products.map((product) => (
        <div key={product.item.id}>
          <h2>Nombre:{product.item.id}</h2>
          <h2>Nombre:{product.item.name}</h2>
          <h2>Precio:{product.item.price}</h2>
          <h2>Unidades:{product.quantity}</h2>
          <button onClick={()=>{removeItem(product.item.id)}}>borrar</button>
        </div>
      )) : <p>0 productos</p>}
    </div>
  );
};

export default Cart;
