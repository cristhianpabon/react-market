/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { linkStyles } from "./Navbar/Navbar.styled.component";

const CartWidget = ({addedProducts}) => {
  return (
    <Link css={linkStyles} to="/product/cart">
      <FaShoppingCart />
      <p>{addedProducts}</p>
    </Link>
  );
};

export default CartWidget;
