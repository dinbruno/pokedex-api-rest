import React from "react";
import { PerfilPokemon } from ".";
import { Header } from "../header";
import { Sty } from "./styles";

export const Content: React.FC = () => {
  return (
    <Sty.ContainerContent>
      <Header />
      <PerfilPokemon />
    </Sty.ContainerContent>
  );
};
