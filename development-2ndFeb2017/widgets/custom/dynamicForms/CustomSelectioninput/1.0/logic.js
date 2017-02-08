RightNow.namespace('Custom.Widgets.dynamicForms.CustomSelectioninput');
Custom.Widgets.dynamicForms.CustomSelectioninput = RightNow.Widgets.SelectionInput.extend({ 
   
    overrides: {
       
        constructor: function(data, instanceID) {
            // Call into parent's constructor
            this.parent();
						var attrs = this.data.attrs;
						this.instanceID = instanceID;
						this.data = data;
						var fieldName = data.js.name;
						this.data.attrs.required = false;
						this._inputField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name);
						//Subscribed the fired product id
						RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
        }

    },

    _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
				var x = this.data.js.name;
        //If product is WPN Organizer/Retailer->Place a Direct Sales Order->->
				if(prod_id == 1739)
				{
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
					
					if(x == "Incident.CustomFields.c.pref_ship_method")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Preferred Shipping Method "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
				}
				//If product is Corporate Information->Permission Request->-> 
				else if(prod_id == 1917)
				{
					
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
					
					if(x == "Incident.CustomFields.c.permissionproduct")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Product "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.permissiontype")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Type of Request "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.permisionmagicapp")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic: The Gathering App? "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				
				}
				//If product is WPN Organizer/Retailer->Events/Conventions->D&D Convention Support->
				else if(prod_id == 1986)
				{
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
					if(x == "Incident.CustomFields.c.con_tandcs")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Agree to Terms & Conditions? "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Apply to Beta
				else if(prod_id == 2002)
				{
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
					
					if(x == "Incident.CustomFields.c.beta_tandc_menu")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Agree to Terms & Conditions? "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				}
				//If product is Defective product
				else if(prod_id == 2111)
				{
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
					
					if(x == "Incident.CustomFields.c.defective_product")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Defective Product "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				}
				else
				{
					if(x == "Incident.CustomFields.c.pref_ship_method" || x == "Incident.CustomFields.c.permissionproduct" ||x == "Incident.CustomFields.c.permissiontype" || x == "Incident.CustomFields.c.permisionmagicapp" || x == "Incident.CustomFields.c.con_tandcs" ||x == "Incident.CustomFields.c.beta_tandc_menu" || x == "Incident.CustomFields.c.defective_product")
					{
									this.data.attrs.required=false;
					}	
				}
		}
});