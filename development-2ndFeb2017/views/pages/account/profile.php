<rn:meta title="#rn:msg:ACCOUNT_SETTINGS_LBL#" template="standard.php" login_required="true" />
<script src="/euf/assets/themes/standard/jquery.min.js"></script>
<style>
.visib
{
	visibility:visible!important;
}
.css-hint .yui3-overlay:hover {
    display: block;
    visibility: visible;
}
</style>
<script>
$(document).ready(function(){
	$( ".rn_HintBox a" ).on('mouseover',function() {
	
 $('.yui3-overlay').addClass('visib');
});

	});
</script>
<div id="rn_PageTitle" class="rn_Account">
  <h1>#rn:msg:ACCOUNT_SETTINGS_LBL#</h1>
</div>
<div id="rn_PageContent" class="rn_Padding css-hint">
  <div class="rn_Padding">
    <h2 class="rn_Required">#rn:url_param_value:msg#</h2>
    <form id="rn_CreateAccount" method="post" action="" onsubmit="return false;">
      <div id="rn_ErrorLocation"></div>
      <h2>#rn:msg:ACCT_HDG# - <a href="https://accounts.wizards.com/" style="font-weight:normal; font-size:15px;">update read-only fields</a></h2>
      <fieldset>
      <legend>#rn:msg:ACCT_HDG#</legend>
      <rn:widget path="output/DataDisplay" name="contacts.login" left_justify="true" label="User Name"/>
      <br/>
      <rn:widget path="output/DataDisplay" name="contacts.email" left_justify="true"  label="Email Addres"/>
      </fieldset>
      <h2>#rn:msg:CONTACT_INFO_LBL#</h2>
      <fieldset>
      <legend>#rn:msg:CONTACT_INFO_LBL#</legend>
      <rn:widget path="input/CustomAllInput" table="contacts" always_show_mask="false"  allow_external_login_updates="true"/>
      <br/>
      <br/>
      </fieldset>
      <rn:widget path="input/FormSubmit" label_button="#rn:msg:SAVE_CHANGE_CMD#" on_success_url="/app/utils/submit/profile_updated" error_location="rn_ErrorLocation"/>
    </form>
  </div>
</div>
