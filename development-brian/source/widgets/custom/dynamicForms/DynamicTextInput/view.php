<rn:meta controller_path="custom/dynamicForms/DynamicTextInput" js_path="custom/dynamicForms/DynamicTextInput" base_css="standard/input/TextInput" presentation_css="widgetCss/TextInput.css"  compatibility_set="November '09+"/>

<? if($this->data['readOnly']):?>
<rn:widget path="output/FieldDisplay" left_justify="true"/>
<? else:?>

<div id="rn_<?=$this->instanceID;?>" class="rn_TextInput">
<?
switch($this->data['js']['type']):
case EUF_DT_VARCHAR:
case EUF_DT_INT:
?>
    <? if($this->data['attrs']['label_input']):?>
    <label for="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" id="rn_<?=$this->instanceID;?>_Label" class="rn_Label"><?=$this->data['attrs']['label_input'];?>
    <? if($this->data['attrs']['required']):?>
        <span class="rn_Required"> * </span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
    <? endif;?>
    <? if($this->data['js']['hint']):?>
    <span class="rn_ScreenReaderOnly"> <?=$this->data['js']['hint']?></span>
    <? endif;?>
    </label>
    <? endif;?>
    <input type="text" id="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" name="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" class="rn_Text" <?=tabIndex($this->data['attrs']['tabindex'], 1);?> maxlength="<?=$this->data['maxLength']?>" value="<?=$this->data['value'];?>"/>
<?
break;
case EUF_DT_PASSWORD:
?>
    <? if($this->data['attrs']['label_input']):?>
    <label for="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" id="rn_<?=$this->instanceID;?>_Label" class="rn_Label"><?=$this->data['attrs']['label_input'];?>
    <? if($this->data['attrs']['required']):?>
        <span class="rn_Required"> * </span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
    <? endif;?>
    <? if($this->data['js']['hint']):?>
    <span class="rn_ScreenReaderOnly"> <?=$this->data['js']['hint']?></span>
    <? endif;?>
    </label>
    <? endif;?>
    <input type="password" id="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" class="rn_Password" <?=tabIndex($this->data['attrs']['tabindex'], 1);?> maxlength="<?=$this->data['maxLength']?>"/>
<?
break;
default:
?>
    <? if($this->data['attrs']['label_input']):?>
    <label for="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" id="rn_<?=$this->instanceID;?>_Label" class="rn_Label"><?=$this->data['attrs']['label_input'];?>
    <? if($this->data['attrs']['required']):?>
        <span class="rn_Required"> * </span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
    <? endif;?>
    <? if($this->data['js']['hint']):?>
    <span class="rn_ScreenReaderOnly"> <?=$this->data['js']['hint']?></span>
    <? endif;?>
    </label>
    <? endif;?>
    <textarea id="rn_<?=$this->instanceID;?>_<?=$this->data['js']['name'];?>" class="rn_TextArea" rows="7" cols="60" <?=tabIndex($this->data['attrs']['tabindex'], 1);?>><?=$this->data['value'];?></textarea>
<?
break;
endswitch;
?>
</div>

<? endif;?>
