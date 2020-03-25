game.loadScreen = me.ScreenObject.extend({
    onResetEvent: function() {
        me.game.world.addChild(new me.ColorLayer("background", "#e3e3e3"), 0);
    },
});