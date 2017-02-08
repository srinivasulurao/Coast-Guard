<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

if(!class_exists('DynamicFormInput'))
    requireWidgetController('custom/dynamicForms/DynamicFormInput');

class DynamicDateInput extends DynamicFormInput
{
    function __construct()
    {
        parent::__construct();
        //this FormInput attr doesn't apply to DateInput
        unset($this->attrs['always_show_mask']);
    }

    function generateWidgetInformation()
    {
        parent::generateWidgetInformation();
        $this->info['notes'] =  getMessage(WDGT_ALLOWS_USERS_SET_FLD_VALS_DB_MSG);
    }

    function getData()
    {
        if(parent::retrieveAndInitializeData() === false)
            return false;

        if($this->field->data_type !== EUF_DT_DATE && $this->field->data_type !== EUF_DT_DATETIME)
        {
            echo $this->reportError(sprintf(getMessage(PCT_S_DATE_DATE_SLASH_TIME_FIELD_MSG), $this->fieldName));
            return false;
        }

        $this->data['maxYear'] = getConfig(EU_MAX_YEAR, 'COMMON');
        $dateOrder = getConfig(DTF_INPUT_DATE_ORDER, 'COMMON');

        $this->data['dayLabel'] = getMessage(DAY_LBL, 'COMMON');
        $this->data['monthLabel'] = getMessage(MONTH_LBL, 'COMMON');
        $this->data['yearLabel'] = getMessage(YEAR_LBL, 'COMMON');
        $this->data['hourLabel'] = getMessage(HOUR_LBL, 'COMMON');
        $this->data['minuteLabel'] = getMessage(MINUTE_LBL, 'COMMON');

        //mm/dd/yyyy
        if ($dateOrder == 0)
        {
            $this->data['monthOrder'] = 0;
            $this->data['dayOrder'] = 1;
            $this->data['yearOrder'] = 2;
            if ($this->field->data_type === EUF_DT_DATETIME)
                $this->data['js']['min_val'] = '1/2/1970 09:00';
            else
                $this->data['js']['min_val'] = '1/2/1970';
        }
        //yyyy/mm/dd
        else if ($dateOrder == 1)
        {
            $this->data['monthOrder'] = 1;
            $this->data['dayOrder'] = 2;
            $this->data['yearOrder'] = 0;
            if ($this->field->data_type === EUF_DT_DATETIME)
                $this->data['js']['min_val'] = sprintf("1970%s/1%s/2%s 09:00", $this->data['yearLabel'], $this->data['monthLabel'], $this->data['dayLabel']);
            else
                $this->data['js']['min_val'] = sprintf("1970%s/1%s/2%s", $this->data['yearLabel'], $this->data['monthLabel'], $this->data['dayLabel']);
        }
        //dd/mm/yyyy
        else
        {
            $this->data['monthOrder'] = 1;
            $this->data['dayOrder'] = 0;
            $this->data['yearOrder'] = 2;
            if ($this->field->data_type === EUF_DT_DATETIME)
                $this->data['js']['min_val'] = '2/1/1970 09:00';
            else
                $this->data['js']['min_val'] = '2/1/1970';

        }
        if($this->data['value'])
        {
            $this->data['value'] = explode(' ', date('m j Y G i', intval($this->data['value'])));
            $this->data['defaultValue'] = true;
        }

    }
}
