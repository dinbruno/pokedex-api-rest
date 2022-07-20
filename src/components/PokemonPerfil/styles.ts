import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.solid};
  min-height: 100vh;
  height: 100%;
`;

export const Sty = {
  Container,
};
