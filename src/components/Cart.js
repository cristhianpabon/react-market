/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const cartContainer = css`
  padding: 50px;
  text-align: center;
`;

const submitButton = css`
  background: #ee8263;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const cartTableContainer = css`
  margin-top: 50px;
  padding:30px;
  width: 100%;
  border:1px solid #ee8263;
  border-radius: 10px;
`;

const emptyCartStyle = css`
  padding: 50px;
  text-align: center;
`;

const emptyCartMessageStyle = css`
  font-size: 26px;
  color: #f4a792;
  margin-bottom:10px;
`;

const totalPurchasePriceStyle = css`
  margin-top: 30px;
  font-size: 26px;
  color: #000000;
`;

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
    <div css={cartContainer}>
      <p css={emptyCartMessageStyle}>Tu carrito tiene:</p>
      {products.length > 0 && (
        <table css={cartTableContainer}>
          <tr>
            <th>Nombre</th>
            <th>Precio Unidad</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
          {products.map((product) => (
            <tr>
              <td>{product.item.title}</td>
              <td>{product.item.price}</td>
              <td>{product.quantity}</td>
              <td>
                {product.quantity > 1
                  ? product.item.price * product.quantity
                  : "-"}
              </td>
              <td>
                <button
                  css={submitButton}
                  onClick={() => {
                    removeItem(product.item.id);
                  }}
                >
                  borrar
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}

      {products.length === 0 && (
        <div css={emptyCartStyle}>
          <p css={emptyCartMessageStyle}>
            No tienes productos agregados al carrito.
          </p>
          <Link to={"/"}>
            <button css={submitButton}>Volver al inicio</button>
          </Link>
        </div>
      )}
      {products.length !== 0 && (
        <p css={totalPurchasePriceStyle}>
          Precio total de compra: {totalPurchasePrice}
        </p>
      )}
    </div>
  );
};

export default Cart;
