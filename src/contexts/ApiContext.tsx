import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: any;
};

type Context = {
  setPokemonList: (value: any) => void;
  pokemonList: any;
  allPokemonsList: any;
  setSpecificPokemon?: (value: any) => void;
};

const ApiContext = createContext<Context | null>(null);

export const ApiProvider = ({ children }: Props) => {
  const [pokemonList, setPokemonList] = useState();
  const [specificPokemon, setSpecificPokemon] = useState();
  const [allPokemonsList, setAllPokemonsList] = useState([] as any);

  useEffect(() => {
    const urlPokemon = (id: number) =>
      `https://pokeapi.co/api/v2/pokemon/${id}`;

    for (let index = 1; index <= 150; index++) {
      fetch(urlPokemon(index)).then((res) =>
        res
          .json()
          .then((data) => setAllPokemonsList((prev: any) => [...prev, data]))
      );
    }
  }, []);

  useEffect(() => {
    const getPokemons = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(getPokemons)
      .then((response) => response.json())
      .then((json) => {
        const resultData = json.results.map((index: any, item: any) => {
          return index.name;
        });
        setPokemonList(resultData);
      });
  }, []);

  return (
    <ApiContext.Provider
      value={{
        pokemonList,
        setPokemonList,
        allPokemonsList,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);

  if (!context) {
    throw new Error("XContext must be called from within the XContextProvider");
  }
  return context;
};
