import styled from "styled-components";
import { colors } from "./variables";
import background from "../../img/background2.jpg";

export const LoginS = styled.div`
  position: relative;
  background: url(${background}) no-repeat center center/cover;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    font-family: "MedievalSharp";
    text-align: center;
    background: ${colors.color1};
    border: 1px solid ${colors.color3};
    height: 100%;
    width: 500px;
    margin: 1rem;

    h1 {
      font-size: 4rem;
      padding: 0rem 5rem;
      color: ${colors.color6};
      margin-top: 1rem;
    }

    h3 {
      color: ${colors.color5};
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    form {
      input {
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

      input[type="submit"] {
        font-size: 2.5rem;
        color: ${colors.color4};
        padding: 1rem 2rem;
        font-weight: bold;
        background: ${colors.color0};
        border: 1px solid ${colors.color4};
        cursor: pointer;
      }
    }
    p {
      font-size: 1.8rem;
      color: ${colors.color6};
      margin-bottom: 2rem;

      span {
        color: ${colors.color5};
      }
    }
  }
`;
