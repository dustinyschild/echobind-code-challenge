import { rickAndMortyApi } from "../../config";

export const getAllLocations = async () => {
  const res = await fetch(`${rickAndMortyApi.url}/location`);

  const data = await res.json();

  // some error handling or validation here?

  return data;
};

export const getLocation = async (id) => {
  const res = await fetch(`${rickAndMortyApi.url}/location/${id}`);

  const data = await res.json();

  return data;
};

export const getCharacter = async (id) => {
  const res = await fetch(`${rickAndMortyApi.url}/character/${id}`);

  const data = await res.json();

  return data;
};
