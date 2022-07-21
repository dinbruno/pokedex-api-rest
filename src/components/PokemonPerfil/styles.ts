import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.solid};
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  
  > img {
    width: 50%;


  }
`;

const FloatPokemon = styled.div`
  position: absolute;
  top: 38%;
  right: 59%;

  > img {
    width: 100px;
  }


`
export const Sty = {
  Container,
  ImgContainer,
  FloatPokemon
};
