import styled from "styled-components";

import { colors } from "./variables";
import { md, sm } from "./MediaQuery";

export const CharacterTableS = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: ${md}) {
    overflow-x: auto;
    margin-bottom: 2rem;
    padding: 0;
  }
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
    font-size: 1.6rem;

    @media (max-width: ${sm}) {
      padding: 0.5rem;
    }
  }
  td {
    background: ${colors.color5};

    @media (max-width: ${sm}) {
      padding: 0.5rem;
    }
  }
  button {
    font-family: "MedievalSharp";
    font-size: 1.6rem;
    color: rgb(180, 0, 0);
    padding: 1rem 2rem;
    background: ${colors.color0};
    border: 1px solid ${colors.color4};
    cursor: pointer;
  }
`;
