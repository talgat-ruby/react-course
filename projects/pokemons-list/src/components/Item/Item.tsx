import { useParams } from "react-router-dom";

const Item = () => {
  const { pokemonId } = useParams();

  return (
    <div>
      <h2>Item</h2>
      <span>{pokemonId}</span>
    </div>
  );
};

export default Item;
