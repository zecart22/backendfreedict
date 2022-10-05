import fs from "fs";
import wordListPath from "word-list";

const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");

const words = wordArray;

export { words };
