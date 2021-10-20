import { css } from "@emotion/react";

export const navbarStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #ffffff;
`;

export const navbarLogoStyles = css`
  color: #000000;
  text-decoration: none;
  font-family: "Bebas Neue", cursive;
  font-size: 64px;
  @media (max-width: 960px) {
    font-size: 34px;
    font-weigth: bold;
  }
`;

export const navbarMenuButtonsStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const navbarMenuStyles = css`
  display: flex;
  justify-content: space-between;
  width: 20%;
  min-width: 320px;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const navbarButtonStyles = css`
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
`;

export const navbarMenuCart = css`
  margin-right: 10px;
`;

export const navbarMenuIcon = css`
  display: none;
  cursor: pointer;
  @media (max-width: 960px) {
    display: inline;
  }
`;

export const sidebarStyles = ({ navbarIsOpen }) => css`
  width: 250px;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #ffffff;
  @media (min-width: 960px) {
    display: none;
  }
  ${navbarIsOpen
    ? `
      display: block;
    `
    : `display: none;`}
`;

export const sidebarMenuStyles = css``;

export const sidebarButtonLogoStyles = css`
  list-style: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 34px;
  font-weight: bold;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 10px;
`;

export const sidebarButtonStyles = css`
  list-style: none;
  cursor: pointer;
  font-size: 19px;
  font-family: "Bebas Neue", cursive;
  padding-bottom: 20px;
`;
