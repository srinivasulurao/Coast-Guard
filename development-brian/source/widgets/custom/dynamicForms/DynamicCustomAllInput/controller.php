<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');
require_once(get_cfg_var('doc_root'). '/include/ConnectPHP/Connect_init.phph' );
initConnectAPI();
use RightNow\Connect\v1_3 as RNCPHP;
class DynamicCustomAllInput extends Widget
{
    protected $widgetType = 'input';
    
    function __construct()
    {
        parent::__construct();
        $this->attrs['table'] = new Attribute(getMessage(TABLE_LBL), 'OPTION', getMessage(TABLE_WHICH_GET_CUSTOM_FIELDS_LBL), '');
        $this->attrs['table']->options =  array('incidents', 'contacts');
        $this->attrs['chat_visible_only'] = new Attribute(getMessage(CHAT_VISIBLE_ONLY_LBL), 'BOOL', getMessage(SET_CF_VISIBLE_CHAT_DISPED_MSG), false);
        $this->attrs['always_show_mask'] = new Attribute(getMessage(ALWAYS_SHOW_MASK_LBL), 'BOOL', getMessage(SET_TRUE_FLD_MASK_VAL_EXPECTED_MSG), false);
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] = getMessage(WIDGET_DISP_CF_DB_TB_INDICATED_END_MSG);
        $this->parms['i_id'] = new UrlParam(getMessage(INCIDENT_ID_LBL), 'i_id', false, getMessage(INCIDENT_ID_DISPLAY_INFORMATION_LBL), 'i_id/7');
    }

    function getData()
    {
		
    	$cfInfo = RNCPHP\ROQL::query("SELECT form_id,cf_id,visible,required FROM CO.cf2dynamic_form where required=1")->next();
    	while($cf = $cfInfo->next())
    	{
    	
    		$prodcatInfo = RNCPHP\ROQL::query("SELECT prod_id FROM CO.prodcat2dynamic_form where form_id=".$cf['form_id']." AND cat_id=0")->next();
    		while($prodcat = $prodcatInfo->next()) {
    			$element =  $cf['cf_id']."-".$prodcat['prod_id'];
    			$this->data['js']['cf_id_req'][] = $element;
    		}
    	}
    	$this->data['attrs']['table'] = strtolower($this->data['attrs']['table']);
        switch($this->data['attrs']['table'])
        {
            case 'contacts':
                if($this->data['attrs']['chat_visible_only'])
                    $visibility = VIS_LIVE_CHAT;
                else
                    $visibility = VIS_ENDUSER_EDIT_RW|VIS_ENDUSER_EDIT_RO;
                $table = TBL_CONTACTS;
                break;
            case 'incidents':
                if($this->data['attrs']['chat_visible_only'])
                    $visibility = VIS_LIVE_CHAT;
                else
                    $visibility = VIS_ENDUSER_DISPLAY;
                $table = TBL_INCIDENTS;
                break;
            case 'answers':
                $visibility = VIS_ENDUSER_DISPLAY;
                $table = TBL_ANSWERS;
                break;
            default:
                echo $this->reportError(sprintf(getMessage(PCT_S_ATTRIBUTE_IS_REQUIRED_MSG), 'table'));
                return false;
                break;
        }
        $this->CI->load->model('standard/Customfield_model');
        $visibility = ($visibility !== VIS_LIVE_CHAT && $this->widgetType === 'input') ? VIS_ENDUSER_EDIT_RW : $visibility;
        $this->data['fields'] = $this->CI->Customfield_model->getCustomFieldList($table, $visibility);

        // load some initial data into the logic.js file if we have anything setup
        $this->CI->load->model('custom/Dynamic_forms_model');
        $initData = $this->CI->Dynamic_forms_model->initForm();
        if(count($initData) > 0 )
            $this->data['js']['breakdown'] = $initData;
    }
}
