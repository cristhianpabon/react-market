/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import Item from "./Item";

const itemListStyles = css`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
`;

const ItemList = ({ products }) => {
  return (
    <div css={itemListStyles}>
      {products.map((product) => (
        <Item
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ItemList;
