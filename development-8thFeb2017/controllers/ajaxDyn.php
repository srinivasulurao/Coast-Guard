<?php
namespace Custom\Controllers;	 
use RightNow\Utils\Framework,
    RightNow\Libraries\AbuseDetection,
    RightNow\Utils\Config,
    RightNow\Utils\Okcs;

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

	function save_aaq_form_data(){
        AbuseDetection::check($this->input->post('f_tok'));
        $data = json_decode($this->input->post('form'));
        if(!$data)
        {
            header("HTTP/1.1 400 Bad Request");
            // Pad the error message with spaces so IE will actually display it instead of a misleading, but pretty, error message.
            Framework::writeContentWithLengthAndExit(json_encode(Config::getMessage(END_REQS_BODY_REQUESTS_FORMATTED_MSG)) . str_repeat("\n", 512));
        }
        if($listOfUpdateRecordIDs = json_decode($this->input->post('updateIDs'), true)){
            $listOfUpdateRecordIDs = array_filter($listOfUpdateRecordIDs);
        }
        $smartAssistant = $this->input->post('smrt_asst');
        $response = $this->model('custom/Dynamic_forms_model')->save_aaq_form_model($data, $listOfUpdateRecordIDs ?: array(), ($smartAssistant === 'true'));
        echo $response;
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