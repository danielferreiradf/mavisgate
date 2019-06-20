import styled from "styled-components";
import { colors } from "./variables";
import texture from "../../img/background3.jpg";

import { md, sm } from "./MediaQuery";

export const CreateCharacterS = styled.section`
  background: url(${texture}) center center/cover;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  min-height: 80vh;

  form {
    text-align: center;
    background: ${colors.color1};
    border: 1px solid ${colors.color3};
    margin: 1rem 0;
    max-width: 800px;
    flex-direction: column;

    input[type="text"] {
      font-family: inherit;
      width: 85%;
      padding: 1rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      background: ${colors.color4};
      border: 1px solid ${colors.color3};
      font-weight: bold;
      font-size: 1.7rem;
    }

    h1 {
      text-align: center;
      margin-top: 2rem;
      font-family: "MedievalSharp";
      color: ${colors.color5};
      font-size: 3.5rem;
    }

    select {
      font-size: 2rem;
      padding: 1rem 2rem;
      margin: 2rem 0;
      background: ${colors.color4};
      font-weight: bold;
      display: inline-block;
    }

    div {
      display: flex;
      justify-content: baseline;
      /* align-items: flex-start; */
      /* margin: 1rem; */
      background: ${colors.color0};

      @media (max-width: ${md}) {
        flex-direction: column;
      }

      div {
        display: flex;
        flex-direction: column;
        background: ${colors.color5};
        justify-content: center;
        border: 1px solid ${colors.color4};
        margin: 1rem;
        padding: 0 1rem;
        width: 350px;

        h1 {
          text-align: center;
          color: ${colors.color2};
        }

        img {
          height: 280px;
          width: 180px;
          align-self: center;
        }

        p {
          padding: 2rem;
          font-size: 1rem;

          font-style: none;
        }
      }

      div {
        align-self: center;
        width: 450px;

        h2 {
          color: ${colors.color2};
          margin: 1rem 0;
          font-size: 2rem;
        }

        input {
          width: 30rem;
          text-align: center;
          align-self: center;
          border: none;
          padding: 1rem 0;
          font-weight: bold;
          font-size: 1.5rem;
          background: ${colors.color4};
          border: 1px solid ${colors.color1};
        }

        p {
          padding: 1rem 0;
          font-size: 1.3rem;
          font-style: italic;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          h3 {
            border: 1px solid ${colors.color3};
            padding: 0.5rem 1rem;
            font-size: 1.5rem;
            font-weight: bold;
            background: ${colors.color4};
            border: 1px solid ${colors.color1};
          }

          p {
            font-style: italic;
          }
        }
      }
      div {
        border: none;

        select {
          font-size: 1.5rem;
          margin: 1rem 1rem;
        }
      }
    }
    a {
      font-family: "MedievalSharp";
      color: rgb(220, 0, 0);
      padding: 0.8rem 2rem;
      font-weight: bold;
      background: ${colors.color0};
      border: 1px solid ${colors.color4};
      cursor: pointer;
      font-size: 2.5rem;
      margin-right: 1rem;
    }
    input[type="submit"] {
      font-family: "MedievalSharp";
      margin: 2rem 0;
      font-size: 2.5rem;
      color: ${colors.color4};
      padding: 1rem 2rem;
      font-weight: bold;
      background: ${colors.color0};
      border: 1px solid ${colors.color4};
      cursor: pointer;
    }
  }
`;
