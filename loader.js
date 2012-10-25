var bubble = {
};

window.addEventListener("load", function() {

Modernizr.load([
    {
        load : [
            "sizzle.js",
            "game.js"
        ],
        complete : function() {
            bubble.game.drawBall();
        }
    }
]);

}, false);
