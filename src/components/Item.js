/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Link } from "react-router-dom";

const itemStyles = css`
  width: 225px;
  box-sizing: border-box;
  background: #ffffff;
  padding: 20px 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const imageStyles = css`
  width: 100%;
  height: 150px;
`;

const nameStyles = css`
  font-size: 16px;
  font-weight: bold;
  margin-botom:20px;
`;

const priceStyles = css`
  font-size: 26px;
  font-weight: bold;
  margin-botom:20px;
`;

export const linkStyles = css`
    color:#000000;
    text-decoration:none;
`;

const descriptionStyles = css``;
const Item = ({ productId, name, description, price, image }) => {
  return (
    <Link css={linkStyles} to={`/product/${productId}`}>
      <div css={itemStyles}>
        <img css={imageStyles} src={image} alt={name} />
        <p css={priceStyles}>{price}</p>
        <h2 css={nameStyles}>{name}</h2>
        <p css={descriptionStyles}>{description}</p>
      </div>
    </Link>
  );
};

export default Item;
