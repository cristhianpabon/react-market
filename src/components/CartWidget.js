/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { linkStyles } from "./Navbar/Navbar.styled.component";

const cartIconContainer = css`
  display: flex;
  justify-content: center;
`;

const cartIcon = css`
  color: #ee8163;
  font-size: 26px;
  margin-right: 5px;
`;

const cartIconNumber = css`
  border-radius: 50px;
  border: 1px solid #ee8163;
  color: #ee8163;
  font-size:14px;
  background: #FFFFFF;
  margin-top: 12px;
  margin-left: -12px;
  padding: 5px;
`;
const CartWidget = ({ addedProducts }) => {
  return (
    <Link css={linkStyles} to="/product/cart">
      <div css={cartIconContainer}>
        <FaShoppingCart css={cartIcon} />
        <p css={cartIconNumber}>{addedProducts}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
