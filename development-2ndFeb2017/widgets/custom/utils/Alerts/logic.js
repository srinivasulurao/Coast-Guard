RightNow.Widget.Alerts = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;

    if (this.data.js.enabled)
        this._init();
};

RightNow.Widget.Alerts.prototype = {
    _init: function() {
    }
};
