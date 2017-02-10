<?php
	 
class ajaxDyn extends ControllerBase
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
}