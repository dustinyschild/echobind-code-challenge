import { promises as fs } from "fs";
import path from "path";

export const getCharacterDescription = async (id) => {
  const res = await fs.readFile(path.resolve(__dirname, "../../db.json"));

  const data = await res.json();

  // some error handling or validation here?

  return data.description || "";
};
