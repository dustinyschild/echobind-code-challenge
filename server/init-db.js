import { tmpdir } from "os";
import fs from "fs";

(() => {
  console.log(tmpdir());
  try {
    fs.accessSync("data/characters.json");
  } catch {
    console.log("initializing data...");

    fs.mkdirSync("data");
    fs.writeFileSync("data/characters.json", JSON.stringify([]));
  }
})();
