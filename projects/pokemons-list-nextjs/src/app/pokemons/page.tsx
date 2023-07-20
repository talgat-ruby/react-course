import Link from "next/link";
import { Pokemon } from "@/types/pokemon";

export type ListBody1 = {
  count: number;
  results: { name: string }[];
};

async function fetchPokemons() {
  try {
    const response1 = await fetch("https://pokeapi.co/api/v2/pokemon", {
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
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
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

export default async function PokemonsPage() {
  const pokemonsData = await fetchPokemons();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>List</h2>
      <ul>
        {pokemonsData?.results.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemons/${pokemon.id}`}>
            <li>
              <article>
                <header>
                  <h3>{pokemon.name}</h3>
                </header>
                <main>
                  <figure>
                    <img
                      src={pokemon.sprites.front_default}
                      alt="pokemon sprite"
                    />
                  </figure>
                  <div>
                    <span>Order</span>
                    <span>{pokemon.order}</span>
                  </div>
                  <div>
                    <span>Weight</span>
                    <span>{pokemon.weight}</span>
                  </div>
                  <div>
                    <span>Height</span>
                    <span>{pokemon.height}</span>
                  </div>
                </main>
              </article>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
