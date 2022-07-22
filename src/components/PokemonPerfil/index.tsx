import React, { useEffect, useState } from "react";
import { Sty } from "./styles";
import Pokedex from "../../assets/pngs/pokedex.png";
import { useApiContext } from "../../contexts/ApiContext";

export const PerfilPokemon: React.FC = () => {
  const [currentPokemon, setCurrentPokemon] = useState({} as any);

  const pokemon = window.location.pathname.substring(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => data.json())
      .then((json) => setCurrentPokemon(json));
  }, []);

  // console.log(currentPokemon);

  return (
    <Sty.Container>
      <div className="cont">
        <Sty.ImgContainer>
          <img src={Pokedex} alt="pokedex" />
          <span>#{currentPokemon?.["id"]}</span>
          <h1>{currentPokemon?.["name"]}</h1>
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

          <Sty.ContentInfos>
            <ul>
              <li>Tipo: {currentPokemon?.types?.[0]?.type?.name}</li>
              <li>Peso: {currentPokemon?.weight}kg</li>
              <li>Altura: {currentPokemon?.height}m</li>
              <li>EXP: {currentPokemon?.base_experience}</li>
            </ul>
            <ul>
              <li>
                Habilidade 1: {currentPokemon?.abilities?.[0]?.ability.name}
              </li>
              <li></li>
              <li>
                Habilidade 2: {currentPokemon?.abilities?.[1]?.ability.name}
              </li>
            </ul>
          </Sty.ContentInfos>
        </Sty.ImgContainer>
      </div>
      <a href="/" rel="noreferrer noopener" id="anchor">
        Voltar
      </a>
    </Sty.Container>
  );
};
