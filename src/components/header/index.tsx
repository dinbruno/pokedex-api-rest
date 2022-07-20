import React from "react";
import { ThemeSwitcher } from "../../hooks/ThemeSwitcher";
import { Sty } from "./styles";
import Pokemon from "../../assets/pngs/pokemon.png";

export const Header: React.FC = () => {
  return (
    <Sty.Container>
      <Sty.Divison>
        <div className="image">
          <img src={Pokemon} alt="pokemon" />
        </div>

        <div className="theme">
          <ThemeSwitcher />
        </div>
      </Sty.Divison>
    </Sty.Container>
  );
};
