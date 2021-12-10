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
  border-bottom: 5px solid #ee8263;
`;

const imageContainer = css`
  padding-bottom: 20px;
  border-bottom: 1px solid #ee8263;
  margin-bottom: 20px;
`;

const imageStyles = css`
  width: 100%;
  height: 150px;
`;

const nameStyles = css`
  font-size: 16px;
  font-weight: bold;
  margin:10px 0;
  color: #ee8263;
`;

const priceStyles = css`
  font-size: 26px;
  font-weight: bold;
  margin-botom: 20px;
`;

const colorOrange = css`
  color: #ee8263;
`;

export const linkStyles = css`
  color: #000000;
  text-decoration: none;
`;

const descriptionStyles = css``;
const Item = ({ productId, title, description, price, image }) => {
  return (
    <Link css={linkStyles} to={`/product/${productId}`}>
      <div css={itemStyles}>
        <div css={imageContainer}>
          <img css={imageStyles} src={image} alt={title} />
        </div>
        <p css={priceStyles}><span css={colorOrange}>$</span>{price}</p>
        <h2 css={nameStyles}>{title}</h2>
        <p css={descriptionStyles}><span css={colorOrange}>-</span>{description}</p>
      </div>
    </Link>
  );
};

export default Item;
