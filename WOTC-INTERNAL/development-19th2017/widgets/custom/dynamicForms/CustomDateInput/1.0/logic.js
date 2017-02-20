RightNow.namespace('Custom.Widgets.dynamicForms.CustomDateInput');
Custom.Widgets.dynamicForms.CustomDateInput = RightNow.Widgets.DateInput.extend({ 
    
    overrides: {
       
        constructor: function(data, instanceID) {
            // Call into parent's constructor
          	this.parent();
						this.instanceID = instanceID;
						this.data = data;
						var fieldName = data.js.name;
						this.data.attrs.required = false;
						this._inputField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name);
						
						/*-----------------------------------------------------------
						Subcribed the value of product id which was fired from custom/DynamicProductCategory
						-------------------------------------------------------------*/
						RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
        }

    },

     _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
				var x = this.data.js.name;
				
				/*--------------------------------------------------------------
		     If product selected is Employee Setup->New Onsite or Employee Setup->New Offsite 
					Then make customfields start Date required and all others not required.
				-----------------------------------------------------------------*/
				
				if(prod_id == 822 || prod_id == 823)
				{
					if(x == "Incident.CustomFields.c.start_date")
					{
							this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.start_date")
					{
							var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Legend");
							console.log(labelnew);
							labelnew.innerHTML="Start Date "+"<span class='rn_Required'> *</span>";
							this.data.attrs.required=true;
					}
				}
				else
				{
					/*--------------------------------------------------------------
		     		If no product is selected
						Then make customfields start Date not visible.
					-----------------------------------------------------------------*/
					if(x == "Incident.CustomFields.c.start_date")
					{
								this.data.attrs.required=false;
					}
				}

    }
});