import styled from "styled-components";

export const Container = styled.div`
  min-height: 20vh;

  background-color: ${({ theme }) => theme.colors.primary.solid};
`;
