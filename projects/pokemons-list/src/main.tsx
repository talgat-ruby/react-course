import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import List from "./components/List";
import Item from "./components/Item";
import loaderPokemons from "./loaders/pokemons-list.ts";
import loaderPokemon from "./loaders/pokemons-item.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "pokemons", element: <List />, loader: loaderPokemons },
      { path: "pokemons/:pokemonId", element: <Item />, loader: loaderPokemon },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
