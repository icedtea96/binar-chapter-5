class Game {
    constructor() {
        this.playerBatu = document.querySelector(".player.batu");
        this.playerKertas = document.querySelector(".player.kertas");
        this.playerGunting = document.querySelector(".player.gunting");
        this.yourChoice = yourChoice;
        this.botChoice, this.randomNumber;
        this.versusText = document.querySelector(".versus-text"); // select the center div
        this.playerWin = document.querySelector(".player-win"); // replace center div to player win notification
        this.botWin = document.querySelector(".bot-win");
        this.draw = document.querySelector(".draw");
    }

    #botChoiceRandomizer(){
        this.randomNumber = Math.floor(Math.random() * 3) + 1;
        switch (this.randomNumber){
            case 1:
                this.botChoice = ".bot.batu";
                console.log("COM chooses ROCK!");
                break;
            case 2:
                this.botChoice = ".bot.gunting";
                console.log("COM chooses SCISSORS!");
                break;
            default:
                this.botChoice = ".bot.kertas";
                console.log("COM chooses PAPER!");
                break;
        }
    }

    PlayerWin() {
        console.log("PLAYER 1 WIN! GOOD JOB!");
        this.versusText.style.display = "none";
        this.botWin.style.display = "none";
        this.draw.style.display = "none";
        this.playerWin.style.display = "block";
        console.log("---------------ROUND END---------------");
      }
    
      //showing .bot-win div in center and hide the others
      BotWin() {
        console.log("Unfortunately, COM WIN!");
        this.versusText.style.display = "none";
        this.botWin.style.display = "block";
        this.draw.style.display = "none";
        this.playerWin.style.display = "none";
        console.log("---------------ROUND END---------------");
      }
    
      //showing .draw div in center and hide the others
      Draw() {
        console.log("Whoops! It's a DRAW!");
        this.versusText.style.display = "none";
        this.botWin.style.display = "none";
        this.draw.style.display = "block";
        this.playerWin.style.display = "none";
        console.log("---------------ROUND END---------------");
      }
    
      GameResult(P1Choice, randomNumber) {
        if (
          (P1Choice == 1 && randomNumber == 2) ||
          (P1Choice == 2 && randomNumber == 3) ||
          (P1Choice == 3 && randomNumber == 1)
        )
          this.PlayerWin();
        else if (P1Choice == randomNumber) this.Draw();
        else this.BotWin();
      }

      playBatu() {
        this.ActiveStateRemoval(this.allChoices); //reset
        let P1Choice = 1
        console.log("YOU choose ROCK");
        this.playerBatu.classList.add("active");
      }

      playGunting() {
        this.ActiveStateRemoval(this.allChoices); //reset
        let P1Choice = 2;
        console.log("YOU choose SCISSORS");
        this.playerBatu.classList.add("active");
      }
      
      playKertas() {
        this.ActiveStateRemoval(this.allChoices); //reset
        let P1Choice = 3;
        console.log("YOU choose PAPER");
        this.playerBatu.classList.add("active");
      }
}

const player = new Game();


  

