RightNow.Widget.EmailAnswerLink = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;
    this._dialogElement = document.getElementById('rn_' + this.instanceID + '_EmailAnswerLinkForm');
    this._recipientEmailElement = document.getElementById("rn_" + this.instanceID + "_InputRecipientEmail");
    this._senderEmailElement = document.getElementById("rn_" + this.instanceID + "_InputSenderEmail");
	
	
	
	
	this._senderFirstNameElement = document.getElementById("rn_" + this.instanceID + "_InputFirstName");
    this._senderLastNameElement = document.getElementById("rn_" + this.instanceID + "_InputLastName");
   
	
	
	
    this._senderSubjectElement = document.getElementById("rn_" + this.instanceID + "_InputSubject");
   // this._senderNameElement =  document.getElementById("rn_" + this.instanceID + "_InputSenderName");
    this._errorDisplay = document.getElementById("rn_" + this.instanceID + "_ErrorMessage");

    if(this._dialogElement)
    {
        YAHOO.util.Event.addListener("rn_" + this.instanceID + "_Link", "click", this._onEmailLinkClick, null, this);
    }
    RightNow.Event.subscribe("evt_emailLinkSubmitResponse", this._onResponseReceived, this);
};

RightNow.Widget.EmailAnswerLink.prototype = {
    /**
     * Event handler for when email-link control is clicked
     * @param type String Event name
     * @param arg Object Event arguments
     */
    _onEmailLinkClick: function(type, arg)
    {
        if (!(this._dialog))
        {
            var buttons = [ { text: this.data.attrs.label_send_button, handler: {fn: this._submitClicked, scope: this}, isDefault: true},
                        { text: this.data.attrs.label_cancel_button, handler: {fn: this._closeDialog, scope: this}, isDefault: false}];
            this._dialog = RightNow.UI.Dialog.actionDialog(this.data.attrs.label_dialog_title, this._dialogElement, {"buttons": buttons, "width": '500px'});
            YAHOO.util.Dom.removeClass(this._dialogElement, "rn_Hidden");
            YAHOO.util.Dom.addClass(this._dialog.id, 'rn_EmailLinkDialog');
        }
        if(this._errorDisplay)
        {
            this._errorDisplay.innerHTML = "";
            YAHOO.util.Dom.removeClass(this._errorDisplay, 'rn_MessageBox rn_ErrorMessage');
        }

        this._dialog.show();
        if (this._recipientEmailElement)
            this._recipientEmailElement.focus();
        this._dialog.enableButtons();
    },

    /**
     *   Close dialog.  Leave cancel button enabled.
     *   If user opens a second time, do not allow email send, but do allow cancel.
     * @param type String Event name
     * @param arg Object Event arguments
    */
    _closeDialog: function(type, arg)
    {
        // Get rid of any existing error message, so it's gone if the user opens the dialog again.
        if(this._errorDisplay)
        {
            this._errorDisplay.innerHTML = "";
            YAHOO.util.Dom.removeClass(this._errorDisplay, 'rn_MessageBox rn_ErrorMessage');
        }
        this._dialog.enableSecondButton();
        this._dialog.hide();
    },

    /**
     * Event handler for click of submit button
    */
    _submitClicked: function()
    {
        this._dialog.disableButtons();
        if (this._validateFormData())
        {
            this._submitRequest();
        }
        else
        {
            this._dialog.enableButtons();
        }
    },

     /**
     * Validates form data.
     * @return Boolean if the form validated successfully
     */
    _validateFormData: function()
    {
        var returnValue = true;

        if(this._errorDisplay)
        {
            this._errorDisplay.innerHTML = "";
            YAHOO.util.Dom.removeClass(this._errorDisplay, 'rn_MessageBox rn_ErrorMessage');
        }

        //test 'to' address
        if(!this._validateEmailAddress(this._recipientEmailElement, this.data.attrs.label_to))
        {
            returnValue = false;
        }

        //test 'from' address
        if(this._senderEmailElement && !this._validateEmailAddress(this._senderEmailElement, this.data.attrs.label_sender_email))
        {
            returnValue = false;
        }

        //test sender name
		
        if(this._senderFirstNameElement)
        {
            this._senderFirstNameElement.value = YAHOO.lang.trim(this._senderFirstNameElement.value);
            if (this._senderFirstNameElement.value !== "")
            {
                if(this._senderFirstNameElement.value.indexOf("<") > -1 || this._senderFirstNameElement.value.indexOf(">") > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_CONTAIN_THAN_MSG"), this.data.attrs.label_first_name), this._senderFirstNameElement.id);
                    returnValue = false;
                }
                if(this._senderFirstNameElement.value.indexOf("'") > -1 || this._senderFirstNameElement.value.indexOf('"') > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_MUST_NOT_CONTAIN_QUOTES_MSG"), this.data.attrs.label_first_name), this._senderFirstNameElement.id);
                    returnValue = false;
                }
                if(this._senderFirstNameElement.value.indexOf("&") > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_MUST_NOT_CONTAIN_MSG"), this.data.attrs.label_first_name), this._senderFirstNameElement.id);
                    returnValue = false;
                }
            }
            else
            {
                this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_REQUIRED_MSG"), this.data.attrs.label_first_name), this._senderFirstNameElement.id);
                returnValue = false;
            }
        }
		
		
		
		
        if(this._senderLastNameElement)
        {
            this._senderLastNameElement.value = YAHOO.lang.trim(this._senderLastNameElement.value);
            if (this._senderLastNameElement.value !== "")
            {
                if(this._senderLastNameElement.value.indexOf("<") > -1 || this._senderLastNameElement.value.indexOf(">") > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_CONTAIN_THAN_MSG"), this.data.attrs.label_last_name), this._senderLastNameElement.id);
                    returnValue = false;
                }
                if(this._senderLastNameElement.value.indexOf("'") > -1 || this._senderLastNameElement.value.indexOf('"') > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_MUST_NOT_CONTAIN_QUOTES_MSG"), this.data.attrs.label_last_name), this._senderLastNameElement.id);
                    returnValue = false;
                }
                if(this._senderLastNameElement.value.indexOf("&") > -1)
                {
                    this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_MUST_NOT_CONTAIN_MSG"), this.data.attrs.label_last_name), this._senderLastNameElement.id);
                    returnValue = false;
                }
            }
            else
            {
                this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_REQUIRED_MSG"), this.data.attrs.label_last_name), this._senderLastNameElement.id);
                returnValue = false;
            }
        }

		if(this._senderSubjectElement.value == "")
		{
			this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_REQUIRED_MSG"), this.data.attrs.label_subject), this._senderSubjectElement.id);
             returnValue = false;
		}
		
		
        return returnValue;
    },

    /**
     * Utility function to validate a given email address field.
     * @param emailField HTMLElement the email field to validate
     * @param label String the field's label that is used within error messages.
     * @return Boolean if the email field validated successfully
     */
     _validateEmailAddress: function(emailField, label)
    {
        if(emailField)
        {
            emailField.value = YAHOO.lang.trim(emailField.value);
            var emailFieldValue = emailField.value;

            // Make sure the value is not empty.
            if (emailFieldValue === "")
            {
                this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_REQUIRED_MSG"), label), emailField.id);
                return false;
            }
            //make sure a single email address is entered
            if(emailFieldValue.indexOf(";") >= 0 || emailFieldValue.indexOf(",") >= 0 || emailFieldValue.indexOf(" ") >= 0)
            {
                this._addErrorMessage(RightNow.Interface.getMessage("PLEASE_ENTER_SINGLE_EMAIL_ADDRESS_MSG"), emailField.id);
                return false;
            }
            // Make sure it has valid email format
            if(!RightNow.Text.isValidEmailAddress(emailFieldValue))
            {
                this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_INVALID_MSG"), label), emailField.id);
                return false;
            }
            // Test the length
            if(emailFieldValue.length > 80)
            {
                this._addErrorMessage(RightNow.Text.sprintf(RightNow.Interface.getMessage("PCT_S_IS_TOO_LONG_MSG"), label), emailField.id);
                return false;
            }
            return true;
        }
        return false;
    },

    /**
    * Submits request to server.  Assumes that the this.data has been validated.
    */
    _submitRequest: function()
    {
        // Format an event object
        var eventObject = new RightNow.Event.EventObject();
        eventObject.w_id = this.instanceID;

        eventObject.data = {
            "emailAnswerToken" : this.data.js.emailAnswerToken,
            "to"               : this._recipientEmailElement.value,
            "a_id"             : this.data.js.answerID
        };

        if (this.data.js.isProfile)
        {
            eventObject.data.from = this.data.js.senderEmail;
            eventObject.data.name = this.data.js.first_name+" "+this.data.js.last_name;
        }
        else
        {
            if (this._senderEmailElement)
            {
                eventObject.data.from = this._senderEmailElement.value;
            }
            if (this._senderFirstNameElement && this._senderLastNameElement)
            {
                eventObject.data.name = this._senderFirstNameElement.value+" "+this._senderLastNameElement.value;
            }
        }

        RightNow.Event.fire("evt_emailLinkRequest", eventObject);
    },

    /**
     * Event handler for response received from server.  Show a confirmation dialog.
     * @param type String Event name
     * @param arg Object Event arguments
     */
    _onResponseReceived: function(type, arg)
    {
        // make sure this is our event
        if(arg[1][0].w_id !== this.instanceID)
        {
            return false;
        }

        var messageString = (arg[0] && arg[0] !== true) ? arg[0] : this.data.attrs.label_email_sent;

        RightNow.UI.Dialog.messageDialog(messageString, {exitCallback: {fn: this._closeDialog, scope:this}});

        return false;
    },
    
    /**
     * Adds an error message to the page and adds the correct CSS classes
     * @param message String The error message to display
     * @param focusElement HTMLElement The HTML element to focus on when the error message link is clicked
     */
    _addErrorMessage: function(message, focusElement) {
        if(this._errorDisplay) {
            YAHOO.util.Dom.addClass(this._errorDisplay, 'rn_MessageBox rn_ErrorMessage');
            //add link to message so that it can receive focus for accessibility reasons
            var newMessage = '<a href="javascript:void(0);" onclick="document.getElementById(\'' + focusElement + '\').focus(); return false;">' + message + '</a>'; 
            var oldMessage = this._errorDisplay.innerHTML;
            if (oldMessage === "")
                this._errorDisplay.innerHTML = newMessage;
            else
                this._errorDisplay.innerHTML = oldMessage + '<br/>' + newMessage;
            this._errorDisplay.firstChild.focus();
        }
    }
};
