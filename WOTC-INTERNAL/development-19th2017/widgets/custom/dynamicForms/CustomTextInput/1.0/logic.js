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
		     	If product selected is Shift Reports
					Then make the customfields which needs to be required and all others not required..
					-----------------------------------------------------------------*/
				if(prod_id ==774 )//Shift Reports
				{
					
					if(x == "Incident.CustomFields.c.hours_worked"||x == "Incident.CustomFields.c.t1s_game_q"||x == "Incident.CustomFields.c.t1s_magic_rules"||x == "Incident.CustomFields.c.t1s_events_questions"||x == "Incident.CustomFields.c.t1s_events_current"||x == "Incident.CustomFields.c.t1s_mtgo_beta_qs"||x == "Incident.CustomFields.c.t1s_non_magic"||x == "Incident.CustomFields.c.t1s_conduct_issue"||x == "Incident.CustomFields.c.t1s_store_issue"||x == "Incident.CustomFields.c.t1s_refunds_bugs"||x == "Incident.CustomFields.c.t1s_interface"||x == "Incident.CustomFields.c.t1s_dissatisfied_customers"||x == "Incident.CustomFields.c.t1s_tech_issue"||x == "Incident.CustomFields.c.t1s_special1"||x == "Incident.CustomFields.c.t1s_special2"||x == "Incident.CustomFields.c.t1s_forums_answerpost"||x == "Incident.CustomFields.c.t1s_forums_closedthreads"||x == "Incident.CustomFields.c.t1s_forums_actionedconduct"||x == "Incident.CustomFields.c.t1s_forums_special3"||x == "Incident.CustomFields.c.first_name"||x == "Incident.CustomFields.c.last_name")
					{
									this.data.attrs.required=false;
					}
					
					
					if(x == "Incident.CustomFields.c.hours_worked")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Scheduled Hours "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_game_q")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Gen. Magic/MtGO Q's "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_magic_rules")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Magic Rules "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_events_questions")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Gen. Events Question "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_events_current")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Current Events "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_mtgo_beta_qs")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="MtGO Beta Questions "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_non_magic")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Non Magic Questions "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_conduct_issue")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Conduct Issue "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_store_issue")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Store Issue "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_refunds_bugs")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Refunds/Bugs "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_interface")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Interface Questions "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_dissatisfied_customers")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Dissatisfied Customer "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_tech_issue")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Technical Issue "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_special1")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Special 1 "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_special2")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Special 2 "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_forums_answerpost")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Answer Posts "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_forums_closedthreads")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Closed Threads "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_forums_actionedconduct")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Actioned Conduct "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
					if(x == "Incident.CustomFields.c.t1s_forums_special3")
					{
						    
									var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
									console.log(labelnew);
									labelnew.innerHTML="Special 3 "+"<span class='rn_Required'> *</span>";
									this.data.attrs.required=true;
					}
				}
				else if(prod_id == 822 || prod_id == 823)
				{
					
					if(x == "Incident.CustomFields.c.hours_worked"||x == "Incident.CustomFields.c.t1s_game_q"||x == "Incident.CustomFields.c.t1s_magic_rules"||x == "Incident.CustomFields.c.t1s_events_questions"||x == "Incident.CustomFields.c.t1s_events_current"||x == "Incident.CustomFields.c.t1s_mtgo_beta_qs"||x == "Incident.CustomFields.c.t1s_non_magic"||x == "Incident.CustomFields.c.t1s_conduct_issue"||x == "Incident.CustomFields.c.t1s_store_issue"||x == "Incident.CustomFields.c.t1s_refunds_bugs"||x == "Incident.CustomFields.c.t1s_interface"||x == "Incident.CustomFields.c.t1s_dissatisfied_customers"||x == "Incident.CustomFields.c.t1s_tech_issue"||x == "Incident.CustomFields.c.t1s_special1"||x == "Incident.CustomFields.c.t1s_special2"||x == "Incident.CustomFields.c.t1s_forums_answerpost"||x == "Incident.CustomFields.c.t1s_forums_closedthreads"||x == "Incident.CustomFields.c.t1s_forums_actionedconduct"||x == "Incident.CustomFields.c.t1s_forums_special3"||x == "Incident.CustomFields.c.first_name"||x == "Incident.CustomFields.c.last_name")
					{
									this.data.attrs.required=false;
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
				}
				else
				{
					/*--------------------------------------------------------------
		     	If no product is selected
					Then make all customfields not required.
				-----------------------------------------------------------------*/
					
					if(x == "Incident.CustomFields.c.hours_worked"||x == "Incident.CustomFields.c.t1s_game_q"||x == "Incident.CustomFields.c.t1s_magic_rules"||x == "Incident.CustomFields.c.t1s_events_questions"||x == "Incident.CustomFields.c.t1s_events_current"||x == "Incident.CustomFields.c.t1s_mtgo_beta_qs"||x == "Incident.CustomFields.c.t1s_non_magic"||x == "Incident.CustomFields.c.t1s_conduct_issue"||x == "Incident.CustomFields.c.t1s_store_issue"||x == "Incident.CustomFields.c.t1s_refunds_bugs"||x == "Incident.CustomFields.c.t1s_interface"||x == "Incident.CustomFields.c.t1s_dissatisfied_customers"||x == "Incident.CustomFields.c.t1s_tech_issue"||x == "Incident.CustomFields.c.t1s_special1"||x == "Incident.CustomFields.c.t1s_special2"||x == "Incident.CustomFields.c.t1s_forums_answerpost"||x == "Incident.CustomFields.c.t1s_forums_closedthreads"||x == "Incident.CustomFields.c.t1s_forums_actionedconduct"||x == "Incident.CustomFields.c.t1s_forums_special3"||x == "Incident.CustomFields.c.first_name"||x == "Incident.CustomFields.c.last_name")
					{
									this.data.attrs.required=false;
					}
					
			 }

    }
});