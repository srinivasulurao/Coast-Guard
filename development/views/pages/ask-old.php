<rn:meta title="#rn:msg:ASK_QUESTION_HDG#" template="standard.php" clickstream="incident_create"/>
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

<div class="rn_Hero">
  <div id="rn_PageTitle" class="rn_HeroInner">
    <div class="rn_HeroCopy">
      <h1>#rn:msg:SUBMIT_QUESTION_OUR_SUPPORT_TEAM_CMD#</h1>
    </div>
  </div>
</div>
<div id="rn_PageContent" class="rn_PageContent rn_AskQuestion rn_Container">
  <div class="rn_Padding css-hint">
    <form id="rn_QuestionSubmit" method="post" action="/ci/ajaxRequest/sendForm" >
      <div id="rn_ErrorLocation"></div>
      <rn:widget path="custom/dynamicForms/ProductCategoryDynamic"  table="incidents" name="Incident.Product" label_input="#rn:msg:PRODUCTS_LBL#" label_nothing_selected="#rn:msg:SELECT_A_PRODUCT_LBL#" required_lvl="2" label_required="Additional sub product is required. Please select additional product under %s"/>
      <div id="rn_customfields_display" class="">
        <rn:widget path="custom/dynamicForms/CustomDynamicAllInput" table="incidents" always_show_mask="false" />
      </div>
      <div id="rn_cf_DDtabletop" class="" style="display:none">
        <rn:widget path="input/FormInput" name="incidents.c$book_name"/>
        <rn:widget path="input/FormInput" name="incidents.c$page_number"/>
      </div>
      <div id="rn_cf_beta_tandc_menu" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$beta_tandc_menu"/>
      </div>
      <div id="rn_cf_login_id" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$login_id" />
      </div>
     
      <div id="rn_cf_report_conduct" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$opponents_userid" />
        <rn:widget path="input/FormInput" name="incidents.c$game_number" />
      </div>
      <div id="rn_cf_names" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$first_name" />
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$last_name" />
      </div>
      <div id="rn_cf_new_email_address" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$new_email_address" />
      </div>
      <div id="rn_cf_email_add_crash" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$email_address_crash" />
      </div>
      <div id="rn_cf_date_of_order" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomDateInput" name="incidents.c$date_of_order"/>
      </div>
      <div id="rn_cf_order_id" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$oder_id" />
      </div>
      <div id="rn_cf_email_password_change" class="" style="display:none">
        <rn:widget path="input/FormInput" name="incidents.c$billing_address"/>
        <rn:widget path="input/FormInput" name="incidents.c$first_four_cc"/>
        <rn:widget path="input/FormInput" name="incidents.c$late_four_cc"/>
      </div>
      <div id="rn_cf_refund_an_order" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$items_ordered"/>
        <rn:widget path="input/FormInput" name="incidents.c$reason_for_return"/>
      </div>
      <div id="rn_cf_wizards_community" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$wizards_community_name"/>
      </div>
      <div id="rn_cf_place_direct_sales" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$store_name_inc"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$store_city_inc"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$store_state_province_inc"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$preferred_credit_card"/>
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$pref_ship_method"/>
      </div>
      <div id="rn_cf_con_name" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_name"/>
        <rn:widget path="custom/dynamicForms/CustomDateInput" name="incidents.c$con_datespan1"/>
        <rn:widget path="custom/dynamicForms/CustomDateInput" name="incidents.c$con_datespan2"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_local"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_age"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_attend"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_ddtables"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_dunmas"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$con_emailorg"/>
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$con_tandcs"/>
      </div>
      <div id="rn_cf_event" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$event_number"/>
        <rn:widget path="input/FormInput" name="incidents.c$event_type_coupon"/>
      </div>
      <div id="rn_cf_defective_product" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$defective_product"/>
      </div>
      <div id="rn_cf_permissionproduct" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$permissionproduct"/>
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$permissiontype"/>
        <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="incidents.c$permisionmagicapp"/>
      </div>
      <rn:widget path="input/TextInput" name="incidents.Subject" required="true" />
      <div class="imp-msg" > <strong><em>IMPORTANT!:  To ensure security of your personal financial information, please DO NOT submit sensitive financial data via this form; this includes complete credit card numbers and/or bank account information.</em></strong> <br />
      </div>
      <rn:widget path="input/FormInput" name="incidents.thread" required="true" label_input="#rn:msg:QUESTION_LBL#"/>
      <rn:widget path="input/FileAttachmentUpload2"/>
      <div id="form_submit" class="ask_submit">
        <rn:widget path="input/FormSubmit" label_button="#rn:msg:CONTINUE_ELLIPSIS_CMD#" on_success_url="/app/ask_confirm" error_location="rn_ErrorLocation" />
      </div>
			<!--  CustomFireProduct is used to fire the productid if the url contains any product id.After firing the product id from this widget  the corresponding dynamic custom fields are shown.So when the page loads with a product id in its url then dynamic fields are shown on the ask page.-->
      <div id="rn_temp_product_id" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomFireProduct"/>
      </div>
    </form>
  </div>
</div>
