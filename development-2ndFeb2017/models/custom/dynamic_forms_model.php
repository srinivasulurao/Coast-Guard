<?
/**
* Converted to CPHP by Papin Zazyan
* 22.06.2012
*/
namespace Custom\Models; 
use RightNow\Connect\v1_2 as RNCPHP;
require_once( get_cfg_var("doc_root")."/include/ConnectPHP/Connect_init.phph" );

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
}