RightNow.namespace('Custom.Widgets.dynamicForms.DynamicCustomAllInput');
Custom.Widgets.dynamicForms.DynamicCustomAllInput = RightNow.Widgets.extend({ 
    
    constructor: function() {
			
			/*-----------------------------------------------------------
				Subcribed the value of product id which was fired from custom/DynamicProductCategory
			-------------------------------------------------------------*/
			
			RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);

    },

     _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
					
				var cf = this.data.js.fields;
				var len = cf.length;
				
				/*--------------------------------------------------------------
		     If product selected is Live Operations team or Live Operations team->rightnow or Live Operations team->Eats or 
				 Live Operations 		team->WER  or Live Operations team->OPTIMUS or Live Operations team->Prime or 
				 Live Operations team->OPIS
				 Then make the customfield severity visible and all others not visible.
				-----------------------------------------------------------------*/
				
				
				if(prod_id == 483 || prod_id == 485 || prod_id == 495 || prod_id == 1124 ||prod_id == 1982 || prod_id == 1983 || prod_id == 1984 || prod_id == 1981)
				{
					for(i=0; i<len; i++)
  				{
						var custom_field = this.data.js.fields[i];
						var	custom_field_name = custom_field.split(".");
						var	name = custom_field_name[3];
						document.getElementById("form_field_".concat(name)).style.display = "none";
					}
					document.getElementById("rn_cf_severity").style.display = "block";
					document.getElementById("rn_cf_names").style.display = "none";
					document.getElementById("rn_cf_shift_reports").style.display = "none";
					
				}
				/*--------------------------------------------------------------
		     	If product selected is Shift Reports
					Then make the customfields which needs to be visible and all others not visible..
					-----------------------------------------------------------------*/
				else if(prod_id ==774 )
				{
					for(i=0; i<len; i++)
  				{
						var custom_field = this.data.js.fields[i];
						var	custom_field_name = custom_field.split(".");
						var	name = custom_field_name[3];
						document.getElementById("form_field_".concat(name)).style.display = "none";
					}
					document.getElementById("rn_cf_severity").style.display = "none"; 
					document.getElementById("rn_cf_names").style.display = "none";
					document.getElementById("rn_cf_shift_reports").style.display = "block";
							
											
				}
				/*--------------------------------------------------------------
		    	 If product selected is Employee Setup->New Onsite or Employee Setup->New Offsite 
					 Then make customfields firstname,lastname,start Date,Employee type  visible and all others not visible.
				-----------------------------------------------------------------*/
				else if(prod_id == 822 || prod_id == 823)
				{
					for(i=0; i<len; i++)
  				{
						var custom_field = this.data.js.fields[i];
						var	custom_field_name = custom_field.split(".");
						var	name = custom_field_name[3];
						document.getElementById("form_field_".concat(name)).style.display = "none";
					}
					document.getElementById("rn_cf_severity").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "block";
					document.getElementById("rn_cf_severity").style.display = "block";
					document.getElementById("rn_cf_shift_reports").style.display = "none";
					
					
				}
				
				else
				{
				/*--------------------------------------------------------------
		     	If no product is selected
					Then make all customfields not visible.
				-----------------------------------------------------------------*/
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
							
						}
						 document.getElementById("rn_cf_severity").style.display = "none";
						 document.getElementById("rn_cf_names").style.display = "none";
						 document.getElementById("rn_cf_shift_reports").style.display = "none";
				}
    }
});