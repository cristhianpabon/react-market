/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";

const container = css`
  width: 100%;
  padding: 50px 50px;
`;

const itemContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const leftContainer = css`
  width: 100%;
  text-align: center;
`;

const rightContainer = css`
  width: 100%;
`;

const descriptionContainer = css`
  padding: 50px 50px;
`;

const imageStyles = css`
  width: 100%;
  max-width: 300px;
  margin-botom: 150px;
`;

const nameStyles = css`
  font-size: 16px;
  font-weight: bold;
`;

const priceStyles = css`
  font-size: 26px;
  margin-botom: 20px;
  font-weight: bold;
`;

const descriptionStyles = css``;

const ItemDetail = ({ name, image, price, description }) => {
  return (
    <div css={container}>
      <div css={itemContainer}>
        <div css={leftContainer}>
          <img css={imageStyles} src={image} alt={name} />
        </div>
        <div css={rightContainer}>
          <h1 css={nameStyles}>{name}</h1>
          <p css={priceStyles}>{price}</p>
        </div>
      </div>
      <div css={descriptionContainer}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
