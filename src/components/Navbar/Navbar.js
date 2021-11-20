/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import CartWidget from "../CartWidget";
import { menuItems } from "./Navbar.constants";
import {
  navbarStyles,
  navbarLogoStyles,
  navbarMenuButtonsStyles,
  navbarMenuStyles,
  navbarButtonStyles,
  navbarMenuCart,
  navbarMenuIcon,
  sidebarStyles,
  sidebarMenuStyles,
  sidebarButtonLogoStyles,
  sidebarButtonStyles,
  linkStyles,
} from "./Navbar.styled.component";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = (props) => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const { products } = useContext(CartContext);

  const toggleSideBar = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  return (
    <div>
      <div css={navbarStyles}>
        <div>
          <a href="#/" css={navbarLogoStyles}>
            Aski Uru
          </a>
        </div>
        <div css={navbarMenuButtonsStyles}>
          {products.length > 0 && (
            <div css={navbarMenuCart}>
              <CartWidget addedProducts={products && products.length} />
            </div>
          )}
          <div css={navbarMenuIcon} onClick={toggleSideBar}>
            <FaBars />
          </div>
          <ul css={navbarMenuStyles}>
            {menuItems.map((item, index) => {
              return (
                <li key={index} css={navbarButtonStyles}>
                  <Link css={linkStyles} to={item.path}>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div css={sidebarStyles({ navbarIsOpen })}>
        <ul css={sidebarMenuStyles}>
          <li css={sidebarButtonLogoStyles}>ASKI URU</li>
          {menuItems.map((item, index) => (
            <li key={index} css={sidebarButtonStyles}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
