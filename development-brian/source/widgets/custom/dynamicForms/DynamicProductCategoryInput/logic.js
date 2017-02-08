RightNow.Widget.DynamicProductCategoryInput = function(data, instanceID)
{
    this.data = data;
    this.instanceID = instanceID;
    this._eo = new RightNow.Event.EventObject();
    this._currentIndex = 0;
    this._noValueNodeIndex = 0;
    this._displayField = document.getElementById("rn_" + this.instanceID + "_" + this.data.attrs.data_type + "_Button");
    this._displayFieldVisibleText = document.getElementById("rn_" + this.instanceID + "_Button_Visible_Text");
    this._accessibleView = document.getElementById("rn_" + this.instanceID + "_Links");

    if(this.data.js.readOnly || !this._displayField) return;

    RightNow.Event.subscribe("evt_menuFilterGetResponse", this._getSubLevelResponse, this);
    RightNow.Event.subscribe("evt_formFieldValidateRequest", this._onValidateRequest, this);
    RightNow.Event.subscribe("evt_accessibleTreeViewGetResponse", this._getAccessibleTreeViewResponse, this);
    if(this.data.attrs.set_button)
        YAHOO.util.Event.addListener("rn_" + this.instanceID + "_" + this.data.attrs.data_type + "_SetButton", "click", this._setButtonClick, null, this);

    //toggle panel on/off when button is clicked
    YAHOO.util.Event.addListener(this._displayField, "click", this._toggleProductCategoryPicker, null, this);
    YAHOO.util.Event.addListener("rn_" + this.instanceID + "_Links_Trigger", "click", this._toggleAccessibleView, null, this);

    //setup event object
    this._eo.data = {"data_type" : this.data.attrs.data_type,
                            "hm_type" : this.data.js.hm_type,
                            "linking_on" : this.data.js.linkingOn,
                            "linkingProduct": 0,
                            "table" : this.data.attrs.table,
                            "cache" : [],
                            "name" : ((this.data.attrs.data_type.indexOf('prod') > -1) ? 'prod' : 'cat')};
    this._eo.w_id = this.instanceID;

    //build menu panel
    this._panel = new YAHOO.widget.Panel("rn_" + this.instanceID + "_Tree", { close:false, width:"300px", visible:false, constraintoviewport:true });
    this._panel.setHeader("");
    this._panel.render();
    YAHOO.util.Dom.setStyle(this._panel.innerElement, "overflow-y", "auto");

    if(this.data.js.defaultData)
	{
        this._buildTree();
		
		if(this.data.js.menu_id_df_associate && this.data.js.menu_id_df_associate > 0)
			YAHOO.util.Event.onDOMReady(this._onLoad, null, this);
	}
        
    // Start modification by prakash.selvam
    // Purpose: Subscribe to on_before_ajax_request to call function right before we call ajax request
    YAHOO.util.Event.addListener("rn_SelectionInput_incident_category", "change", this._incidentDropdownUpdate);
    // End of modification by prakash.selvam
};

RightNow.Widget.DynamicProductCategoryInput.prototype = {
    /**
    * Constructs the YUI Treeview widget for the first time with initial data returned
    * from the server. Pre-selects and expands data that is expected to be populated.
    */
    _buildTree : function()
    {
        this._initializeKeyBindings();
        this._tree = new YAHOO.widget.TreeView("rn_" + this.instanceID + "_Tree");
        if(this._tree)
        {
            this._tree.setDynamicLoad(RightNow.Event.createDelegate(this, this._getSubLevelRequest));
            var root = this._tree.getRoot(),
                  defaultValues = false;

            for(var i = 0, node, length = this.data.js.hierData.length; i < length; i++)
            {
                for(var j = 0, nodeData; j < this.data.js.hierData[i].length; j++)
                {
                    //if this node has a parent, it needs to be retrieved so that this node
                    //can properly attach itself to it
                    nodeData = this.data.js.hierData[i][j];
                    if(i !== 0 && nodeData.parentID)
                        root = this._tree.getNodeByProperty("hierValue", nodeData.parentID);

                    node = new YAHOO.widget.MenuNode(nodeData.label, root);
                    node.hierValue = nodeData.value;
                    node.href = 'javascript:void(0);';
                    if(nodeData.selected)
                    {
                        //if it should be pre-selected by default
                        defaultValues = true;
                        this._currentIndex = node.index;
                    }
                    if(!nodeData.hasChildren)
                    {
                        //if it doesn't have children then turn off the +/- icon
                        //and notify that the node is already loaded
                        node.dynamicLoadComplete = true;
                        node.iconMode = 1;
                    }
                }
                root.loadComplete();
            }
            var noValueNode = this._tree.getRoot().children[0];
            noValueNode.isLeaf = true;
            this._noValueNodeIndex = noValueNode.index;

            this._tree.subscribe("enterKeyPressed", this._enterPressed, null, this);
            this._tree.subscribe('clickEvent', this._selectNode, null, this);
            //scroll container to 20px above expanded node
            this._tree.subscribe('expandComplete', function(node) {
                    this._panel.innerElement.scrollTop = node.getEl().offsetTop - 20;
            }, null, this);
            this._tree.render();
            this._tree.collapseAll();
            YAHOO.util.Dom.setStyle("rn_" + this.instanceID + "_Tree", "display", "block");
            if(defaultValues)
                this._displaySelectedNodesAndClose(false);
        }
    },
	
	/**
    * Event handler when the page is loaded.
    */
    _onLoad: function(type, args)
    {
		if(this.data.js.menu_id_df_associate && this.data.js.menu_id_df_associate > 0)
		{
			this._eo.data['hierValue']=this.data.js.menu_id_df_associate;
			//call the custom event
			RightNow.Event.fire("evt_prod_change_trigger", this._eo);
		}
	},
	

    /**
    * Creates and displays a dialog consisting of an accessible list of items.
    */
    _displayAccessibleDialog: function()
    {
        //build tree for the first time
        if(!this._tree)
            this._buildTree();
        // If the dialog doesn't exist, create it.  (Happens on first click).
        if(!(this._dialog))
        {
            // Set up buttons with handler functions.
            var handleDismiss = function()
            {
                this.hide();
            };

            this._buttons = [ { text: RightNow.Interface.getMessage("CANCEL_CMD"), handler: handleDismiss, isDefault: false} ];
            // Create the dialog.
            YAHOO.util.Dom.removeClass(this._accessibleView, "rn_Hidden")
            this._dialog = RightNow.UI.Dialog.actionDialog(this.data.attrs.label_nothing_selected, this._accessibleView, {"buttons": this._buttons, "width": "400px"});
        }
        else
        {
            var currentlySelectedSpan = document.getElementById("rn_" + this.instanceID + "_IntroCurrentSelection");
            var introLink = document.getElementById("rn_" + this.instanceID + "_Intro");
            if(currentlySelectedSpan && introLink)
            {
                var currentNode = this._tree.getNodeByIndex(this._currentIndex);
                if(!currentNode)
                {
                    currentNode = {};
                    currentNode.hierValue = 0;
                }
                var localInstanceID = this.instanceID;
                introLink.onclick = function(){document.getElementById("rn_" + localInstanceID + "_AccessibleLink_" + currentNode.hierValue).focus();};
                var selectedNodes = this._getSelectedNodesMessage();
                currentlySelectedSpan.innerHTML = RightNow.Text.sprintf(RightNow.Interface.getMessage("SELECTION_PCT_S_ACTIVATE_LINK_JUMP_MSG"), selectedNodes);
            }
        }

        this._dialog.show();
        return false;
    },

    /**
    * Toggles accessible view.
    */
    _toggleAccessibleView: function()
    {
        if(this.data.attrs.data_type === "categories" && this.data.js.linkingOn)
            this._eo.data.linkingProduct = RightNow.UI.Form.currentProduct;

        if(this._flatTreeViewData)
            this._displayAccessibleDialog();
        else
            RightNow.Event.fire("evt_accessibleTreeViewRequest", this._eo);
    },

    /**
    * Listens to response from the server and constructs an HTML tree according to
    * the flat data structure given.
    * @param e String Event name
    * @param args Object Event arguments
    */
    _getAccessibleTreeViewResponse: function(e, args)
    {
        if(args[0].data.hm_type != this._eo.data.hm_type)
            return;
        var evtObj = args[0];
        if(evtObj.data.data_type == this.data.attrs.data_type)
        {
            this._flatTreeViewData = evtObj.data.accessibleLinks;
            //add the No Value node
            var noValue = {0: RightNow.Interface.getMessage("NO_VAL_LBL"),
                           1: 0,
                           hier_list: 0,
                           level: 0};
            if(!YAHOO.lang.isArray(this._flatTreeViewData))
            {
                //convert object to array because objects don't support unshift drop off the nonNumeric values
                var tempArray = [];
                for(var i in this._flatTreeViewData)
                    if(!isNaN(parseInt(i)))
                        tempArray[i] = this._flatTreeViewData[i];    
                
                this._flatTreeViewData = tempArray;
            }
            this._flatTreeViewData.unshift(noValue);
            var htmlList = "<p><a href='javascript:void(0)' id='rn_" + this.instanceID + "_Intro'" + 
            "onclick='document.getElementById(\"rn_" + this.instanceID + "_AccessibleLink_" + noValue[1] +
            "\").focus();'>" + RightNow.Text.sprintf(RightNow.Interface.getMessage("PLS_SEL_PCT_S_LINKS_DEPTH_ANNOUNCED_MSG"), this.data.attrs.label_input) + 
            " <span id='rn_" + this.instanceID + "_IntroCurrentSelection'>" + RightNow.Text.sprintf(RightNow.Interface.getMessage("SELECTION_PCT_S_ACTIVATE_LINK_JUMP_MSG"), noValue[0]) + "</span></a></p>";
            //loop through each hier_item to figure out nesting structure
            var previousLevel = -1;
            for(var i in this._flatTreeViewData)
            {
                var item = this._flatTreeViewData[i];
                //print down html
                if(item.level > previousLevel)
                    htmlList += "<ol>";

                //print up html
                while(item.level < previousLevel)
                {
                    htmlList += "</li></ol>";
                    previousLevel--;
                }
                //print across html
                if(item.level === previousLevel)
                    htmlList += "</li>";
                //print current node
                htmlList += "<li>" + '<a href="javascript:void(0)" id="rn_' +  this.instanceID + '_AccessibleLink_' + item[1] + '" class="rn_AccessibleHierLink" hierList="' + item['hier_list'] + '">' + item[0] + '</a>';
                previousLevel = item.level;
            }
            //close list
            for(var i = previousLevel; i >= 0; --i)
                htmlList += "</li></ol>";
            
            htmlList += "<div id='rn_" + this.instanceID + "_AccessibleErrorLocation'></div>";
            this._accessibleView.innerHTML = htmlList;
            //set up click handlers
            var allNodes = YAHOO.util.Dom.getElementsByClassName("rn_AccessibleHierLink", "a", this._accessibleView);
            YAHOO.util.Event.addListener(allNodes, "click", this._accessibleLinkClick, null, this);
            this._displayAccessibleDialog();
        }
    },
    
    /**
    * Executed when a tree item is selected from the accessible view.
    * @param e Event DOM click event
    */
    _accessibleLinkClick: function(e)
    {
        //basically transfer this click to the visible control
        //find the node in this._tree. If it's not there, expand it's parents until it is there.
        //call click on that node.
        var element = YAHOO.util.Event.getTarget(e);
        var hierArray = element.getAttribute("hierList").split(",");
        //attempt to get the one they clicked first
        var i = hierArray.length-1;
        var currentNode = null;
        //walk up the chain looking for the first available node
        while(!currentNode && i>=0)
        {
            currentNode = this._tree.getNodeByProperty("hierValue", parseInt(hierArray[i]));
            i--;
        }
        //now currentNode should be something.
        //if we already have the one they selected, then we can go ahead and click it.
        i++;
        if(this._noValueNodeIndex === currentNode.index || currentNode.hierValue == hierArray[hierArray.length-1])
        {
            this._tree.fireEvent('clickEvent', {node:currentNode});
        }
        else
        {
            var onExpandComplete = function(expandingNode)
            {
                if(expandingNode.nextToExpand)
                {
                    var nextNode = this._tree.getNodeByProperty("hierValue", parseInt(expandingNode.nextToExpand));
                    if(nextNode)
                    {
                        nextNode.nextToExpand = hierArray[++i];
                        nextNode.expand();
                    }
                }
                else if(i === hierArray.length)
                {
                    //we don't want to subscribe to this more than once
                    this._tree.unsubscribe("expandComplete", onExpandComplete, null);
                    this._tree.fireEvent('clickEvent', {node:expandingNode});
                }
                return true;
            };
            //walk back down to their selection from here expanding as you go
            this._tree.subscribe("expandComplete", onExpandComplete, null, this);
            currentNode.nextToExpand = hierArray[++i];
            currentNode.expand();
        }
        return false;
    },

    /**
    * Shows / hides Panel containing TreeView widget
    * Shows when user clicks button and the Panel is hidden.
    * Hides when user selects a node or the Panel loses focus.
    * @param event Event Select button's click event
    */
    _toggleProductCategoryPicker: function(event)
    {
        //build tree for the first time
        if(!this._tree)
            this._buildTree();
        //show panel
        if(this._panel.cfg.getProperty("visible") === false)
        {
            this._panel.syncPosition();
            this._panel.show();
            //focus on either the previously selected node or the first node
            var currentNode = this._tree.getNodeByIndex(this._currentIndex);
            if(currentNode && currentNode.focus)
            {
                currentNode.focus();
            }
            else if(this._tree.getRoot().children[0] && this._tree.getRoot().children[0].focus)
            {
                this._tree.getRoot().children[0].focus();
            }

            //create event listener (once)
            this._toggleProductCategoryPicker._closeListener = this._toggleProductCategoryPicker._closeListener ||
            function(event)
            {
                if(this._panel.cfg.getProperty("visible"))
                {
                    var coordinates = YAHOO.util.Event.getXY(event);
                    //return if target was the toggle button (either clicking or enter key)
                    if((event.type === "click" && YAHOO.util.Event.getTarget(event).id === this._displayField.id) || coordinates[0] === 0 || coordinates[1] === 0)
                        return;

                    coordinates = new YAHOO.util.Point(coordinates[0], coordinates[1]);
                    var panelRegion = YAHOO.util.Dom.getRegion("rn_" + this.instanceID + "_Tree"),
                          buttonRegion = YAHOO.util.Dom.getRegion(this._displayField);
                    if(panelRegion && buttonRegion && (!panelRegion.contains(coordinates) && !buttonRegion.contains(coordinates)))
                    {
                        //if click was anywhere outside of button or panel region, hide the panel
                        this._displaySelectedNodesAndClose();
                        YAHOO.util.Event.removeListener(document, this._toggleProductCategoryPicker._closeListener);
                    }
                }
            };
            YAHOO.util.Event.addListener(document, "click", this._toggleProductCategoryPicker._closeListener, null, this);
        }
        //hide panel
        else
        {
            this._displaySelectedNodesAndClose();
            YAHOO.util.Event.removeListener(document, this._toggleProductCategoryPicker._closeListener);
        }
    },

    /**
    * Navigates up from the selected node, generating an array
    * consisting of the labels of ea. hierarchy level in order.
    * @return array Array of labels
    */
    _getSelectedNodesMessage: function()
    {
        //work back up the tree from the selected node
        this._currentIndex = this._currentIndex || 1;
        var hierValues = [],
              currentNode = this._tree.getNodeByIndex(this._currentIndex);
        while(currentNode && !currentNode.isRoot())
        {
            hierValues.push(currentNode.label);
            currentNode = currentNode.parent;
        }
        return hierValues.reverse();
    }, 

    /**
    * Displays the hierarchy of the currently selected node up to it's root node,
    * hides the panel, and focuses on the selection button (if directed).
    * @param focus Boolean Whether or not the button should be focused
    */
    _displaySelectedNodesAndClose: function(focus)
    {
        this._panel.hide();
        //also close the dialog if it exists
        if(this._dialog && this._dialog.cfg.getProperty("visible"))
            this._dialog.hide();
        if(this._currentIndex <= this._noValueNodeIndex)
        {
            this._displayFieldVisibleText.innerHTML = this.data.attrs.label_nothing_selected;
            var description = document.getElementById("rn_" + this.instanceID + "_TreeDescription");
            if(description)
               description.innerHTML = this.data.attrs.label_nothing_selected;
        }
        else
        {
            var hierValues = this._getSelectedNodesMessage().join("<br/>"),
                field = this._displayFieldVisibleText;
            if(YAHOO.env.ua.webkit) {
                //webkit doesn't allow setting the innerHTML of the button during keypress event,
                //so set it one millisecond later...
                setTimeout(function(){field.innerHTML = hierValues;}, 1);
            }
            else {
                field.innerHTML = hierValues;
            }
            
            var description = document.getElementById("rn_" + this.instanceID + "_TreeDescription");
            if(description)
               description.innerHTML = this.data.attrs.label_screen_reader_selected + " - " + hierValues;
        }
        //don't focus if the accessible dialog is in use or was in use during this page load.
        //the acccessible view and the treeview shouldn't really be mixed
        if(focus && !this._dialog)
            try{this._displayField.focus();} catch(e){}
    },

    /**
    * Handler for when enter was pressed while focused on a node
    * Emulates mouse click
    * @param {Event} keyEvent The node's enterPressed event.
    */
    _enterPressed: function(keyEvent)
    {
        this._selectNode({node:keyEvent});
    },

    /**
    * Selected a node by clicking on its label
    * (as opposed to expanding it via the expand image).
    * @param clickEvent Event The node's click event.
    */
    _selectNode: function(clickEvent)
    {
        this._currentIndex = clickEvent.node.index;
        this._selected = true;
        //get next levels if the node hasn't loaded children yet, isn't expanded, and isn't the 'No Value' node
        if(!clickEvent.node.expanded && this._currentIndex !== this._noValueNodeIndex && !clickEvent.node.dynamicLoadComplete || this.data.js.linkingOn)
            this._getSubLevelRequest(clickEvent.node);
        else
        {
            this._errorLocation = "";
            this._checkRequiredLevel();
        }
        this._displaySelectedNodesAndClose(true);
        if(clickEvent.event)
            YAHOO.util.Event.preventDefault(clickEvent.event);
        
		//Addition Josh Arlint 2009-02-03 
		//add the selected value to the object
		this._eo.data['hierValue']=clickEvent.node['hierValue'];
		//call the custom event
		RightNow.Event.fire("evt_prod_change_trigger", this._eo);
		
        return false;
    },

    /**
     * Event handler when a node is expanded.
     * Requests the next sub-level of items from the server.
     * @param expandingNode Event The node that's expanding
     */
    _getSubLevelRequest: function(expandingNode)
    {
        //only allow one node at-a-time to be expanded
        if(this._nodeBeingExpanded || expandingNode.expanded) return;
        
        this._nodeBeingExpanded = true;
        this._eo.data.level = expandingNode.depth + 1;
        this._eo.data.value = expandingNode.hierValue;
        this._eo.data.label = expandingNode.label;
        this._currentIndex = expandingNode.index;

        if(this.data.attrs.data_type === "products")
        {
            //Set namespace global for hier menu list linking display
            RightNow.UI.Form.currentProduct = this._eo.data.value;
            RightNow.UI.Form.linkingOn = this.data.js.linkingOn;
            RightNow.UI.Form.linkingFilter = this.data.attrs.data_type;
        }

        this._eo.data.reset = false; //whether data should be reset for the current level
        if(this._eo.data.linking_on)
        {
            //prod linking
            if(this.data.attrs.data_type === "categories")
            {
                if(expandingNode.children.length)
                {
                    //data's already been loaded
                    this._nodeBeingExpanded = false;
                    return;
                }
                this._eo.data.reset = (this._eo.data.value < 1);
            }
            else if(this._eo.data.value < 1 && this.data.attrs.data_type === "products")
            {
                //product was set back to all: fire event for categories to re-show all
                var eo = new RightNow.Event.EventObject();
                eo.data = {"reset_linked_category" : true, "data_type" : "categories", "reset" : true};
                this._nodeBeingExpanded = false;
                RightNow.Event.fire("evt_menuFilterGetResponse", eo);
                return;
            }
        }

        if(this.data.js.link_map)
        {
            //pass link map (prod linking) to EventBus for first time
            this._eo.data.link_map = this.data.js.link_map;
            this.data.js.link_map = null;
        }
        RightNow.Event.fire("evt_menuFilterRequest", this._eo);
        this._nodeBeingExpanded = false;
    },

    /**
     * Event handler when returning from ajax this.data request
     * @param type String Event name
     * @param args Object Event arguments
     */
    _getSubLevelResponse: function(type, args)
    {
        var evtObj = args[0];

        //Check if we are supposed to update : only if the original requesting widget or if category widget receiving prod links
        if((evtObj.w_id && evtObj.w_id === this.instanceID) || (this.data.js.linkingOn && evtObj.data.data_type === "categories" && this.data.attrs.data_type === evtObj.data.data_type))
        {
            //prod linking : data's being completely reset
            if(evtObj.data.reset_linked_category)
            {
                if(!this._tree || evtObj.data.reset)
                {
                    //restore category tree to its orig. state
                    this._buildTree();
                    this._linkedCategorySubset = false;
                }

                this._flatTreeViewData = null;
                //clear out the existing tree and add 'no value' node
                var currentRoot = this._tree.getRoot();
                if(!evtObj.data.reset)
                {
                    this._linkedCategorySubset = true;
                    currentRoot.dynamicLoadComplete = false;
                    this._tree.removeChildren(currentRoot);
                    var tempNode = new YAHOO.widget.MenuNode(RightNow.Interface.getMessage("NO_VAL_LBL"), currentRoot, false);
                    tempNode.hierValue = 0;
                    tempNode.href='javascript:void(0);';
                    tempNode.isLeaf = true;
                    this._noValueNodeIndex = this._currentIndex = tempNode.index;
                }
                //since the data's being reset, reset the button's label
                this._displayFieldVisibleText.innerHTML = this.data.attrs.label_nothing_selected;
                var description = document.getElementById("rn_" + this.instanceID + "_TreeDescription");
                if(description)
                    description.innerHTML = this.data.attrs.label_screen_reader_selected + this.data.attrs.label_nothing_selected;
            }
            else
            {
                var currentRoot = this._tree.getNodeByIndex(this._currentIndex);
            }

            var hierLevel = evtObj.data.level,
                  hierData = evtObj.data.hier_data;

            if(hierLevel < 7)
            {
                var isLeafIndex = (this.data.js.linkingOn && this.data.attrs.data_type === "categories") ? 2 : 3;
                for(var i = 0, tempNode, hierValue; i < hierData.length; i++)
                {
                    hierValue = hierData[i][0];
                    if(!currentRoot.children[i] || currentRoot.children[i].hierValue !== hierValue)
                {
                    tempNode = new YAHOO.widget.MenuNode(hierData[i][1], currentRoot, false);
                    tempNode.hierValue = hierValue;
                    tempNode.href='javascript:void(0);';
                    if(!hierData[i][isLeafIndex])
                    {
                        //if it doesn't have children then turn off the +/- icon
                        //and notify that the node is already loaded
                        tempNode.dynamicLoadComplete = true;
                        tempNode.iconMode = 1;
                    }
                }
                }
                currentRoot.loadComplete();
                //if a leaf node was expanded then display and close
                if(hierData.length === 0 && !this._selected)
                {
                    this._displaySelectedNodesAndClose();
                }
                else if(this._selected && this.data.attrs.required_lvl)
                {
                    this._errorLocation = "";
                    this._checkRequiredLevel();
                    this._selected = false;
                }
            }
        }
    },

    /**
     * Event handler if set_button attribute is set to true
     */
    _setButtonClick: function()
    {
        var hierValues = [];
        //collect node values: work back up the tree
        if(this._currentIndex > this._noValueNodeIndex)
        {
            YAHOO.util.Dom.addClass(this._errorMessageDiv, "rn_Hidden");
            var currentNode = this._tree.getNodeByIndex(this._currentIndex),
                  index = currentNode.depth + 1,
                  temp;
            while(currentNode && !currentNode.isRoot())
            {
                temp = {"id" : currentNode.hierValue, "label" : currentNode.label};
                hierValues[index] = temp;
                currentNode = currentNode.parent;
                index--;
            }
            this._currentIndex = this._noValueNodeIndex;
            var description = document.getElementById("rn_" + this.instanceID + "_TreeDescription");
            if(this._displayField && description)
                description.innerHTML = this._displayFieldVisibleText.innerHTML = this.data.attrs.label_nothing_selected;
        }
        else
        {
            if(this._errorMessageDiv === undefined)
            {
                this._errorMessageDiv = document.createElement("div");
                this._errorMessageDiv = YAHOO.util.Dom.insertBefore(this._errorMessageDiv, "rn_" + this.instanceID);
                YAHOO.util.Dom.addClass(this._errorMessageDiv, "rn_MessageBox");
                YAHOO.util.Dom.addClass(this._errorMessageDiv, "rn_ErrorMessage");
            }
            this._errorMessageDiv.innerHTML = "<b><a href='javascript:void(0);' onclick='document.getElementById(\"" + this._displayField.id + "\").focus(); return false;'>" +
                this.data.attrs.label_nothing_selected + "</a></b>";
            YAHOO.util.Dom.removeClass(this._errorMessageDiv, "rn_Hidden");
            var errorLink = YAHOO.util.Dom.getElementBy(function(){return true;}, "A", this._errorMessageDiv);
            if(errorLink)
                errorLink.focus();
            return;
        }
        this._eo.data.hierSetData = hierValues;
        RightNow.Event.fire("evt_menuFilterSelectRequest", this._eo);
    },

    /**
     * Event handler for when form is being validated
     * @param type String Event name
     * @param args Object Event arguments
     */
    _onValidateRequest: function(type, args)
    {
        this._errorLocation = args[0].data.error_location;

        if(this._checkRequiredLevel())
        {
            if(this.data.attrs.table === "contacts")
                this._eo.data.profile = true;

            var hierValues = [];
            //collect node values: work back up the tree
            if(this._currentIndex !== this._noValueNodeIndex)
            {
                var currentNode = this._tree.getNodeByIndex(this._currentIndex);
                while(currentNode && !currentNode.isRoot())
                {
                    hierValues.push(currentNode.hierValue);
                    currentNode = currentNode.parent;
                }
            }
            this._eo.data.value = hierValues.reverse();
            this._eo.data.form = this._eo.form || RightNow.UI.findParentForm("rn_" + this.instanceID);
            var tempCache = this._eo.data.cache;
            delete this._eo.data.cache;
            RightNow.Event.fire("evt_formFieldValidateResponse", this._eo);
            this._eo.data.cache = tempCache;
        }
        RightNow.Event.fire("evt_formFieldCountRequest");
    },

    /**
     * Checks if field has met its required level for submission
     */
    _checkRequiredLevel: function()
    {
        if(this.data.attrs.required_lvl)
        {
            if(!this._tree)
            {
                this._buildTree();
                this._currentIndex = this._noValueNodeIndex;
                this._displaySelectedNodesAndClose();
            }
            var currentNode = this._tree.getNodeByIndex(this._currentIndex);
            this._removeRequiredError(currentNode);
            var currentDepth = (currentNode) ? currentNode.depth + 1 : 1;
            if(this.data.js.linkingOn && this.data.attrs.data_type === "categories" && this._linkedCategorySubset)
            {
                //if there's some subset of categories that have been loaded then
                //allow submission if either there's only a single 'no value' node...
                if(this._tree.getNodeCount() === 1)
                {
                    return true;
                }
                //...or if a category meeting requirement lvl or a leaf node
                else if(currentDepth < this.data.attrs.required_lvl && (currentNode.hasChildren(false) || this._currentIndex === this._noValueNodeIndex))
                {
                    this._displayRequiredError(currentNode);
                    return false;
                }
            }
            //requirement error : if (nothing's selected) or ('no value's selected) or (current node still has children and the req level hasn't been hit)
            else if((!currentNode) || (this._currentIndex === this._noValueNodeIndex) || ((currentNode.hasChildren(false)) && (currentDepth < this.data.attrs.required_lvl)))
            {
                this._displayRequiredError(currentNode);
                return false;
            }
        }
        return true;
    },

    /**
    * Removes any previously set error classes from the widget's label,
    * selection button, and previously erroneous node.
    * @param currentNode MenuNode the currently selected node
    */
    _removeRequiredError: function(currentNode)
    {
        YAHOO.util.Dom.removeClass(this._displayField, "rn_ErrorField");
        YAHOO.util.Dom.removeClass("rn_" + this.instanceID + "_Label", "rn_ErrorLabel");
        currentNode = (this._displayRequiredError.errorNode) ? this._displayRequiredError.errorNode : currentNode;
        if(currentNode)
            YAHOO.util.Dom.removeClass(currentNode.getEl(), "rn_ErrorField");
        YAHOO.util.Dom.replaceClass("rn_" + this.instanceID + "_RequiredLabel", "rn_RequiredLabel", "rn_Hidden");
        if(this._accessibleErrorMessageDiv)
            YAHOO.util.Dom.addClass(this._accessibleErrorMessageDiv, "rn_Hidden");
    },

    /**
     * Adds error classes to the widget's label, selection button,
     * and the currently selected node. Adds the required message
     * to the form's common error location.
     * @param currentNode MenuNode the currently selected node
     */
    _displayRequiredError: function(currentNode)
    {
        //indicate the error
        YAHOO.util.Dom.addClass(this._displayField, "rn_ErrorField");
        YAHOO.util.Dom.addClass("rn_" + this.instanceID + "_Label", "rn_ErrorLabel");

        if(!currentNode)
            currentNode = this._tree.getRoot().children[0];
        YAHOO.util.Dom.addClass(currentNode.getEl(), "rn_ErrorField");
        //save a local reference to the error node so that the error class can be removed from it later
        this._displayRequiredError.errorNode = currentNode;

        var message = (this.data.attrs.label_required.indexOf("%s") > -1) ? RightNow.Text.sprintf(this.data.attrs.label_required, currentNode.label) :
            this.data.attrs.label_required;
        //write out the required label
        var requiredLabel = document.getElementById("rn_" + this.instanceID + "_RequiredLabel");
        if(requiredLabel)
        {
            requiredLabel.innerHTML = message;
            YAHOO.util.Dom.replaceClass(requiredLabel, "rn_Hidden", "rn_RequiredLabel");
        }

        //report error on common form button area
        var commonErrorDiv = document.getElementById(this._errorLocation);
        if(commonErrorDiv)
        {
            if(RightNow.UI.Form.chatSubmit && RightNow.UI.Form.errorCount == 1)
                comonErrorDiv.innerHTML = "";
            var errorMessage = "<div><b><a href='#' onclick='document.getElementById(\"" + this._displayField.id + "\").focus(); return false;'>" +
                    this.data.attrs.label_input + " " +  message + "</a></b></div> ";
            commonErrorDiv.innerHTML += errorMessage;
            RightNow.UI.Form.errorCount++;
            RightNow.UI.formError = true;
        }
        //if the dialog is created and it's open, then we also need to add
        //error handlers there
        if(this._dialog && this._dialog.cfg.getProperty("visible"))
        {
            if(!this._accessibleErrorMessageDiv)
                this._accessibleErrorMessageDiv = document.getElementById("rn_" + this.instanceID + "_AccessibleErrorLocation");
            var errorMessage = "<div><b><a id='rn_" + this.instanceID + "_FocusLink' href='javascript:void(0);' onclick='document.getElementById(\"" + "rn_" + this.instanceID + "_AccessibleLink_" + currentNode.hierValue + "\").focus(); return false;'>" +
                    this.data.attrs.label_input + " " +  message + "</a></b></div> ";
            this._accessibleErrorMessageDiv.innerHTML = errorMessage;
            YAHOO.util.Dom.addClass(this._accessibleErrorMessageDiv, "rn_MessageBox");
            YAHOO.util.Dom.addClass(this._accessibleErrorMessageDiv, "rn_ErrorMessage");
            YAHOO.util.Dom.removeClass(this._accessibleErrorMessageDiv, "rn_Hidden");
            var errorLink = document.getElementById("rn_" + this.instanceID + "_FocusLink");
            RightNow.UI.updateVirtualBuffer();
            if(errorLink)
                errorLink.focus();
        }
    },
    
    /**
    * Resets the native YAHOO.widgetTreeView keyboard bindings to a simpler,
    * easier-to-use scheme.
    */
    _initializeKeyBindings: function()
    {
        if(!this._initializeKeyBindings._initialized) {
            this._initializeKeyBindings._initialized = true;
            YAHOO.widget.TreeView.prototype._onKeyDownEvent = function(ev) {
                var target = YAHOO.util.Event.getTarget(ev),
                      node = this.getNodeByElement(target),
                      newNode = node,
                      KEY = YAHOO.util.KeyListener.KEY;
                switch(ev.keyCode) {
                    case KEY.UP:
                        do {
                            if(newNode.previousSibling) {
                                var currentNode = newNode.previousSibling;
                                while(currentNode && currentNode.expanded && currentNode.children.length) {
                                    currentNode = currentNode.children[currentNode.children.length - 1];
                                }
                                newNode = currentNode;
                            }
                            else {
                                newNode = newNode.parent;
                            }
                        }
                        while(newNode && !newNode._canHaveFocus());
                        if (newNode)
                            newNode.focus();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.DOWN:
                        do {
                            if(newNode.children.length && newNode.expanded) {
                                newNode = newNode.children[0];
                            }
                            else if(newNode.nextSibling) {
                                newNode = newNode.nextSibling;
                            }
                            else {
                                var currentNode = newNode.parent;
                                while(currentNode) {
                                    if(currentNode.nextSibling) {
                                        newNode = currentNode.nextSibling;
                                        break;
                                    }
                                    else {
                                        currentNode = currentNode.parent;
                                    }
                                }
                            }
                        }
                        while(newNode && !newNode._canHaveFocus);
                        if(newNode)
                            newNode.focus();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.LEFT:
                        node.collapse();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.RIGHT:
                        node.expand();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.ENTER:
                    case KEY.TAB:
                        if(node.href) {
                            if(node.target) {
                                window.open(node.href,node.target);
                            }
                            else {
                                window.location(node.href);
                            }
                        }
                        else {
                            node.toggle();
                        }
                        this.fireEvent('enterKeyPressed', node);
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.HOME:
                        newNode = this.getRoot();
                        if(newNode.children.length)
                            newNode = newNode.children[0];
                        if(newNode._canHaveFocus())
                            newNode.focus();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case KEY.END:
                        newNode = newNode.parent.children;
                        newNode = newNode[newNode.length -1];
                        if(newNode._canHaveFocus())
                            newNode.focus();
                        YAHOO.util.Event.preventDefault(ev);
                        break;
                    case 107:  //plus key
                        if(ev.shiftKey) {
                            node.parent.expandAll();
                        }
                        else {
                            node.expand();
                        }
                        break;
                    case 109: //minus key
                        if(ev.shiftKey) {
                            node.parent.collapseAll();
                        }
                        else {
                            node.collapse();
                        }
                        break;
                    default:
                        break;
                }
            };
        }
    }
};

