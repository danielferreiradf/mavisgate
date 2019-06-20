import styled from "styled-components";
import { colors } from "./variables";

export const DashboardActionsS = styled.section`
  margin: 1rem;
  div {
    /* Container */

    h2 {
      font-size: 3rem;
      margin: 2rem 0;
    }
    div {
      padding: 2rem;

      a {
        font-family: inherit;
        width: 85%;
        padding: 1rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        background: ${colors.color4};
        border: 1px solid ${colors.color3};
        font-weight: bold;
        font-size: 1.7rem;
      }
    }
  }
`;
