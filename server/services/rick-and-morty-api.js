import config from "../../config";

const { rickAndMortyApi } = config;

export const getAllLocations = async () => {
  const res = await fetch(`${rickAndMortyApi.baseUrl}/location`);

  const data = await res.json();

  // some error handling or validation here?

  return data;
};

export const getLocation = async (id) => {
  const res = await fetch(`${rickAndMortyApi.baseUrl}/location/${id}`);

  const data = await res.json();

  return data;
};

export const getCharacter = async (id) => {
  const res = await fetch(`${rickAndMortyApi.baseUrl}/character/${id}`);

  const data = await res.json();

  return data;
};

export const getCharacterByUrl = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  return data;
};
