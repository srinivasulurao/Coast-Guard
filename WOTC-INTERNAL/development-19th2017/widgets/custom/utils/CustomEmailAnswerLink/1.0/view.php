
<div id="rn_<?=$this->instanceID?>" class="rn_EmailAnswerLink">
    <a id="rn_<?=$this->instanceID?>_Link" href="javascript:void(0);" title="<?=$this->data['attrs']['label_tooltip'];?>" <?=tabIndex($this->data['attrs']['tabindex'], 1);?>>
        <?if($this->data['attrs']['icon_path']):?>
            <img src="<?=$this->data['attrs']['icon_path'];?>" alt="<?=$this->data['attrs']['label_icon_alt']?>"/>
        <?endif;?>
        <span><?=$this->data['attrs']['label_link'];?></span>
    </a>
    <? /* Container for feedback dialog.  It's hidden on the page. */ ?>
    <div id="rn_<?=$this->instanceID?>_EmailAnswerLinkForm" class="rn_EmailAnswerLinkForm rn_Hidden">
        <div id="rn_<?=$this->instanceID;?>_ErrorMessage"></div>
        <label id="rn_<?=$this->instanceID?>_LabelRecipientEmail" for="rn_<?=$this->instanceID?>_InputRecipientEmail">
            <?=$this->data['js']['label_to'];?>
            <span class="rn_Required"> *</span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
        </label>
        <input id="rn_<?=$this->instanceID?>_InputRecipientEmail" type="text" <?=tabIndex($this->data['attrs']['tabindex'], 2);?> value="" />
                  
            <label id="rn_<?=$this->instanceID?>_LabelFirstName" for="rn_<?=$this->instanceID?>_InputFirstName">
               <?=$this->data['js']['label_first_name'];?>
			
               <span class="rn_Required"> *</span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
            </label>
            <input id="rn_<?=$this->instanceID?>_InputFirstName" type="text" name="<?=$this->data['attrs']['label_first_name'];?>" <?=tabIndex($this->data['attrs']['tabindex'], 3);?> value="<?=$this->data['js']['first_name'];?>" />
            
           <label id="rn_<?=$this->instanceID?>_LabelLastName" for="rn_<?=$this->instanceID?>_InputLastName">
               <?=$this->data['js']['label_last_name'];?>
			
               <span class="rn_Required"> *</span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
            </label>
            <input id="rn_<?=$this->instanceID?>_InputLastName" type="text" <?=tabIndex($this->data['attrs']['tabindex'], 3);?> value="<?=$this->data['js']['last_name'];?>" />
        
        
            <label id="rn_<?=$this->instanceID?>_LabelSenderEmail" for="rn_<?=$this->instanceID?>_InputSenderEmail">
                <?=$this->data['js']['label_sender_email'];?>
			 
                <span class="rn_Required"> *</span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
            </label>
            <input id="rn_<?=$this->instanceID?>_InputSenderEmail" type="text" <?=tabIndex($this->data['attrs']['tabindex'], 3);?> value="<?=$this->data['js']['senderEmail'];?>" />
                
            
             <? //endif;?>
            <label id="rn_<?=$this->instanceID?>_LabelSubject" for="rn_<?=$this->instanceID?>_InputSubject">
                <?=$this->data['js']['label_subject'];?>
			  
                <span class="rn_Required"> *</span><span class="rn_ScreenReaderOnly"><?=getMessage(REQUIRED_LBL)?></span>
            </label>
            <input id="rn_<?=$this->instanceID?>_InputSubject" type="text" <?=tabIndex($this->data['attrs']['tabindex'], 3);?> value="<?=$this->data['js']['subject'];?>" style="width:340px" />
            
            
            
            <label id="rn_<?=$this->instanceID?>_LabelComment" for="rn_<?=$this->instanceID?>_InputComment">
                <?=$this->data['js']['label_comment'];?>
			 
            </label>
            <textarea id="rn_<?=$this->instanceID?>_InputComment" style="width:340px"></textarea>
            
                        
       
    </div>
</div>