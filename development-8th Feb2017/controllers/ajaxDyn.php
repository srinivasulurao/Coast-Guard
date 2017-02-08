<?php
namespace Custom\Controllers;	 

class ajaxDyn extends \RightNow\Controllers\Base
{
	function __construct()
	{
	    parent::__construct();
	}
    
   /*
   **  custom ajaxRequest controller called from cc/ajaxDyn/getDynForm
   *   takes in  cat_id from post variable and returns custom fields associated with that cat_id
   */
	function getDynForm()
	{
		if($prod_id = $this->input->post('prod_id'))
		{

			$this->load->model('custom/Dynamic_forms_model');
			
			if($results = $this->Dynamic_forms_model->get_dyn_form($prod_id))
			{
				$obj['prod'] = $results;
				echo json_encode($obj);
			}
			else
			{
				$obj['prod'] = array();
				echo json_encode($obj);
			}
		}
	}

	function getDynamicFormData(){

		$prod_id = $this->input->post('prod_id');
		$cat_id=$this->input->post('cat_id');
             if($prod_id > 0){

			$this->load->model('custom/Dynamic_forms_model');
			
			if($results = $this->Dynamic_forms_model->getDynamicFormDataModel($prod_id,$cat_id))
			{
				$obj['form_enabled'] = $results;
				echo json_encode($obj);
			}
			else
			{
				$obj['form_enabled'] = array();
				echo json_encode($obj);
			}
		}


	}//Dynamic form function ends here.
} //Class Ends here