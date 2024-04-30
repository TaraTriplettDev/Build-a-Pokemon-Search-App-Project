const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click")

class Pokemon {
  // Class constructor
  constructor(name, id, weight, height, hp, attack, defense, sattack, sdefense, speed) {
    this.name = name
    this.id = id
    this.weight = weight
    this.height = height
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.sattack = sattack
    this.sdefense = sdefense
    this.speed = speed
  }
} 

// Pokedex Entry for Pikachu
const pikachu = new Pokemon("PIKACHU", "#25", "Weight: 60", "Height: 4", 35, 55, 40, 50, 50, 90)

// Pokedex Entry for Gengar
const gengar = new Pokemon("GENGAR", "#94", "Weight: 405", "Height: 15", 60, 65, 60, 130, 75, 110)



// const {name, id, weight, height, hp, attack, defense, sattack, sdefense, speed} = pikachu