<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

class Alerts extends Widget
{
    function __construct()
    {
        parent::__construct();		
		$this->attrs['max_alerts'] = new Attribute('Max Alerts', 'INT', 'Max Alerts to display.', 3);       
		$this->attrs['image_width'] = new Attribute('Image Width', 'INT', 'Indicates the width (in pixels) for the Alert image. Images that are not the same width as this value will be stretched/squished to this width.', 32);
        $this->attrs['image_height'] = new Attribute('Image Height', 'INT', 'Indicates the height (in pixels) for Alert image. Images that are not the same height as this value will be stretched/squished to this height.', 32);	
		$this->attrs['image_path'] = new Attribute('Image Path', 'STRING', 'Indicates the path to the Alert image.', '/euf/assets/images/maImportant.png');			
        $this->attrs['report_id'] = new Attribute('Report ID', 'INT', 'Indicates the Report ID that contains the Common Questions Config', 1);
        $this->attrs['report_id']->min = 1;
        $this->attrs['report_id']->optlistId = OPTL_CURR_INTF_PUBLIC_REPORTS;        
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] = 'This widget displays the Alerts in a list.';        
    }

    function getData()
    {
        //Load report model and retrieve report data
        $this->CI->load->model('standard/Report_model');
		$filters['per_page'] = $this->data['attrs']['max_alerts'];
        $format['truncate_size'] = 0;
        $format['highlight'] = false;

        //This is where the report model gets the URL filters....
        //Note - filters is passed by reference
        setFiltersFromUrl($this->data['attrs']['report_id'], $filters);		
        $r_tok = createToken($this->data['attrs']['report_id']);
        $results = $this->CI->Report_model->getDataXML($this->data['attrs']['report_id'], $r_tok, $filters, $format);

        //If not error, return data to the view for display processing
        if ($results['error'] !== null)
        {
            echo $this->reportError($results['error']);
            return false;
        }
        $this->data['reportData'] = $results['data'];		
        $this->data['js']['enabled'] = (count($results['data']) > 1);        
    }
}
