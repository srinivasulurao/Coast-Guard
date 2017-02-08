<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

class Carousel extends Widget
{
    function __construct()
    {
        parent::__construct();
        $this->attrs['duration'] = new Attribute('Display Duration', 'INT', 'Indicates the amount of time (in seconds) that an image will be displayed before automatically advancing to the next image.', 5);
        $this->attrs['image_width'] = new Attribute('Image Width', 'INT', 'Indicates the width (in pixels) for the images. Images that are not the same width as this value will be stretched/squished to this width.', 1050);
        $this->attrs['image_height'] = new Attribute('Image Height', 'INT', 'Indicates the height (in pixels) for the images. Images that are not the same height as this value will be stretched/squished to this height.', 350);
		$this->attrs['image_width_mobile'] = new Attribute('Image Width Mobile', 'INT', 'Indicates the width (in pixels) for the images for mobile devices. Images that are not the same width as this value will be stretched/squished to this width.', 294);
        $this->attrs['image_height_mobile'] = new Attribute('Image Height Mobile', 'INT', 'Indicates the height (in pixels) for the images for mobile devices. Images that are not the same height as this value will be stretched/squished to this height.', 196);
        $this->attrs['max_images'] = new Attribute('Max Images', 'INT', 'Indicates the maximum number of images to display.', 3);
		//#$this->attrs['report_id'] = new Attribute(getMessage(REPORT_ID_LBL), 'INT', getMessage(ID_RPT_DISP_DATA_SEARCH_RESULTS_MSG), CP_NOV09_ANSWERS_DEFAULT);
        $this->attrs['report_id'] = new Attribute('Report ID', 'INT', 'Indicates the Report ID that contains the Image Carousel Config', 1);
        $this->attrs['report_id']->min = 1;
        $this->attrs['report_id']->optlistId = OPTL_CURR_INTF_PUBLIC_REPORTS;
        $this->attrs['root_path'] = new Attribute('Root Path', 'STRING', 'Indicates the root path that will be used for all images.', '/euf/assets/images/');
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] = 'This widget displays images in a carousel.';
        //#$this->parms['p'] = new UrlParam(getMessage(PRODUCT_LBL), 'p', false, getMessage(CMMA_SPARATED_IDS_COMMAS_DENOTING_MSG), 'p/1,2,3');
    }

    function getData()
    {
        $this->addStylesheet(getYUICodePath('carousel/assets/carousel-core.css'));

        //Load report model and retrieve report data
        $this->CI->load->model('standard/Report_model');
        $filters['per_page'] = $this->data['attrs']['max_images'];
        $format['tabindex'] = $this->data['attrs']['tabindex'];
        $format['truncate_size'] = 0;
        $format['highlight'] = false;

        //This is where the report model gets the URL filters.... such as "p".
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
        $this->data['js']['duration'] = $this->data['attrs']['duration'];
    }
}
