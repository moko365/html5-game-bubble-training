window.addEventListener("load", function () {

    Modernizr.load([
            {
               load : [
                    "script/game.js"
                    ],
                complete : function() {
                    alert("All loaded.");
                    game.drawBall();
                }
        }
        ]);
        
    ), false);
        
