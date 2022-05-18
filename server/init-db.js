import fs from "fs";

(() => {
  try {
    fs.accessSync("data/characters.json");
  } catch {
    console.log("initializing data...");

    fs.mkdirSync("data");
    fs.writeFileSync("data/characters.json", JSON.stringify([]));
  }
})();
