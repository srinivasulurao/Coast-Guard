<rn:meta title="#rn:msg:ACCOUNT_SETTINGS_LBL#" template="standard.php" login_required="true" />

<div id="rn_PageTitle" class="rn_Account">
    <h1>#rn:msg:ACCOUNT_SETTINGS_LBL#</h1>
</div>
<div id="rn_PageContent" class="rn_Profile">
    <div class="rn_Padding">
        <h2 class="rn_Required">#rn:url_param_value:msg#</h2>
        <form id="rn_CreateAccount" method="post" action="" onsubmit="return false;">
            <div id="rn_ErrorLocation"></div>
       
            
            <h2>#rn:msg:PREFERENCES_HDG#</h2>
            <fieldset>
                <legend>#rn:msg:PREFERENCES_HDG#</legend>            
            <rn:widget path="input/ProductCategoryInput" required="false" table="contacts" label_input="#rn:msg:DEFAULT_PROD_LBL#" label_nothing_selected="" allow_external_login_updates="true"/>
            <rn:widget path="input/ProductCategoryInput" required="false" table="contacts" data_type="categories" label_input="#rn:msg:DEFAULT_CAT_LBL#" label_nothing_selected=""  allow_external_login_updates="true"/>
            <rn:widget path="input/FormInput" name="contacts.search_text"  allow_external_login_updates="true"/>
            <rn:widget path="input/FormInput" name="contacts.search_type"  allow_external_login_updates="true"/>
            <rn:widget path="input/FormInput" name="contacts.lines_per_page"  allow_external_login_updates="true"/>
            </fieldset>
            <h2>#rn:msg:ACCT_HDG# - <a href="https://accounts.wizards.com/" style="font-weight:normal; font-size:15px;">update read-only fields</a></h2>
            <fieldset>
                <legend>#rn:msg:ACCT_HDG#</legend>
                <rn:widget path="input/FormInput" name="contacts.login" required="true" validate_on_blur="true" initial_focus="true" label_username="#rn:msg:USER_ID_LBL#"  allow_external_login_updates="true"/>
                <br/><rn:widget path="output/DataDisplay" name="contacts.email" left_justify="true"/>
            </fieldset>
            <h2>#rn:msg:CONTACT_INFO_LBL#</h2>
            <fieldset>
                <legend>#rn:msg:CONTACT_INFO_LBL#</legend>
                <? /*<rn:widget path="input/ContactNameInput" table="contacts" required = "true"/>*/ ?>
                <? /*<rn:widget path="input/FormInput" name="contacts.email" required="true" validate_on_blur="true"  allow_external_login_updates="true"/>*/ ?>      
                <rn:widget path="input/CustomAllInput" table="contacts" always_show_mask="true"  allow_external_login_updates="true"/>
                <rn:widget path="input/FormInput" name="contacts.c$halfdeck_export"  allow_external_login_updates="true"/>
            </fieldset>
            <rn:widget path="input/FormSubmit" label_button="#rn:msg:SAVE_CHANGE_CMD#" on_success_url="/app/utils/submit/profile_updated" error_location="rn_ErrorLocation"/>
        </form>
    </div>
</div>
