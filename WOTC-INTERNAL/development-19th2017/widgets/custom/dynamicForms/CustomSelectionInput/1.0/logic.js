RightNow.namespace('Custom.Widgets.dynamicForms.CustomSelectionInput');
Custom.Widgets.dynamicForms.CustomSelectionInput = RightNow.Widgets.SelectionInput.extend({ 
   
    overrides: {
       
        constructor: function(data, instanceID) {
           
            this.parent();
						var attrs = this.data.attrs;
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
				
				/*-------------------------------------------------------------------------------------------
					If product selected is Live Operations team or Live Operations team->rightnow or 
					Live Operations team->Eats or Live Operations team->WER  or Live Operations team->OPTIMUS 
					or Live Operations team->Prime or Live Operations team->OPIS
					Then make the customfield severity required and all others not required.
				----------------------------------------------------------------------------------------------*/
				
				if(prod_id == 483 || prod_id == 485 || prod_id == 495 || prod_id == 1124 ||prod_id == 1982 || prod_id == 1983 || prod_id == 1984 || prod_id == 1981)
				{
					
					if(x == "Incident.CustomFields.c.severity"||x == "Incident.CustomFields.c.first_shift"||x == "Incident.CustomFields.c.employee_type")
					{
							this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.severity")
					{
						    
							var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
							console.log(labelnew);
							labelnew.innerHTML="Severity "+"<span class='rn_Required'> *</span>";
							this.data.attrs.required=true;
					}
				}
				/*--------------------------------------------------------------
		     	If product selected is Shift Reports
					Then make the customfields first_shift required and all others not required..
					-----------------------------------------------------------------*/
				else if(prod_id ==774 )
				{
					if(x == "Incident.CustomFields.c.severity"||x == "Incident.CustomFields.c.first_shift"||x == "Incident.CustomFields.c.employee_type")
					{
								this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.first_shift")
					{
						    
								var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
								console.log(labelnew);
								labelnew.innerHTML="1st Shift Time "+"<span class='rn_Required'> *</span>";
								this.data.attrs.required=true;
					}
				}
				/*--------------------------------------------------------------
		    	 If product selected is Employee Setup->New Onsite or Employee Setup->New Offsite 
					 Then make customfields Employee type & severity required and all others not required.
				-----------------------------------------------------------------*/
				else if(prod_id == 822 || prod_id == 823)
				{
					if(x == "Incident.CustomFields.c.severity"||x == "Incident.CustomFields.c.first_shift"||x == "Incident.CustomFields.c.employee_type")
					{
							this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.employee_type")
					{
						    
							var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
							console.log(labelnew);
							labelnew.innerHTML="Employee Type "+"<span class='rn_Required'> *</span>";
							this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.severity")
					{
						    
							var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
							console.log(labelnew);
							labelnew.innerHTML="Severity "+"<span class='rn_Required'> *</span>";
							this.data.attrs.required=true;
					}
				}
			else
			{
				/*--------------------------------------------------------------
		     	If no product is selected
					Then make all customfields not required.
				-----------------------------------------------------------------*/
				if(x == "Incident.CustomFields.c.severity"||x == "Incident.CustomFields.c.first_shift"||x == "Incident.CustomFields.c.employee_type")
					{
							this.data.attrs.required=false;
					}
			}
				
    }
});