<?php
require_once(get_cfg_var('doc_root'). '/include/ConnectPHP/Connect_init.phph' );
initConnectAPI();
use RightNow\Connect\v1_3 as RNCPHP;
class Preincidentcreate_model extends Model
{
    function __construct()
    {
        parent::__construct();
        //This model would be loaded by using $this->load->model('custom/Sample_model');
    }
	
	function Append_CF2Q(&$preHookData){
//		$preHookData = $preHookData['data'];
	
	
	//	var_dump($preHookData['data']['custom_fields']);exit;
	//  foreach($preHookData['data']['custom_fields'] as $key => $val){
	/*
	if(empty($preHookData['data']->custom_fields[53]->value)){
	 	unset($preHookData['data']->custom_fields[53]->value);
		$preHookData['data']->custom_fields[53]->val_int = INT_NULL;
	}*/
	//	}	
		
		
		 $this->Append_CF2Q1(&$preHookData);
	}
	
	function Append_CF2Q1(&$preHookData)
	{

// 130122-000194 - paul.arnot  Adding code to use visible settings from the dynamic form editor
          //---------------------------------------------------------------------
          // get the form_id that was selected in CP.  The form_id can be found via the product value in $preHookData.
          //---------------------------------------------------------------------
          if (isset($preHookData))
          {
              if (is_array($preHookData['data']->prod->value) && !empty($preHookData['data']->prod->value))
              {
                  $product_id = end($preHookData['data']->prod->value);
              }
              if (is_array($preHookData['data']->cat->value) && !empty($preHookData['data']->cat->value))
              {
                  $category_id = end($preHookData['data']->cat->value);
              }
          } 

          // Build an array of custom fields that belong to the form (i.e. product) that was selected in the AAQ page.
          if (isset($product_id))
          {
          	$form_cf = array();
          	$prodcatInfo = RNCPHP\ROQL::query("SELECT form_id FROM CO.prodcat2dynamic_form where prod_id=".$product_id." LIMIT 1")->next();
          	while($prodcat = $prodcatInfo->next())
          	{
          		$cfInfo = RNCPHP\ROQL::query("SELECT cf_id,visible,required FROM CO.cf2dynamic_form where form_id=".$prodcat['form_id'])->next();
          		while($cf = $cfInfo->next()) {
          			$form_cf[$cf['cf_id']]['visible'] = $cf['visible'];
          			$form_cf[$cf['cf_id']]['required'] = $cf['required'];
          		}
          	}
          }
// 130122-000194 - paul.arnot - End code addition

	  //---------------------------------------------------------------------
	  // build lookup id hashes
	  //---------------------------------------------------------------------
	  // get custom fields
	  //---------------------------------------------------------------------
	  $sql_custom_fields = "select c.cf_id, l.label, c.data_type 
					  from custom_fields c 
						 inner join labels l on c.cf_id = l.label_id and l.tbl = 15 and l.fld = 1 
						 inner join interfaces i on i.lang_id = l.lang_id and i.interface_id = " . intf_id() . " where c.tbl = 1";
	  $si = sql_prepare($sql_custom_fields);
	  sql_bind_col($si, 1, BIND_INT, 0);
	  sql_bind_col($si, 2, BIND_NTS, 100);
	  sql_bind_col($si, 3, BIND_INT, 0);
	  
	  // build the custom field hash
	  $validCustomFields = "";
	  while($row = sql_fetch($si)) {
		$validCustomFields[$row[0]]['label'] = $row[1];
		$validCustomFields[$row[0]]['data_type'] = $row[2];
	  }
	  sql_free($si);
		   
	  //
	  // get custom fields menu items
	  //---------------------------------------------------------------------
	  $sql_custom_fields = "select m.id, m.cf_id, l.label 
							from custom_fields cf, menu_items m 
							inner join labels l on m.id = l.label_id and l.tbl = 20 and l.fld = 1 
							inner join interfaces i on i.lang_id = l.lang_id and i.interface_id = " . intf_id() . " 
							where cf.tbl = 1 AND cf.cf_id = m.cf_id";
	  $si = sql_prepare($sql_custom_fields);
	  sql_bind_col($si, 1, BIND_INT, 0);
	  sql_bind_col($si, 2, BIND_INT, 0);
	  sql_bind_col($si, 3, BIND_NTS, 100);
	  
	  // build the custom field menu item hash
	  $validMenuItems = "";
	  while($row = sql_fetch($si)) {
		$validMenuItems[$row[1]][$row[0]] = $row[2];
	  }
	  sql_free($si);
	  
	
	  $s_appendix = "";
	  foreach ($preHookData['data']->custom_fields as $key=>$cf_item)
	  {
// 130122-000194 - paul.arnot - add text in the incident for each custom field that is "visible" per the dynamic form editor.
    if ($form_cf[$cf_item->custom_field_id][visible] == 1)
    {		
		if ($validCustomFields[$key]['label'])
		{
			//var_dump($cf_item);
		  switch( $validCustomFields[$key]['data_type'])
		  {
		  case 1 :
		if ($cf_item->value != INT_NULL && $cf_item->value!='' && $cf_item->value!=NULL && $cf_item->value!==0 && $cf_item->value!='0') 
		  $s_appendix .= $validCustomFields[$key]['label'] . ": " . $validMenuItems[$key][$cf_item->value] . "\n";
			break;
		  case 2 :
		if ($cf_item->value===1) $s_appendix .= $validCustomFields[$key]['label'] . ": " . getMessage( YES_LBL) . "\n";
		elseif ($cf_item->value===0)  $s_appendix .= $validCustomFields[$key]['label'] . ": " . getMessage(NO_LBL) . "\n";
		break;
		  case 3:
			if ($cf_item->value != INT_NULL && $cf_item->value!='' && $cf_item->value!=NULL && $cf_item->value!==0 && $cf_item->value!='0') $s_appendix .= $validCustomFields[$key]['label'] . ": " . $cf_item->value . "\n";
			break;
		  case 5 :
		  case 6 :
// 120112-000277 paul.arnot removing truncation
		//if ($cf_item->value!='' && $cf_item->value!=NULL && $cf_item->value!==0 && $cf_item->value!='0' && $cf_item->value!='%' && !preg_match("/^Step 1:\s*?Step 2:\s*?Step 3:\s*?$/im",$cf_item->value)) $s_appendix .= $validCustomFields[$key]['label'] . ": " . substr(strval($cf_item->value), 0, 255) . "\n";
		if ($cf_item->value!='' && $cf_item->value!=NULL && $cf_item->value!==0 && $cf_item->value!='0' && $cf_item->value!='%' && !preg_match("/^Step 1:\s*?Step 2:\s*?Step 3:\s*?$/im",$cf_item->value)) $s_appendix .= $validCustomFields[$key]['label'] . ": " . strval($cf_item->value) . "\n";
		break;
		  case 4 :
		if ($cf_item->value) $s_appendix .= $validCustomFields[$key]['label'] . ": " . date('Y-m-d H:i:s', strtotime($cf_item->value)) . "\n"; // 110525-000257 adding strtotime for c$crash_date formatted date insertion into thread
		break;
		  case 7 :
		if ($cf_item->value) $s_appendix .= $validCustomFields[$key]['label'] . ": " . date('Y-m-d', strtotime($cf_item->value)) . "\n"; // 110525-000257 adding strtotime for c$crash_date formatted date insertion into thread
		break;
		  }
		  
		  //      $s_appendix .= "\n";
		}
    }
	  }
	  if ($s_appendix) $preHookData['data']->thread->value .= "\n\n********************\n" . $s_appendix;
	}  
}
