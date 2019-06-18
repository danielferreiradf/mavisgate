import styled from "styled-components";
import { colors } from "./variables";

export const FooterS = styled.footer`
  border-top: 1px solid ${colors.color3};
  background: ${colors.color0};
  color: ${colors.color6};

  div {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
