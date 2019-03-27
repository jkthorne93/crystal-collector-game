//jquery startup 

console.log('connect')
$(document).ready(function () {
  // var for random number 
  var randomNum = randomNumGenerator()
  // var wins 
  var wins = 0
  // var losses
  var losses = 0
  // player number
  var playerNum = 0

  function randomNumGenerator() {
    return Math.floor(Math.random() * 102) + 19
  }

  function randomNumCrystals() {
    // Crystals object.
    return {
      red: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/red.png"
      },
      blue: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/blue.png"
      },
      yellow: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/yellow.png"
      },
      green: {
        points: Math.floor(Math.random() * 12) + 1,
        imageUrl: "assets/images/green.png"
      }
    };
  }
  //function for inital gameplay that starts random number generators reset player number after game is over
 resetGame();
  // for loop to populate images 
  var crystalImages = randomNumCrystals();
  for (var color in crystalImages) {
    console.log(color, crystalImages[color]);
    $('div[id^="images"]').append("<img currentScore=" + crystalImages[color].points + " src=" + crystalImages[color].imageUrl + ">");
  }
  // onclick events to grab data
  $('#images img').each(function () {
    var $this = $(this);
    $(this).on("click", function () {
      updatePlayerNum($this)
      console.log(playerNum)
    });
  });
  // function for player score 
  function updatePlayerNum(crystal) {
    playerNum += parseInt(crystal.attr("currentScore"));
    endGame()
  }
 function endGame (){
  if (playerNum === randomNum) {
    // Show victory message, restart the game, and render the new "current guess" number.
    $("#message").html("<p>Bam son!! </p>");
    wins++
    $('#wins .text').text(wins);
    resetGame();
  }
  // If the user lost...
  else if (playerNum > randomNum) {
    // Show defeat message, restart the game, and render the new "current guess" number.
    $("#message").html("<p>You lose sukka!! </p>");
    losses++
    $('#losses .text').text(losses);
    resetGame();
    
    
  }
}
  
  // update the entire dom for end gameplay
  function resetGame() {
    randomNumCrystals();
    randomNumGenerator();
    playerNum = 0;
  }
function (){


}




})