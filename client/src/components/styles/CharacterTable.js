import styled from "styled-components";

import { colors } from "./variables";
import { md, sm } from "./MediaQuery";

export const CharacterTableS = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 75%; */
  margin: 0 auto;

  h2 {
    color: ${colors.color3};
    font-size: 3rem;
    margin: 3rem 0;
  }

  table {
    background: ${colors.color3};
    font-size: 1.5rem;
    text-align: center;
    margin: 2rem 1rem;
  }
  th {
    background: ${colors.color4};
    font-size: 1.8rem;
    @media (max-width: ${md}) {
      font-size: 1rem;
    }
  }
  td {
    background: ${colors.color5};
    @media (max-width: ${md}) {
      font-size: 1rem;
    }
  }
  button {
    font-family: "MedievalSharp";
    font-size: 1.6rem;
    color: rgb(180, 0, 0);
    padding: 1rem 2rem;
    /* font-weight: bold; */
    background: ${colors.color0};
    border: 1px solid ${colors.color4};
    cursor: pointer;
  }
`;
