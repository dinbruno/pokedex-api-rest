import { useApiContext } from "../../contexts/ApiContext";
import { Sty } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { PaginationComponent } from "../Pagination";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import noImage from "../../assets/pngs/NoImage.png";

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
          <div className="search">
            <SearchOutlinedIcon />
          </div>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </Sty.Filter>
      <Sty.Contents>
        {filtered.map((item: any, key: any) => {
          return (
            <Sty.ContainerList key={key}>
              <Sty.Div>
                <div ref={ref} className="keen-slider">
                  <div className="keen-slider__slide number-slide1" id="slide">
                    {!!item.sprites.front_default ? (
                      <img src={item.sprites.front_default} alt="pokemonPics" />
                    ) : (
                      <img src={noImage} alt="noimagefound"></img>
                    )}
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
              <a href={`/${item.name}`} rel="noreferrer noopener">
                <Sty.DivTwo>
                  <span className="name"> {item.name}</span>

                  <span>
                    {"#"}
                    {item.id}
                  </span>
                  <div id="sizes">
                    <span>Peso: {item.weight}kg</span>
                    <span> Altura: {item.height}m</span>
                  </div>
                  <div id="types">
                    <span> {item.types[0].type.name}</span>
                    {item.types[1] && <span> {item.types[1].type.name}</span>}
                  </div>
                </Sty.DivTwo>
              </a>
            </Sty.ContainerList>
          );
        })}
      </Sty.Contents>
      <Sty.Pag>
        <PaginationComponent />
      </Sty.Pag>
    </Sty.Container>
  );
};
