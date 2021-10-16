/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { menuItems } from "./Navbar.constants";
import {
  navbarStyles,
  navbarLogoStyles,
  navbarMenuStyles,
  navbarButtonStyles,
  navbarMenuIcon,
  sidebarStyles,
  sidebarMenuStyles,
  sidebarButtonLogoStyles,
  sidebarButtonStyles,
} from "./Navbar.styled.component";

const Navbar = (props) => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  return (
    <div>
      <div css={navbarStyles}>
        <div>
          <a href="#/" css={navbarLogoStyles}>Aski Uru</a>
        </div>
        <ul css={navbarMenuStyles}>
          {menuItems.map((item, index) => {
            return (
              <li key={index} css={navbarButtonStyles}>
                {item}
              </li>
            );
          })}
        </ul>
        <div css={navbarMenuIcon} onClick={toggleSideBar}>
          <FaBars />
        </div>
      </div>
      <div css={sidebarStyles({ navbarIsOpen })}>
        <ul css={sidebarMenuStyles}>
          <li css={sidebarButtonLogoStyles}>ASKI URU</li>
          {menuItems.map((item, index) => {
            return (
              <li key={index} css={sidebarButtonStyles}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
