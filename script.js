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
      console.log(pokemon.stats);
      const name = pokemon.name;
      const img = pokemon.sprites.front_default;
      const types = pokemon.types.map((t) => t.type.name).join(", ");

      const card = document.createElement("div");
      card.innerHTML = `
      <img src="${img}" alt="${name}" class="w-full h-auto">
      <h3 class="text-xl font-medium">${name}</h3>
      <p>type: ${types}</p>
      `;

      card.classList.add(
        "w-[180px]",
        "h-[250px]",
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

      container.appendChild(card);
    });
}
