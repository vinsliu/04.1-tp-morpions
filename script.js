// Règle pour gagner :
/*
Pour gagner, un des deux joueurs doit obtenir une des combinaisons de 3 chiffres :
012, 345, 678, 036, 147, 258, 048, 246.
Si aucun ne parvient à obtenir une de ces combinaisons, alors il s'agit d'un match nul.
*/

class Case {
  constructor(index) {
    this.index = index;
    this.value = ""; // Peut être vide, X ou O
    this.element = document.querySelector(`.place.${index}`);
  }

  // Méthode pour mettre à jour la case
  update() {
    if (this.value === "") {
      this.value = symbol;
      this.element.textContent = symbol;
      this.element.classList.add("taken");
      return true;
    } else {
      return false;
    }
  }

  // Méthode pour vider la case (restart)
  reset() {
    this.value = "";
    this.element.textContent = "";
    this.element.classList.remove("taken");
  }
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

    this.currentPlayer = this.player1;
    this.gameOn = true;

    this.grid = [];
    for (let i = 0; i < 9; i++) {
      this.grid.push(new Case(i));
    }
    this.nextPlayer = document.querySelector(".nextPlayer span");
    this.player1Win = document.querySelector(".p1Win span");
    this.player2Win = document.querySelector(".p2Win span");
    this.restartBtn = document.querySelector(".btn");

    this.grid.forEach((cell) => {
      cell.element.addEventListener("click", () => this.handleCellClick(cell));
    });
    this.restartBtn.addEventListener("click", () => this.restartGame());
  }

  // Méthode pour gérer les clicks sur les cases
  handleCellClick(cell) {}

  // Méthode pour le changement de joueur
  toNextPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
    this.nextPlayer.textContent =
      this.currentPlayer === this.player1 ? "1" : "2";
  }

  // Méthode pour définir les conditions de victoires
  isWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  // Méthode pour mettre à jour les scores
  updateScore() {
    this.player1Win.textContent = this.player1.score;
    this.player2Win.textContent = this.player2.score;
  }

  // Méthode pour recommencer la partie
  restartGame() {
    this.gameOn = true;
    this.currentPlayer = this.player1;
    this.nextPlayer.textContent = "1";
  }
}
