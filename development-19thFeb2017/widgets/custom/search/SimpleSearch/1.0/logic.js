RightNow.namespace('Custom.Widgets.search.SimpleSearch');
Custom.Widgets.search.SimpleSearch = RightNow.Widgets.extend({ 
    /**
     * Widget constructor.
     */
    constructor: function() {



this._searchField = this.Y.one(this.baseSelector + "_SearchField");

//console.log(this._searchField);

//console.log(this.baseSelector);


        if (!this._searchField) return;

        if (this.data.attrs.initial_focus && this._searchField.focus)
		{
            this._searchField.focus();
	

		}

        this.Y.Event.attach("keyup", this._onSearch, this.baseSelector, this);
		
		//input.on('key', saveAndClose, 'enter');
		
		 //this.Y.Event.attach("blur", this._onSearch, this.baseSelector + "_Submit", this);
		//alert("jhvjsdhgf");
    },

    /**
     * Sample widget method.
     */
     _onSearch: function(param, args) {
		// alert("_onSearch");
		 
		if (param.keyCode ==13)
		 {
			 
		
        var searchValue = this._searchField.get('value'),
            searchString = searchValue === this.data.attrs.label_hint ? '' : searchValue;

        if(this.Y.Lang.trim(searchString) === '') {
            RightNow.UI.displayBanner(RightNow.Interface.ASTRgetMessage(this.data.attrs.label_enter_search_keyword), { type: 'WARNING'});
            this._searchField.focus();
        }
        else {
            var url = this.data.attrs.report_page_url + this._urlParameters(
                this.Y.merge({kw: searchString, session: RightNow.Url.getSession()}, this.data.js.url_parameters)
            );

            RightNow.Url.navigate(this._addSearchParam(url));
        }
		 }
    },

    /**
     * Constructs a url parameter string
     * @param {Object} parameters The parameter names and associated values used to construct the url parameter string.
     * @return {string} The url parameter string
     */
    _urlParameters: function(parameters) {
		
        var url = '';
        if (typeof parameters === 'object') {
            this.Y.Object.each(parameters, function(value, parameter) {
                url = RightNow.Url.addParameter(url, parameter, value);
            });
        }

        return url;
    },

    /**
     * Adds a "search/1" parameter to the given
     * url (needed to record a new search interaction
     * in clickstreams).
     * @param {string} url URL to add search param
     * @return {string} The url with the search parameter appended if necessary
     */
    _addSearchParam: function(url) {
	
        var searchParam = '/search/1';

        if (url.indexOf(searchParam) === -1) {
            url += searchParam;
        }

        return url;
    }
});