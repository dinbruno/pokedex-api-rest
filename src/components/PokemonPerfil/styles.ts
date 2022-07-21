import styled from "styled-components";

const ContainerContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.solid};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.solid};
  height: 100%;
  min-height: 799px;
  position: relative;

  * {
    @font-face {
      font-family: "Pokemon Pixel Font Regular";
      src: url("./pokemon_pixel_font.ttf");
      font-weight: normal;
      font-style: normal;
    }
  }

  .cont {
    display: flex;
    width: 300px;
    justify-content: center;
    margin: 0 auto;
    position: relative;

    > span:nth-child(1) {
      font-size: 22px;
      position: absolute;
      color: black;
      text-transform: capitalize;
      z-index: 2;
      opacity: 0.8;
      font-weight: 600;
      right: 0;
    }
    > span:nth-child(2) {
      position: absolute;
      font-size: 20px;
      color: #313131;
      top: 200px;
    }
  }
`;

const ImgContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  z-index: 1;
  position: relative;

  > img {
    width: 500px;
  }

  > span {
    position: absolute;
    top: 165px;
    left: 60px;
    font-weight: bold;
  }

  > h1 {
    position: absolute;

    outline: none;
    border: 2px solid #333;
    border-radius: 5px;
    font-weight: 600;
    color: #3a444d;
    font-size: clamp(8px, 5vw, 1rem);
    box-shadow: -3px 4px 0 #888, -5px 3px 0 #333;
    background-color: white;
    text-transform: capitalize;
    right: 100px;
    top: 100px;
    padding: 5px 10px;
  }
`;

const FloatPokemon = styled.div`
  position: absolute;
  top: 250px;
  right: 210px;

  > img {
    width: 100px;
  }
`;
const Info = styled.div`
  position: absolute;
  z-index: 20;
`;

const ContentInfos = styled.div`
  max-height: 100px;
  height: 100%;
  max-width: 290px;
  background: white;
  z-index: 20;
  position: relative;
  bottom: 150px;
  left: 110px;
  outline: none;
  border: 2px solid #333;
  border-radius: 5px;
  font-weight: 600;
  color: #3a444d;
  font-size: clamp(8px, 5vw, 1rem);
  box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;

  ul {
    > li {
      list-style-type: none;
    }
  }
`;

export const Sty = {
  ContainerContent,
  Container,
  FloatPokemon,
  ImgContainer,
  Info,
  ContentInfos,
};
