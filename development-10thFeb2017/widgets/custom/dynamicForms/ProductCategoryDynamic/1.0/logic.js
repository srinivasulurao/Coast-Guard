RightNow.namespace('Custom.Widgets.dynamicForms.ProductCategoryDynamic');
Custom.Widgets.dynamicForms.ProductCategoryDynamic = RightNow.Widgets.ProductCategoryInput.extend({ 
    
    overrides: {
       
        constructor: function() {
            this.parent();
						
					
            
        },
/*---------------------------------------------------------------
The selcted product id is fired using the event object

---------------------------------------------------------------*/
     
				
				selectNode: function(node) 
				{
        
					this._selected = true;
							
					nValue = node['value'];
					var eventObject = new RightNow.Event.EventObject(this, {data: {product_id: nValue}});
					RightNow.Event.fire("evt_selected_product", eventObject);
				 
					if ((!node.expanded && node.value && !node.loaded) ||
						 (this.data.js.linkingOn && this.data.js.data_type === "Product")) {
							this.getSubLevelRequest(node);
					}
					else {
							this._errorLocation = "";
							this._checkSelectionErrors();
					}
	
					RightNow.ProductCategory.prototype.selectNode.call(this, node);
						
    		},
        
    },
		  

});