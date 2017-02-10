RightNow.namespace('Custom.Widgets.dynamicForms.CustomTextInput');
Custom.Widgets.dynamicForms.CustomTextInput = RightNow.Widgets.TextInput.extend({ 
    
    overrides: {
        
        constructor: function(data, instanceID) {
            // Call into parent's constructor
            this.parent();
						this.instanceID = instanceID;
						this.data = data;
						var fieldName = data.js.name;
						this._inputField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name);
						//Subscribed the fired product id
						RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
        }

    },

    _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
				
				var x = this.data.js.name;
				
			 //If product is Magic: The Gathering->Magic: The Gathering Online->Report Conduct->
				if(prod_id == 529)
				{
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}		
					if(x == "Incident.CustomFields.c.login_id")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
					if(x == "Incident.CustomFields.c.opponents_userid")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Opponent's User ID "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Email/Password Change->
				else if(prod_id == 713)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.login_id")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.first_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="First Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.last_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Last Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.new_email_address")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="New Email Address "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Refund An Order->
				else if(prod_id == 530)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.login_id")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.first_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="First Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.last_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Last Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.items_ordered")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Items to be Returned "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Request Reimbursement / Report an Issue->
				else if(prod_id == 870)
				{
					
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.login_id")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.event_number")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Event or Match ID "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Order Issues->
				else if(prod_id == 528)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.login_id")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.first_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="First Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.last_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Last Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.email_address_crash")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="MtGO Email Address "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				
				}
				//If product is WPN Organizer/Retailer->Place a Direct Sales Order->->
				else if(prod_id == 1739)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.store_name_inc")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Store Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.store_city_inc")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Store City "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.store_state_province_inc")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Store State/Province "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.preferred_credit_card")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Preferred Credit Card Last 4 Digits"+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
			
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Account Issue
				else if(prod_id == 1885)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.login_id")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.wizards_community_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Wizards Account Screen Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				
				}
				//If product is WPN Organizer/Retailer->Events/Conventions->D&D Convention Support->
				else if(prod_id == 1986)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					if(x == "Incident.CustomFields.c.con_name")
					{
									
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Convention Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_local")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Location of Convention "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_age")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Age of Convention (Years) "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_attend")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Estimated Attendance "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_ddtables")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Estimated Number of D&D Tables "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_dunmas")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Estimated Dungeon Masters "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.con_emailorg")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Email for Convention Organizer "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
			
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Apply to Beta
				else if(prod_id == 2002)
				{
					var x = this.data.js.name;
					this.data.attrs.required = false;
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					
					if(x == "Incident.CustomFields.c.login_id")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Online Username "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.wizards_community_name")
					{
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Wizards Account Screen Name "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				
				}
				
				else
				{
					if(x == "Incident.CustomFields.c.login_id" || x == "Incident.CustomFields.c.opponents_userid" ||x == "Incident.CustomFields.c.first_name" || x == "Incident.CustomFields.c.last_name" ||x == "Incident.CustomFields.c.new_email_address" ||x == "Incident.CustomFields.c.items_ordered" ||x == "Incident.CustomFields.c.event_number" || x == "Incident.CustomFields.c.email_address_crash" ||x == "Incident.CustomFields.c.wizards_community_name" || x == "Incident.CustomFields.c.store_name_inc"||x == "Incident.CustomFields.c.store_city_inc"||x == "Incident.CustomFields.c.store_state_province_inc"||x == "Incident.CustomFields.c.preferred_credit_card"||x == "Incident.CustomFields.c.con_name"||x == "Incident.CustomFields.c.con_local"||x == "Incident.CustomFields.c.con_age"||x == "Incident.CustomFields.c.con_attend"||x == "Incident.CustomFields.c.con_ddtables"||x == "Incident.CustomFields.c.con_dunmas"||x == "Incident.CustomFields.c.con_emailorg")
					{
									this.data.attrs.required=false;
					}
					
			 }
    }
});