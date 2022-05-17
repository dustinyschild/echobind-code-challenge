import { promises as fs } from "fs";

const getCharacters = async () => {
  return fs.readFile("data/characters.json", "utf8", (error, data) => {
    console.log(JSON.parse(data));
    return JSON.parse(data);
  });
};

const saveCharacters = async (characters) => {
  await fs.writeFile("data/characters.json", JSON.stringify(characters));
};

export const getCharacterDescription = async (id) => {
  const characters = await getCharacters();

  console.log({ characters });

  const character = characters.find((character) => {
    return character.id === parseInt(id);
  });

  // default description to null if character does not exist
  return character || { id, description: null };
};

export const postCharacterDescription = async (character) => {
  const characters = await getCharacters();

  console.log("GETTING CHARACTERS:", { characters });

  characters.push(character);

  console.log({ characters });

  await saveCharacters(characters);

  return character;
};
