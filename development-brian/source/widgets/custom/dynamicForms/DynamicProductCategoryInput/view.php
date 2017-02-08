<rn:meta controller_path="custom/dynamicForms/DynamicProductCategoryInput" js_path="custom/dynamicForms/DynamicProductCategoryInput" base_css="standard/input/ProductCategoryInput" presentation_css="widgetCss/ProductCategoryInput.css" compatibility_set="November '09+"/>

<? if($this->data['js']['readOnly']):?>
<rn:widget path="output/ProductCategoryDisplay" name="#rn:php:$this->data['attrs']['table'] . '.' . $this->data['attrs']['data_type']#" label="#rn:php:$this->data['attrs']['label_input']#" left_justify="true"/>
<? else:?>
<? $this->addJavaScriptInclude(getYUICodePath('treeview/treeview-min.js'));?>
<? $this->addStylesheet('/rnt/rnw/yui_2.7/treeview/assets/treeview-skin.css');?>

<div id="rn_<?=$this->instanceID;?>" class="rn_ProductCategoryInput">
    <a href="javascript:void(0);" class="rn_ScreenReaderOnly" id="rn_<?=$this->instanceID?>_Links_Trigger"><?printf(getMessage(SELECT_A_PCT_S_ACCESSIBLE_OPTION_LBL), $this->data['attrs']['label_input'])?>&nbsp;<span id="rn_<?=$this->instanceID;?>_TreeDescription"></span></a>
    <? if($this->data['attrs']['label_input']):?>
    <span class="rn_Label">
        <?=$this->data['attrs']['label_input']?>
        <? if($this->data['attrs']['required_lvl']):?>
        <span class="rn_Required"> *</span><span id="rn_<?=$this->instanceID;?>_RequiredLabel" class="rn_RequiredLabel">
            <span class="rn_ScreenReaderOnly">
                <?=getMessage(REQUIRED_LBL);?>
            </span>
        </span>
        <? endif;?>
    </span>
    <? endif;?>
    <button type="button" id="rn_<?=$this->instanceID;?>_<?=$this->data['attrs']['data_type'];?>_Button" class="rn_DisplayButton" <?=tabIndex($this->data['attrs']['tabindex'], 1);?>> <span id="rn_<?=$this->instanceID?>_Button_Visible_Text"><?=$this->data['attrs']['label_nothing_selected'];?></span> <span class="rn_ScreenReaderOnly"> &nbsp;- <?=getMessage(SORRY_CONTROL_ACC_PLEASE_LINK_MSG)?> </span> </button>
    <div class="rn_Hidden" id="rn_<?=$this->instanceID;?>_Links"></div>
    <div id="rn_<?=$this->instanceID;?>_Tree" class="rn_Panel rn_Hidden">
        <? /**Product / Category YUI TreeView is created here */?>
    </div>
    <? if($this->data['attrs']['set_button']):?>
    <button type="button" id="rn_<?=$this->instanceID;?>_<?=$this->data['attrs']['data_type'];?>_SetButton"><?=$this->data['attrs']['label_set_button']?></button>
    <? endif;?>
</div>
<? endif;?>
