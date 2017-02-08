RightNow.Widget.DynamicSelectionInput = function(data, instanceID){

    this.data = data;
    this.instanceID = instanceID;
    this._formErrorLocation = null;

    if(this.data.js.type === RightNow.Interface.Constants.EUF_DT_RADIO)
        this._inputField = [document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_1"),
            document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_0")];
    else
        this._inputField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name);
    if(!this._inputField || (YAHOO.lang.isArray(this._inputField) && (!this._inputField[0] || !this._inputField[1])))
        return;

    if(this.data.attrs.initial_focus)
    {
        if(this._inputField[0] && this._inputField[0].focus)
            this._inputField[0].focus();
        else if(this._inputField.focus) 
            this._inputField.focus();
    }

    if(this.data.js.hint){
    	this._yuiOverlayManager = new YAHOO.widget.OverlayManager();
        this._initializeHint();
    }
    if(this.data.attrs.validate_on_blur && this.data.attrs.required)
        YAHOO.util.Event.addListener(this._inputField, "blur",
            function() { this._formErrorLocation = null; this._validateRequirement(); }, null, this);

    RightNow.Event.subscribe("evt_formFieldValidateRequest", this._onValidate, this);
    //specific events for specific fields:
    var fieldName = this.data.js.name;
    //province changing
    if(fieldName === "country_id")
        YAHOO.util.Event.addListener(this._inputField,"change", this._countryChanged, null, this);
    else if(fieldName === "prov_id")
        RightNow.Event.subscribe("evt_formFieldProvinceResponse", this._onProvinceResponse, this);
		
	YAHOO.util.Event.addListener(this._inputField, 'change', this._onChange, null, this);
	YAHOO.util.Event.addListener(this._inputField, 'keyup', this._onChange, null, this);

    // keep a constant state field to tell if the widget is required from the getgo since we'll be toggling on/off the required attribute when the custom field is hidden or shown
    this.data.attrs.is_required = this.data.attrs.required;
    
    this._hintFocused = false;
    this._inputFocused = false;

    // end of customization
};

RightNow.Widget.DynamicSelectionInput.prototype = {
/**
 * ----------------------------------------------
 * Form / UI Events and Functions:
 * ----------------------------------------------
 */
    /**
     * Event handler executed when form is being submitted
     *
     * @param type String Event name
     * @param args Object Event arguments
     */
    _onValidate: function(type, args)
    {
        this._formErrorLocation = args[0].data.error_location;

        if(this._validateRequirement())
        {
            var eo = new RightNow.Event.EventObject();

            // we don't want these fields to be passed in the request
            // if they are hidden.  It's way too much over head to pass
            // a bunch of fields that are being used based on dynamic form
            if (document.getElementById('dyncf_'+this.data.js.customID).style.display != 'none')
            {
                eo.data = {"name" : this.data.js.name,
                           "value" : this._getValue(),
                           "table" : this.data.js.table,
                           "required" : (this.data.attrs.required ? true : false),
                           "prev" : this.data.js.prev,
                           "form" : RightNow.UI.findParentForm("rn_" + this.instanceID)};
                if(this.data.js.profile)
                    eo.data.profile = true;
                if(this.data.js.customID)
                {
                    eo.data.custom = true;
                    eo.data.customID = this.data.js.customID;
                    eo.data.customType = this.data.js.type;
                }
                else
                {
                    eo.data.custom = false;
                }
            }
            
            eo.w_id = this.data.info.w_id;
            RightNow.Event.fire("evt_formFieldValidateResponse", eo);
        }
        else
        {
            RightNow.UI.Form.formError = RightNow.UI.Form.formError || true;
        }
        RightNow.Event.fire("evt_formFieldCountRequest");
    },

    _onChange: function(type, args) 
	{
        var eo = new RightNow.Event.EventObject();
		eo.data = {"cf_id" : this.data.js.customID,
				   "value" : this._getValue()};

		RightNow.Event.fire("evt_custom_dynamic_form_trigger", eo);
    },
    /**
    * Returns the String (Radio/Select) or Boolean value (Check) of the element.
    * @return String/Boolean that is the field value
    */
    _getValue: function()
    {
		var container_str = "dyncf_" + this.data.js.customID;
		var style = document.getElementById(container_str).style.display;
		if(style == "none")
			return "";
        if(this.data.js.type === RightNow.Interface.Constants.EUF_DT_RADIO)
        {
// 130122-000194 - paul.arnot - this._inputField[x].value aparently does not contain an integer value 
//                              and so is not recognized by preincidentcreate_model.php
            if(this._inputField[0].checked)
                //return this._inputField[0].value;
                return (this._inputField[0].value == 0) ? 0 : 1;
            if(this._inputField[1].checked)
                //return this._inputField[1].value;
                return (this._inputField[1].value == 0) ? 0 : 1;
        }
        else if(this.data.js.type === RightNow.Interface.Constants.EUF_DT_CHECK)
        {
            return this._inputField.value === "1";
        }
        else
        {
            //select value
            return this._inputField.value;
        }
    },

    /**
     * Validation routine to check if field is required, and if so, ensure it has a value
     * @return Boolean denoting if required check passed
     */
    _validateRequirement: function()
    {
		var container_str = "dyncf_" + this.data.js.customID;
		var style = document.getElementById(container_str).style.display;
        if(this.data.attrs.required && style != 'none')
        {
            if(this.data.js.type === RightNow.Interface.Constants.EUF_DT_RADIO)
            {
                if((this._inputField[0] && this._inputField[1]) && (!this._inputField[0].checked && !this._inputField[1].checked))
                {
                    this._displayError(this.data.attrs.label_required);
                    return false;
                }
            }
            else if(this._inputField.value === "")
            {
                this._displayError(this.data.attrs.label_required);
                return false;
            }
        }
        YAHOO.util.Dom.removeClass(this._inputField, "rn_ErrorField");
        YAHOO.util.Dom.removeClass("rn_" + this.instanceID + "_Label", "rn_ErrorLabel");
        return true;
    },

    /**
     * Creates the hint overlay that shows / hides when
     * the input field is focused / blurred.
     */
    _initializeHint: function()
    {
        var overlay = document.createElement("span");
        overlay.id = "rn_" + this.instanceID + "_Hint";
        YAHOO.util.Dom.addClass(overlay, "rn_HintBox");
        if(YAHOO.lang.isArray(this._inputField))
        {
            //radio buttons
            YAHOO.util.Dom.setStyle(overlay, "margin-left", "2em");
            YAHOO.util.Dom.insertAfter(overlay, this._inputField[this._inputField.length - 1]);
        }
        else
        {
            YAHOO.util.Dom.insertAfter(overlay, this._inputField);
        }

        overlay = new YAHOO.widget.Overlay(overlay, { visible:false});
        overlay.setBody(this.data.js.hint);
        overlay.render();
        YAHOO.util.Dom.removeClass("rn_" + this.instanceID + "_Hint", "rn_Hidden");
        
        this._yuiOverlayManager.register(overlay);

		overlay.focusEvent.subscribe(this._onHintFocus,overlay, this);
		YAHOO.util.Event.addListener(overlay.id, "mouseout", this._onHintMouseOut, overlay, this);
		YAHOO.util.Event.addListener(this._inputField, "focus", this._onInputFocus, overlay, this);
		YAHOO.util.Event.addListener(this._inputField, "blur", this._onInputBlur, overlay, this);
    },

	//several function to control showing and hiding of hints
	_onInputFocus : function(event, args) {
		this._hintFocused = false;
		this._inputFocused = true;
		if( args.show){
			args.show();
		}
	},
	
	_onInputBlur : function(event, args) {
		this._inputFocused = false;
		
		if(! this._hintFocused ){
			//the args are the overlay
			if(args.hide){
				args.hide();
			}
		}
	},
	_onHintFocus : function(event, args) {
		this._hintFocused = true;
	},
	
	_onHintMouseOut : function(event, args) {
		this._hintFocused = false;
		if( this._inputFocused == false){
			if( args.hide){
				args.hide();
			}
		}
	},
    
    
    /**
     * Displays error by appending message above submit button
     * @param errorMessage String Message to display
     */
    _displayError: function(errorMessage)
    {
        var commonErrorDiv = document.getElementById(this._formErrorLocation);
        if(commonErrorDiv)
        {
            RightNow.UI.Form.errorCount++;
            if(RightNow.UI.Form.chatSubmit && RightNow.UI.Form.errorCount === 1)
                commonErrorDiv.innerHTML = "";

            var elementId = (YAHOO.util.Lang.isArray(this._inputField)) ? this._inputField[0].id : this._inputField.id,
            errorLink = "<div><b><a href='javascript:void(0);' onclick='document.getElementById(\"" + elementId +
                "\").focus(); return false;'>" + this.data.attrs.label_input;

            if(errorMessage.indexOf("%s") > -1)
                errorLink = RightNow.Text.sprintf(errorMessage, errorLink);
            else
                errorLink = errorLink + errorMessage;

            errorLink += "</a></b></div> ";
            commonErrorDiv.innerHTML += errorLink;
        }
        YAHOO.util.Dom.addClass(this._inputField, "rn_ErrorField");
        YAHOO.util.Dom.addClass("rn_" + this.instanceID + "_Label", "rn_ErrorLabel");
    },
/**
 * --------------------------------------------------------
 * Business Rules Events and Functions:
 * --------------------------------------------------------
 */
    /**
     * Event handler executed when country dropdown is changed
     */
    _countryChanged: function()
    {
        if(this._inputField.options)
        {
            var evtObj = new RightNow.Event.EventObject();
            evtObj.data = {"country_id" : this._inputField.options[this._inputField.selectedIndex].value,
                                 "w_id" : this.instanceID};
            RightNow.Event.fire("evt_formFieldProvinceRequest", evtObj);
        }
    },

    /**
     * Event handler executed when province/state data is returned from the server
     *
     * @param type String Event name
     * @param args Object Event arguments
     */
    _onProvinceResponse: function(type, args)
    {
        var evtObj = args[0];
        if(evtObj.states)
        {
            this._inputField.options.length = 0;
            this._inputField.options[0] = new Option();
            this._inputField.options[0].text = "--";
            this._inputField.options[0].value = "";
            for(var i = 0; i < evtObj.states.length; i++)
            {
                this._inputField.options[i + 1] = new Option();
                this._inputField.options[i + 1].text = evtObj.states[i].val;
                this._inputField.options[i + 1].value = evtObj.states[i].id;
            }
        }
    }
};
