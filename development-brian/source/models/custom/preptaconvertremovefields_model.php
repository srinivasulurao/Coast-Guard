<?php

class PrePtaConvertRemoveFields_model extends Model{

	function __contstruct()
	{
		parent::__construct();
	}
	
	function removeNonRequiredFields(&$decodedData)
	{
		/*PTA required fields as well as token and status which are used by client for a secondary session authentication elsewhere.*/
		$requiredFields = array("p_li", "p_userid", "p_passwd", "p_email.addr", "token", "p_status");
		foreach ($decodedData['data']['decodedData'] as $key => $value)
		{
			if (!in_array($key, $requiredFields))
			{
				unset($decodedData['data']['decodedData'][$key]);
			}
		}
	}
}