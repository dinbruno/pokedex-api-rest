import styled from "styled-components";

export const Container = styled.div`
  min-height: 200vh;

  background-color: ${({ theme }) => theme.colors.primary.solid};
`;
