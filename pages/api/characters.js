export default function handler(req, res) {
  if (req.method === "POST") {
    // add to data file
    res.status(201).json({});
  }

  if (req.method === "GET") {
    // handle get
    res.status(200).json({});
  }

  if (req.method === "PUT") {
    // handle put

    res.status(200).json({});
  }
}
