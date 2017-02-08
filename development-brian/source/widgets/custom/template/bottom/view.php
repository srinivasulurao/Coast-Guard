<?/** ---------------------------------------------------------------------------
   *  File Name: widgets/custom/template/bottom/view.php
   *  Author:    Upgrades Team
   *  Purpose:   We like to seperate our customer's HTML code from our HTML code in the template.  
   *             We create 3 custom widgets to accomplish this, top,bottom, head
   *             On Classic to CP Migrations we are copying code from enduser/cci/head.php,top.phph,bottom.php into these widgets
   *             On Nov. 09 and Geater CP Migrations we are placing all header and footers into these widgests
   *  --------------------------------------------------------------------------- */?>
	<rn:meta controller_path="standard/utils/Blank" />
	<div id="divNavTilesOther">
		<rn:widget path="custom/utils/NavTiles" report_id=122534 display_page="OTHER" rows=1 columns=4 />
	</div>
	<div id="divFooterBar">
		<div id="divFooter">
			<div id="divFooterLeftIcons"><a href="https://www.wizards.com" title="Wizards" alt="Wizards"><img src="/euf/assets/images/wizards-footer_icon.png" width="131px" height="84px" border="0" align="absmiddle"></a></div>
			<div id="divFooterContent">
				<div id="divFooterContentTitle">WIZARDS BRAND FAMILY:</div>
				<div id="divFooterContentBrands">
					<a href="https://magic.wizards.com/en/magic-gathering" title="MAGIC" alt="MAGIC">MAGIC</a> | <a href="https://dnd.wizards.com/" title="D&D" alt="D&D">D&D</a> | <a href="https://wpn.wizards.com/en/wpn/" title="WPN" alt="WPN">WPN</a> | <a href="http://dm.takaratomy.co.jp/" title="DUEL MASTERS" alt="DUEL MASTERS">DUEL MASTERS</a> | <a href="https://www.wizards.com/default.asp?x=ah/welcome" title="AVALON HILL" alt="AVALON HILL">AVALON HILL</a>
				</div>
				<div id="divFooterContentLinks">
					<a href="https://wpn.wizards.com/en/terms-use" title="Terms of Use" alt="Terms of Use">Terms of Use</a> | <a href="https://wpn.wizards.com/en/privacy-policy" title="Privacy Policy" alt="Privacy Policy">Privacy Policy</a> | <a href="https://wpn.wizards.com/en/code-conduct" title="Code of Conduct" alt="Code of Conduct">Code of Conduct</a> | <a href="http://company.wizards.com/policies/web/cookie" title="Cookies" alt="Cookies">Cookies</a> | <a href="https://wizards.custhelp.com/" title="Customer Service" alt="Customer Service">Customer Service</a>
				</div>
				<div id="divFooterContentCopyright">© 1995-2016 Wizards of the Coast LLC, a subsidiary of Hasbro, Inc. All Rights Reserved.</div>
			</div>
			<div id="divFooterRightIcons">
				<div id="divHasbroIcon">
					<a href="http://www.hasbro.com/en-us" target="_blank"><img src="/euf/assets/images/hasbro_icon.png" width="69px" height="75px" border="0"></a>
				</div>
				<div id="divESRBIcon">
					<a href="http://www.esrb.org/confirm/wizards-confirmation.jsp" target="_blank"id="aESRBLink"><img src="/euf/assets/images/ESRB_icon.gif" width="57px" height="76px" border="0"></a>
				</div>
			</div>
			<div id="divLinearGradient">&nbsp;</div>
		</div>	
		<div>
			<script language="JavaScript" src="http://www.wizards.com/global/hbx_onpage_standard.js" type="text/javascript"></script>
			<script language="javascript1.1" src="http://www.wizards.com/global/hbx.js" type="text/javascript"></script>
			<noscript>
			<img src="http://ehg-wizardsofthecoast.hitbox.com/HG?hc=we72&amp;cd=1&amp;hv=6&amp;ce=u&amp;hb=DM53090575ZE&amp;n=PUT+PAGE+NAME+HERE&amp;vcon=nojavascript&amp;seg=&amp;cmp=&amp;gp=&amp;fnl=&amp;pec=&amp;dcmp=&amp;ra=&amp;gn=&amp;cv=&amp;ld=&amp;la=&amp;c1=&amp;c2=&amp;c3=&amp;c4=&amp;vpc=090000rn" border="0" width="1" height="1" alt=""/>
			</noscript>
		</div>
	</div>
</div> <?/* Closing tag for "#divContainer" from the header template */?>