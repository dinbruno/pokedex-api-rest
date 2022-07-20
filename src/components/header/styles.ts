import styled from "styled-components";

const Container = styled.div`
  position: relative;

  background-color: white;
  height: 100px;
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
    display: flex;
    align-items: center;
    margin-left: 30px
  }
`;

export const Sty = {
  Container,
};
