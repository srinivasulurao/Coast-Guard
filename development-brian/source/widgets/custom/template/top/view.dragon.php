<?/** ---------------------------------------------------------------------------
   *  File Name: widgets/custom/template/top/view.php
   *  Author:    Upgrades Team
   *  Purpose:   We like to seperate our customer's HTML code from our HTML code in the template.  
   *             We create 3 custom widgets to accomplish this, top,bottom, head
   *             On Classic to CP Migrations we are copying code from enduser/cci/head.php,top.phph,bottom.php into these widgets
   *             On Nov. 09 and Geater CP Migrations we are placing all header and footers into these widgests
   *  --------------------------------------------------------------------------- */?>
<rn:meta controller_path="standard/utils/Blank" /><head profile="http://www.w3.org/1999/xhtml/vocab">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="shortcut icon" href="http://company.wizards.com/sites/default/files/favicon_0_0.ico" type="image/vnd.microsoft.icon" />
<meta name="Generator" content="Drupal 7 (http://drupal.org)" />
  <title>Home | company.wizards.com</title>
<link type="text/css" rel="stylesheet" href="http://company.wizards.com/sites/default/files/css/css_CKoWqiBj9gVXhPuDSnNphuEB0b0J2To76x0pX0EGqn4.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://company.wizards.com/sites/default/files/css/css_MViG5OSni9P-hJs9Nw6ITVccFqtHgTyn9IdPALIBZSs.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://company.wizards.com/sites/default/files/css/css_8CtS3-QrRG7PiMazwQNZQPYLbRVVLLnTy8nkNUwQVqs.css" media="all" />
<link type="text/css" rel="stylesheet" href="http://company.wizards.com/sites/default/files/css/css_ztkSi7pLxB7CV6a4Xp4kaXkb2DQOkmGfbJO1rY7cV8k.css" media="all" />

<!--<body align="center" topmargin="0" marginwidth="0" marginheight="0"> 
<table align="center" width="910" cellpadding="0" cellspacing="0">
<tr><td>
-->

      
<div id="skip-link">
        <a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
      </div>
        
        <div id="first-page" style="left: 50%; margin-left: -512px;">
   
        <div class="wrapper" id="wrapper">
            <div id="navigationbar"></div>
            <div id="mainContain">
                <div class="clearfix" id="header">
                    <div id="logo-floater">
                        <a title="Home" href="/">
                            <img src="http://company.wizards.com/sites/default/themes/wizards/images/wizards_logo.png" />
                        </a>
                    </div>
                    <div id="navigation">
                        <div id="homenavigation">
                            <div class="region region-globalmainmenu">
                               <div id="block-menu-menu-top-navigation" class="block block-menu">
                               <h2>Top Navigation</h2>
                                 
                                        <div class="content">
                                            <ul class="menu">
                                                <li class="first leaf">
                                                    <a title="/about/working">COMPANY</a>
                                                </li>
                                                <li class="leaf">
                                                    <a title="about/careers">CAREERS</a>
                                                </li>
                                                <li class="last expanded">
                                                    <a title="*" class="active" href="/">BRANDS</a>
                                                    <ul class="menu">
                                                        <li class="first leaf">
                                                        <a title="" href="http://www.wizards.com/magic" target="_blank">Magic: The Gathering</a>
                                                        </li>
                                            			<li class="leaf"><a href="http://www.wizards.com/dnd" title="">Dungeons &amp; Dragons</a></li>
                                            			<li class="leaf"><a href="http://www.kaijudo.com/" title="">Kaijudo</a></li>
                                            			<li class="leaf"><a href="http://www.wizards.com/avalonhill" title="">Avalon Hill</a></li>
                                            			<li class="last leaf"><a href="http://dm.takaratomy.co.jp/" title="">Duel Masters</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div id="storelocatorbutton">
                            <img class="navsliver" src="http://company.wizards.com/sites/default/themes/wizards/images/nav/sliver.png"/>
                            <a class="storeLocatorDialog cboxElement" href="#storelocator"><img src="http://company.wizards.com/sites/default/themes/wizards/images/nav/storelocator_btn.png"/></a>
                            <img class="navsliver" src="http://company.wizards.com/sites/default/themes/wizards/images/nav/sliver.png"/>
                        </div>
                        
                         
                        <div id="searcharea">
                        <!-- 
                                <div class="region region-search-area">
                                    <div class="block block-google-cse" id="block-google-cse-google-cse">
                                        <h2>Search</h2>
                                            <div class="content">
                                                <form id="google-cse-results-searchbox-form" accept-charset="UTF-8" method="get" action="http://www.google.com/cse"><div><input name="cx" value="010753050335830773696:ses62ofhwsq" type="hidden">
                                                    <input name="cof" value="FORID:0" type="hidden"/>
                                                    <div class="form-item form-type-textfield form-item-query">
                                                        <label for="edit-query">Enter your keywords </label>
                                                        <input style='background: url("https://www.google.com/cse/intl//images/google_custom_search_watermark.gif") no-repeat left rgb(255, 255, 255);' id="edit-query" class="form-text" name="query" maxLength="128" value="" size="40" type="text">
                                                    </div>
                                                    <input id="edit-sa" class="form-submit" name="op" value="Search" type="submit">
                                                    <input name="form_build_id" value="form-vugycthUdRVEOx5FbA179p6pj-YAhTnmGA7LynBMSI4" type="hidden">
                                                    <input name="form_id" value="google_cse_results_searchbox_form" type="hidden">
                                                    <input name="siteurl" value="" type="hidden"/>
                                                </form>

                                               <div id="google-cse-results">
                                                    <noscript>
                                                        <a href="http://www.google.com/cse?query=&amp;cx=010753050335830773696%3Ases62ofhwsq&amp;cof=FORID%3A0&amp;sitesearch=">View the results at Google</a>, or enable JavaScript to view them here.  </noscript>
                                                </div>
                                            </div>
                                    </div>
                                    
                                </div>
                                 -->
                            </div>
                            
                    </div> <!-- End of ID:NAVIGATION-->
                </div> <!-- End of ID:HEADER-->

                <!-- Here begins the code that causes the image sliding to happen. -->

            </div> <!-- End of ID:MAINCONTAIN -->
        </div> <!-- End of ID:WRAPPER -->
</div> <!-- End of ID:FIRSTPAGE -->


<map name="helpbanner">
	<area alt="Wizards of the Coast" coords="0,0,94,57" href="http://www.wizards.com">
</map>

