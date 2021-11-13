import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const { products } = useContext(CartContext);
  console.log(products);
  return (
    <div>
      <p>Tu carrito tiene:</p>;
      {products.map((product) => (
        <div>
          <h2>Nombre:{product.item.id}</h2>
          <h2>Nombre:{product.item.name}</h2>
          <h2>Precio:{product.item.price}</h2>
          <h2>Unidades:{product.quantity}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cart;
