bubble.game = (function() {
    var dom = bubble.dom;
    var $ = dom.$;

    var ballX,
        ballY,
        ballR;

    var ballCount;

    var timeoutVar;

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

        ballX = x;
        ballY = y;
        ballR = radi;

        if (ballCount > 0) {
            ballCount = ballCount - 1;
            timeoutVar = setTimeout(drawBall, radi * 50);

           document.getElementById("draw-background").delEventListener("click", touchEvent, false);
        }
    }

    function touchEvent(e) {
        console.log("Click at X: " + e.clientX + ", Y: " + e.clientY);
    }

    function start() {
          // 初始化輸入事件
           document.getElementById("draw-background").addEventListener("click", touchEvent, false);

           drawBall();
    }

    function initialize () {
        ballCount = 10;

        start();
        //bubble.websocket.createWebsocket();
    }

    return {
        initialize: initialize
    }

}
) ();
