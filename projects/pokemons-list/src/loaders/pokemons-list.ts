import { Pokemon } from "../types/pokemon.ts";

export type ListBody1 = {
  count: number;
  results: { name: string }[];
};

export type ListBody = {
  count: number;
  results: Pokemon[];
};

async function fetchPokemons() {
  try {
    const response1 = await fetch("/api/v2/pokemon", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response1.ok) {
      await Promise.reject(response1.statusText);
    }

    const json1 = (await response1.json()) as ListBody1;

    const response2 = await Promise.all(
      json1.results.map(({ name }) =>
        fetch(`/api/v2/pokemon/${name}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
      )
    );

    const jsons = (await Promise.all(
      response2.map((res) => res.json())
    )) as Pokemon[];

    return { results: jsons, count: json1.count };
  } catch (err) {
    console.error(err);
  }
}

async function loaderPokemons() {
  const pokemonsData = await fetchPokemons();

  return { pokemonsData };
}

export default loaderPokemons;
