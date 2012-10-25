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

        // radi is in [0 .. 80]
        var radi = Math.floor(Math.random() * 80);

        if (radi < 15) {
            radi = 15;
        }

        // 產生位置
        var x = Math.floor(Math.random() * (rect.width - radi)),
            y = Math.floor(Math.random() * (rect.height - radi));

        ctx.beginPath();
        ctx.arc(x, y, radi, 0 * Math.PI, 2 * Math.PI, false);    
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
