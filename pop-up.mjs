export function showPopUp(pokemon) {
  const containerPopUp = document.getElementById("container-popUp");
  const image = document.getElementById("image");
  const name = document.getElementById("name");
  const type = document.getElementById("type");
  const cross = document.querySelector(".fa-solid");

  //   const hp = document.querySelector(".hp");
  //   const attack = document.querySelector(".attack");
  //   const defends = document.querySelector(".defends");

  const valueHp = document.querySelector(".valueHp");
  const valueAttack = document.querySelector(".valueAttack");
  const valueDefends = document.querySelector(".valueDefends");

  const hpNilai = document.querySelector(".hpNilai");
  const attackNilai = document.querySelector(".attackNilai");
  const defendsNilai = document.querySelector(".defendsNilai");

  //   isi semua value dari api
  image.src = pokemon.sprites.front_default;
  name.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  type.textContent = `type: ${pokemon.types
    .map((t) => t.type.name)
    .join(", ")}`;

  valueHp.style.width = `${pokemon.stats[0].base_stat}%`;
  valueAttack.style.width = `${pokemon.stats[1].base_stat}%`;
  valueDefends.style.width = `${pokemon.stats[2].base_stat}%`;

  hpNilai.textContent = pokemon.stats[0].base_stat;
  attackNilai.textContent = pokemon.stats[1].base_stat;
  defendsNilai.textContent = pokemon.stats[2].base_stat;

  containerPopUp.classList.remove("hidden");
  containerPopUp.classList.add("flex");

  cross.addEventListener("click", function () {
    containerPopUp.classList.add("hidden");
    containerPopUp.classList.remove("flex");
  });

  containerPopUp.addEventListener("click", function (e) {
    if (e.target !== cross) {
      containerPopUp.classList.add("hidden");
      containerPopUp.classList.remove("flex");
    }
  });
}
