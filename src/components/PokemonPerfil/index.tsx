import React, { useEffect, useState } from "react";
import { Sty } from "./styles";
import Pokedex from "../../assets/pngs/pokedex.png";
import { useApiContext } from "../../contexts/ApiContext";

export const PerfilPokemon: React.FC = () => {
  const [currentPokemon, setCurrentPokemon] = useState({} as any);

  const pokemon = window.location.pathname.substring(1);

  useEffect(() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => data.json())
      .then((json) => setCurrentPokemon(json));
  }, []);

  console.log(currentPokemon);

  return (
    <Sty.Container>
      <Sty.ImgContainer>
        <img src={Pokedex} alt="pokedex" />
        <Sty.FloatPokemon>
          <img
            src={
              currentPokemon?.["sprites"]?.["versions"]?.["generation-v"]?.[
                "black-white"
              ]?.["animated"]?.["front_default"]
            }
            alt="pokemonPicture"
          />
        </Sty.FloatPokemon>
      </Sty.ImgContainer>
    </Sty.Container>
  );
};
