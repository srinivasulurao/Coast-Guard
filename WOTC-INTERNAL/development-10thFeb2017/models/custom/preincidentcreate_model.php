<?php
namespace Custom\Models;

namespace Custom\Models;
use RightNow\Connect\v1_3 as RNCPHP;
use RightNow\Libraries\AbuseDetection as AbuseDetection;

class preincidentcreate_model extends \RightNow\Models\Base
{
    function __construct()
    {
        parent::__construct();
        //This model would be loaded by using $this->load->model('custom/Sample_model');
    }
	
	function Append_CF2Q(&$preHookData)
	{
	//echo "<pre>";
	//print_r($preHookData['data']->CustomFields->c);
		$count = 1;
		foreach($preHookData['data']->CustomFields->c as $key=>$value)
		{
		
				 if($value)
					{
						if($key== "steps" || $key=="tax_rate")
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
							if($cf_label=="Start Date")
							{
								$cf_value = date("Y-m-d",$value);
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
			 
			
					if(isset($preHookData['data']->CustomFields->c->severity->ID))
					{
						$s_appendix = "Severity : " .$preHookData['data']->CustomFields->c->severity->LookupName;
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
					if(isset($preHookData['data']->CustomFields->c->employee_type->ID))
					{
						$s_appendix = "Employee Type : " .$preHookData['data']->CustomFields->c->employee_type->LookupName;
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
					if(isset($preHookData['data']->CustomFields->c->first_shift->ID))
					{
						$s_appendix = "1st Shift Time : " .$preHookData['data']->CustomFields->c->first_shift->LookupName;
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
					if(isset($preHookData['data']->CustomFields->c->second_shift->ID))
					{
						$s_appendix = "2nd Shift Time : " .$preHookData['data']->CustomFields->c->second_shift->LookupName;
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
					if(isset($preHookData['data']->CustomFields->c->unscheduled_reason->ID))
					{
						$s_appendix = "Unscheduled Reason : " .$preHookData['data']->CustomFields->c->unscheduled_reason->LookupName;
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
		
		//	echo "<pre>";
		//	print_r($preHookData['data']->Threads[0]->Text); 
	}
}
	