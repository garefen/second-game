game.WinScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#32a852"), 0);
    },

    onDestroyEvent: function() {}
})