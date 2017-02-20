<?php
namespace Custom\Models;
require_once( get_cfg_var("doc_root")."/include/ConnectPHP/Connect_init.phph" );
use RightNow\Connect\v1_2 as RNCPHP;
use RightNow\Utils\Connect,
    RightNow\Utils\Framework,
    RightNow\Utils\Text,
    RightNow\Utils\Config,
    RightNow\Api;
try
{
	initConnectAPI();
}
catch(Exception $err)
{
	print($err->getMessage());
}

class Dynamic_forms_model extends \RightNow\Models\Base
{
	/**
	* constructor
	*
	* @param   string  filename that we are loading the form specs from
	* @access  public
	*/
	function __construct()
	{	
		parent::__construct();
		$result = array();
	}
	
	//Not my peice of cake.
	function initForm()
	{
		// cat_id goes in as the key, and then inside the array is an custom fields that you want to show when that specific cf_id is selected
		// $result[<cat_id goes here>2] = array('<cf_id>','<cf_id>','<cf_id>','<cf_id>');
		// example) below line sets up dynamic fiels so that when cat_id = 2 is selected, 4 custom fields show up with cf id's 3,4,8,11
		//          modify this array as needed for your customization
		$result = array();
		
		$prodcat2dynamic_form_mas = RNCPHP\CO\prodcat2dynamic_form::find("cat_id = 0");
		foreach($prodcat2dynamic_form_mas as $prodcat2dynamic_form_row)
		{
			$form_id = $prodcat2dynamic_form_row->form_id;
			$prod_id = $prodcat2dynamic_form_row->prod_id;
			
			$cf2dynamic_form_mas = RNCPHP\CO\cf2dynamic_form::find("form_id = ".$form_id);
			foreach($cf2dynamic_form_mas as $cf2dynamic_form_row)
			{
				$cf_id = $cf2dynamic_form_row->cf_id;
				
				if(array_key_exists($prod_id,$result))
				{
					$result[$prod_id][] = $cf_id; 
				}
				else
				{
					$result[$prod_id] = array($cf_id);
				}						
			}		  
		}
		return $result; 
	}
	
	// this is called from controllers/ajaxDyn.php, a cat_id is sent in, and we return an array with the specific cf_id's we want to display based on the cat_id
	function get_dyn_form($cat_id)
	{
		if(!$cat_id)
			return array();
		
		$result[$cat_id]  = array('0');
		
		return $result;
	}

	function d($a){
		echo "<pre>";
		print_r($a);
		echo "</pre>";
	}

	function loadInputFields(){
		$result = array();
		$fields=$this->getFieldNameByCustomFieldID();
		$cat_id=(int)getUrlParm('c'); 
		$prodcat2dynamic_form_mas = RNCPHP\CO\prodcat2dynamic_form::find("cat_id = $cat_id");
	    $applicable_forms=array();	 
        
		foreach($prodcat2dynamic_form_mas as $prodcat2dynamic_form_row):
			$form_id=$prodcat2dynamic_form_row->form_id;
			$applicable_forms[$form_id]=array(); 		
            //$applicable_forms=array_unique($applicable_forms);
            $cf2dynamic_form_mas = RNCPHP\ROQL::queryObject("SELECT CO.cf2dynamic_form FROM CO.cf2dynamic_form WHERE CO.cf2dynamic_form.form_id='{$form_id}' ORDER BY CO.cf2dynamic_form.seq")->next();
			while($rec=$cf2dynamic_form_mas->next()):
				
					$field=$fields[$rec->cf_id];
					$cust_field['cf_id']=$rec->cf_id;
					$cust_field['data_type']=$field['data_type'];
					$cust_field['field_name']=$field['col_name'];
					$cust_field['seq']=$rec->seq;
					$cust_field['visible']=$rec->visible;
					$cust_field['table']=$field['Table'];
					$cust_field['interface']=$field['Interface'];
					$result[$rec->form_id][$rec->cf_id]=$cust_field; //Just load the custom fields as per load id
			
		    endwhile;
		endforeach;

		//$this->debug($result);

		return $result; 
	}

	function getFieldNameByCustomFieldID(){
          //Load the custom field report and find the custom field id.
		    $filters = new RNCPHP\AnalyticsReportSearchFilterArray;
			$ar= RNCPHP\AnalyticsReport::fetch(122954);
			$arr= $ar->run();

		    $nrows= $arr->count();
		    $result=array();
		if ($nrows):
            for($i=0;$i<$nrows;$i++):
          	$key=$arr->next();
            $result[$key['cf_id']]=$key;	
              //return $result;
          endfor;
	    endif;

	    return $result;

}

    function getDynamicFormDataModel($prod_id,$cat_id){
             $result=array();
             $result['prod_id']=$prod_id;
             $result['cat_id']=$cat_id;
             $result['form_id']=0;
             $fields=$this->getFieldNameByCustomFieldID();


             //$prodcat2dynamic_form_mas = RNCPHP\CO\prodcat2dynamic_form::find("prod_id={$prod_id}"," cat_id={$cat_id}");
             $prodcat2dynamic_form_mas=RNCPHP\ROQL::queryObject("SELECT CO.prodcat2dynamic_form FROM CO.prodcat2dynamic_form WHERE CO.prodcat2dynamic_form.prod_id='{$prod_id}' AND CO.prodcat2dynamic_form.cat_id='{$cat_id}'")->next();      
             while($prodcat2dynamic_form_row=$prodcat2dynamic_form_mas->next()):
             	$result['form_id']=$prodcat2dynamic_form_row->form_id;
                $form_id=$prodcat2dynamic_form_row->form_id;
             	    $cf2dynamic_form_mas = RNCPHP\ROQL::queryObject("SELECT CO.cf2dynamic_form FROM CO.cf2dynamic_form WHERE CO.cf2dynamic_form.form_id='{$form_id}' AND  CO.cf2dynamic_form.visible='1' ORDER BY CO.cf2dynamic_form.seq")->next();
			        while($rec=$cf2dynamic_form_mas->next()):
			          $field=$fields[$rec->cf_id];
                       if($rec->required):	
					     $result["required_fields"][]=$field['col_name']; //Just load the custom fields as per load id
					   endif;
					   $result["input_fields"][]=$field['col_name'];
					   $result['data_type'][$field['col_name']]=$field['data_type'];
					   $result['label_name'][$field['col_name']]=$field['Field Name'];
					endwhile;   
					break;
		    endwhile;

             return $result;
    }

    public function debug($arrayObject){
    	echo "<pre>";
    	print_r($arrayObject);
    	echo "</pre>";
    }

    private function processFields(array $fields, &$presentFields = array()) {
        $return = array();
        foreach ($fields as $field) {
            $fieldName = $field->name;
            if (!is_string($fieldName) || $fieldName === '') continue;
            unset($field->name);
            $return[$fieldName] = $field;
            if ($objectName = strtolower(Text::getSubstringBefore($fieldName, '.'))) {
                $presentFields[$objectName] = true;
            }
        }
        return $return;
    }

    function getNamedIDValue($custom_field,$value){
        $menu_list=RNCPHP\ConnectAPI::getNamedValues("RightNow\\Connect\\v1_2\\".$custom_field);
		    foreach($menu_list as $menu):
		    	if($menu->ID==$value)
		    		return $menu->LookupName;
		    endforeach;
    }

    function save_aaq_form_model($data){
        $arr=array();
        $formData = $this->processFields($data, $presentFields);

        // $this->debug($formData);
        // exit;
       
        try{
            $profile = $this->CI->session->getProfile();
            $cid=$profile->c_id->value;
            //$cid=11;
            $org_id=$profile->org_id->value;
            $incident = new RNCPHP\Incident();

            //Start setting the fields. now.
            if($formData['Incident.Product']->value)
                $incident->Product=intval($formData['Incident.Product']->value);

            if($formData['Incident.Category']->value)
                $incident->Category=intval($formData['Incident.Category']->value);

            if($formData['Incident.Subject']->value)
            $incident->Subject = $formData['Incident.Subject']->value;

            if($cid)
            $incident->PrimaryContact = RNCPHP\Contact::fetch($cid);

            if($org_id){
              $incident->Organization = RNCPHP\Organization::fetch($org_id);
            }

            //Start Saving the custom fields.
            $fields_to_save=$this->getDynamicFormDataModel($formData['Incident.Product']->value,$formData['Incident.Category']->value);
            //$this->debug($fields_to_save['input_fields']);
            //exit;
            if(sizeof($fields_to_save['input_fields'])):
	            foreach($fields_to_save['input_fields'] as $fs):
	                $fs_explode=explode("c$",$fs);
		            $custom_field_index="Incident.CustomFields.c.".$fs_explode[1];
		            $field_name=$fs_explode[1];
		            //Data printing.
		            if($fields_to_save['data_type'][$fs]=="Menu")
		            	$data_printer.=$fields_to_save['label_name'][$fs]." : ".$this->getNamedIDValue($custom_field_index,$formData[$custom_field_index]->value)."\n";               
		            else
		            	$data_printer.=$fields_to_save['label_name'][$fs]." : ".$formData[$custom_field_index]->value."\n";
	                   
		            //Data Saving.
		            if($formData[$custom_field_index]->value):
		            	if($fields_to_save['data_type'][$fs]=="Integer")
		                    $incident->CustomFields->c->$field_name=(int)$formData[$custom_field_index]->value;
		                else if($fields_to_save['data_type'][$fs]=="Date Field")
		                	$incident->CustomFields->c->$field_name=strtotime($formData[$custom_field_index]->value);
		                else if($fields_to_save['data_type'][$fs]=="Menu")
		                	$incident->CustomFields->c->$field_name=(int)$formData[$custom_field_index]->value;
		                else
	                        $incident->CustomFields->c->$field_name=$formData[$custom_field_index]->value;
	                endif;    
	            endforeach;
	         endif;   

           
            if($formData['Incident.Threads']->value or $data_printer)
            {
                $incident->Threads = new RNCPHP\ThreadArray();
                $incident->Threads[0] = new RNCPHP\Thread();
                $incident->Threads[0]->EntryType = new RNCPHP\NamedIDOptList();
                $incident->Threads[0]->EntryType->ID = 3; // Used the ID here. See the Thread object for definition
                $incident->Threads[0]->Text =$formData['Incident.Threads']->value."\n \n *********************\n".$data_printer;
            }

            $value = $formData['Incident.FileAttachments']->value;
            if(is_array($value) && count($value)){
                $incident->FileAttachments = new RNCPHP\FileAttachmentIncidentArray();
                foreach($value as $attachment){
                    if($tempFile =   get_cfg_var('upload_tmp_dir') . '/' . $attachment->localName) {
                        $file = $incident->FileAttachments[] = new RNCPHP\FileAttachmentIncident();
                        $file->ContentType = $attachment->contentType;
                        $file->setFile($tempFile);
                        $file->FileName = preg_replace("/[\r\n\/:*?\"<>|]+/", '_', $attachment->userName);
                    }
                }
            }
            $incident->save();
            RNCPHP\ConnectAPI::commit();
            if($formData['Incident.CustomFields.c.delivery_line_items']->value)
                $this->insertIncidentDeliveryLineItems($formData['Incident.CustomFields.c.delivery_line_items']->value,$incident->ID);   // If everything goes right,lets update the product Selection.
            $arr['result']['transaction']['incident']['key']="i_id";
            $arr['result']['transaction']['incident']['value']=$incident->ID;
            $arr['result']['sessionParam']="/";
        }
        catch(RNCPHP\ConnectAPIError $err){
            $arr['errorMessage']=$err->getMessage()."@".$err->getLine();
        }
        return json_encode($arr);
    }

} //Class 