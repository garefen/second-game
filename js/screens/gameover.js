game.GameOverScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#ffffff"), 0);
        // me.loader.preload([
        //     { name: "roboto", type: "binary", src: "data/fonts/Roboto-Medium.ttf" },
        // ]);
        // const text = new me.BitmapText(
        //     50, 50, {
        //         font: 'roboto',
        //         size: '20px',
        //         text:"Ola"
        //     }
        // )
    },

    onDestroyEvent: function() {}
})