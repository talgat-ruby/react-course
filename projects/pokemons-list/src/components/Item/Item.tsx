import { useLoaderData } from "react-router-dom";
import { Pokemon } from "../../types/pokemon.ts";

const Item = () => {
  const { pokemonData } = useLoaderData() as { pokemonData: Pokemon };

  return (
    <div>
      <h2>Item</h2>
      <article>
        <header>
          <h3>{pokemonData.name}</h3>
        </header>
        <main>
          <figure>
            <img src={pokemonData.sprites.front_default} alt="pokemon sprite" />
          </figure>
          <div>
            <span>Order</span>
            <span>{pokemonData.order}</span>
          </div>
          <div>
            <span>Weight</span>
            <span>{pokemonData.weight}</span>
          </div>
          <div>
            <span>Height</span>
            <span>{pokemonData.height}</span>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Item;
