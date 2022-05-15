const apiConfig = {
  url: "https://rickandmortyapi.com/api"
};

export const getAllLocations = async () => {
  const res = await fetch(`${apiConfig.url}/location`);

  const data = await res.json();

  // some error handling or validation here?

  return data;
};
