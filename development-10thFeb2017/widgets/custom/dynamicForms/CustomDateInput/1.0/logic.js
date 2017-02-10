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
						//Product id is subscribed
						RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
        }

    },

   _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
				var x = this.data.js.name;
				//If WPN Organizer/Retailer->Events/Conventions->D&D Convention Support-> make date span 1 and date span 2 required and others not required.
				if(prod_id == 1986)
				{
					if(x == "Incident.CustomFields.c.con_datespan1" || x == "Incident.CustomFields.c.con_datespan2")
					{
									this.data.attrs.required=false;
					}	
					if(x == "Incident.CustomFields.c.con_datespan1")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Legend");
									console.log(labelnew);
									labelnew.innerHTML="Starting Date of Convention "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_datespan2")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Legend");
									console.log(labelnew);
									labelnew.innerHTML="End Date of Convention "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
				}
				else
				{
					if(x == "Incident.CustomFields.c.con_datespan1" || x == "Incident.CustomFields.c.con_datespan2")
					{
									this.data.attrs.required=false;
					}	
				}
		}
});