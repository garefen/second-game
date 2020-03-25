game.HUD = {};

game.HUD.Container = me.Container.extend({
    init: function() {
        this._super(me.Container, "init");

        this.isPersistent = true;
        this.floating = true;
        this.name = "HUD";

        this.addChild(new game.HUD.ScoreItem(-10, -10));
    }
})

game.HUD.ScoreItem = me.Renderable.extend({
    init: function(x, y) {
        this._super(me.Renderable, "init", [x, y, 10, 10]);

        me.loader.preload([
            { name: "arial", type: "binary", src: "data/fonts/arial.fnt" },
            { name: "image", type: "image", src: "data/img/player.png" }
        ])

        this.text = new me.BitmapFont(me.loader.getBinary('arial'), me.loader.getImage('image'));

        this.text.textAlign = "right";
        this.text.textBaseline = "bottom";

        
        this.score = -1;
    },

    update: function(time) {
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    draw: function(renderer) {
        this.text.draw(renderer, game.data.score, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
    }
});