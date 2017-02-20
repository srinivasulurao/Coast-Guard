<?php /* Originating Release: November 2015 */?>
<div id="rn_<?=$this->instanceID;?>" class="<?= $this->classList ?>">
    <rn:block id="top"/>
    <form id="rn_<?=$this->instanceID;?>_SearchForm" onsubmit="return false;">
        <rn:block id="preInput"/>
        <input type="search" id="rn_<?=$this->instanceID;?>_SearchField" name="rn_<?=$this->instanceID;?>_SearchField" class="rn_SearchField" maxlength="255" placeholder="<?=$this->data['js']['placeholder'];?>" aria-label="<?=$this->data['js']['placeholder'];?>"/>
        <rn:block id="postInput"/>
        <? /*IE needs extra input element for form submit on enter*/ ?>
        <? if($this->data['isIE']): ?>
        <label for="rn_<?=$this->instanceID;?>_HiddenInput" class="rn_Hidden">&nbsp;</label>
        <input id="rn_<?=$this->instanceID;?>_HiddenInput" type="text" class="rn_Hidden"/>
        <? endif;?>
        <rn:block id="preImage"/>
<rn:block id="postImage"/>
    </form>
    <rn:block id="bottom"/>
</div>
