RightNow.namespace('Custom.Widgets.dynamicForms.FormCustomInput');
Custom.Widgets.dynamicForms.FormCustomInput = RightNow.Widgets.extend({ 
    /**
     * Widget constructor.
     */
     overrides:{
    constructor: function() {
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

    /**
     * Sample widget method.
     */
    methodName: function() {
                prod_id = args[0]['data']['product_id']; 
                this.data.attrs.required=false; //Always required is false.
                var current_name = this.data.js.name;
                current_form_id=this.data.attrs.form_id;
                
                form_enabled_data=JSON.parse(document.getElementById('form_enabled_data').value);

                //Do comparision now and make it valid now.
                if(form_enabled_data['form_enabled']['form_id']==current_form_id){
                    // console.log(current_name);
                    if(form_enabled_data['form_enabled']['required_fields'].length){  
                        for(i=0;i<form_enabled_data['form_enabled']['required_fields'].length;i++){
                            req_field=form_enabled_data['form_enabled']['required_fields'][i];
                            req_field=req_field.split("c$").join("Incident.CustomFields.c.");
                            if(req_field==current_name){
                                var labelnew = document.getElementById("rn_" + this.instanceID + "_" + "Label");
                                labelnew.innerHTML=labelnew.innerHTML.split("*").join("")+"<span class='rn_Required'> *</span>";
                                this.data.attrs.required=true;
                            }
                        }
                    }
                }               
        

        }//_getCustomFields ends here.
});