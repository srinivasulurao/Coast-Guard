RightNow.namespace('Custom.Widgets.dynamicForms.CustomDynamicAllInput');
Custom.Widgets.dynamicForms.CustomDynamicAllInput = RightNow.Widgets.extend({ 
    /**
     * Widget constructor.
     */
    constructor: function() {
			RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
			
			
    },

    /**
     * Sample widget method.
     */
    _getcustomfields: function(type, args)
		{
				prod_id = args[0]['data']['product_id'];
						
				var cf = this.data.js.fields;
				var len = cf.length;
				//if product is Dungeons & Dragons->D&D Tabletop Roleplaying Game
				if(prod_id == 533)
				{
					for(i=0; i<len; i++)
  				{
						var custom_field = this.data.js.fields[i];
						var	custom_field_name = custom_field.split(".");
						var	name = custom_field_name[3];
						document.getElementById("form_field_".concat(name)).style.display = "none";
					}
				  document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_book_name").style.display = "block";
					document.getElementById("form_field_page_number").style.display = "block";
					
				}
				else if(prod_id == 525)//Magic: The Gathering->Magic: The Gathering Online->->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
				}
				else if(prod_id == 529)//Magic: The Gathering->Magic: The Gathering Online->Report Conduct->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_opponents_userid").style.display = "block";
					document.getElementById("form_field_game_number").style.display = "block";
				}
				else if(prod_id == 713)//Magic: The Gathering->Magic: The Gathering Online->Email/Password Change->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";	
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_first_name").style.display = "block";
					document.getElementById("form_field_last_name").style.display = "block";
					document.getElementById("form_field_new_email_address").style.display = "block";
					document.getElementById("form_field_billing_address").style.display = "block";
					document.getElementById("form_field_first_four_cc").style.display = "block";
					document.getElementById("form_field_late_four_cc").style.display = "block";
				}
				else if(prod_id == 530)//Magic: The Gathering->Magic: The Gathering Online->Refund An Order->//   Order display error
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
							
						}
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					/*document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_first_name").style.display = "block";
					document.getElementById("form_field_last_name").style.display = "block";
					document.getElementById("form_field_email_address_crash").style.display = "block";
					document.getElementById("form_field_oder_id").style.display = "block";
					document.getElementById("form_field_date_of_order").style.display = "block";
					document.getElementById("form_field_items_ordered").style.display = "block";
					document.getElementById("form_field_reason_for_return").style.display = "block";*/
					document.getElementById("rn_cf_refund_an_order").style.display = "block";
					
					
				}
				else if(prod_id == 870)//Magic: The Gathering->Magic: The Gathering Online->Request Reimbursement / Report an Issue->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_event_number").style.display = "block";
					document.getElementById("form_field_event_type_coupon").style.display = "block";
					
				}
				else if(prod_id == 528)//Magic: The Gathering->Magic: The Gathering Online->Order Issues-> //Order display error
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "block";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					/*document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_first_name").style.display = "block";
					document.getElementById("form_field_last_name").style.display = "block";
					document.getElementById("form_field_email_address_crash").style.display = "block";
					document.getElementById("form_field_oder_id").style.display = "block";*/
					
				}
				else if(prod_id == 1739)//WPN Organizer/Retailer->Place a Direct Sales Order->-> //Display Order error
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";	
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "block";
					/*document.getElementById("form_field_store_name_inc").style.display = "block";
					document.getElementById("form_field_store_city_inc").style.display = "block";
					document.getElementById("form_field_store_state_province_inc").style.display = "block";
					document.getElementById("form_field_preferred_credit_card").style.display = "block";
					document.getElementById("form_field_pref_ship_method").style.display = "block";*/
					
				}
				else if(prod_id == 1762)//Magic: The Gathering->Magic: The Gathering Online->Betas->Beta Bug Report 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_beta_build_number").style.display = "block";
					document.getElementById("form_field_beta_issue_type").style.display = "block";
					document.getElementById("form_field_beta_error_occurred").style.display = "block";
										
				}
				else if(prod_id == 1885)//Magic: The Gathering->Magic: The Gathering Online->Betas->Account Issue //Display order error
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";	
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "block";
					/*document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_wizards_community_name").style.display = "block";*/
					
				}
				else if(prod_id == 532)//Magic: The Gathering->Magic: The Gathering Online->General Inquiry-> 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";	
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
				}
				else if(prod_id == 1917)//Corporate Information->Permission Request->-> 
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_permissionproduct").style.display = "block";
					document.getElementById("form_field_permissiontype").style.display = "block";
					document.getElementById("form_field_permisionmagicapp").style.display = "block";
					
				}
				else if(prod_id == 1986)//WPN Organizer/Retailer->Events/Conventions->D&D Convention Support->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_con_name").style.display = "block";
					document.getElementById("form_field_con_datespan1").style.display = "block";
					document.getElementById("form_field_con_datespan2").style.display = "block";
					document.getElementById("form_field_con_local").style.display = "block";
					document.getElementById("form_field_con_age").style.display = "block";
					document.getElementById("form_field_con_attend").style.display = "block";
					document.getElementById("form_field_con_ddtables").style.display = "block";
					document.getElementById("form_field_con_dunmas").style.display = "block";
					document.getElementById("form_field_con_emailorg").style.display = "block";
					document.getElementById("form_field_con_tandcs").style.display = "block";
										
				}
				else if(prod_id == 1761)//Magic: The Gathering->Magic: The Gathering Online->Betas->
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_login_id").style.display = "block";
					
				}
				else if(prod_id == 2002)//Magic: The Gathering->Magic: The Gathering Online->Betas->Apply to Beta // Display order error
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					
					document.getElementById("rn_cf_apply_to_beta").style.display = "block";
				/*	document.getElementById("form_field_beta_tandc_menu").style.display = "block";
					document.getElementById("form_field_login_id").style.display = "block";
					document.getElementById("form_field_wizards_community_name").style.display = "block";*/
					
				}
				else if(prod_id == 2111)//Defective product
				{
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
						}
					document.getElementById("rn_cf_refund_an_order").style.display = "none";	
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					document.getElementById("form_field_defective_product").style.display = "block";
					
					
				}
				else
				{
					document.getElementById("rn_cf_refund_an_order").style.display = "none";
					document.getElementById("rn_cf_order_issues").style.display = "none";
					document.getElementById("rn_cf_place_direct_sales").style.display = "none";
					document.getElementById("rn_cf_account_issue").style.display = "none";
					document.getElementById("rn_cf_apply_to_beta").style.display = "none";
					for(i=0; i<len; i++)
						{
							var custom_field = this.data.js.fields[i];
							var	custom_field_name = custom_field.split(".");
							var	name = custom_field_name[3];
							document.getElementById("form_field_".concat(name)).style.display = "none";
							
						}
				}
				
				
				
					
				
			
		}
});