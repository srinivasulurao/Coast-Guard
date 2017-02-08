RightNow.Widget.DynamicDateInput = function(data, instanceID) {

	this.data = data;
	this.instanceID = instanceID;
	this._formErrorLocation = null;
	this._errorNodes = null;

	var widgetContainer = document.getElementById("rn_" + this.instanceID);
	if (!widgetContainer)
		return;
	this._selectNodes = YAHOO.util.Dom.getElementsBy(function(node) {
		return node.tagName === "SELECT";
	}, "SELECT", "rn_" + this.instanceID);
	if (!this._selectNodes)
		return;

	if (this.data.attrs.initial_focus) {
		if (this._selectNodes[0] && this._selectNodes[0].focus)
			this._selectNodes[0].focus();
	}
	if (this.data.attrs.validate_on_blur)
		YAHOO.util.Event.addListener(this._selectNodes[this._selectNodes.length - 1], "blur", this._blurValidate, null, this);

	RightNow.Event.subscribe("evt_formFieldValidateRequest", this._onValidate, this);

	if (this.data.js.hint) { 
		this._yuiOverlayManager = new YAHOO.widget.OverlayManager();
		this._initializeHint();
	}

	// keep a constant state field to tell if the widget is required from the
	// getgo since we'll be toggling on/off the required attribute when the
	// custom field is hidden or shown
	this.data.attrs.is_required = this.data.attrs.required;
	
    this._hintFocused = false;
    this._inputFocused = false;
	// end of customization

};

RightNow.Widget.DynamicDateInput.prototype = {
	/**
	 * Retrives the entered value of the field
	 * 
	 * @return String Value in various formats depending on its type
	 */
	_getValue : function() {
		var fieldValue = "", monthField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Month"), dayField = document
				.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Day"), yearField = document.getElementById("rn_" + this.instanceID + "_"
				+ this.data.js.name + "_Year");

		if (monthField && dayField && yearField) {
			fieldValue = yearField.options[yearField.selectedIndex].value + "-" + monthField.options[monthField.selectedIndex].value + "-"
					+ dayField.options[dayField.selectedIndex].value;

			if (fieldValue === "--") {
				// value isn't set: just return empty string instead of random
				// punctuation string
				return "";
			}

			if (this.data.js.type === RightNow.Interface.Constants.EUF_DT_DATETIME) {
				var hourField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Hour"), minuteField = document
						.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Minute");
				if (hourField && minuteField) {
					fieldValue += " " + hourField.options[hourField.selectedIndex].value + ":" + minuteField.options[minuteField.selectedIndex].value;
				}
			}
		}
		return fieldValue;
	},

	/**
	 * Event handler for when form is being submitted
	 * 
	 * @param type
	 *            String Event name
	 * @param args
	 *            Object Event arguments
	 */
	_onValidate : function(type, args) {
		this._formErrorLocation = args[0].data.error_location;
		YAHOO.util.Dom.removeClass(this._errorNodes, "rn_ErrorField");
		YAHOO.util.Dom.removeClass("rn_" + this.instanceID + "_Legend", "rn_ErrorLabel");

		if (this._checkRequired() && this._checkValue()) {
			var eo = new RightNow.Event.EventObject();

			// we don't want these fields to be passed in the request
			// if they are hidden. It's way too much over head to pass
			// a bunch of fields that are being used based on dynamic form
			if (document.getElementById('dyncf_' + this.data.js.customID).style.display != 'none') {
				eo.data = {
					"name" : this.data.js.name,
					"value" : this._getValue(),
					"table" : this.data.js.table,
					"required" : (this.data.attrs.required ? true : false),
					"prev" : this.data.js.prev,
					"form" : RightNow.UI.findParentForm("rn_" + this.instanceID)
				};
				if (this.data.js.profile)
					eo.data.profile = true;
				if (this.data.js.customID) {
					eo.data.custom = true;
					eo.data.customID = this.data.js.customID;
					eo.data.customType = this.data.js.type;
				} else {
					eo.data.custom = false;
				}
			}

			eo.w_id = this.instanceID;
			RightNow.Event.fire("evt_formFieldValidateResponse", eo);
		} else {
			RightNow.UI.Form.formError = true;
		}
		RightNow.Event.fire("evt_formFieldCountRequest");
	},

	/**
	 * Validates that a proper date has been entered.
	 */
	_blurValidate : function() {
		YAHOO.util.Dom.removeClass(this._errorNodes, "rn_ErrorField");
		YAHOO.util.Dom.removeClass("rn_" + this.instanceID + "_Legend", "rn_ErrorLabel");
		this._formErrorLocation = null;
		this._checkRequired();
		this._checkValue();
	},

	/**
	 * Validation routine to check if field is required, and if so, ensure it
	 * has a value
	 * 
	 * @return Boolean denoting if required check passed
	 */
	_checkRequired : function() {
		/*
		 * added customization to check if field is hidden and required to do
		 * validation
		 */
		var container_str = "dyncf_" + this.data.js.customID;
		var style = YAHOO.util.Dom.get(container_str).style.display;
		if (this.data.attrs.required && style != 'none')
		/* end of customization */
		{
			this._errorNodes = [];
			for ( var i = 0; i < this._selectNodes.length; i++) {
				if (this._selectNodes[i].value === "") {
					this._errorNodes.push(this._selectNodes[i].id);
				}
			}
			if (this._errorNodes.length > 0) {
				this._displayError(this.data.attrs.label_required);
				return false;
			}
		}
		return true;
	},

	/**
	 * Validation routine to check if field passes type and size requirements
	 * 
	 * @return Boolean denoting if value is acceptable
	 */
	_checkValue : function() {
		this._errorNodes = [];
		var numberFilledIn = 0, numberChecked = 0;

		// check if all of the date fields have been set (only all or none is
		// allowed)
		for ( var i = 0; i < this._selectNodes.length; i++) {
			if (this._selectNodes[i].value === "")
				this._errorNodes.push(this._selectNodes[i].id);
			else
				numberFilledIn++;
			numberChecked++;
		}
		if (numberFilledIn > 0 && numberFilledIn !== numberChecked) {
			this._displayError(RightNow.Interface.getMessage("PCT_S_IS_NOT_COMPLETELY_FILLED_IN_MSG"));
			return false;
		}
		// check for min value error
		var monthField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Month"), dayField = document.getElementById("rn_"
				+ this.instanceID + "_" + this.data.js.name + "_Day"), yearField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name
				+ "_Year");
		if ((monthField && dayField && yearField) && (monthField.value === "1" && dayField.value === "1" && yearField.value === "1970")) {
			this._errorNodes = [ monthField.id, dayField.id, yearField.id ];
			this._displayError(RightNow.Interface.getMessage("PCT_S_VALUE_MIN_VALUE_PCT_S_MSG"), this.data.js.min_val);
			return false;
		}
		if (this.data.js.type === RightNow.Interface.Constants.EUF_DT_DATETIME) {
			var hourField = document.getElementById("rn_" + this.instanceID + "_" + this.data.js.name + "_Hour");
			if ((monthField && dayField && yearField) && (monthField.value === "1" && dayField.value === "2" && yearField.value === "1970")
					&& (parseInt(hourField.value, 10) < 9)) {
				this._errorNodes = [ monthField.id, dayField.id, yearField.id, hourField.id ];
				this._displayError(RightNow.Interface.getMessage("PCT_S_VALUE_MIN_VALUE_PCT_S_MSG"), this.data.js.min_val);
				return false;
			}
		}
		return true;
	},

	/**
	 * Creates the hint overlay that shows / hides when the input field is
	 * focused / blurred.
	 */
	_initializeHint : function() {
		if (YAHOO.widget.Overlay) {
			var overlay = document.createElement("span");
			overlay.id = "rn_" + this.instanceID + "_Hint";
			YAHOO.util.Dom.addClass(overlay, "rn_HintBox");
			YAHOO.util.Dom.insertAfter(overlay, this._selectNodes[this._selectNodes.length - 1]);

			overlay = new YAHOO.widget.Overlay(overlay, {
				visible : false
			});
			overlay.setBody(this.data.js.hint);
			overlay.render();

	        this._yuiOverlayManager.register(overlay);

			overlay.focusEvent.subscribe(this._onHintFocus,overlay, this);
			YAHOO.util.Event.addListener(overlay.id, "mouseout", this._onHintMouseOut, overlay, this);
			YAHOO.util.Event.addListener(this._selectNodes, "focus", this._onInputFocus, overlay, this);
			YAHOO.util.Event.addListener(this._selectNodes, "blur", this._onInputBlur, overlay, this);
			
		} else {
			// display hint inline if YUI container code isn't being included
			var legend = document.getElementById("rn_" + this.instanceID + "_Legend");
			if (legend)
				legend.innerHTML += "<span class='rn_HintText'>" + this.data.js.hint + "</span>";
		}
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
	 * 
	 * @param error
	 *            String Message to display
	 */
	_displayError : function(errorMessage) {
		var commonErrorDiv = document.getElementById(this._formErrorLocation);
		if (commonErrorDiv) {
			RightNow.UI.Form.errorCount++;
			if (RightNow.UI.Form.chatSubmit && RightNow.UI.Form.errorCount === 1)
				commonErrorDiv.innerHTML = "";

			var errorLink = "<div><b><a href='javascript:void(0);' onclick='document.getElementById(\"" + this._errorNodes[0] + "\").focus(); return false;'>"
					+ this.data.attrs.label_input;
			if (errorMessage.indexOf("%s") > -1 || arguments.length > 1) {
				// pass to sprintf any additional arguments that may have been
				// specified.
				var args = Array.prototype.slice.call(arguments);
				errorLink = RightNow.Text.sprintf(errorMessage, errorLink, args.slice(1));
			} else {
				errorLink = errorLink + errorMessage;
			}
			errorLink += "</a></b></div> ";
			commonErrorDiv.innerHTML += errorLink;
		}
		YAHOO.util.Dom.addClass(this._errorNodes, "rn_ErrorField");
		YAHOO.util.Dom.addClass("rn_" + this.instanceID + "_Legend", "rn_ErrorLabel");
	}
};
