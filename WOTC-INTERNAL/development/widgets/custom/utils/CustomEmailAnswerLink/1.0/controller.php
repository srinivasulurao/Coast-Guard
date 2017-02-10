<?php
namespace Custom\Widgets\utils;
use RightNow\Connect\v1_3 as RNCPHP; 
class CustomEmailAnswerLink extends \RightNow\Widgets\EmailAnswerLink {
    function __construct($attrs) {
        parent::__construct($attrs);
    }

    function getData() {

				
        if ($this->data['attrs']['object_type'] === 'question')
        {
            if(($objectID = \RightNow\Utils\Url::getParameter('qid')) === null)
                return false;

            if (!($socialQuestion = $this->CI->model('SocialQuestion')->get($objectID)->result))
                return false;

            // If the social question is not active then hide the widget
            if (!$socialQuestion->SocialPermissions->isActive())
                $this->classList->add('rn_Hidden');

            $this->data['js'] = array(
                'objectID' => $objectID,
                'activeStatusWithTypeID' => STATUS_TYPE_SSS_QUESTION_ACTIVE
            );
        }
        else
        {
				    
            if(($objectID = \RightNow\Utils\Url::getParameter('a_id')) === null)
                return false;

             $this->data['js'] = array(
                'objectID' => $objectID,
                'emailAnswerToken' => \RightNow\Utils\Framework::createTokenWithExpiration(146),
                'isProfile' => false,
            );

            if($profile = $this->CI->session->getProfile(true))
            {
               
								$this->data['js']['label_to'] =\RightNow\Utils\Config::getMessage(TO_EMAIL_LBL);
								$this->data['js']['label_last_name'] = \RightNow\Utils\Config::getMessage(LAST_NAME_LBL);
								$this->data['js']['label_first_name'] = \RightNow\Utils\Config::getMessage(FIRST_NAME_LBL); 
								$this->data['js']['label_sender_email'] =\RightNow\Utils\Config::getMessage(YOUR_EMAIL_ADDR_LBL);
								$this->data['js']['label_subject'] =\RightNow\Utils\Config::getMessage(SUBJECT_LBL);
								$this->data['js']['label_comment'] =\RightNow\Utils\Config::getMessage(COMMENT_LBL);
								
								$this->data['answerID'] = getUrlParm('a_id');
								$res = RNCPHP\ROQL::query("SELECT Summary FROM Answer where ID = ".$this->data['answerID'])->next();
								$row = $res->next();
								$this->data['js']['subject'] = "".$row["Summary"]."";
								
								// @codingStandardsIgnoreStart
                $this->data['js']['senderName'] = trim((\RightNow\Utils\Config::getConfig(intl_nameorder)) ? $profile->lastName . ' ' . $profile->firstName : $profile->firstName . ' ' . $profile->lastName);
                // @codingStandardsIgnoreEnd
                $this->data['js']['senderEmail'] = $profile->email;
								$this->data['js']['first_name'] = $profile->firstName;
								$this->data['js']['last_name'] = $profile->lastName;
								
                
								$this->data['js']['isProfile'] = true;
				
        if ($this->data['attrs']['object_type'] === 'question')
        {
            if(($objectID = \RightNow\Utils\Url::getParameter('qid')) === null)
                return false;

            if (!($socialQuestion = $this->CI->model('SocialQuestion')->get($objectID)->result))
                return false;

            // If the social question is not active then hide the widget
            if (!$socialQuestion->SocialPermissions->isActive())
                $this->classList->add('rn_Hidden');

            $this->data['js'] = array(
                'objectID' => $objectID,
                'activeStatusWithTypeID' => STATUS_TYPE_SSS_QUESTION_ACTIVE
            );
        }
        else
        {
            if(($objectID = \RightNow\Utils\Url::getParameter('a_id')) === null)
                return false;

             $this->data['js'] = array(
                'objectID' => $objectID,
                'emailAnswerToken' => \RightNow\Utils\Framework::createTokenWithExpiration(146),
                'isProfile' => false,
            );

            if($profile = $this->CI->session->getProfile(true))
            {
               	  // @codingStandardsIgnoreStart
		
                $this->data['js']['senderName'] = trim((\RightNow\Utils\Config::getConfig(intl_nameorder)) ? $profile->lastName . ' ' . $profile->firstName : $profile->firstName . ' ' . $profile->lastName);
                // @codingStandardsIgnoreEnd
                $this->data['js']['senderEmail'] = $profile->email;
								$this->data['js']['first_name'] = $profile->firstName;
								$this->data['js']['last_name'] = $profile->lastName;
								$this->data['js']['isProfile'] = true;
            }
            else
            {
								
								$this->data['js']['senderEmail'] = $this->CI->session->getSessionData('previouslySeenEmail') ?: '';
								//$this->data['js']['senderName'] = "sender name";
            }
        }
    
            }
            else
            {
								$this->data['js']['label_to'] =\RightNow\Utils\Config::getMessage(TO_EMAIL_LBL);
								$this->data['js']['label_last_name'] = \RightNow\Utils\Config::getMessage(LAST_NAME_LBL);
								$this->data['js']['label_first_name'] = \RightNow\Utils\Config::getMessage(FIRST_NAME_LBL); 
								$this->data['js']['label_sender_email'] =\RightNow\Utils\Config::getMessage(YOUR_EMAIL_ADDR_LBL);
								$this->data['js']['label_subject'] =\RightNow\Utils\Config::getMessage(SUBJECT_LBL);
								$this->data['js']['label_comment'] =\RightNow\Utils\Config::getMessage(COMMENT_LBL);
								
								$this->data['answerID'] = getUrlParm('a_id');
								$res = RNCPHP\ROQL::query("SELECT Summary FROM Answer where ID = ".$this->data['answerID'])->next();
								$row = $res->next();
								$this->data['js']['subject'] = "".$row["Summary"]."";
								$this->data['js']['senderEmail'] = $this->CI->session->getSessionData('previouslySeenEmail') ?: '';
								//$this->data['js']['senderName'] = "sender name";
            }
        }
    
								$this->data['js']['label_to'] =\RightNow\Utils\Config::getMessage(TO_EMAIL_LBL);
								$this->data['js']['label_last_name'] = \RightNow\Utils\Config::getMessage(LAST_NAME_LBL);
								$this->data['js']['label_first_name'] = \RightNow\Utils\Config::getMessage(FIRST_NAME_LBL); 
								$this->data['js']['label_sender_email'] =\RightNow\Utils\Config::getMessage(YOUR_EMAIL_ADDR_LBL);
								$this->data['js']['label_subject'] =\RightNow\Utils\Config::getMessage(SUBJECT_LBL);
								$this->data['js']['label_comment'] =\RightNow\Utils\Config::getMessage(COMMENT_LBL);
								$this->data['answerID'] = getUrlParm('a_id');
								$res = RNCPHP\ROQL::query("SELECT Summary FROM Answer where ID = ".$this->data['answerID'])->next();
								$row = $res->next();
								$this->data['js']['subject'] = "".$row["Summary"]."";
								//$this->data['js']['senderName'] = "sender name";
    }

    /**
     * Overridable methods from EmailAnswerLink:
     */
    // static function emailAnswer($parameters)
    // static function emailDiscussion($parameters)
}