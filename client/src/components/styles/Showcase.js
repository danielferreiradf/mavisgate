import styled from "styled-components";
import { colors } from "./variables";
import background from "../../img/background.jpg";
import { md, sm } from "./MediaQuery";

export const ShowcaseS = styled.section`
  position: relative;
  background: url(${background}) no-repeat center center/cover;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  div {
    font-family: "MedievalSharp";
    /* height: 500px; */
    /* width: 500px; */
    /* background: ${colors.color1}; */
    /* border: 1px solid ${colors.color3}; */
    /* box-shadow: 1px 1px 2px ${colors.color0}; */
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    text-align: center;
  }

  h1 {
    margin-top: 14rem;
    color: ${colors.color6};
    text-shadow: 0px 0px 7px black;
    font-size: 6rem;
    text-align: center;
    font-weight: bold;
    padding: 0 1rem;

    @media(max-width: ${sm}) {
      margin-top: 1rem;
    }
  }
  
  h4 {
    font-size: 2.5rem;
    color: ${colors.color5};
    text-shadow: 2px 2px 5px black;
    text-align: center;
    margin-bottom: 4rem;
  }
`;
