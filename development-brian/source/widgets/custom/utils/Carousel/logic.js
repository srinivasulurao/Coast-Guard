var _carousel = null;
RightNow.Widget.Carousel = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;
	
    if (this.data.js.enabled){	
        this._init();		
		YAHOO.util.Event.addListener("rn_"+this.instanceID+"_btnCarouselPrev", "click", this._setPrevPage,this);
		YAHOO.util.Event.addListener("rn_"+this.instanceID+"_btnCarouselNext", "click", this._setNextPage,this);
	}
};

RightNow.Widget.Carousel.prototype = {
    _init: function() {
	
		var imageNodes = YAHOO.util.Dom.getElementsByClassName('imgCarouselMobile');		
		for(var i=0; i<imageNodes.length; i++){	
			var originalWidth = YAHOO.util.Dom.getAttribute(imageNodes[i], 'width');
			var originalHeight = YAHOO.util.Dom.getAttribute(imageNodes[i], 'height');
			var newWidth = YAHOO.util.Dom.getViewportWidth()*0.9;
			var newHeight = (originalHeight*newWidth)/originalWidth;	
			
			YAHOO.util.Dom.setAttribute(imageNodes[i], 'width', newWidth); 
			YAHOO.util.Dom.setAttribute(imageNodes[i], 'height', newHeight); 
		}
		
        // create the YUI carousel
        _carousel = new YAHOO.widget.Carousel("rn_" + this.instanceID + "_Container", {
            animation: { speed: 1, effect: YAHOO.util.Easing.easeInOut },
            autoPlayInterval: (this.data.js.duration * 1000),
            isCircular: true,               // causes the carousel to continuously loop
            numVisible: 1
        });

        // create the YUI pagination for the individual page links
        // NOTE:    The YUI carousel has this functionality, but it was *not* updating the class names
        //          on the indicator DOM elements (for unknown reasons); this resulted in an inability
        //          to uniquely style the active indicator element
        var paginator = new YAHOO.widget.Paginator({
            containers: "rn_" + this.instanceID + "_Pagination",
            rowsPerPage: 1,
            template: "{PageLinks}",        // only show the individual indicator elements, not the prev/next elements
            totalRecords: _carousel.get("numItems")
        });

        // manually position the carousel when a pagination element is clicked
        paginator.subscribe("changeRequest", function (state) {
            _carousel.set("selectedItem", (state.page - 1));
            paginator.setState(state);
        });

        // update the pagination elements when the carousel advances
        _carousel.on("pageChange", function (page) {
            paginator.setPage(page + 1, true);
        });

        // render and display the carousel
        _carousel.render();
        _carousel.show();

        // render and display the pagination
        paginator.render();

        // start autoplay for the carousel
        _carousel.startAutoPlay();		
    },
	_setPrevPage: function (){		
		if(_carousel){
			_carousel.scrollBackward();
		}
	},
	_setNextPage: function (){
		if(_carousel){
			_carousel.scrollForward();
		}
	}
};
