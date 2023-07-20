import { Pokemon } from "../types/pokemon.ts";

type Props = {
  params: {
    pokemonId?: string;
  };
};

async function fetchPokemon(id: string) {
  try {
    const response = await fetch(`/api/v2/pokemon/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      await Promise.reject(response.statusText);
    }

    const json = (await response.json()) as Pokemon;

    return json;
  } catch (err) {
    console.error(err);
  }
}

async function loaderPokemon({ params }: Props) {
  const pokemonData = await fetchPokemon(params.pokemonId || "");

  return { pokemonData };
}

export default loaderPokemon;
