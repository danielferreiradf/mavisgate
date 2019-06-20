import styled from "styled-components";
import { colors } from "./variables";
import { md } from "./MediaQuery";

import texture from "../../img/background2.jpg";

export const DashboardS = styled.section`
  background: url(${texture}) center center/cover;
  padding: 3rem 0;
  min-height: 80vh;

  div {
    /* Container */

    div {
      /* padding: 10rem; */
      background: ${colors.color1};
      margin: 1rem;
      padding: 1rem;

      img {
        height: 4rem;
        width: 4rem;
        margin-right: 1rem;
      }
      h1 {
        font-family: "MedievalSharp";
        color: ${colors.color5};
        font-size: 3.5rem;
        text-align: center;
        margin: 2rem 0 0 0;
      }
      h2 {
        color: ${colors.color6};
        font-size: 2rem;
        /* margin: 0.5rem 0; */
        text-align: center;
      }
      button {
        font-size: 1.3rem;
      }
    }
  }
`;
