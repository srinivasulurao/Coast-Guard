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

<?php
$ci=&get_instance();
$initForms=$ci->model('custom/dynamic_forms_model')->loadInputFields();
// echo "<pre>";
// print_r($initForms);
// echo "</pre>";
?>
<div id="rn_PageContent" class="rn_PageContent rn_AskQuestion rn_Container">
  <div class="rn_Padding css-hint">
    <form id="rn_QuestionSubmit" method="post" action="/cc/ajaxDyn/save_aaq_form_data" >
      <div id="rn_ErrorLocation"></div>
      <rn:widget path="custom/dynamicForms/ProductCategoryDynamic"  table="incidents" name="Incident.Product" label_input="#rn:msg:PRODUCTS_LBL#" label_nothing_selected="#rn:msg:SELECT_A_PRODUCT_LBL#" required_lvl="2" label_required="Additional sub product is required. Please select additional product under %s"/>
      <div id="rn_customfields_display" class="">
        <rn:widget path="custom/dynamicForms/CustomDynamicAllInput" table="incidents" always_show_mask="false" />
      </div>
      <?php
      foreach($initForms as $form_id=>$fields):
      echo "<div id='dynamic_form_$form_id' class='dynamic_form' style='display:none'>";
        foreach($fields as $field):
          $data_type=$field['data_type'];
          $name=$field['table'].".".$field['field_name'];  
         
      ?>
       <?php if($data_type=="Text Field"): ?>
          <rn:widget path="custom/dynamicForms/CustomTextInput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>
       <?php endif; ?> 
       <?php if($data_type=="Date/Time"): ?>
          <rn:widget path="custom/dynamicForms/CustomDateInput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>
       <?php endif; ?> 
       <?php if($data_type=="Date Field"): ?>
          <rn:widget path="custom/dynamicForms/CustomDateInput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>
       <?php endif; ?>   
       <?php if($data_type=="Integer"): ?>
          <rn:widget path="custom/dynamicForms/FormCustomInput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>
       <?php endif; ?>   
       <?php if($data_type=="Text Area"): ?>
          <rn:widget path="custom/dynamicForms/FormCustomInput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>
       <?php endif; ?>   
       <?php if($data_type=="Menu"): ?>
          <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>   
       <?php endif; ?> 
       <?php if($data_type=="Yes/No"): ?>
          <rn:widget path="custom/dynamicForms/CustomSelectioninput" name="#rn:php:$name#" form_id="#rn:php:$form_id#"/>   
       <?php endif; ?>  



      <?php
        endforeach;
      echo "</div>";
      endforeach;
      ?>

      <!-- Now Add the default fieds.-->
      <rn:widget path="input/TextInput" name="incidents.Subject" required="true" />
      <div class="imp-msg" > <strong><em>IMPORTANT!:  To ensure security of your personal financial information, please DO NOT submit sensitive financial data via this form; this includes complete credit card numbers and/or bank account information.</em></strong> <br />
      </div>
      <rn:widget path="input/FormInput" name="incidents.thread" required="true" label_input="#rn:msg:QUESTION_LBL#"/>
      <rn:widget path="input/FileAttachmentUpload2"/>
      <!--  CustomFireProduct is used to fire the productid if the url contains any product id.After firing the product id from this widget  the corresponding dynamic custom fields are shown.So when the page loads with a product id in its url then dynamic fields are shown on the ask page.-->
      <div id="rn_temp_product_id" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomFireProduct"/>
      </div>


      <div style='display:block;clear:both'><input type='hidden' id='form_enabled_data' name="form_enabled_data"></div>
      <!-- Now Add the Submit Button -->
      <rn:widget path="input/FormSubmit" label_button="#rn:msg:CONTINUE_ELLIPSIS_CMD#" on_success_url="/app/ask_confirm" error_location="rn_ErrorLocation" />
    </form>
  </div>
</div>
