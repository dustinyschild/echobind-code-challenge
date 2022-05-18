import { promises as fs } from "fs";
import "../init-db";

const getCharacters = async () => {
  return fs.readFile("data/characters.json", "utf-8").then((data) => {
    return JSON.parse(data);
  });
};

export const saveCharacters = async (characters) => {
  await fs.writeFile("data/characters.json", JSON.stringify(characters));
};

export const getCharacterDescription = async (id) => {
  const characters = await getCharacters();

  const character = characters.find((character) => {
    return character.id === parseInt(id);
  });

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

    return character;
  });

  await saveCharacters(characters);

  return newCharacter;
};
