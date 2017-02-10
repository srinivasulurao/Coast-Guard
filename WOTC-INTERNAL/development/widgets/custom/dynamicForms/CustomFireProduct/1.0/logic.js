RightNow.namespace('Custom.Widgets.dynamicForms.CustomFireProduct');
Custom.Widgets.dynamicForms.CustomFireProduct = RightNow.Widgets.extend({ 
    /**
     * Widget constructor.
     */
    constructor: function() {
			     var vars = document.URL;
					
						var res = vars.split("/");
						
						var array = res.length; 
						for(i=0;i<array;i++)
						{
							var prod_id = res[i];
						}

                        prod_id=document.getElementById('form_product').value;
						
						if(isNaN(prod_id)=== false)
						{
							 var eventObject = new RightNow.Event.EventObject(this, {data: {product_id: prod_id}});
							 RightNow.Event.fire("evt_selected_product", eventObject);
						}

    },

    /**
     * Sample widget method.
     */
    methodName: function() {

    },

    /**
     * Makes an AJAX request for `default_ajax_endpoint`.
     */
    getDefault_ajax_endpoint: function() {
        // Make AJAX request:
        var eventObj = new RightNow.Event.EventObject(this, {data:{
            w_id: this.data.info.w_id,
            // Parameters to send
        }});
        RightNow.Ajax.makeRequest(this.data.attrs.default_ajax_endpoint, eventObj.data, {
            successHandler: this.default_ajax_endpointCallback,
            scope:          this,
            data:           eventObj,
            json:           true
        });
    },

    /**
     * Handles the AJAX response for `default_ajax_endpoint`.
     * @param {object} response JSON-parsed response from the server
     * @param {object} originalEventObj `eventObj` from #getDefault_ajax_endpoint
     */
    default_ajax_endpointCallback: function(response, originalEventObj) {
        // Handle response
    }
});