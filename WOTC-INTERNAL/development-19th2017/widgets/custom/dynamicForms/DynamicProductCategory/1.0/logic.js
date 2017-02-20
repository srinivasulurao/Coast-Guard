RightNow.namespace('Custom.Widgets.dynamicForms.DynamicProductCategory');
Custom.Widgets.dynamicForms.DynamicProductCategory = RightNow.Widgets.ProductCategoryInput.extend({ 
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
			  

            if(this.data.js.data_type==="Product"){
                var eventObject = new RightNow.Event.EventObject(this, {data: {product_id: nValue}});     
    		    RightNow.Event.fire("evt_selected_product", eventObject);
            }
            if(this.data.js.data_type==="Category"){
                var eventObject = new RightNow.Event.EventObject(this, {data: {category_id: nValue}});    
                RightNow.Event.fire("evt_selected_category", eventObject);
            }
       
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
        // getSubLevelRequest: function (expandingNode)
        // getSubLevelRequestEventObject: function(expandingNode)
        // getSubLevelResponse: function(type, args)
        // _setButtonClick: function()
        // _onValidate: function(type, args)
        // _createHintElement: function(visibility)
        // _toggleHint: function(hideOrShow)
        // _realignHint: function(delay)
        // swapLabel: function(container, requiredLevel, label, template)
        // updateRequiredLevel: function(evt, constraint)
        // _checkSelectionErrors: function()
        // _removeErrorMessages: function()
        // _displayErrorMessage: function(message, currentNode)
    },

    /**
     * Sample widget method.
     */
    methodName: function() {

    }
});