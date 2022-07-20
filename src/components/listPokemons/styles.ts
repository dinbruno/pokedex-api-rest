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
`;
const ContainerList = styled.div`
  border-radius: 20px;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.card};
  width: 220px;
  height: 200px;
  position: relative;
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

  > span:nth-child(2) {
    position: absolute;
    top: 5px;
    left: 15px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
`;

const Filter = styled.div`
  display: block;
  justify-content: center;
  padding: 20px 0;

  div {
    display: flex;
  justify-content: center;
    > input {
      width: 600px;
      border: 1px solid white;
      border-radius: 10px;
      padding: 10px 10px;
      border: 2px solid ${({ theme }) => theme.colors.input};
      outline-color: ${({ theme }) => theme.colors.input};
    }
  }

`;
export const Sty = {
  Container,
  Contents,
  ContainerList,
  Div,
  DivTwo,
  Filter,
};
