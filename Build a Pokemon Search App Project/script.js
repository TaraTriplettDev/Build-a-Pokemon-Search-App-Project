const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click")

// making consts to refer to the different Pokemon stat divs in index.html
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAttack = document.getElementById("attack");
const pokeDefense = document.getElementById("defense");
const pokeSpAttack = document.getElementById("special-attack");
const pokeSpDefense = document.getElementById("special-defense");
const pokeSpeed = document.getElementById("speed");

class Pokemon {
  // Class constructor
  constructor(name, id, weight, height, hp, attack, defense, spattack, spdefense, speed) {
    this.name = name
    this.id = id
    this.weight = weight
    this.height = height
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.spattack = spattack
    this.spdefense = spdefense
    this.speed = speed
  }
} 

// Pokedex Entry for Pikachu
const pikachu = new Pokemon("PIKACHU", "#25", "Weight: 60", "Height: 4", 35, 55, 40, 50, 50, 90)

// Pokedex Entry for Gengar
const gengar = new Pokemon("GENGAR", "#94", "Weight: 405", "Height: 15", 60, 65, 60, 130, 75, 110)

const checkUserInput = () => {
  if (searchInput.value === "Pikachu") {
    // destructuring 
   const {name, id, weight, height, hp, attack, defense, spattack, spdefense, speed} = pikachu
   // putting the respective values of the pokemon under the divs
    pokeName.textContent = name.value
    pokeId.textContent = id.value
    pokeWeight.textContent = weight.value
    pokeHeight.textContent = height.value
    pokeTypes.textContent = types.value
    pokeHp.textContent = hp.value
    pokeAttack.textContent = attack.value
    pokeDefense.textContent = defense.value
    pokeSpAttack.textContent = spattack.value
    pokeSpDefense.textContent = spdefense.value
    pokeSpeed.textContent = speed.value
  }
}