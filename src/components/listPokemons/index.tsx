import { useApiContext } from "../../contexts/ApiContext";
import { Sty } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export const ListPokemons = () => {
  const { allPokemonsList } = useApiContext();
  const [search, setSearch] = useState("");

  const [ref] = useKeenSlider<HTMLDivElement>();

  const searchByName = search && search.toLowerCase();
  const filtered =
    !allPokemonsList || !searchByName
      ? allPokemonsList
      : allPokemonsList.filter(({ name }: any) =>
          name.toLowerCase().includes(searchByName)
        );

  return (
    <Sty.Container>
      <Sty.Filter>
        <div>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </Sty.Filter>
      <Sty.Contents>
        {filtered.map((item: any, index: any) => {
          return (
            <Sty.ContainerList>
              <>{console.log(item)}</>
              <Sty.Div>
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide number-slide1" id="slide">
                    <img src={item.sprites.front_default} alt="pokemonPics" />
                  </div>
                  <div className="keen-slider__slide number-slide1" id="slide">
                    <img src={item.sprites.front_shiny} alt="pokemonPics" />
                  </div>
                  <div className="keen-slider__slide number-slide1" id="slide">
                    <img src={item.sprites.back_default} alt="pokemonPics" />
                  </div>
                  <div className="keen-slider__slide number-slide1" id="slide">
                    <img src={item.sprites.back_shiny} alt="pokemonPics" />
                  </div>
                </div>
              </Sty.Div>
              <Sty.DivTwo>
                <span> {item.name}</span>

                <span>{item.id}</span>
                <div id="sizes">
                  <span>Peso: {item.weight}kg</span>
                  <span>Altura: {item.height}m</span>
                </div>
              </Sty.DivTwo>
            </Sty.ContainerList>
          );
        })}
      </Sty.Contents>
    </Sty.Container>
  );
};