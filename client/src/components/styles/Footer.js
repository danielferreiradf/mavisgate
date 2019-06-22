import styled from "styled-components";
import { colors } from "./variables";

export const FooterS = styled.footer`
  border-top: 1px solid ${colors.color3};
  background: ${colors.color0};
  color: ${colors.color6};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    /* Container */
  }
  div {
    h1 {
      margin: 2rem 0;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      color: #a1a1a1a1;
    }
    hr {
    }
    div {
      display: flex;
      flex-direction: row;

      img {
        width: 50px;
        height: 50px;
        color: red;
        margin: 2rem;
        transition: all 0.2s;
        border-radius: 20%;
        cursor: pointer;
      }
    }
  }
`;
