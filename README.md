[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=22068138)


const publishers = {};

videoGames.forEach((game) => {
  let studio = game.studio;
  if (!publishers[studio]) {
    publishers[studio] = 1;
  } else {
    publishers[studio] = publishers[studio] + 1;
  }
});

for (let publisher in publishers) {
  const publishDiv = document.querySelector(".publishers");
  publishDiv.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="publisher-container">
      <h3 class="publisher">${publisher}</h3>
      <h3 class="amount">${publishers[publisher]}</h3>
    </div>
    `
  );
}

videoGames
  .filter((game) => game.ratings.metacritic > 95)
  .forEach((game) =>
    document
      .querySelector(".games")
      .insertAdjacentHTML("afterbegin", `<h2>${game.title}</h2>`)
  );