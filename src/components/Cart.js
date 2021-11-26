import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const calculateTotalPurchasePrice = (products) => {
  return products.reduce((totalPrice, product) => {
    const currentPrice = parseInt(product.item.price);
    const units = product.quantity;
    return totalPrice + currentPrice * units;
  }, 0);
};

const Cart = (props) => {
  const { products, removeItem } = useContext(CartContext);
  const totalPurchasePrice =
    products.length > 0 && calculateTotalPurchasePrice(products);
  return (
    <div>
      {products.length ? (
        products.map((product) => (
          <div key={product.item.id}>
            <p>Tu carrito tiene:</p>
            <div>
              <h2>Nombre:{product.item.id}</h2>
              <h2>Nombre:{product.item.title}</h2>
              <h2>Precio Unidad:{product.item.price}</h2>
              {product.quantity > 1 && (
                <h2>
                  Precio Cantidad Total:{product.item.price * product.quantity}
                </h2>
              )}
              <h2>Unidades:{product.quantity}</h2>
              <button
                onClick={() => {
                  removeItem(product.item.id);
                }}
              >
                borrar
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No tienes productos agregados al carrito.</p>
          <Link to={"/"}>
            <button>Volver al inicio</button>
          </Link>
        </div>
      )}
      {products.length !== 0 && (
        <p>Precio total de compra: {totalPurchasePrice}</p>
      )}
    </div>
  );
};

export default Cart;
