<rn:meta controller_path="custom/dynamicForms/DynamicCustomAllInput" js_path="custom/dynamicForms/DynamicCustomAllInput" presentation_css="widgetCss/CustomAllInput" compatibility_set="November '09+"/>

<div id="ajax_loading" name="ajax_loading" style="display:none"><img src="/euf/assets/images/indicator.gif"></div>
<div id="custom_field_tbl" name="custom_field_tbl">
<? for($i=0; $i<count($this->data['fields']); $i++):?>
    <? if($this->data['attrs']['tabindex']):?>
	<div id="dyncf_<?=$this->data['fields']['cf_item'.$i]['cf_id']?>" name="dyncf_<?=$this->data['fields']['cf_item'.$i]['cf_id']?>" style="display:none">
    <rn:widget path="dynamicForms/DynamicFormInput" name="#rn:php:$this->data['attrs']['table']. '.' . $this->data['fields']['cf_item'.$i]['col_name']#" tabindex="#rn:php:intval($this->data['attrs']['tabindex'] + $i)#"/>
	</div>
    <? else:?>
	<div id="dyncf_<?=$this->data['fields']['cf_item'.$i]['cf_id']?>" name="dyncf_<?=$this->data['fields']['cf_item'.$i]['cf_id']?>" style="display:none">
    <rn:widget path="dynamicForms/DynamicFormInput" name="#rn:php:$this->data['attrs']['table']. '.' . $this->data['fields']['cf_item'.$i]['col_name']#"/>
	</div>
    <? endif;?>
<? endfor;?>
</div>
<div id="dyn_form_table" name="dyn_form_table" >
</div>
