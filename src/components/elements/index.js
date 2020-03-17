import styled, { createGlobalStyle } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;

export const CardStyle = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-right: 1rem;
  border-radius: 2rem;
  background-color: white;
  width: 200px;
  /* height: 200px; */
  overflow: hidden;
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.64);
  /* position: absolute; */
  z-index: 999;
`;

export const Global = createGlobalStyle`
 html {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   
 }
 .leaflet-container {
    height: 100vh;
    width: 100vw;
    
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
