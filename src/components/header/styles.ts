import styled from "styled-components";

const Container = styled.div`
  height: 140px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Divison = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.input.text};
  border-top: none;
  background-color: ${({ theme }) => theme.colors.header};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;

  > .image {
    > img {
      max-width: 250px;
      max-height: 120px;
    }
  }

  > .theme {
    position: absolute;
    display: flex;
    align-items: center;
    right: 5%;
    top: 15%;
  }
`;

export const Sty = {
  Container,
  Divison,
};
