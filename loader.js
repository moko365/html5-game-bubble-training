window.addEventListener("load", function() {

Modernizr.load([
    {
        load : [
            "game.js"
        ],
        complete : function() {
            game.drawBall();
        }
    }
]);

}, false);