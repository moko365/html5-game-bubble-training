bubble.game = (function() {
    var dom = bubble.dom;
    var $ = dom.$;

    function drawBall() {
        var canvas = document.getElementById("draw-background"),
                ctx = canvas.getContext("2d");

        var background = $("#game #draw-background")[0],
            rect = background.getBoundingClientRect();

        canvas.width = rect.width;
        canvas.height = rect.height;

        ctx.beginPath();
        ctx.arc(50, 100, 50, 0 * Math.PI, 2 * Math.PI, false);    
        ctx.closePath();   
        ctx.fill();
    }

    function initialize () {
        drawBall();
        bubble.websocket.createWebsocket();
    }

    return {
        initialize: initialize
    }

}
) ();
