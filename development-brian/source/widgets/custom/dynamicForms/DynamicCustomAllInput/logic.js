// simple way to use getElementById
$ = function(id) { return document.getElementById(id); };

RightNow.Widget.DynamicCustomAllInput = function(data, instanceID) {
    this.data = data;
    this.instanceID = instanceID;
    this._formErrorLocation = null;
    this._validated = false;
	 this.all_cfs = [];
	 this.prod_id = null;
	 this.cat_id = null;
	 this.current_panels = [];
	 this.current_cflds = [];
	 this.top_panel = null;

    // cache our initial data if we have any
    if(this.data.js.breakdown)
      this.current_panels = this.data.js.breakdown;
    else 
       this.current_panels = [];
	
    RightNow.Event.subscribe("evt_prod_change_trigger", this._onDropdownUpdate, this);
};
/**
 * ----------------------------------------------
 * Form / UI Events and Functions:
 * ----------------------------------------------
 */
RightNow.Widget.DynamicCustomAllInput.prototype = {
    /**
     * Event handler executed when new prod/prod is selected
     *
     * @param type String Event name
     * @param args Object Event arguments
     */
    _onDropdownUpdate: function(type, args)
    {
      if(args[0].data['name'] == "prod")
       {
			this.prod_id = args[0].data['hierValue'];
		}
		if(this.prod_id && this.prod_id != null){
		
			// show the loading icon and hide all custom fields
			YAHOO.util.Dom.setStyle('ajax_loading', 'display', '');
			var cf_tbl = YAHOO.util.Dom.get("dyn_form_table");
			var cf_rows = cf_tbl.getElementsByTagName("div");
			if(cf_rows.length > 0)
			{
				for ( var i = 0; i < cf_rows.length; i++ )
				{
					var str_arr = cf_rows[i].id.split("_");
					if(str_arr[0] == 'dyncf')
					{
						YAHOO.util.Dom.setStyle(cf_rows[i], 'display', 'none');
						var child_div = YAHOO.util.Dom.getChildren(cf_rows[i]);
					    var widgetID = child_div[0].id.substring(3);
        			    var widgetInstance = RightNow.Widget.getWidgetInstance(widgetID);
						widgetInstance.data.attrs.required = false;
					//	if(document.getElementById('my_'+str_arr[1])!= null)
					//	   document.getElementById('my_'+str_arr[1]).innerHTML = "";
					}
				
				}
			}

         if(this.current_panels[this.prod_id] && this.current_panels[this.prod_id].length > 0){
            this._showPanel(this.prod_id);
		      YAHOO.util.Dom.setStyle('ajax_loading', 'display', 'none');
         }else{
			   // send the prod ID to the ajax function
			   var post={"prod_id": this.prod_id};
			   url = "/cc/ajaxDyn/getDynForm";
			   RightNow.Ajax.makeRequest(url, post, {successHandler: this._dynAjaxSuccess, scope:this});
         }
		}
	},
	
	// function called after successful ajax request.
	// show the main custom fields that are returned
    _dynAjaxSuccess: function(o)
    {
		YAHOO.util.Dom.setStyle('ajax_loading', 'display', 'none');
		if (o.responseText != null)
		{
			var obj = RightNow.JSON.parse(o.responseText);
			if(obj.prod)
			{
				this.current_panels[this.prod_id] = obj.prod[this.prod_id];
				
				if(this.current_panels)
					this._showPanel(this.prod_id);	
			}
		}
	},
	/*
   *  called on ajax response return, hides/shows custom fields based on returned JSON
   */
	_showPanel: function(panel_name){
	
		var panel = this.current_panels[this.prod_id];
      // do nothing if no resutls are returned
      if(!panel) 
         return;
		
      // for each cf_id returned, show that field if it exists, turn on required attribute if it is required
		for(var i = 0; i < panel.length; i++ )
		{
			var cf_id = panel[i];
			var html_row_name = "dyncf_" + cf_id;

         // if cf_id = 0, we know to quit right away
         if(cf_id == '0')
            return;
         // tom.wilson added check to make sure custom field exists and is visible
         if(!YAHOO.util.Dom.get(html_row_name))
         {
            //alert('Custom field with id "' +cf_id + '" does not exist or is not visible');

         }else{
			   var child_div = YAHOO.util.Dom.getChildren(html_row_name);
			   var widgetID = child_div[0].id.substring(3);
            var widgetInstance = RightNow.Widget.getWidgetInstance(widgetID);
			   if(widgetInstance.data.attrs.is_required == 1){
				   widgetInstance.data.attrs.required = true;
				   YAHOO.util.Dom.setStyle("rn_"+widgetID+"_required", "display", 'block');
			   }
			   else{
				   widgetInstance.data.attrs.required = false;
				   YAHOO.util.Dom.setStyle("rn_"+widgetID+"_required", "display", 'none');
     
				if(document.getElementById('rn_' + widgetInstance.instanceID + '_Label'))
				{
					 label = document.getElementById('rn_' + widgetInstance.instanceID + '_Label').innerHTML;
					 label_1 = label.replace('<span class="rn_Required"> *</span>', '');
					 document.getElementById('rn_' + widgetInstance.instanceID + '_Label').innerHTML = widgetInstance.data.attrs.label_input;
				}
	  		
				var arr = this.data.js.cf_id_req;	
				var value1;
 			    for(var k = 0; k < arr.length; k++){					
					value1 = arr[k].split('-');
					  if(cf_id == value1[0] && this.prod_id == value1[1])
						{
							if(document.getElementById('my_'+value1[0]) == null)
							{
								try {
									label = document.getElementById('rn_' + widgetInstance.instanceID + '_Label').innerHTML + ' <span class="rn_Required" id="my_'+value1[0]+'" > *</span>';
									document.getElementById('rn_' + widgetInstance.instanceID + '_Label').innerHTML = label;
								} catch (e) {
									// account for date fields
									label = document.getElementById('rn_' + widgetInstance.instanceID + '_Legend').innerHTML + ' <span class="rn_Required" id="my_'+value1[0]+'" > *</span>';
									document.getElementById('rn_' + widgetInstance.instanceID + '_Legend').innerHTML = label;									
								}
							}
						   widgetInstance.data.attrs.required = true;
						   YAHOO.util.Dom.setStyle("rn_"+widgetID+"_required", "display", 'block');						   
						}
				   }
			   }
        
			   $(html_row_name).style.display = "";
			   // use insert before to move CF to a new table, to preserve form ordering
			   $("dyn_form_table").appendChild($(html_row_name));
         }
		}
	 },
	
	_hidePanel: function(panel_name){
	
		var panel = this.current_panels[panel_name];
		
		for(var i = 0; i < panel.length; i++ )
		{
			var cf_id = panel[i];
			var html_row_name = "dyncf_" + cf_id;
			$(html_row_name).style.display = "none";
		}
	}
}
