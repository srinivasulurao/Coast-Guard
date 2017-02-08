RightNow.namespace('Custom.Widgets.dynamicForms.CustomDynamicAllInput');
Custom.Widgets.dynamicForms.CustomDynamicAllInput = RightNow.Widgets.extend({ 
   
    constructor: function() {
			/*The fired product id is subscribed*/
			
			RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
			
    },

    _getcustomfields: function(type, args)
		{
			
				prod_id = args[0]['data']['product_id'];
				
				var cf = this.data.js.fields;
				var len = cf.length;

				alert(prod_id);
				
				/*if product is Dungeons & Dragons->D&D Tabletop Roleplaying Game*/
				if(prod_id == 533)
				{
					for(i=0; i<len; i++)
  				{
						var custom_field = this.data.js.fields[i];
						var	custom_field_name = custom_field.split(".");
						var	name = custom_field_name[3];
						document.getElementById("form_field_".concat(name)).style.display = "none";
						
					}
					document.getElementById("rn_cf_DDtabletop").style.display = "block";
					document.getElementById("rn_cf_login_id").style.display = "none";		
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";	
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
										
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->->
				else if(prod_id == 525)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Report Conduct->
				else if(prod_id == 529)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_report_conduct").style.display = "block";
					document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Email/Password Change->
				else if(prod_id == 713)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";	
					document.getElementById("rn_cf_names").style.display = "block";
					document.getElementById("rn_cf_new_email_address").style.display = "block";
					document.getElementById("rn_cf_email_password_change").style.display = "block";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
								
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Refund An Order->
				else if(prod_id == 530)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
								
							
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";	
					document.getElementById("rn_cf_names").style.display = "block";
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "block";
					document.getElementById("rn_cf_order_id").style.display = "block";
					document.getElementById("rn_cf_date_of_order").style.display = "block";
					document.getElementById("rn_cf_refund_an_order").style.display = "block";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
									
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Request Reimbursement / Report an Issue->
				else if(prod_id == 870)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_event").style.display = "block";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
									
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Order Issues->
				else if(prod_id == 528)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_names").style.display = "block";	
					document.getElementById("rn_cf_email_add_crash").style.display = "block";
					document.getElementById("rn_cf_date_of_order").style.display = "block";
					document.getElementById("rn_cf_order_id").style.display = "block";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
				
				}
				
				//If product is WPN Organizer/Retailer->Place a Direct Sales Order->->
				else if(prod_id == 1739)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";	
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "block";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
								
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Beta Bug Report
				else if(prod_id == 1762) 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					
						document.getElementById("rn_cf_DDtabletop").style.display = "none";	
						document.getElementById("rn_cf_login_id").style.display = "none";
						document.getElementById("rn_cf_report_conduct").style.display = "none";
						document.getElementById("rn_cf_names").style.display = "none";	
					document.getElementById("rn_cf_new_email_address").style.display = "none";
					document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("form_field_beta_build_number").style.display = "block";
					document.getElementById("form_field_beta_issue_type").style.display = "block";
					document.getElementById("form_field_beta_error_occurred").style.display = "block";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
								
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Account Issue
				else if(prod_id == 1885)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
							
						}
					
				document.getElementById("rn_cf_DDtabletop").style.display = "none";
				document.getElementById("rn_cf_login_id").style.display = "none";
				document.getElementById("rn_cf_login_id").style.display = "block";	
				document.getElementById("rn_cf_report_conduct").style.display = "none";
				document.getElementById("rn_cf_names").style.display = "none";	
				document.getElementById("rn_cf_new_email_address").style.display = "none";
				document.getElementById("rn_cf_email_password_change").style.display = "none";
				document.getElementById("rn_cf_email_add_crash").style.display = "none";
				document.getElementById("rn_cf_order_id").style.display = "none";
				document.getElementById("rn_cf_date_of_order").style.display = "none";
				document.getElementById("rn_cf_refund_an_order").style.display = "none";
				document.getElementById("rn_cf_place_direct_sales").style.display = "none";
				document.getElementById("rn_cf_wizards_community").style.display = "block";
				document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
				document.getElementById("rn_cf_con_name").style.display = "none";
				document.getElementById("rn_cf_event").style.display = "none";
				document.getElementById("rn_cf_defective_product").style.display = "none";
				document.getElementById("rn_cf_permissionproduct").style.display = "none";
									
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->General Inquiry->
				else if(prod_id == 532) 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
					
					
				}
				//If product is Corporate Information->Permission Request->->
				else if(prod_id == 1917) 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "block";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
				
					
				}
				//If product is WPN Organizer/Retailer->Events/Conventions->D&D Convention Support->
				else if(prod_id == 1986)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "block";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
					
								
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->
				else if(prod_id == 1761)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
					
				}
				//If product is Magic: The Gathering->Magic: The Gathering Online->Betas->Apply to Beta
				else if(prod_id == 2002)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_con_name").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "block";	
					document.getElementById("rn_cf_login_id").style.display = "block";
					document.getElementById("rn_cf_wizards_community").style.display = "block";
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
				
				}
				//If product is Defective product
				else if(prod_id == 2111)
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_DDtabletop").style.display = "none";
					document.getElementById("rn_cf_login_id").style.display = "none";	
					document.getElementById("rn_cf_report_conduct").style.display = "none";
					document.getElementById("rn_cf_names").style.display = "none";	
				  document.getElementById("rn_cf_new_email_address").style.display = "none";
				  document.getElementById("rn_cf_email_password_change").style.display = "none";
					document.getElementById("rn_cf_email_add_crash").style.display = "none";
					document.getElementById("rn_cf_order_id").style.display = "none";
					document.getElementById("rn_cf_date_of_order").style.display = "none";
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_wizards_community").style.display = "none";
					document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
					document.getElementById("rn_cf_defective_product").style.display = "block";
					document.getElementById("rn_cf_con_name").style.display = "none";	
					document.getElementById("rn_cf_event").style.display = "none";
					document.getElementById("rn_cf_permissionproduct").style.display = "none";
				
					
				}
				else
				{
					//If no product is selected 
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
							
						}
						document.getElementById("rn_cf_DDtabletop").style.display = "none";
						document.getElementById("rn_cf_login_id").style.display = "none";	
						document.getElementById("rn_cf_report_conduct").style.display = "none";
						document.getElementById("rn_cf_names").style.display = "none";	
						document.getElementById("rn_cf_new_email_address").style.display = "none";
						document.getElementById("rn_cf_email_password_change").style.display = "none";
						document.getElementById("rn_cf_email_add_crash").style.display = "none";
						document.getElementById("rn_cf_order_id").style.display = "none";
						document.getElementById("rn_cf_date_of_order").style.display = "none";
						document.getElementById("rn_cf_refund_an_order").style.display = "none";
						document.getElementById("rn_cf_place_direct_sales").style.display = "none";
						document.getElementById("rn_cf_wizards_community").style.display = "none";
						document.getElementById("rn_cf_beta_tandc_menu").style.display = "none";
						document.getElementById("rn_cf_con_name").style.display = "none";
						document.getElementById("rn_cf_event").style.display = "none";
						document.getElementById("rn_cf_defective_product").style.display = "none";
						document.getElementById("rn_cf_permissionproduct").style.display = "none";
					
						
				}
				
				
				
					
				
			
		}
});