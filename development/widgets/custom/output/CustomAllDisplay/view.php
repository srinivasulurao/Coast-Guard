<rn:meta controller_path="standard/output/CustomAllDisplay"  
        presentation_css="widgetCss/CustomAllDisplay.css" 
        compatibility_set="November '09+" 
        required_js_module="november_09,mobile_may_10,none"/>
<? 
for($i=0; $i<count($this->data['fields']); $i++): 
		if($this->data['fields']['cf_item'.$i]['cf_id'] != 44 && $this->data['fields']['cf_item'.$i]['cf_id'] != 53)
		{
?>
    <rn:widget path="output/DataDisplay" name="#rn:php:$this->data['attrs']['table']. '.' . $this->data['fields']['cf_item'.$i]['col_name']#" />
<? } endfor; ?>
