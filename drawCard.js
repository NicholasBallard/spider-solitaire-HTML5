function drawCard(x, y, mouseX, mouseY, card) {
  // playing cards are 3.5H X 2.5W
  var cardHeight = Math.round(canvas.width / cardColumns.length) - padding;
  var cardWidth = Math.round((0.25 / 0.35) * cardHeight);

  ctx.beginPath();
  ctx.lineWidth = 1; // pixels
  ctx.strokeStyle = "grey";
  ctx.rect(x, y, cardWidth, cardHeight);
  ctx.stroke();

  // if playable show
  if (card.playable) {
    ctx.beginPath();
    ctx.fillStyle = card.color;
    ctx.fillRect(x + 1, y + 1, cardWidth - 2, cardHeight - 2);
    ctx.fill();
    var content = card;
    ctx.fillStyle = "white";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = Math.trunc(cardWidth * 0.5) + "px Arial";
    // middle
    ctx.fillText(content, x + cardWidth / 2, y + cardHeight / 2);
    // top left
    ctx.font = Math.trunc(cardWidth * 0.2) + "px Arial";
    ctx.fillText(
      content,
      x + cardWidth - cardWidth * 0.8,
      y + cardHeight - cardHeight * 0.9
    );
    // top right
    ctx.fillText(
      content,
      x + cardWidth - cardWidth * 0.2,
      y + cardHeight - cardHeight * 0.1
    );

  } else {
    /* if not playable show back */
    ctx.fillStyle = "powderblue";
    ctx.fillRect(x + 1, y + 1, cardWidth - 2, cardHeight - 2);
    ctx.fill();
  }
  ctx.fill();
  ctx.closePath();
}
