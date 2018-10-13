function dealCards() {
    // 10 columns
    // left to right
    // 54 to start
    // last 10 in play
    // 40 in pile
    var columnCount = 10;
    var initialDeal = 54;
    // variable holds array of columns
    var cardColumns = [];
    // add the columns to the cardColumns array
    for (var i = 0; i < columnCount; i++) {
        cardColumns[i] = new Array();
    }
    // populate the array with cards
    counterColumn = 0;
    counterCards = 0;
    while (initialDeal > 0) {
        // code that populates array with cards
        cardColumns[counterColumn].push(deck[counterCards]);
        // increase counterColumn less than last index
        if (counterColumn < columnCount - 1) {
            counterColumn++;
        } else {
            counterColumn = 0;
        }
        counterCards++;
        initialDeal--;
    }
    return cardColumns;
}
