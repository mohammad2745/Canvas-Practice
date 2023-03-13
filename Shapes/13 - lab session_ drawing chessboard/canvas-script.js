window.onload = function() {

    // Definitions
    var canvas = document.getElementById("chessboard-canvas");
    var context = canvas.getContext("2d");

    // Colors
    var lightCellColor = "#ddb180";
    var darkCellColor = "#7c330c";

    // Frame
    context.strokeStyle = "black";
    context.strokeRect(250, 100, 400, 400);

    for (var i = 1; i <= 8; i++) {
        yAxis = 0;
        for (var j = 1; j <= 8; j++) {
            if ((i + j) % 2 != 0) {
                context.fillStyle = lightCellColor;
            } else {
                context.fillStyle = darkCellColor;
            }
            context.fillRect(200 + i * 50, 50 + j * 50, 50, 50);
        }
        yAxis += 10;
    }
}