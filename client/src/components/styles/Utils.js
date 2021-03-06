import styled from "styled-components";
import { colors } from "./variables";

export const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  overflow: hidden;
`;

export const DarkButton = styled.button`
  font-family: inherit;
  font-size: 2.5rem;
  color: ${colors.color4};
  padding: 1rem 2rem;
  font-weight: bold;
  background: ${colors.color1};
  border: 1px solid ${colors.color4};
  cursor: pointer;
  text-align: center;
`;

export const LightButton = styled.button`
  font-family: inherit;
  font-size: 2.5rem;
  color: ${colors.color1};
  font-weight: bold;
  padding: 1rem 2rem;
  border: 1px solid ${colors.color1};
  background: ${colors.color4};
  cursor: pointer;
`;
