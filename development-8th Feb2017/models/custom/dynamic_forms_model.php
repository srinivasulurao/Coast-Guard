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
		
		$prodcat2dynamic_form_mas = RNCPHP\CO\prodcat2dynamic_form::find("cat_id = 0");
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

		return $result; 
	}

	function getProductData($prod_id,$cat_id=0){
		
	}

	function getFieldNameByCustomFieldID(){
          //Load the custom field report and find the custom field id.
		    $filters = new RNCPHP\AnalyticsReportSearchFilterArray;
			$ar= RNCPHP\AnalyticsReport::fetch(122950);
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
             	    $cf2dynamic_form_mas = RNCPHP\ROQL::queryObject("SELECT CO.cf2dynamic_form FROM CO.cf2dynamic_form WHERE CO.cf2dynamic_form.form_id='{$form_id}' ORDER BY CO.cf2dynamic_form.seq")->next();
			        while($rec=$cf2dynamic_form_mas->next()):
                       if($rec->required):
                         $field=$fields[$rec->cf_id];	
					     $result["required_fields"][]=$field['col_name']; //Just load the custom fields as per load id
					   endif;
					endwhile;   
					break;
		    endwhile;
             	
             return $result;
    }

} //Class 