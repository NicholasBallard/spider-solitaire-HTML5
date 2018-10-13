function makeDeck(numberOfSuits) {
  var faces = "A23456789XJQK".split(""); // X is 10
  // suit option
  if (numberOfSuits === 1) {
    var suits = "S".split(""); // array
    faces = multiplyArray(faces, suits);
  } else if (numberOfSuits === 2) {
    var suits = "SH".split("");
    faces = multiplyArray(faces, suits);
  } else if (numberOfSuits === 4) {
    var suits = "CDHS".split("");
    faces = multiplyArray(faces, suits);
  } else {
    console.log("Need to set numberOfSuits argument to 1, 2, or 4.");
  }
  var deck = [];
  var counter = 0;
  for (let f = 0; f < faces.length; f++) {
    for (let s = 0; s < suits.length; s++) {
      // declaring String object so able to add properties
      var obj = new String(faces[f] + suits[s]);
      //assign name
      obj.name = faces[f] + suits[s];
      // assign color
      if (obj.includes("H") || obj.includes("D")) {
        obj.color = "red";
      } else {
        obj.color = "black";
      }
      // assign rank (Ace is 1, 3H is 3, etc.)
      switch (obj[0]) {
        case "A":
          obj.rank = 1;
          break;
        case "X":
          obj.rank = 10;
          break;
        case "J":
          obj.rank = 11;
          break;
        case "Q":
          obj.rank = 12;
          break;
        case "K":
          obj.rank = 13;
          break;
        case !isNaN(obj[0]):
          obj.rank = Number(obj[0]);
          break;
        default:
          break;
      }
      // assign suit
      switch (obj[1]) {
        case "S":
          obj.suit = "spades";
          break;
        case "D":
          obj.suit = "diamonds";
          break;
        case "C":
          obj.suit = "clubs";
          break;
        case "H":
          obj.suit = "hearts";
          break;
        default:
          break;
      }

      // assign unique key
      obj.key = counter;
      counter++;
      // add object to deck array
      deck.push(obj);

      // instantiate playable property
      obj.playable = false;
    }
  }

  // make two decks for spider
  console.log(deck.length + " cards made.");

  // shuffle the deck
  deck = shuffle(deck);
  return deck;
}

function multiplyArray(faces, suits) {
  /* Concatenates faces as many times is needed
      to make a full two-deck compliment of cards.
  */

  // 104 cards required
  var totalCardCount = 104;
  var multiplier = totalCardCount / faces.length / suits.length - 1;
  var originalArray = faces.slice(0);
  for (var i = 0; i < multiplier; i++) {
    faces = faces.concat(originalArray);
  }
  return faces;
}

function shuffle(array) {
  /* Shuffle done using the Fisher-Yates shuffling method.
     This accomplishes the job in O(n) time.
     More on this here:
     https://bost.ocks.org/mike/shuffle/
  */

  var m = array.length,
    t,
    i;

  // While there are items remaining to shuffle
  while (m) {
    // Choose a remaining item
    i = Math.floor(Math.random() * m--);

    // Then swap it with the current element.
    t = array[m];
    array[m] = array[i]; // starts at 104 in this case
    array[i] = t;
  }
  return array;
}
