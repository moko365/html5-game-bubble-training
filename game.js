var game = (function() {

    function drawBall() {
        var canvas = document.getElementById("draw-background"),
                ctx = canvas.getContext("2d");

                canvas.width = 240;
                canvas.height = 320;

                ctx.beginPath();
                ctx.arc(50, 100, 50, 0 * Math.PI, 2 * Math.PI, false);    
                ctx.closePath();   
                ctx.fill();
    }

}) ();
