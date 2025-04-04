export class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu: 0
    };
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse() {
    let acceptedValues = [ `rock`, `paper`, `scissors` ];
    const randomIndexNumber = Math.floor(Math.random() * 3);

    return acceptedValues[randomIndexNumber];
  }

  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection) {
    if (userSelection == cpuSelection) {
      return `tie`;
    }
    else if (
      (userSelection == `paper` && cpuSelection == `rock`) ||
      (userSelection == `scissors` && cpuSelection == `paper`) ||
      (userSelection == `rock` && cpuSelection == `scissors`)
    ) {
      return `win`;
    }
    else {
      return `lose`;
    }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    const cpuSelection = this.generateCPUResponse();
    const results = this.determineWinner(userSelection, cpuSelection);

    // Update scores
    if (results == `win`) {
      this.score.user++;
    }
    if (results == `lose`) {
      this.score.cpu++;
    }

    // Add the result to the history log
    const gameHistoryEntry = `${this.username} selected ${userSelection}. CPU selected ${cpuSelection}: ${this.username} ${results}s`;
    this.gameHistoryLog.push(gameHistoryEntry);

    // Update the DOM with the new history log
    const historyElement = document.getElementById(`game-history`);
    const newHistoryItem = document.createElement(`p`);
    newHistoryItem.textContent = gameHistoryEntry;  // Add the history text
    historyElement.appendChild(newHistoryItem);  // Append to the game history section
  }
}
