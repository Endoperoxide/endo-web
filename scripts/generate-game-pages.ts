import fs from "node:fs";
import path from "node:path";

export const upcomingGames: string[] = [
  "Apex Legends",
  "Balatro",
  "The Coffin of Andy and Leyley",
  "Cult of the Lamb",
  "Cyberpunk 2077",
  "Deadlock",
  "Deep Rock Galactic",
  "DELTARUNE",
  "DOOM Eternal",
  "THE FINALS",
  "Geometry Dash",
  "Hollow Knight",
  "Hollow Knight: Silksong",
  "In Stars And Time",
  "Just Shapes & Beats",
  "Marvel Rivals",
  "Monster Hunter: World",
  "OMORI",
  "OneShot",
  "Outer Wilds",
  "Phasmophobia",
  "Risk of Rain 2",
  "Sea of Thieves",
  "Terraria",
  "ULTRAKILL",
  "Undertale",
  "ANIMAL WELL",
  "ARK: Survival Evolved",
  "Awaria",
  "The Awesome Adventures of Captain Spirit",
  "Before Your Eyes",
  "The Beginner's Guide",
  "Bendy and the Dark Revival",
  "Bendy and the Ink Machine",
  "Big Walk",
  "BioShock",
  "Bloons TD Battles",
  "Brawlhalla",
  "Call of Duty",
  "Celeste",
  "Clair Obscur: Expedition 33",
  "Control",
  "Counter-Strike",
  "The Crew",
  "Cry of Fear",
  "Delta",
  "Destiny",
  "Detroit: Become Human",
  "Disco Elysium",
  "Doki Doki Literature Club",
  "ENA: Dream BBQ",
  "Enter the Gungeon",
  "Firewatch",
  "Garry's Mod",
  "Half-Life",
  "Half-Life 2",
  "A Hat in Time",
  "Hello Charlotte",
  "Helltaker",
  "Horizon Zero Dawn",
  "How Fish Is Made",
  "how to kill a fly",
  "Idols of Ash",
  "Illusion Carnival",
  "IMSCARED",
  "Inscryption",
  "Iron Lung",
  "The IRONY",
  "It Steals",
  "It Takes Two",
  "Just Act Natural",
  "Krunker",
  "Lethal Company",
  "Life is Strange",
  "Life is Strange 2",
  "Life is Strange: Before the Storm",
  "Life is Strange: True Colors",
  "Little Nightmares",
  "Milk inside a bag of milk inside a bag of milk",
  "Milk outside a bag of milk outside a bag of milk",
  "MiSide",
  "MOLE",
  "MOTORSLICE",
  "Mouthwashing",
  "NEEDY STREAMER OVERLOAD",
  "NieR: Automata",
  "Night in the Woods",
  "The Oily Depths",
  "Overwatch",
  "Palworld",
  "Paper Lily",
  "PAYDAY 2",
  "PAYDAY 3",
  "Pony Island",
  "Poppy Playtime",
  "Portal",
  "Portal 2",
  "Psychopomp",
  "Quake III Arena",
  "Radio the Universe",
  "Red Dead Redemption 2",
  "Rogue Company",
  "SCP: Secret Laboratory",
  "Shipwrecked 64",
  "SIGNALIS",
  "SILENT HILL 2",
  "Sky: Children of the Light",
  "Slay the Princess",
  "SOMA",
  "Sons Of The Forest",
  "Stick Fight: The Game",
  "TerraTech",
  "Titanfall 2",
  "To the Moon",
  "Tom Clancy's Rainbow Six Siege",
  "Trove",
  "TWWWR",
  "Until Then",
  "Upload Labs",
  "Wayfinder",
  "What Remians of Edith Finch",
  "White Knuckle",
  "Yume Nikki",
  "ROBLOX Bad Things",
  "ROBLOX Pressure",
  "ROBLOX Notorierty",
  "ROBLOX Miners Haven",
  "ROBLOX DOORS",
  "ROBLOX Grace",
  "ROBLOX Nullscape",
  "ROBLOX REDLINER",
  "ROBLOX Deadly Delivery",
  "ROBLOX Vesteria",
  "ROBLOX Twenty One",
  "ROBLOX Retail Tycoon 2",
  "ROBLOX Project remix",
  "ROBLOX Korrupt Zombies",
  "ROBLOX Neon Knights",
  "ROBLOX Apeirophobia",
  "ROBLOX Hell Reaver",
  "ROBLOX Entry Point",
  "New Super Mario Bros. Wii",
  "LEGO Star Wars III",
  "Super Mario Galaxy 2",
  "Rayman Raving Rabbids",
  "Wario Land: The Shake Dimension",
  "Mario Kart Wii",
  "Kirby's Epic Yarn",
  "Mario Party 9",
  "Carnival",
  "Club Penguin: Game Day",
  "LEGO Batman",
  "Super Mario 3D World",
  "Just Dance 2014",
  "Mario Kart 8",
  "Animal Crossing",
  "Rayman Legends",
  "Just Dance 4",
  "Skylanders: Trap Team",
  "Lego Worlds",
  "Plants vs. Zombies: Garden Warfare 2",
  "Lego Dimensions",
  "Call of Duty: Infinite Warfare",
  "Star Wars: Battlefront",
  "Sunset Overdrive",
  "Evolve",
  "Call of Duty: Black Ops 4",
  "Minecraft",
  "Wii Sports",
  "Super Smash Bros. Ultimate",
  "Pok\u00e9mon Moon",
  "Pok\u00e9mon GO",
  "Pixel gun 3d",
  "Clash Royale",
  "Five Nights at Freddy's",
  "Persona 5",
  "Off",
  "Moshi Monsters",
  "Bin Weevils",
  "Class of '09",
  "Tomodachi Life",
  "Hypixel Skyblock",
  "Slime Rancher",
  "Rocket League",
  "Super Mario 64",
  "Super Mario Maker 2",
  "Super Mario Odyssey",
  "Splatoon 2",
  "Pok\u00e9mon: Let's Go, Eevee!",
  "Bloons TD 5",
  "Cuphead",
  "Pok\u00e9mon Sword",
  "Luigi's Mansion: Dark Moon",
  "Wii Sports Resort",
  "Temple Run",
  "Halo Infinite",
  "Splitgate",
  "Grand Theft Auto V",
  "FOR HONOR",
  "The Escapists",
  "Superhot",
  "Steep",
  "Goat Simulator",
  "Warframe",
  "Watch_Dogs",
  "Fortnite",
];

const outputDir = "./src/content/reviews";

fs.mkdirSync(outputDir, { recursive: true });

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createMarkdown(title: string): string {
  const slug = slugify(title);

  return `---
slug: "${slug}"
title: "${title}"
year:
platforms: []
coverUrl:
reviewDate:
playtimeHours:
rating:
categories:
  gameplay:
  story:
  music:
  soundDesign:
  visualDesign:
  replayability:
---

`;
}

for (const game of upcomingGames) {
  const slug = slugify(game);
  const filePath = path.join(outputDir, `${slug}.md`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${game} — file already exists`);
    continue;
  }

  fs.writeFileSync(filePath, createMarkdown(game), "utf8");
  console.log(`Created ${filePath}`);
}
