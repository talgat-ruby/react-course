import { Link, useLoaderData } from "react-router-dom";
import { ListBody } from "../../loaders/pokemons-list.ts";

const List = () => {
  const { pokemonsData } = useLoaderData() as { pokemonsData: ListBody };

  return (
    <div>
      <h2>List</h2>
      <ul>
        {pokemonsData.results.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
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
    </div>
  );
};

export default List;
