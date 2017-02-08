<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="#rn:language_code#" xml:lang="#rn:language_code#" style="background-image:url(euf/assets/images/article3_2100.jpg);">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1" />
    <title><rn:page_title/></title>

    <rn:widget path="search/BrowserSearchPlugin" pages="home, answers/list, answers/detail" />
    <rn:theme path="/euf/assets/themes/standard" css="site.css,/rnt/rnw/yui_2.7/container/assets/skins/sam/container.css" />
    <rn:head_content/>
    <? /* adding custom/template/head widget to store cci/head.phph code from classic*/ ?>
    <rn:widget path="custom/template/head" />
    <? /* calling upgrades.css file, upgrades team will make all css edits in upgrades.css to centralize all style edits*/?>
    <link href="/euf/assets/themes/standard/upgrades.css" type="text/css" rel="stylesheet"> 
</head>
<body class="yui-skin-sam">

    <? /* adding custom/template/top widget to store enduser/src/cci/top.phph code from classic or any customers header html*/ ?>
    <rn:widget path="custom/template/top" /> 
	<div id="rn_Container" style="margin-top:150px">
    	<div id="rn_SkipNav"><a href="#rn_MainContent">#rn:msg:SKIP_NAVIGATION_CMD#</a>
        </div>
     
        <div id="rn_Header">
            <noscript><h1>#rn:msg:SCRIPTING_ENABLED_SITE_MSG#</h1></noscript>
            <rn:condition is_spider="false">
                <div id="rn_LoginStatus">
                    <rn:condition logged_in="true">
                         #rn:msg:WELCOME_BACK_LBL#
                        <strong>
                            <rn:field name="contacts.full_name"/>
                        </strong>
                        <div>
                            <rn:field name="contacts.organization_name"/>
                        </div>
                        <rn:widget path="login/LogoutLink2"/>
                    </rn:condition>
                </div>
            </rn:condition>
        </div>  
        
	    <div id="rn_Navigation">
    		<rn:condition hide_on_pages="utils/help_search"> 
        	<div id="rn_NavigationBar" style="position:relative">
            	<ul>
	                <li><rn:widget path="navigation/NavigationTab2" style="-webkit-border-radius: 10px; moz-border-radius: 10px; border-radius: 10px; border: 1px solid;" label_tab="#rn:msg:ANSWERS_HDG#" link="/app/answers/list" pages="answers/list, answers/detail"/></li>
    	            <li><rn:widget path="navigation/NavigationTab2" label_tab="#rn:msg:ASK_QUESTION_HDG#" link="/app/ask" pages="ask, ask_confirm"/></li>
                <? /* uncomment to show chat/chat_launch page */ ?>
                <? /* <li><rn:widget path="navigation/NavigationTab2" label_tab="#rn:msg:LIVE_HELP_HDG#" link="/app/chat/chat_launch" pages="chat/chat_launch,chat/chat_landing"/></li> */ ?>
                
	                <li><rn:widget path="navigation/NavigationTab2" label_tab="#rn:msg:MY_STUFF_HDG#" link="/app/account/overview" pages="utils/account_assistance, account/overview, account/profile, account/notif, account/change_password, account/questions/list, account/questions/detail, account/notif/list, utils/login_form, utils/create_account, utils/submit/password_changed, utils/submit/profile_updated"
                subpages="#rn:msg:ACCOUNT_OVERVIEW_LBL# > /app/account/overview, #rn:msg:SUPPORT_HISTORY_LBL# > /app/account/questions/list, #rn:msg:ACCOUNT_SETTINGS_LBL# > /app/account/profile, #rn:msg:NOTIFICATIONS_LBL# > /app/account/notif/list"/></li>
            </ul>
        	</div>
    		</rn:condition>
    	</div>

    <div id="rn_Body">
        <div id="rn_MainColumn">
            <a name="rn_MainContent" id="rn_MainContent"></a>
            <rn:page_content/>
        </div>
        <rn:condition is_spider="false">
            <div id="rn_SideBar">
                <div class="rn_Padding">
                    <rn:condition hide_on_pages="answers/list, home, account/questions/list">
                    FOO
                    <div class="rn_Module">
                        <h2>#rn:msg:FIND_ANS_HDG#</h2>
                        <rn:widget path="search/SimpleSearch"/>
                    </div>
                    </rn:condition>
                    <div class="rn_Module">
                        <h2>#rn:msg:CONTACT_US_LBL#</h2>
                        <div class="rn_HelpResources">
                            <div class="rn_Questions">
                                <a href="/app/ask#rn:session#">#rn:msg:ASK_QUESTION_LBL#</a>
                                <span>#rn:msg:SUBMIT_QUESTION_OUR_SUPPORT_TEAM_CMD#</span>
                            </div>
                            <? /* Upgrades:  Removing the following links
                            <div class="rn_Community">
                                <a href="javascript:void(0);">#rn:msg:ASK_THE_COMMUNITY_LBL#</a>
                                <span>#rn:msg:SUBMIT_QUESTION_OUR_COMMUNITY_CMD#</span>
                            </div>
                            <div class="rn_Chat">
                                <a href="/app/chat/chat_launch#rn:session#">#rn:msg:LIVE_CHAT_LBL#</a>
                                <span>#rn:msg:CHAT_DIRECTLY_SUPPORT_TEAM_MSG#</span>
                            </div>
                            <div class="rn_Contact">
                                <a href="javascript:void(0);">#rn:msg:CONTACT_US_LBL#</a>
                                <span>#rn:msg:CANT_YOURE_LOOKING_SITE_CALL_MSG#</span>
                            </div>
                            */ ?>
                            <div class="rn_Feedback">
                                <rn:widget path="feedback/SiteFeedback2" />
                                <span>#rn:msg:SITE_USEFUL_MSG#</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </rn:condition>
    </div>
  
    <div id="rn_Footer">
       <? /*   <div id="rn_RightNowCredit">
            <div class="rn_FloatRight">
                <rn:widget path="utils/RightNowLogo"/>
            </div>
        </div>  */?>
    </div>
  
</div>
   <? /*  Calling custom template/bottom widget. Customer's footer html code should go in this widget
          or code from classic enduser/src/cci/bottom.phph  */?>
    <rn:widget path="custom/template/bottom" />
</body>
</html>