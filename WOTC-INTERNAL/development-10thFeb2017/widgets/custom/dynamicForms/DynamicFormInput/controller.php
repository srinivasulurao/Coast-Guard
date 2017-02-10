<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

class DynamicFormInput extends Widget
{
    protected $field;
    protected $table;
    protected $fieldName;
    function __construct()
    {
        parent::__construct();
        $this->attrs['label_input'] = new Attribute(getMessage(INPUT_LABEL_LBL), 'STRING', getMessage(LABEL_DISPLAY_INPUT_CONTROL_LBL), '{default_label}');
        $this->attrs['label_required'] = new Attribute(getMessage(REQUIRED_LABEL_LBL), 'STRING', getMessage(LABEL_DISPLAY_REQUIREMENT_MESSAGE_LBL), getMessage(PCT_S_IS_REQUIRED_MSG));
        $this->attrs['name'] = new Attribute(getMessage(NAME_LBL), 'STRING', getMessage(COMBINATION_TB_FLD_INPUT_ATTRIB_MSG), '');
        $this->attrs['required'] = new Attribute(getMessage(REQUIRED_LBL), 'BOOL', getMessage(BOOLEAN_DNOTING_FLD_CONT_VAL_APPLY_MSG), false);
        $this->attrs['initial_focus'] = new Attribute(getMessage(INITIAL_FOCUS_LBL), 'BOOL', getMessage(SET_TRUE_FIELD_FOCUSED_PAGE_LOADED_MSG), false);
        $this->attrs['validate_on_blur'] = new Attribute(getMessage(VALIDATE_ON_BLUR_LBL), 'BOOL', getMessage(VALIDATES_INPUT_FLD_DATA_REQS_FOCUS_LBL), false);
        $this->attrs['always_show_mask'] = new Attribute(getMessage(ALWAYS_SHOW_MASK_LBL), 'BOOL', getMessage(SET_TRUE_FLD_MASK_VAL_EXPECTED_MSG), false);
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] =  getMessage(WDGET_ALLOWS_USERS_SET_FLD_VALS_DB_MSG);
        $this->parms['i_id'] = new UrlParam(getMessage(INCIDENT_ID_LBL), 'i_id', false, getMessage(INCIDENT_ID_DISPLAY_INFORMATION_LBL), 'i_id/7');
    }

    function getData()
    {
        if($this->retrieveAndInitializeData() === false)
            return false;
        if($this->field->data_type === EUF_DT_HIERMENU)
        {
            echo $this->reportError(sprintf(getMessage(PCT_S_FLD_TYPE_PROD_CAT_PLS_INPUT_S_MSG), $this->fieldName));
            return false;
        }
        if($this->field->data_type == EUF_DT_FATTACH)
        {
            echo $this->reportError(sprintf(getMessage(PCT_S_FLD_TYPE_FILE_ATTACH_PLS_MSG), $this->fieldName));
            return false;
        }
    }

    protected function retrieveAndInitializeData()
    {
        $cacheKey = 'Input_' . $this->data['attrs']['name'];
        $cacheResults = checkCache($cacheKey);
        if(is_array($cacheResults))
        {
            list($this->field, $this->table, $this->fieldName, $this->data) = $cacheResults;
            $this->field = unserialize($this->field);
            return;
        }
        $this->data['attrs']['name'] = strtolower($this->data['attrs']['name']);

        $validAttributes = parseFieldName($this->data['attrs']['name'], true);
        if(!is_array($validAttributes))
        {
            echo $this->reportError($validAttributes);
            return false;
        }
        $this->table = $validAttributes[0];
        $this->fieldName = $validAttributes[1];
        $this->field = getBusinessObjectField($this->table, $this->fieldName, $isProfileField);

        if(is_string($this->field))
        {
            echo $this->reportError($this->field);
            return false;
        }
        //Not a visible custom field
        if(is_null($this->field))
            return false;

        //Common between both standard + custom fields
        $this->data['js']['type'] = $this->field->data_type;
        $this->data['js']['table'] = $this->table;
        $this->data['js']['name'] = $this->fieldName;
        if($isProfileField === true)
            $this->data['js']['profile'] = true;
        $this->data['readOnly'] = $this->field->readonly;
        if($this->field->readonly)
        {
            echo $this->reportError(sprintf(getMessage(PCT_S_READ_FIELD_INPUT_WIDGET_MSG), $this->fieldName));
            return false;
        }
        $this->data['js']['mask'] = $this->field->mask;
        if($this->field->menu_items)
            $this->data['menuItems'] = $this->field->menu_items;
        if(!is_null($this->field->max_val))
            $this->data['js']['maxVal'] = $this->field->max_val;
        if(!is_null($this->field->min_val))
            $this->data['js']['minVal'] = $this->field->min_val;
        if($this->data['attrs']['label_input'] === '{default_label}')
            $this->data['attrs']['label_input'] = $this->field->lang_name;
        if($this->field->field_size)
        {
            $this->data['maxLength'] = $this->field->field_size;
            //allow for -/+ sign on ints
            if($this->field->data_type === EUF_DT_INT)
                $this->data['maxLength']++;
            else if($this->field->data_type === EUF_DT_MEMO)
                $this->data['js']['fieldSize'] = $this->field->field_size;
        }
        if(!is_array($this->field->value))
            $this->data['value'] = ($this->field->value !== null) ? htmlspecialchars($this->field->value, ENT_QUOTES, 'UTF-8', false) : $this->field->value;
        $this->data['js']['prev'] = $this->data['value'];

        //custom field specific
        if($this->field instanceof CustomField)
        {
            //Don't show non-editable fields
            if(!($this->field->visibility & VIS_ENDUSER_EDIT_RW))
            {
                echo $this->reportError(sprintf(getMessage(PCT_S_READ_FIELD_INPUT_WIDGET_MSG), $this->fieldName));
                return false;
            }
            $this->data['js']['name'] = preg_replace('(^c\$)', '', $this->fieldName);
            $this->data['js']['customID'] = $this->field->custom_field_id;
            if($this->field->lang_hint && strlen(trim($this->field->lang_hint)))
                $this->data['js']['hint'] = $this->field->lang_hint;
            $this->data['attrs']['required'] = ($this->field->required === 1) ? true : false;
        }
        //standard field w/read-only visibility
        elseif($this->field->readonly)
        {
            return false;
        }
        //Override visibility of doing a contact field and pta or chat
        if($this->table === 'contacts' && isLoggedIn())
        {
            if($this->CI->page === getConfig(CP_CHAT_URL) || isPta())
                $this->data['readOnly'] = true;
        }
        setCache($cacheKey, array(serialize($this->field), $this->table, $this->fieldName, $this->data));
    }
}
