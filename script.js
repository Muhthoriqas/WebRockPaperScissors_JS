class Start {
  constructor() {
    this.playerName = "KAMU";
    this.botName = "RIQBOT";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  get getBotOption() {
    return this.botOption;
  }

  set setBotOption(option) {
    this.botOption = option;
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  botBrain() {
    const option = ["✊", "✌", "✋"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winnerChoose() {
    if (this.botOption == "✋" && this.playerOption == "✌") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✌" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✌" && this.playerOption == "✋") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✊" && this.playerOption == "✋") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✋" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✊" && this.playerOption == "✌") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }
  matchResult() {
    if (this.winner != "SERI") {
      return `${this.winner} MENANG NIH! 😼`;
    } else {
      return `WAA ${this.winner} BOS 😹`;
    }
  }
}
function pick(params) {
  const start = new Start();
  start.playerOption = params;
  start.setBotOption = start.botBrain();
  start.winnerChoose();

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  inGame.textContent = "LAWAN LAGI MIKIR ...";
  result.textContent = "";

  setTimeout(() => {
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
    result.textContent = start.matchResult();
  }, 1000);
}
const goToTop = () => {
  return (location.href = "#intro");
};
