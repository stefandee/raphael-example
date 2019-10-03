cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        this.path = this.addComponent('R.path');
        this.path.fillColor = 'none';
        this.path.lineWidth = 5;
        this.path.showHandles = true;

        // i don't think this works for multi-touch, but should be ok for this simple use case
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
        
        /*
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.onTouchBegan.bind(this),
            onTouchMoved: this.onTouchMoved.bind(this),
            onTouchEnded: this.onTouchEnded.bind(this),
        }, this.node);
        */
    },

    onTouchBegan: function (event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

        this.points = [touchLoc];

        return true;
    },

    onTouchMoved: function (event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

        this.points.push(touchLoc);
        this.path.points(this.points);
    },

    onTouchEnded: function (event) {
        this.path.points(this.points);
        this.path.simplify();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
    },
});
