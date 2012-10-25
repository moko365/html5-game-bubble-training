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

    function touchEvent(e) {
        console.log("Click at X: " + e.clientX + ", Y: " + e.clientY);
    }

    function start() {
          // 初始化輸入事件
           document.getElementById("draw-background").addEventListener("click", touchEvent, false);
    }

    function initialize () {
        drawBall();
        start();
        //bubble.websocket.createWebsocket();
    }

    return {
        initialize: initialize
    }

}
) ();
