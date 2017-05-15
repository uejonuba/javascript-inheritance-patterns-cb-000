const app = "I don't do much."

function Software(size, name, type){
  this.size = size;
  this.name = name;
  this.type = "Applicaiton";
}

function Game(size,name,genre){
  Software.call(size,name,"Game")

  this.genre = genre;
}

Game.prototype = Object.create(Software.prototype);
Game.prototype.constructor = Game;

Game.prototype.players = "1 Player";
Game.prototype.description = function functionName() {
  return `Game: ${this.name} \n Genre: ${this.genre}`
}


var gameMario = new Game(4,"Super Mario RPG: The Legend of the Seven Stars", "RPG")
