import axios from "axios";
import type { PokemonFromApi, PokemonListResult } from "../types";

const apiClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemonList = async (): Promise<PokemonListResult[]> => {
  const response = await apiClient.get("/pokemon?limit=151");
  return response.data.results;
};

export const getPokemonDetails = async (
  url: string
): Promise<PokemonFromApi> => {
  const response = await axios.get(url);
  return response.data;
};
