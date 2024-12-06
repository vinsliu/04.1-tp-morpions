// Règle pour gagner :
/*
Pour gagner, un des deux joueurs doit obtenir une des combinaisons de 3 chiffres :
123, 456, 789, 147, 258, 369, 159, 357.
Si aucun ne parvient à obtenir une de ces combinaisons, alors il s'agit d'un match nul.
*/

// Pseudo-code POO
/*
Dès le début de la partie, le jeu est actif, tant qu'il n'y a pas eu de vainqueur ou de match nul.
*/

class Case {
  constructor(index) {
    this.index = index;
    this.value = ""; // Peut être vide, X ou O
    this.element = document.querySelector(`.place.${index + 1}`);
  }

  // Méthode pour mettre à jour la case
  update() {}

  // Méthode pour vider la case (restart)
  reset() {}
}

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
  }

  // Méthode pour mettre à jour le score en cas de victoire
  addScore() {
    this.score++;
  }
}

class Game {
  constructor() {
    this.player1 = new Player("Joueur 1", "X");
    this.player2 = new Player("Joueur 2", "O");
    
    this.board = document.querySelector(".grid");
    this.nextPlayer = document.querySelector(".nextPlayer span");
    this.player1Win = document.querySelector(".p1Win span");
    this.player2Win = document.querySelector(".p2Win span");
    this.restartGame = document.querySelector(".btn");
    this.currentPlayer = "X";
    this.gameOn = true;
  }
}
