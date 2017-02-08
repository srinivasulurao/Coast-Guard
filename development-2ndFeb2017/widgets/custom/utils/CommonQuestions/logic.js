RightNow.Widget.CommonQuestions = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;

    if (this.data.js.enabled)
        this._init();
};

RightNow.Widget.CommonQuestions.prototype = {
    _init: function() {
    }
};
