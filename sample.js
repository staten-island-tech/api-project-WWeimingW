const videoGames = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    studio: "Nintendo",
    yearReleased: 2017,
    genre: ["Action-Adventure", "Open World"],
    platforms: ["Nintendo Switch", "Wii U"],
    mainCharacters: [
      { name: "Link", role: "Hero" },
      { name: "Zelda", role: "Princess" },
    ],
    ratings: {
      metacritic: 97,
      igdb: 96,
    },
  },
  {
    title: "God of War",
    studio: "Santa Monica Studio",
    yearReleased: 2018,
    genre: ["Action", "Adventure"],
    platforms: ["PlayStation 4", "PlayStation 5", "PC"],
    mainCharacters: [
      { name: "Kratos", role: "Protagonist" },
      { name: "Atreus", role: "Companion" },
    ],
    ratings: {
      metacritic: 94,
      igdb: 93,
    },
  },
  {
    title: "Minecraft",
    studio: "Mojang Studios",
    yearReleased: 2011,
    genre: ["Sandbox", "Survival"],
    platforms: ["PC", "Xbox", "PlayStation", "Nintendo Switch", "Mobile"],
    mainCharacters: [
      { name: "Steve", role: "Player Avatar" },
      { name: "Alex", role: "Player Avatar" },
    ],
    ratings: {
      metacritic: 93,
      igdb: 96,
    },
  },
  {
    title: "Elden Ring",
    studio: "FromSoftware",
    yearReleased: 2022,
    genre: ["Action RPG", "Open World"],
    platforms: ["PC", "PlayStation", "Xbox"],
    mainCharacters: [
      { name: "Tarnished", role: "Player Character" },
      { name: "Melina", role: "Guide" },
    ],
    ratings: {
      metacritic: 96,
      igdb: 95,
    },
  },
  {
    title: "Fortnite",
    studio: "Epic Games",
    yearReleased: 2017,
    genre: ["Battle Royale", "Shooter"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
    mainCharacters: [
      { name: "Jonesy", role: "Hero Skin" },
      { name: "Peely", role: "Comedy Skin" },
    ],
    ratings: {
      metacritic: 81,
      igdb: 83,
    },
  },
  {
    title: "Super Mario Odyssey",
    studio: "Nintendo",
    yearReleased: 2017,
    genre: ["Platformer", "Adventure"],
    platforms: ["Nintendo Switch"],
    mainCharacters: [
      { name: "Mario", role: "Hero" },
      { name: "Cappy", role: "Companion" },
    ],
    ratings: {
      metacritic: 97,
      igdb: 94,
    },
  },
  {
    title: "Red Dead Redemption 2",
    studio: "Rockstar Games",
    yearReleased: 2018,
    genre: ["Action", "Adventure", "Open World"],
    platforms: ["PC", "PlayStation", "Xbox"],
    mainCharacters: [
      { name: "Arthur Morgan", role: "Protagonist" },
      { name: "Dutch van der Linde", role: "Gang Leader" },
    ],
    ratings: {
      metacritic: 97,
      igdb: 96,
    },
  },
  {
    title: "Overwatch",
    studio: "Blizzard Entertainment",
    yearReleased: 2016,
    genre: ["Shooter", "Team-Based"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    mainCharacters: [
      { name: "Tracer", role: "Damage" },
      { name: "Reinhardt", role: "Tank" },
    ],
    ratings: {
      metacritic: 91,
      igdb: 88,
    },
  },
  {
    title: "The Witcher 3: Wild Hunt",
    studio: "CD Projekt Red",
    yearReleased: 2015,
    genre: ["Action RPG", "Open World"],
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    mainCharacters: [
      { name: "Geralt of Rivia", role: "Witcher" },
      { name: "Ciri", role: "Princess / Witcher-in-Training" },
    ],
    ratings: {
      metacritic: 93,
      igdb: 95,
    },
  },
  {
    title: "Animal Crossing: New Horizons",
    studio: "Nintendo",
    yearReleased: 2020,
    genre: ["Simulation", "Social"],
    platforms: ["Nintendo Switch"],
    mainCharacters: [
      { name: "Player Villager", role: "Island Resident" },
      { name: "Tom Nook", role: "Island Manager" },
    ],
    ratings: {
      metacritic: 90,
      igdb: 87,
    },
  },
];

// metacritics 
videoGames
    .filter((game) => game.ratings.metacritic > 96)
    .forEach((game) => 
        document
            .querySelector(".games")
            .insertAdjacentHTML("afterbegin", `<h2>${game.title}</h2>`));

//logs each game into a seperate array
const publishers = {};

videoGames.forEach((game) => {
  let studio = game.studio;
  if (!publishers[studio]) {
    publishers[studio] = 1;
  } else {
    publishers[studio] += 1;
  }
});

// Display all studios with their game counts
const publishersDiv = document.querySelector(".publishers");

for (let studio in publishers) {
  publishersDiv.insertAdjacentHTML(
    "beforeend",
    `<div class="publisher-container">
      <h3 class="publisher">${studio}</h3>
      <p class="amount">Games: ${publishers[studio]}</p>
    </div>`
  );
}

// Find studio with the most games
let topStudio = "";
let maxGames = 0;

for (let studio in publishers) {
  if (publishers[studio] > maxGames) {
    maxGames = publishers[studio];
    topStudio = studio;
  }
}

// Display studio with the most games
const topStudioDiv = document.querySelector(".top-studio");
topStudioDiv.innerHTML = `<h3>${topStudio} (${maxGames} games)</h3>`;




let oldestGame = videoGames[0]; // start with the first game

videoGames.forEach((game) => {
  if (game.yearReleased < oldestGame.yearReleased) {
    oldestGame = game; // update if we find an older game
  }
});
//display oldestgame title and year
document.querySelector(".games").insertAdjacentHTML(
  "beforeend",
  `<h3>Oldest Game: ${oldestGame.title} (${oldestGame.yearReleased})</h3>`
);



let newestGame = videoGames[0]; // start with the first game

videoGames.forEach((game) => {
  if (game.yearReleased > newestGame.yearReleased) {
    newestGame = game; // update if we find a newer game
  }
});

document.querySelector(".games").insertAdjacentHTML(
  "beforeend",
  `<h3>Newest Game: ${newestGame.title} (${newestGame.yearReleased})</h3>`
);


// average rating of all games
let total = 0;

videoGames.forEach((game) => {
  total += (game.ratings.metacritic + game.ratings.igdb) / 2;
});

let averageAllGames = total / videoGames.length;

document.querySelector(".games").insertAdjacentHTML(
  "beforeend",
  `<h3>Average Rating of All Games: ${averageAllGames.toFixed(2)}</h3>`
);

//average rating of a studio 
let studioName = "Nintendo"; // change to any studio
let totalStudio = 0;
let countStudio = 0;

videoGames.forEach((game) => {
  if (game.studio === studioName) {
    totalStudio += (game.ratings.metacritic + game.ratings.igdb) / 2;
    countStudio++;
  }
});

let averageStudio = totalStudio / countStudio;

document.querySelector(".games").insertAdjacentHTML(
  "beforeend",
  `<h3>Average Rating of ${studioName}: ${averageStudio.toFixed(2)}</h3>`
);


//shows all games a studio has
const studioNames = "Nintendo"; // e.g., "Rockstar Games", "Mojang Studios"

// Filter games by studio
const studioGames = videoGames.filter(game => game.studio === studioName);

// Select the div where results will go
const studioDiv = document.querySelector(".games");

// Add a title
studioDiv.insertAdjacentHTML("beforeend", `<h3>Games by ${studioName}:</h3>`);

// List each game
studioGames.forEach(game => {
  studioDiv.insertAdjacentHTML("beforeend", `<p>${game.title}</p>`);
});


// games listed before 2015
const oldGames = videoGames.filter(game => game.yearReleased < 2015);

const oldDiv = document.querySelector(".games");
oldDiv.insertAdjacentHTML("beforeend","<h3>Games Released Before 2015:</h3>");

oldGames.forEach(game => {
  oldDiv.insertAdjacentHTML("beforeend", `<p>${game.title} (${game.yearReleased})</p>`);
});


//all actionrpg games
const actionRPGGames = videoGames.filter(game => game.genre.includes("Action RPG"));

const rpgDiv = document.querySelector(".games");
rpgDiv.insertAdjacentHTML("beforeend", "<h3>Action RPG Games:</h3>");

actionRPGGames.forEach(game => {
  rpgDiv.insertAdjacentHTML("beforeend", `<p>${game.title}</p>`);
});

let genreName = "Action RPG"; // Change this to "Action", "Shooter", "Platformer", etc.

// Filter games that include the genre
const genreGames = videoGames.filter(game => game.genre.includes(genreName));

// Select the div where results will go
const genreDiv = document.querySelector(".games");

// Add a title
genreDiv.insertAdjacentHTML("beforeend", `<h3>Games in genre: ${genreName}</h3>`);

// List each game
genreGames.forEach(game => {
  genreDiv.insertAdjacentHTML("beforeend", `<p>${game.title}</p>`);
});