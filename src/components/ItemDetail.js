/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const container = css`
  width: 100%;
  padding: 50px 50px;
`;

const itemContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  border-bottom: 1px solid #ee8263;
`;

const leftContainer = css`
  width: 60%;
  text-align: center;
`;

const rightContainer = css`
  width: 40%;
  padding: 50px 0px 50px 50px;
  border-left: 1px solid #ee8263;
`;

const descriptionContainer = css`
  padding: 50px 50px;
`;

const imageStyles = css`
  width: 100%;
  max-width: 300px;
  margin-botom: 150px;
`;

const titleStyles = css`
  font-size: 16px;
  font-weight: bold;
  margin-bottom:10px;
`;

const priceStyles = css`
  font-size: 26px;
  margin-botom: 20px;
  font-weight: bold;
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
  margin-top: 30px;
  text-align: center;
`;

const submitColor = css`
  color: #ffffff;
  text-decoration: none;
`;


const ItemDetail = ({ id, title, image, price, description, stock }) => {
  const [buy, setBuy] = useState(false);
  const { addItem, products } = useContext(CartContext);

  const add = (props) => {
    const filteredProduct = products.filter(
      (product) => product.name === title
    );

    if (props.units !== 0 && filteredProduct.length === 0) {
      setBuy(true);
      addItem({ id, title, price }, props.units);
      alert(`agregaste ${props.units} al carrito!`);
    } else if (props.units === 0) {
      alert(`primero selecciona la cantidad del producto!`);
    } else if (filteredProduct.length > 1) {
      alert(`El producto ya existe en el carrito!`);
    }
  };

  return (
    <div css={container}>
      <div css={itemContainer}>
        <div css={leftContainer}>
          <img css={imageStyles} src={image} alt={title} />
        </div>
        <div css={rightContainer}>
          <div>
            <h1 css={titleStyles}>{title}</h1>
            <p css={priceStyles}>${price}</p>
          </div>
          {!buy ? (
            <ItemCount stock={stock} onAdd={add} />
          ) : (
            <div css={submitButton} >
              <Link css={submitColor} to="/product/cart">
                Terminar Compra
              </Link>
            </div>
          )}
        </div>
      </div>
      <div css={descriptionContainer}>
        <h2>Descripcion:</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
