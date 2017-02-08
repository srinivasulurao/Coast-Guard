<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

// ---------- ConnectPHP --------------------------
require_once( get_cfg_var('doc_root').'/include/ConnectPHP/Connect_init.phph');
initConnectAPI();
use RightNow\Connect\v1_2 as RNCPHP;
// ---------- ConnectPHP --------------------------


class EmailAnswerLink extends Widget
{
    function __construct()
    {
        parent::__construct();

        $this->attrs['label_link'] = new Attribute(getMessage(LINK_LABEL_CMD), 'STRING', getMessage(STRING_DISPLAYS_LINK_PAGE_LBL), getMessage(EMAIL_THIS_PAGE_LBL));
        $this->attrs['label_dialog_title'] = new Attribute(getMessage(HEADER_LABEL_LBL), 'STRING', getMessage(LABEL_DISPLAY_DIALOG_TITLE_LBL), getMessage(EMAIL_ANS_HDG));
        $this->attrs['label_tooltip'] = new Attribute(getMessage(TOOLTIP_LBL), 'STRING', getMessage(STRING_DISPLAYS_HOVERS_LINK_LBL), getMessage(EMAIL_A_LINK_TO_THIS_ANSWER_LBL)); // formerly EMAIL_LINK_ANSWER_COMMENT_LBL
        $this->attrs['icon_path'] = new Attribute(getMessage(ICON_PATH_LBL), 'STRING', getMessage(OPTIONAL_IMAGE_FILE_DISPLAY_LINK_LBL), 'images/Email.png');
        $this->attrs['label_icon_alt'] = new Attribute(getMessage(ICON_ALT_LABEL_LBL), 'STRING', getMessage(ALTERNATIVE_TXT_ICON_ICON_PATH_MSG), '');
        $this->attrs['label_to'] = new Attribute(getMessage(TO_LABEL_LBL), 'STRING', getMessage(LABEL_TO_DISPLAY_BY_TO_FIELD_LBL), getMessage(TO_EMAIL_LBL));
        $this->attrs['label_sender_name'] = new Attribute(getMessage(NAME_LABEL_LBL), 'STRING', getMessage(LABEL_TO_DISPLAY_BY_NAME_FIELD_LBL), getMessage(YOUR_NAME_LBL));
        $this->attrs['label_sender_email'] = new Attribute(getMessage(SENDER_EMAIL_LABEL_LBL), 'STRING', getMessage(LABEL_DISPLAY_SENDERS_EMAIL_FIELD_LBL), getMessage(YOUR_EMAIL_ADDR_LBL));
        $this->attrs['label_send_button'] = new Attribute(getMessage(SEND_BUTTON_LABEL_CMD), 'STRING', getMessage(LABEL_TO_DISPLAY_ON_SEND_BUTTON_LBL), getMessage(SEND_EMAIL_CMD));
        $this->attrs['label_cancel_button'] = new Attribute(getMessage(LABEL_CANCEL_BUTTON_LBL), 'STRING', getMessage(LABEL_TO_DISPLAY_ON_CANCEL_BUTTON_LBL), getMessage(CANCEL_LBL));
        $this->attrs['label_email_sent'] = new Attribute(getMessage(EMAIL_SENT_LABEL_LBL), 'STRING', getMessage(MESSAGE_DISPLAY_EMAIL_SUCCESSFULLY_LBL), getMessage(EMAIL_HAS_BEEN_SENT_MSG));
		
     
	 
        $this->attrs['label_last_name'] = new Attribute(getMessage(LAST_NAME_LBL), 'STRING', getMessage(LAST_NAME_LBL), getMessage(LAST_NAME_LBL));
		
        $this->attrs['label_first_name'] = new Attribute(getMessage(FIRST_NAME_LBL), 'STRING', getMessage(FIRST_NAME_LBL), getMessage(FIRST_NAME_LBL));
		
		
		
		
		
        $this->attrs['label_subject'] = new Attribute(getMessage(SUBJECT_LBL), 'STRING', getMessage(SUBJECT_LBL), getMessage(SUBJECT_LBL));
        $this->attrs['label_comment'] = new Attribute(getMessage(COMMENT_LBL), 'STRING', getMessage(COMMENT_LBL), getMessage(COMMENT_LBL));
		
    }

    function generateWidgetInformation()
    {
        $this->info['notes'] =  getMessage(WIDGET_LINK_CLICKED_ALLOWS_EMAIL_MSG);
        $this->parms['a_id'] = new UrlParam(getMessage(ANS_ID_LBL), 'a_id', true, getMessage(ANSWER_ID_TO_EMAIL_LBL), 'a_id/3');
    }

    function getData()
	
	
    {
        if(isSpider())
            return false;

        $this->data['answerID'] = getUrlParm('a_id');
        if($this->data['answerID'] === null)
            return false;

        $this->data['js']['answerID'] = $this->data['answerID'];
        $this->data['js']['emailAnswerToken'] = cpCreateTokenExp(146);


		
		try{
			$row = RNCPHP\ROQL::query( "SELECT Summary FROM Answer where ID = ".$this->data['answerID'])->next();
			$row = $row->next();
			$this->data['js']['subject'] = "".$row["Summary"]."";
		} catch(RNCPHP\ConnectAPIError $err){
		}


        $profile = $this->CI->session->getProfile();
        $this->data['js']['idProfile'] = false;
        $this->data['js']['senderEmail'] = '';
        if($profile != null)
        {
            $contactData = $this->CI->Contact_model->get($profile->c_id->value);
			
            $this->data['js']['senderEmail'] = $contactData->email->value;
            $nameOrder = getNameFields('contacts');

			
			$this->data['js']['last_name']   = $contactData->{$nameOrder[0]}->value;
            $this->data['js']['first_name']  = $contactData->{$nameOrder[1]}->value;
			
			
            $this->data['js']['senderName'] = "{$contactData->{$nameOrder[0]}->value} {$contactData->{$nameOrder[1]}->value}";
						
            $this->data['js']['isProfile'] = true;
        }
        else if($this->CI->session->getSessionData('previouslySeenEmail'))
        {
            $this->data['js']['senderEmail'] = $this->CI->session->getSessionData('previouslySeenEmail');
        }
    }
}
