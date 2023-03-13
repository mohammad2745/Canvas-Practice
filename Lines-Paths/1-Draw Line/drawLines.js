window.onload = function() {

    // Definitions
    var canvas = document.getElementById("line-canvas");
    var context = canvas.getContext("2d");

    // Draw line steps
    context.beginPath(); // rest the context state
    context.moveTo(30, 30);
    context.lineTo(80, 80);
    context.lineTo(150, 20);
    context.lineTo(200, 180);
    context.lineTo(300, 100);
    context.stroke();
}