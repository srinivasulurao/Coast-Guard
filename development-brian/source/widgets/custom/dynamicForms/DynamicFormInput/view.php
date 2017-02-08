<rn:meta controller_path="custom/dynamicForms/DynamicFormInput"  presentation_css="widgetCss/FormInput.css" compatibility_set="November '09+"/>

<? switch($this->field->data_type):
    case EUF_DT_SELECT:
    case EUF_DT_CHECK:
    case EUF_DT_RADIO:?>
        <rn:widget path="dynamicForms/DynamicSelectionInput"/>
        <? break;
    case EUF_DT_DATETIME:
    case EUF_DT_DATE:?>
        <rn:widget path="dynamicForms/DynamicDateInput"/>
        <? break;
    default:?>
        <rn:widget path="dynamicForms/DynamicTextInput"/>
        <? break;
endswitch;?>
