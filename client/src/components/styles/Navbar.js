import styled from "styled-components";
import { colors } from "./variables";

export const NavbarS = styled.nav`
  background: blue;
  background: ${colors.color1};
  height: 90px;
  border-bottom: 1px solid ${colors.color3};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  img {
    max-width: 260px;
  }
  ul {
    display: flex;
    margin-top: 0.8rem;
  }
  ul li {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
  }
  ul li img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
  ul li a {
    color: ${colors.color6};
    font-size: 1.7rem;

    &:hover {
      color: ${colors.color5};
    }
  }
`;
