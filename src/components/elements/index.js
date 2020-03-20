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

export const Stats = styled.div`
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
  .above {
    z-index: 999 !important;
  }
  
  .currently {
    position: absolute;
  }
`;

export const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Currently = styled.div`
  border-radius: 2rem;
  background-color: white;
  margin-top: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: absolute;
  z-index: 999;
  overflow: hidden;
  box-shadow: 0px 0px 13px 0px rgba(50, 50, 50, 0.64);
`;
