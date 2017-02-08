RightNow.namespace('Custom.Widgets.dynamicForms.CustomDynamicAllInput');
Custom.Widgets.dynamicForms.CustomDynamicAllInput = RightNow.Widgets.extend({ 
   
    constructor: function() {
			/*The fired product id is subscribed*/
			
			RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);
			
    },

    _getcustomfields: function(type, args)
		{
			
				prod_id = args[0]['data']['product_id'];
				cat_id=0; // Bydefault its Zero All the time.
				
				var cf = this.data.js.fields;
				var len = cf.length;

				//Disable all the divs.
				dynamic_forms_length=document.getElementsByClassName('dynamic_form').length;
				for(i=0;i<dynamic_forms_length;i++){
                  document.getElementsByClassName('dynamic_form')[i].style.display="none";
				}
                
               //Call a ajax request and find the settings related to the prod_id
				// RightNow.Ajax.makeRequest("/cc/ajaxDyn/getDynamicFormData",{prod_id:prod_id,cat_id:cat_id}, {
    //                 successHandler: function (response) {

    //                     if(response.responseText!=""){
    //                       document.getElementById('form_enabled_data').value=response.responseText;	
    //                       var form_data=JSON.parse(response.responseText);
    //                       enable_dynamic_form=form_data['form_enabled']['form_id'];
    //                       dl=document.getElementById('dynamic_form_'+enable_dynamic_form);
    //                       if(dl != null){
    //                          document.getElementById('dynamic_form_'+enable_dynamic_form).style.display="block";
    //                       }
    //                     }

    //                 },
    //                 scope: this,
    //                 json: false,
    //                 type: "POST"
    //             });
			
      //We need a asynchronous ajax call, rightnow call is not asynchronous.
       var xhttp=new XMLHttpRequest();
        xhttp.open("POST", "/cc/ajaxDyn/getDynamicFormData", false);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("prod_id="+prod_id+"&cat_id="+cat_id);
        
          if(xhttp.responseText!=''){
             document.getElementById('form_enabled_data').value=xhttp.responseText;
             var form_data=JSON.parse(xhttp.responseText);
             enable_dynamic_form=form_data['form_enabled']['form_id'];
             dl=document.getElementById('dynamic_form_'+enable_dynamic_form);
             if(dl != null){
                document.getElementById('dynamic_form_'+enable_dynamic_form).style.display="block";
             }
           }
        
        
		}
});