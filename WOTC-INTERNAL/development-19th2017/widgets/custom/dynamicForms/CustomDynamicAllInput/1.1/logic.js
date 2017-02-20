RightNow.namespace('Custom.Widgets.dynamicForms.CustomDynamicAllInput');
Custom.Widgets.dynamicForms.CustomDynamicAllInput = RightNow.Widgets.extend({ 
   
    constructor: function() {
			/*The fired product id is subscribed*/
			
      RightNow.Event.subscribe("evt_selected_category",this._setCategory,this);
			RightNow.Event.subscribe("evt_selected_product", this._getcustomfields, this);

        //############################################################################################
        //##Next Things is to subscribe the send the correct form input value to the controller.######
        //############################################################################################

            //Fetch the field value entered by user in text field or select field.
            //var form_elements_length=document.getElementById("rn_QuestionSubmit").elements.length;
            var tags=["input","select","textarea"];
            for(j=0;j<=tags.length;j++){
             var tag=tags[j];
             form_elements_length=document.getElementsByTagName(tag).length;

              for(i=0; i< form_elements_length;i++){           
                  //Subscribing to onkeyup event.
                  document.querySelectorAll(tag)[i].onkeyup=function(e){
                        dom_name=this.name;
                        dom_length=document.getElementsByName(dom_name).length;
                        actual_target_dom=dom_length-1;
                        if(dom_length >1)
                        document.getElementsByName(dom_name)[actual_target_dom].value=this.value;
                 }
    
                  // subscribing to onpaste event   
                      document.querySelectorAll(tag)[i].onpaste=function(e){
                            dom_name=this.name;
                            dom_length=document.getElementsByName(dom_name).length;
                            actual_target_dom=dom_length-1;
                             if(dom_length >1)
                            document.getElementsByName(dom_name)[actual_target_dom].value=this.value;
                      }

                   // subscribing to onchange event 
                     document.querySelectorAll(tag)[i].onchange=function(e){
                            dom_name=this.name;
                            dom_length=document.getElementsByName(dom_name).length;
                            actual_target_dom=dom_length-1;
                           document.getElementsByName(dom_name)[actual_target_dom].value=this.value;
                     }
    
                } 
            }  
       //############################################################################################
       //##Next Things is to subscribe the send the correct form input value to the controller.######
       //############################################################################################
			
    },

    _setCategory:function(type,args){
      category_id = args[0]['data']['category_id'];
      document.getElementById('form_category').value=category_id;
    },

    _getcustomfields: function(type, args)
		{
			
				prod_id = args[0]['data']['product_id'];
				cat_id=document.getElementById('form_category').value; // Bydefault its Zero All the time.
	if(prod_id > 1){			
				var cf = this.data.js.fields;
				var len = cf.length;

				//Disable all the divs and remove all the values, if entered any.
				dynamic_forms_length=document.getElementsByClassName('dynamic_form').length;
                var tags=["input","select","textarea"];
				for(i=0;i<dynamic_forms_length;i++){
                  document.getElementsByClassName('dynamic_form')[i].style.display="none";
                  dom_id=document.getElementsByClassName('dynamic_form')[i].id;

                      for(j=0;j<=tags.length;j++){
                        tag=tags[j];
                        tag_count=document.querySelectorAll(dom_id+" "+tag).length;
                        for(k=0;k<tag_count;k++){
                           document.querySelectorAll(dom_id+" "+tag)[k].value="";
                        }
                      } 
				}
			
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

                //########################################################################
                //## Also the set the value of the form elments null.             ########
                //########################################################################
                dynamic_form_id='#dynamic_form_'+enable_dynamic_form;

                var tags=["input","select","textarea"];
                for(j=0;j<=tags.length;j++){
                    tag=tags[j];
                    tag_count=document.querySelectorAll(dynamic_form_id+" "+tag).length;
                    for(i=0;i<tag_count;i++)
                      document.querySelectorAll(dynamic_form_id+" "+tag)[i].value="";
                 } 
                

                //########################################################################
                //## Also the set the value of the form elments null.             ########
                //########################################################################
             }
           }
   }     
        
		}
});