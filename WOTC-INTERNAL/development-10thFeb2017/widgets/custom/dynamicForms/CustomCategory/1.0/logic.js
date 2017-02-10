RightNow.namespace('Custom.Widgets.dynamicForms.CustomCategory');
Custom.Widgets.dynamicForms.CustomCategory = RightNow.Widgets.ProductCategoryInput.extend({ 
    /**
     * Place all properties that intend to
     * override those of the same name in
     * the parent inside `overrides`.
     */
    overrides: {
        /**
         * Overrides RightNow.Widgets.ProductCategoryInput#constructor.
         */
        constructor: function() {
            // Call into parent's constructor
            this.parent();
        },

			/*----------------------------------------------
			
			Function name: selectNode (standard function)
			Functionality: The selected Product id is taken and fired using event object
			Developer: Amala			
			-------------------------------------------------*/	
				
				selectNode: function(node) {
        
				this._selected = true;
				console.log(node);
				nValue = node['value'];
			  var eventObject = new RightNow.Event.EventObject(this, {data: {category_id: nValue}});
		    RightNow.Event.fire("evt_selected_category", eventObject);
       
        if ((!node.expanded && node.value && !node.loaded) ||
           (this.data.js.linkingOn && this.data.js.data_type === "Product")) {
            this.getSubLevelRequest(node);
        }
        else {
            this._errorLocation = "";
            this._checkSelectionErrors();
        }

        RightNow.ProductCategory.prototype.selectNode.call(this, node);
    }
        
    },

    /**
     * Sample widget method.
     */
    methodName: function() {

    }
});