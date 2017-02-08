RightNow.Widget.NavTiles = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;
	
    if (this.data.js.enabled)
        this._init();
};

RightNow.Widget.NavTiles.prototype = {
    _init: function() {
    }
};
