<rn:meta title="#rn:msg:ASK_QUESTION_HDG#" template="standard.php" login_required="true"  clickstream="incident_create"/>
<style type="text/css">
<!--
#rn_PageContent .rn_Padding #rn_QuestionSubmit strong em {
	color: #900;
}
-->
</style>


<div id="rn_PageTitle" class="rn_AskQuestion">
    <h1>#rn:msg:SUBMIT_QUESTION_OUR_SUPPORT_TEAM_CMD#</h1>
</div>

<div id="rn_PageContent" class="rn_AskQuestion">
    <div class="rn_Padding">
        <form id="rn_QuestionSubmit" method="post" action="" onsubmit="return false;">
            <div id="rn_ErrorLocation"></div>
       
         <rn:widget path="dynamicForms/DynamicProductCategoryInput" table="incidents" data_type="products" label_input="#rn:msg:PRODUCTS_LBL#" label_nothing_selected="#rn:msg:SELECT_A_PRODUCT_LBL#" required_lvl="2" label_required="Additional sub product is required. Please select additional product under %s"/>
           <rn:widget path="custom/dynamicForms/DynamicCustomAllInput" table="incidents" always_show_mask="true"/>
				
            <rn:condition logged_in="false">
              
                <rn:widget path="input/FormInput" name="contacts.email" required="true" initial_focus="true"/>
                <rn:widget path="input/FormInput" name="incidents.subject" required="true" />
            </rn:condition>
            <rn:condition logged_in="true">
                <rn:widget path="input/FormInput" name="incidents.subject" required="true" initial_focus="true"/>
                <div align="left">
                <strong><em>IMPORTANT!:  To ensure security of your personal financial information, please DO NOT submit sensitive financial data via this form; this includes complete credit card numbers and/or bank account information.</em></strong></a >
                <br /> 
            </rn:condition>
                <rn:widget path="input/FormInput" name="incidents.thread" required="true" label_input="#rn:msg:QUESTION_LBL#"/>
                <rn:widget path="input/FileAttachmentUpload2"/>
                <? /*
                <rn:widget path="input/ProductCategoryInput" table="incidents"/>
                <rn:widget path="input/ProductCategoryInput" table="incidents" data_type="categories" label_input="#rn:msg:CATEGORY_LBL#" label_nothing_selected="#rn:msg:SELECT_A_CATEGORY_LBL#"/> */ ?>
              
                <rn:widget path="input/FormSubmit" label_button="#rn:msg:CONTINUE_ELLIPSIS_CMD#" on_success_url="/app/ask_confirm" error_location="rn_ErrorLocation" />
        </form>
    </div> 
</div>