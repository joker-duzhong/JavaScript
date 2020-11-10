/*
游戏规则：

- 游戏有两位玩家，轮流玩。
- 在每一轮，玩家可以掷骰子任意次。每次的点数添加到当前得分中。
- 不过，如果掷出来点数为1，那么当前得分就变成0。之后，就轮到下一位玩家。
- 玩家可以选择 "Hold"，这意味着他本轮的分数被添加到总分上。之后，就轮到下一位玩家。
- 总分先到100点的玩家赢。

*/

let scores, roundScore, activePlayer, gamePlaying;

// init game
const init = () => {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "玩家 1";
  document.getElementById("name-1").textContent = "玩家 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
};

init();

const roll = () => {
  if (gamePlaying) {
    // 1. 随机数
    const dice = Math.floor(Math.random() * 6) + 1;

    //2. 显示结果
    const diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. 如果掷出来的点数不为1，就更新当前分数
    if (dice !== 1) {
      //加分
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //下一个玩家
      nextPlayer();
    }
  }
};

document.querySelector(".btn-roll").addEventListener("click", roll);

const hold = () => {
  if (gamePlaying) {
    // 将当前分数加到总分上
    scores[activePlayer] += roundScore;

    // 更新UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    // 检查玩家是否赢了
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "赢家!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //下一个玩家
      nextPlayer();
    }
  }
};

document.querySelector(".btn-hold").addEventListener("click", hold);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);