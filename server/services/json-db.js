import characters from "../../data/characters.json";

export const getCharacterDescription = async (id) => {
  console.log("getting character description...");
  const character = characters.find((character) => {
    return character.id === parseInt(id);
  });

  // some error handling or validation here?

  return character.description || "";
};
