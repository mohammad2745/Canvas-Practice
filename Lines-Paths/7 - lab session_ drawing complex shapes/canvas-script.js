window.onload = function() {

    // Definitions
    var canvas = document.getElementById("lab-complex-shapes-canvas");
    var context = canvas.getContext("2d");

    /*
    lineCap = butt|round|square
    lineJoin = bevel|round|miter
    shadowColor = color of shadow
    shadowBlur = 	blur amount of shadows
    shadowOffsetX	= horizontal distance of the shadow from the shape
    shadowOffsetY	= vertical distance of the shadow from the shape
    */

    // First Z Object
    context.beginPath();
    context.lineWidth = 10;
    context.strokeStyle = "red";
    context.lineCap = "round";
    context.lineJoin = "round";
    context.shadowColor = "black";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.lineTo(50, 150);
    context.lineTo(150, 150);
    context.stroke();
}