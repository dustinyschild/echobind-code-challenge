import {
  postCharacterDescription,
  putCharacterDescription
} from "../../server/services/json-db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const character = await postCharacterDescription(req.body);
    res.status(201).json(character);
  }

  if (req.method === "PUT") {
    const character = await putCharacterDescription(req.body);

    res.status(200).json(character);
  }
}
