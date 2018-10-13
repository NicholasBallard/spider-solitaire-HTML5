function randomColor() {
    // get random values for R,G,B from 0 to 256
    var r = Math.floor(Math.random() * 256) // red
    var g = Math.floor(Math.random() * 256) // green
    var b = Math.floor(Math.random() * 256) // blue

    // make hexidecimal
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    // ensure each string is two digits
    if (hexR.length == 1) {
        hexR = "0" + hexR;
    }

    if (hexG.length == 1) {
        hexG = "0" + hexG;
    }

    if (hexB.length == 1) {
        hexB = "0" + hexB;
    }

    // make valid hexidecimal color string #RRGGBB
    var color = "#" + hexR + hexG + hexB;

    return color.toUpperCase();
}