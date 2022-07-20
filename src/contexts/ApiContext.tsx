import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: any;
};

type Context = {
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  shortPokemonsList: any;
  allPokemonsList: any;
  setSpecificPokemon?: (value: any) => void;
  count: any;
};

const ApiContext = createContext<Context | null>(null);

export const ApiProvider = ({ children }: Props) => {
  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState<number>();

  const [shortPokemonsList, setShortPokemonsList] = useState([]);
  const [allPokemonsList, setAllPokemonsList] = useState([] as any);

  const PromiseListPokemons = async () => {
    setAllPokemonsList([]);

    const urlPokemon = (id: string) =>
      `https://pokeapi.co/api/v2/pokemon/${id}`;

    shortPokemonsList.forEach(({ name }: any) => {
      fetch(urlPokemon(name))
        .then((res) => res.json())
        .then((data) => setAllPokemonsList((prev: any) => [...prev, data]));
    });
  };

  const PromiseShortPokemons = async () => {
    const perPage = 20;
    const offset = perPage * (currPage - 1);

    const getPokemons = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`;

    fetch(getPokemons)
      .then((response) => response.json())
      .then((json) => {
        setShortPokemonsList(json.results);
        setCount(json.count);
      });
  };

  useEffect(() => {
    if (!!shortPokemonsList) PromiseListPokemons();
    // eslint-disable-next-line
  }, [shortPokemonsList]);

  useEffect(() => {
    if (!!currPage) PromiseShortPokemons();
    // eslint-disable-next-line
  }, [currPage]);

  return (
    <ApiContext.Provider
      value={{
        shortPokemonsList,
        allPokemonsList,
        currPage,
        setCurrPage,
        count,
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
