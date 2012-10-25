var bubble = {
};

window.addEventListener("load", function() {

Modernizr.load([
    {
        load : [
            "sizzle.js",
            "dom.js",
            "game.js"
        ],
        complete : function() {
            bubble.game.drawBall();
        }
    }
]);

}, false);
