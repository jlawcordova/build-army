import fs from "fs";
import path from "path";

const guidesDirectory = path.join(process.cwd(), "guides");

export function GetGuideRanks() {
  const fileNames = fs.readdirSync(guidesDirectory);

  return fileNames
    .map((f) => parseInt(f.replace(/\.json$/, "")))
    .sort((a, b) => a - b);
}

export function GetGuides(era, rank) {
  const fullPath = path.join(guidesDirectory, `${rank}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
}

export function GetAllGuides() {
  var ranks = GetGuideRanks();

  var guides = [];
  ranks.forEach((r) => {
    var rankGuides = GetGuides(null, r);

    guides = guides.concat(rankGuides);
  });

  return guides;
}

export function GetGuide(id) {
  var guides = GetAllGuides();

  return guides.find((g) => g.id == id);
}
