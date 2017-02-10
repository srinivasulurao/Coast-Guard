<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

class NavTiles extends Widget
{
    function __construct()
    {
        parent::__construct();
		$this->attrs['display_page'] = new Attribute('Associated Display page', 'STRING', 'The page associated with the Navigation Tile. This value is used as a filter for the Nav Tiles Config report.', 'HOME');
        $this->attrs['rows'] = new Attribute('Nav Tiles Rows', 'INT', 'Number of rows in the Navigation Tiles grid.', 1);
		$this->attrs['columns'] = new Attribute('Nav Tiles Columns', 'INT', 'Number of columns in the Navigation Tiles grid.', 5);
        $this->attrs['icon_width'] = new Attribute('Icon Width', 'INT', 'The width (in pixels) for the icons to display on the tile.', 80);
		$this->attrs['icon_height'] = new Attribute('Icon Height', 'INT', 'The height (in pixels) for the icons to display on the tile.', 60);
        $this->attrs['icon_width_mobile'] = new Attribute('Icon Width for Mobile', 'INT', 'The width (in pixels) for the icons to display on the tile.', 40);
		$this->attrs['icon_height_mobile'] = new Attribute('Icon Height for Mobile', 'INT', 'The height (in pixels) for the icons to display on the tile.', 30);
        $this->attrs['report_id'] = new Attribute('Report ID', 'INT', 'Indicates the Report ID that contains the Nav Tiles Config', 1);
        $this->attrs['report_id']->min = 1;
        $this->attrs['report_id']->optlistId = OPTL_CURR_INTF_PUBLIC_REPORTS;
        $this->attrs['root_path'] = new Attribute('Root Path', 'STRING', 'Indicates the root path that will be used for all images.', '/euf/assets/images/');
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] = 'This widget displays the Navigation Tiles as a grid.';        
    }

    function getData()
    {
        //#$this->addStylesheet(getYUICodePath('carousel/assets/carousel-core.css'));

        //Load report model and retrieve report data
        $this->CI->load->model('standard/Report_model');
        $filters['display_page'] = $this->data['attrs']['display_page'];
        //#$format['tabindex'] = $this->data['attrs']['tabindex'];
        $format['truncate_size'] = 0;
        $format['highlight'] = false;

        //This is where the report model gets the URL filters.... such as "p".
        //Note - filters is passed by reference
        setFiltersFromUrl($this->data['attrs']['report_id'], $filters);		
        $r_tok = createToken($this->data['attrs']['report_id']);
		logMessage(print_r($filters, true));
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
