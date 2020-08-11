import fs from "fs";
import path from "path";

const guidesDirectory = path.join(process.cwd(), "guides");

export function GetGuideRanks() {
  const fileNames = fs.readdirSync(guidesDirectory);

  return fileNames
    .map((f) => parseInt(f.replace(/\.json$/, "")))
    .sort((a, b) => a - b);
}

export function GetEra() {
  var era = {
    id: "1",
    title: "Age of Eternal Winter",
    color: "#7BE7FF",
    background: "/images/background/era-header.png",
  };

  return era;
}

export function GetGuides(era, rank) {
  const fullPath = path.join(guidesDirectory, `${rank}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return JSON.parse(fileContents);
  // var guides = [
  //   {
  //     id: "1-swarm",
  //     title: "Swarm",
  //     shortDescription:
  //       "Overwhelm the opponent’s army with a swarm of fast, high damage units.",
  //     units: [
  //       { id: "SB", count: 6 },
  //       { id: "AR", count: 4 },
  //       { id: "BD", count: 3 },
  //       { id: "BW", count: 2 },
  //       { id: "BB", count: 1 },
  //     ],
  //     creator: {
  //       username: "jlawcordova",
  //     },
  //   },
  //   {
  //     id: "2-spire-defense",
  //     title: "Spire Defense",
  //     shortDescription:
  //       "A defensive strategy which forces your opponent to fight on your side of the field under the powerful spire.",
  //     units: [
  //       { id: "SB", count: 8 },
  //       { id: "AR", count: 8 },
  //       { id: "BD", count: 3 },
  //       { id: "BW", count: 2 },
  //     ],
  //     creator: {
  //       username: "jlawcordova",
  //     },
  //   },
  //   {
  //     id: "3-catapult-control",
  //     title: "Catapult Control",
  //     shortDescription:
  //       "Utilize the Catapult to bombard your opponent's clumping units.",
  //     units: [
  //       { id: "BB", count: 8 },
  //       { id: "SB", count: 4 },
  //       { id: "AR", count: 4 },
  //     ],
  //     creator: {
  //       username: "jlawcordova",
  //     },
  //   },
  // ];

  // return guides;
}
