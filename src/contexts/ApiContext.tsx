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
  count: number;
  eachPokemon: string;
};

const ApiContext = createContext<Context | null>(null);

export const ApiProvider = ({ children }: Props) => {
  const [currPage, setCurrPage] = useState(0);
  const [count, setCount] = useState<number>(0);
  const [eachPokemon, setEachPokemon] = useState("");

  const [shortPokemonsList, setShortPokemonsList] = useState([]);
  const [allPokemonsList, setAllPokemonsList] = useState([] as any);

  const [currentPokemon, setCurrentPokemon] = useState([] as any);

  const PromiseListPokemons = async () => {
    setAllPokemonsList([]);

    const urlPokemon = (id: string) =>
      `http://localhost:5050/pokemon/${id}`;

    shortPokemonsList.forEach(({ name }: any) => {
      fetch(urlPokemon(name))
        .then((res) => res.json())
        .then((data) => setAllPokemonsList((prev: any) => [...prev, data]))
        .then((each) => setCurrentPokemon(each));
    });
  };

  const PromiseShortPokemons = async () => {
    const perPage = 20;
    const offset = perPage * (currPage - 1);

    const getPokemons = `http://localhost:5050/pokemons?perPage=${perPage}&offset=${offset}`;

    fetch(getPokemons)
      .then((response) => response.json())
      .then((json) => {
        setShortPokemonsList(json.results);
        setCount(Math.round(json.count / 20));
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
        eachPokemon,
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
