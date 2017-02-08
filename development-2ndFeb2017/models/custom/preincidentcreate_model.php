<?php

namespace Custom\Models;
use RightNow\Connect\v1_2 as RNCPHP; 
use RightNow\Libraries\AbuseDetection as AbuseDetection;


class Preincidentcreate_model extends \RightNow\Models\Base

{
    function __construct()
    {
        parent::__construct();
		
		//echo "Constructor";
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
		
		
		 $this->Append_CF1Q(&$preHookData);
	}
	
	function Append_CF1Q(&$preHookData){

	$count = 1;
	
	foreach($preHookData['data']->CustomFields->c as $key=>$value)
	{
	
			 if($value)
				{
				  
					if($key== "steps" || $key=="tax_rate" ||$key=="t_prod_id")
					{
					}
					
					else
					{
						$inc = new RNCPHP\Incident;
						$md1 = $inc::getMetadata();
						$cf_type_name = $md1->CustomFields->type_name;
						$md2 = $cf_type_name::getMetadata();
						$cf_type_name_md2 = $md2 ->c->type_name;
						$md3 = $cf_type_name_md2::getMetadata();
						$cf_label = $md3->$key->label;
						if($cf_label=="Date of Order")
						{
						  $cf_value = date("Y-m-d",$value);
						}
						else if($cf_label=="Starting Date of Convention")
						{
						  $cf_value = date("Y-m-d",$value);
						}
						
						else if($cf_label=="End Date of Convention")
						{
						  $cf_value = date("Y-m-d",$value);
						}
						else if($cf_label=="Magic: The Gathering App?")
						{
						 	if($value ==1)
							{
							  $cf_value="Yes";
							}
							
						}
						else
						{
						$cf_value = $value;
						}
						$s_appendix = $cf_label. ": " .$cf_value;
					
						if ($count ==1)
						{
							$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
							$count ++;
						}
						else
							$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix;
					}
				
				}
						
		}
		if($preHookData['data']->CustomFields->c)	
		{ 
		 	if(isset($preHookData['data']->CustomFields->c->defective_product->ID))
				{
					$s_appendix = "Defective product : " .$preHookData['data']->CustomFields->c->defective_product->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++;
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix;
						
					}
				}
				if(isset($preHookData['data']->CustomFields->c->pref_ship_method->ID))
				{
					$s_appendix = "Preferred Shipping Method : " .$preHookData['data']->CustomFields->c->pref_ship_method->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
				if(isset($preHookData['data']->CustomFields->c->beta_tandc_menu->ID))
				{
					$s_appendix = "Agree to Terms & Conditions?  : " .$preHookData['data']->CustomFields->c->beta_tandc_menu->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
				if(isset($preHookData['data']->CustomFields->c->con_tandcs->ID))
				{
					$s_appendix = "Agree to Terms & Conditions?  : " .$preHookData['data']->CustomFields->c->con_tandcs->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
				if(isset($preHookData['data']->CustomFields->c->permissionproduct->ID))
				{
					$s_appendix = "Product : " .$preHookData['data']->CustomFields->c->permissionproduct->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
					if($preHookData['data']->CustomFields->c->permisionmagicapp != 1)
					{
					 	$s_appendix = "Magic: The Gathering App? : No";
						if ($count ==1)
						{
							$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
							$count ++; 
						}
						else
						{
							$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
						}
					}
					
				}
				if(isset($preHookData['data']->CustomFields->c->permissiontype->ID))
				{
					$s_appendix = "Type of Request : " .$preHookData['data']->CustomFields->c->permissiontype->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
					
				}
				
				 if(isset($preHookData['data']->CustomFields->c->event_type_coupon->ID))
				{
					$s_appendix = "Type of Event : " .$preHookData['data']->CustomFields->c->event_type_coupon->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
				 if(isset($preHookData['data']->CustomFields->c->beta_issue_type->ID))
				{
					$s_appendix = "Type of Issue : " .$preHookData['data']->CustomFields->c->beta_issue_type->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
				if(isset($preHookData['data']->CustomFields->c->beta_error_occurred->ID))
				{
					$s_appendix = "Where did the error occur? : " .$preHookData['data']->CustomFields->c->beta_error_occurred->LookupName;
					if ($count ==1)
					{
						$preHookData['data']->Threads[0]->Text .= "\n\n********************\n" . $s_appendix;
						$count ++; 
					}
					else
					{
						$preHookData['data']->Threads[0]->Text .= "\n".$s_appendix; 
					}
				}
	
		}
		
	}
	
  
}
?>
