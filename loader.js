var bubble = {
};

window.addEventListener("load", function() {

Modernizr.load([
    {
        test : Modernizr.websocket,
        yep: "websocket.js",
        nope: "websocket_none.js",
        complete : function() {
        }
    },
    {
        load : [
            "sizzle.js",
            "dom.js",
            "game.js"
        ],
        complete : function() {
            bubble.game.initialize();
        }
    }
]);

}, false);
