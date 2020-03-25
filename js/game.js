
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0,
        arena : 1
    },

    "changeScore" : function(reset) {
        if (reset === 1) {
            game.data.score = 0;
        } else {
            game.data.score += 1;
        }
        document.getElementById("score").innerHTML = game.data.score;
    },

    "changeArena" : function(reset) {
        if (reset === 1) {
            game.data.arena = 1
        } else {
            game.data.arena += 1;
        }
        document.getElementById("arena").innerHTML = game.data.arena;
    },

    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {
        me.pool.register("player", game.Player);
        me.pool.register("enemy", game.Enemy);
        me.pool.register("laser", game.Laser);

        this.playScreen = new game.PlayScreen();
        this.gameOverScreen = new game.GameOverScreen();
        this.winScreen = new game.WinScreen();
        
        me.state.set(me.state.PLAY, this.playScreen);
        me.state.set(me.state.GAMEOVER, this.gameOverScreen);
        me.state.set(me.state.CREDITS, this.winScreen);

        // start the game
        me.state.change(me.state.PLAY);
    }
};
