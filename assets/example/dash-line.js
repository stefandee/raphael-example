cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        var path = this.addComponent('R.path');

        path.dashOffset = 0;
        path.dashArray = [10];

        path.rect(-100, -100, 200, 200);

        path.makePath();
    }
});
