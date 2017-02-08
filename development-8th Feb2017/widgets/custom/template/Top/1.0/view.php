
<rn:meta controller_path="standard/utils/Blank" />
<div id="divContainer"> <?/* Opening tag for "#divContainer", closing div tag in footer */?>
	<div id="divHeaderBar">
		<div id="divHeader">
		
			<img id="imgMobileSearchIcon" src="/euf/assets/images/Search_icon.png" width="17px" height="16px" border="0" align="absmiddle">
			 
			<div id="rn_searchheader"><rn:widget path="custom/search/SimpleSearch" label_placeholder="" label_filter_type_placeholder=""/></div>
			
			<div id="divWizardsIcon"><a href="/app/home" title="Wizards" alt="Wizards"><img src="/euf/assets/images/wizards-footer_icon.png" width="121px" height="76px" border="0" align="absmiddle"></a></div>
			<div id="divHeaderTitle">SUPPORT</div>
			<div id="divAccountLinks">
				<img src="/euf/assets/images/HeaderProfile_Icon.png" width="23px" height="18px" border="0" align="absmiddle">
				<rn:condition logged_in="true">
					 #rn:msg:WELCOME_BACK_LBL# <rn:field name="contacts.first_name"/>
					<span>&nbsp;|&nbsp;</span>					
					<rn:widget path="standard/login/LogoutLink" label="[LOGOUT]"/>
					
				<rn:condition_else />				
					<a href="#rn:config:PTA_EXTERNAL_LOGIN_URL#?p_next_page=home" title="Sign-in" alt="SIGN IN">SIGN IN</a>
					<span>&nbsp;|&nbsp;<span>
					<a href="#rn:config:PTA_EXTERNAL_LOGIN_URL#?p_next_page=home" title="Sign-up" alt="SIGN UP">SIGN UP</a>
				</rn:condition>
				<img id="imgDesktopSearchIcon" src="/euf/assets/images/Search_icon.png" width="17px" height="16px" border="0" align="absmiddle">
			</div>
		</div>
	</div>
    
    <script>
	var ctxt=document.getElementsByClassName("rn_SearchField")[0];
	window.onload=function(){		
		document.getElementsByClassName("rn_SearchField")[0].value="Search";
		};
		ctxt.onfocus=function(){
			document.getElementsByClassName("rn_SearchField")[0].value="";
			};
			
	 
	</script>