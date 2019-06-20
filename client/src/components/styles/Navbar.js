import styled from "styled-components";
import { colors } from "./variables";
import { md, sm } from "./MediaQuery";

export const NavbarS = styled.nav`
  background: blue;
  background: ${colors.color1};
  height: 90px;
  border-bottom: 1px solid ${colors.color3};

  @media (max-width: ${sm}) {
    height: 120px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 100%;

    @media (max-width: ${md}) {
      flex-direction: column;
      justify-content: center;
    }
  }
  img {
    max-width: 260px;
  }
  ul {
    display: flex;
    @media (max-width: ${sm}) {
      margin: 1rem 0;
    }
  }
  ul li {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;

    @media (max-width: ${sm}) {
      margin: 0 1.5rem 0 1.5rem;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  ul li img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
  ul li a {
    color: ${colors.color6};
    font-size: 1.7rem;

    @media (max-width: ${sm}) {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${colors.color5};
    }
  }
`;
