import styled from "styled-components";

const Container = styled.div`
  * {
    color: ${({ theme }) => theme.colors.font};
  }
`;
const Contents = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin: 0 20rem;

  @media (min-width: 1920px) {
    margin: 0 20rem;
  }
  @media (max-width: 1600px) {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 780px) {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;
const ContainerList = styled.div`
  border-radius: 20px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.card};
  width: 220px;
  height: 220px;
  position: relative;
  margin: 0 auto;

   > a {
    text-decoration: none;
   }
`;

const Div = styled.div`
  width: 100%;

  #slide {
    display: flex;
    justify-content: center;

    > img {
      width: 90px;
      transition: 0.5s ease-in-out;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
`;

const DivTwo = styled.div`
  display: block;

  > span {
    display: flex;
    justify-content: center;
    font-size: 20px;
    text-transform: capitalize;
    align-items: center;
    font-weight: 600;
  }

  .name {
    background-color: white;
    border-radius: 5px;
    color: black;
  }

  > span:nth-child(2) {
    position: absolute;
    top: 5px;
    left: 15px;
    font-size: 12px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }

  > #types {
    display: flex;
    justify-content: center;
    gap: 5px;

    > span {
      text-transform: capitalize;
      padding: 5px 20px;
      background-color: white;
      color: black;
      border-radius: 5px;
    }
  }
`;

const Filter = styled.div`
  display: block;
  justify-content: center;
  padding: 20px 0;

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }

  div {
    display: flex;
    justify-content: center;
    
    .search {
      left: 35px;
      top: 8px;
      position: relative;
    }
    > input {
      width: 600px;
      border: 1px solid white;
      border-radius: 10px;
      padding: 10px 40px;
      border: 2px solid ${({ theme }) => theme.colors.input.text};
      outline-color: ${({ theme }) => theme.colors.input.text};
      background-color: ${({ theme }) => theme.colors.input.bg};
    }
  }
`;

const Pag = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Sty = {
  Container,
  Contents,
  ContainerList,
  Div,
  DivTwo,
  Filter,
  Pag,
};
