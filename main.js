var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 100
}
  
  function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Existential Crises"
  }
  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + "Existential Crises"
    document.getElementById("perClickUpgrade").innerHTML = "Read Nietzche (+1 Crisis/second " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }
  var mainGameLoop = window.setInterval(function() {
    mineGold()
  }, 1000)
