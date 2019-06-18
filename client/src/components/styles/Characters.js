import styled from "styled-components";
import { colors } from "./variables";

import texture from "../../img/background3.jpg";

export const CharactersS = styled.section`
  background: url(${texture}) center center/cover;
  div {
    /* Container */

    div {
      margin: 2rem;
      display: flex;
      border: 1px solid red;
      background: ${colors.color5};
      border: 1px solid ${colors.color3};
      margin: 1rem;
      /* flex-wrap: wrap; */

      img {
        background: ${colors.color5};
        padding: 1rem;
        height: 20%;
        width: 20%;
        align-self: center;
      }

      div {
        background: ${colors.color1};
        margin: 0;
        display: flex;
        flex-direction: column;
        padding: 1rem;

        h1 {
          font-family: "MedievalSharp";
          color: ${colors.color5};
          font-size: 2.5rem;
        }
        p {
          margin: 0.5rem;
          color: ${colors.color6};
          font-size: 1.3rem;
        }

        h2 {
          color: ${colors.color4};
          font-size: 2rem;
          margin: 0.5rem 0;
        }
        div {
          display: flex;
          flex-direction: row;
          text-align: center;
          align-items: center;
          background: ${colors.color4};
          padding: 0.5rem;

          h3 {
            font-family: "MedievalSharp";
            color: ${colors.color1};
            font-size: 1.5rem;
            margin: 0.3rem 0.3rem;
            background: ${colors.color5};
            border: 1px solid ${colors.color2};
            padding: 0.5rem;
          }
          p {
            margin: 0.5rem;
            color: ${colors.color1};
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;
