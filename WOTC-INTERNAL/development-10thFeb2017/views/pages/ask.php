<rn:meta title="#rn:msg:ASK_QUESTION_HDG#" template="standard.php"  clickstream="incident_confirm" />
<div id="rn_PageTitle" class="rn_AskQuestion">
  <h1>#rn:msg:SUBMIT_QUESTION_OUR_SUPPORT_TEAM_CMD#</h1>
</div>
<div id="rn_PageContent" class="rn_AskQuestion">
  <div class="rn_Padding">
    <form id="rn_QuestionSubmit" method="post" action="" onsubmit="return false;">
      <div id="rn_ErrorLocation"></div>
      <rn:widget path="custom/dynamicForms/DynamicProductCategory" table="incidents" name="Incident.Product" label_input="#rn:msg:PRODUCTS_LBL#" label_nothing_selected="#rn:msg:SELECT_A_PRODUCT_LBL#" required_lvl="2"/>
      <rn:widget path="input/ProductCategoryInput" table="incidents" name="Incident.Category" label_input="#rn:msg:CATEGORY_LBL#" label_nothing_selected="#rn:msg:SELECT_A_CATEGORY_LBL#" required_lvl="1" />
      <rn:widget path="custom/dynamicForms/DynamicCustomAllInput" table="incidents" always_show_mask="true"/>
      <div id="rn_cf_names" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$first_name"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$last_name"/>
        <rn:widget path="custom/dynamicForms/CustomDateInput" name="incidents.c$start_date"/>
        <rn:widget path="custom/dynamicForms/CustomSelectionInput" name="incidents.c$employee_type"/>
      </div>
      <div id="rn_cf_severity" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomSelectionInput" name="incidents.c$severity"/>
        <rn:widget path="input/FormInput" name="incidents.c$alternateemail"/>
      </div>
      <div id="rn_cf_shift_reports" class="" style="display:none">
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$hours_worked"/>
        <rn:widget path="custom/dynamicForms/CustomSelectionInput" name="incidents.c$first_shift"/>
        <rn:widget path="input/FormInput" name="incidents.c$second_shift"/>
        <rn:widget path="input/FormInput" name="incidents.c$unscheduled_reason"/>
        <rn:widget path="input/FormInput" name="incidents.c$unscheduled_hours_worked"/>
        <rn:widget path="input/FormInput" name="incidents.c$mo_event_number"/>
        <rn:widget path="input/FormInput" name="incidents.c$t1s_misc"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_game_q"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_magic_rules"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_events_questions"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_events_current"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_mtgo_beta_qs"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_non_magic"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_conduct_issue"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_store_issue"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_refunds_bugs"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_interface"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_dissatisfied_customers"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_tech_issue"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_special1"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_special2"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_forums_answerpost"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_forums_closedthreads"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_forums_actionedconduct"/>
        <rn:widget path="custom/dynamicForms/CustomTextInput" name="incidents.c$t1s_forums_special3"/>
      </div>
      <rn:condition logged_in="false">
        <rn:widget path="input/FormInput" name="contacts.email" required="true" initial_focus="true"/>
        <rn:widget path="input/FormInput" name="incidents.subject" required="true" />
      </rn:condition>
      <rn:condition logged_in="true">
        <rn:widget path="input/FormInput" name="incidents.subject" required="true" initial_focus="true"/>
      </rn:condition>
      <rn:widget path="input/FormInput" name="incidents.thread" required="true" label_input="#rn:msg:QUESTION_LBL#"/>
      <rn:widget path="input/FileAttachmentUpload2"/>
      <rn:widget path="input/FormSubmit" label_button="#rn:msg:CONTINUE_ELLIPSIS_CMD#" on_success_url="/app/ask_confirm" error_location="rn_ErrorLocation" />
    </form>
    <rn:condition answers_viewed="2" searches_done="1">
      <rn:condition_else/>
      <rn:widget path="input/SmartAssistantDialog"/>
    </rn:condition>
  </div>
</div>
