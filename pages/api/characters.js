import { postCharacterDescription } from "../../server/services/json-db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const character = await postCharacterDescription();
    res.status(201).json(character);
  }

  if (req.method === "PUT") {
    // handle put

    res.status(200).json({});
  }
}
