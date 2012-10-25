window.addEventListener("load", function() {

Modernizr.load([
    {
        load : [
            "sizzle.js",
            "game.js"
        ],
        complete : function() {
            game.drawBall();
        }
    }
]);

}, false);
