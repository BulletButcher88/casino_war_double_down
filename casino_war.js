
// game rules played at crown https://www.crownmelbourne.com.au/getmedia/58211b8e-3466-4537-a81a-dafacb64a6e6/2015_01_30-Casino_War_Rules_Version_3-0.pdf.aspx

// each deck of card has 13 cards

const oneDeck = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '7', '6', '5', '4', '3', '2']
const suits = ['Heart', 'Spade', 'Diamond', 'Club']

// According to Crown Melbourne Limited Casino War - Victorian Commission and Gambling Regulations - section 3.1 "Casino War will be played with four to eight decks, each deck having 52 cards without jokers, with backs of the same colour and design and one cutting card. "


// constructor object for dealt card
function cardConstructor(card, value) {
  this.card = card;
  this.value = value
}


let mainDeck = []

const fullDeck = function () {
  for(y = 0; y < 13; y++) {
        for( x = 0; x < 4; x++) {
          mainDeck.push(new cardConstructor(suits[x] + " " + oneDeck[y], y + 1))
        }
    }
  // random generator to pick the card
  let cardIndex = Math.floor((Math.random() * 51) + 1)
  return mainDeck[cardIndex]
}


// game caller function
function playConstructor(draw,lose, win) {
  this.draw = 0;
  this.lose = 0;
  this.win = 0;
}


function warFunction(gamePly) {

    while(gamePly.draw <= 1){

      player1 = fullDeck();
      dealer = fullDeck();

    if (player1.value > dealer.value) {
        console.log(`\n   DEALER WINS\n   ${dealer.card} beats ${player1.card}\n`)
        return gamePly.draw = 2
      
      } else {
        console.log(`\n   YOU WIN CASINO WAR\n   ${player1.card} beats ${dealer.card}\n`)
        return  gamePly.win + 1
    }
   }
}


function gameCall() {
  
  const gamePly = new playConstructor()
  
  
  while(gamePly.win < 1) {
    
    let player1 = fullDeck();
    let dealer = fullDeck();
    
    if (player1 === undefined || dealer === undefined) {
      console.error("\nError has accurred with the dealing \n")

    }

    if (player1.value == dealer.value) {
      console.log("\n   DRAW, CASINO WAR! \n")
      warFunction(gamePly)

    } 
    if (player1.value < dealer.value) {
      gamePly.win =  gamePly.win + 1
      console.log(`\n   YOU WON\n   ${player1.card} beats ${dealer.card}\n`)

    } else {
      gamePly.lose = gamePly.lose + 1 ;
      console.log(`\n   DEALER WON\n   ${dealer.card} beats ${player1.card}\n`)
    }
  }


  totalLoses = gamePly.draw + gamePly.lose
  return totalLoses
}

gameCall()





function casinoWar(minBid, rounds) {
  let entry = minBid
  console.log(` \n   @@------------------CASINO WAR------------------@@ \n \n    First round original wager of $${minBid}\n    what each amounts to each round is\n    if you double down bets`)
  
  var total = 0;
  for(let x = 0; x < rounds; x++) {
   minBid = minBid * 2
   total =  total + minBid
   console.log(` \n       
   Doubling bets round ${x + 2} BET PLACED  $ ${minBid}`)
  }
  console.log(`\n   TOTAL RISK $ ${total + entry}`)
  console.log(`\n   A win on any rounds is  winning back the original wager of $ ${entry}  \n`)
}

// first parameter takes the min bet of the casio war game, and the second parameter calculate how many rounds extra to win back the bet, given each round we double the original wager bet
casinoWar(10, totalLoses)
