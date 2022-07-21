import React from "react";
import { useApiContext } from "../../contexts/ApiContext";
import { Header } from "../header";
import { ListPokemons } from "../listPokemons";
import { Container } from "./styles";

export const Home: React.FC = () => {


  return (
    <Container>
      <Header />
      <ListPokemons />
    </Container>
  );
};
