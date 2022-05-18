import { tmpdir } from "os";
import fs from "fs";

export const initData = () => {
  const tmpDir = tmpdir();
  try {
    fs.accessSync(`${tmpDir}/characters.json`);
  } catch {
    console.log("initializing data...");

    fs.writeFileSync(`${tmpDir}/characters.json`, JSON.stringify([]));
  }

  return tmpDir;
};
