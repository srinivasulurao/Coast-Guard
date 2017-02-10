<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

class CommonQuestions extends Widget
{
    function __construct()
    {
        parent::__construct();		
		$this->attrs['max_questions'] = new Attribute('Max Questions to display', 'INT', 'Max Questions to display.', 3);
        $this->attrs['max_chars'] = new Attribute('Max Chars', 'INT', 'Max Chars of the Answer Summary to display. Rest of the string will be replaced by trailing dots.', 255);
        $this->attrs['report_id'] = new Attribute('Report ID', 'INT', 'Indicates the Report ID that contains the Common Questions Config', 1);
        $this->attrs['report_id']->min = 1;
        $this->attrs['report_id']->optlistId = OPTL_CURR_INTF_PUBLIC_REPORTS;
        
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] = 'This widget displays the Common Questions in a grid.';        
    }

    function getData()
    {
        //Load report model and retrieve report data
        $this->CI->load->model('standard/Report_model');
		$filters['per_page'] = $this->data['attrs']['max_questions'];
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
		logMessage(print_r($results['data'], true));
        $this->data['js']['enabled'] = (count($results['data']) > 1);
        $this->data['js']['max_chars'] = $this->data['attrs']['max_chars'];		
    }
}
