import { promises as fs } from "fs";

const getCharacters = async () => {
  return fs.readFile("data/characters.json", "utf-8").then((data) => {
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

  console.log({ character });

  // default description to null if character does not exist
  return character || { id, description: null };
};

export const postCharacterDescription = async (character) => {
  const characters = await getCharacters();

  characters.push(character);

  await saveCharacters(characters);

  return character;
};

export const putCharacterDescription = async (newCharacter) => {
  let characters = await getCharacters();

  characters = characters.map((character) => {
    if (character.id === parseInt(newCharacter.id)) {
      return newCharacter;
    }
  });

  await saveCharacters(characters);

  return newCharacter;
};
