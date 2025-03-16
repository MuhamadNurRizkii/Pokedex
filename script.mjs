import { showPopUp } from "./pop-up.mjs";

fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      fetchPokemonData(pokemon.url);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

function fetchPokemonData(url) {
  const container = document.querySelector("#container");
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      console.log(pokemon.sprites.front_default);
      const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      const img = pokemon.sprites.front_default;
      const types = pokemon.types.map((t) => t.type.name).join(", ");

      const button = document.createElement("button");
      const card = document.createElement("div");
      card.innerHTML = `
      <img src="${img}" alt="${name}" class="w-full h-auto">
      <h3 class="text-xl font-medium">${name}</h3>
      <p>type: ${types}</p>
      `;

      button.textContent = "Detail";
      button.classList.add(
        "w-full",
        "px-4",
        "py-2",
        "bg-blue-600",
        "group-hover:bg-white",
        "group-hover:text-blue-600",
        "text-white",
        "font-medium",
        "mt-2",
        "rounded-sm",
        "cursor-pointer"
      );
      card.classList.add(
        "w-[172px]",
        "md:w-[180px]",
        "group",
        "h-[280px]",
        "border",
        "bg-white",
        "rounded-sm",
        "border-slate-500",
        "p-2",
        "transition",
        "duration-300",
        "hover:scale-105",
        "hover:bg-blue-500",
        "hover:border-white"
      );

      card.appendChild(button);

      // card.addEventListener("click", () => {
      //   showPopUp(pokemon);
      // });

      button.addEventListener("click", function () {
        showPopUp(pokemon);
      });

      container.appendChild(card);
    });
}
