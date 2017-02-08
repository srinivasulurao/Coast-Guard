<?

$globalMapping['p_faqid']  = 'a_id';
$globalMapping['p_iid']    = 'i_id';
$globalMapping['p_userid'] = 'username';

$pageMapping['home.php']       = array('new_page' => 'home');
$pageMapping['acct_login.php'] = array('new_page' => 'utils/login_form');
$pageMapping['std_alp.php']    = array('new_page' => 'answers/list');
$pageMapping['std_adp.php']    = array('new_page' => 'answers/detail');
$pageMapping['myq_upd.php']    = array('new_page' => 'account/questions/detail');
$pageMapping['myq_ilp.php']    = array('new_page' => 'account/questions/list');
$pageMapping['myq_idp.php']    = array('new_page' => 'account/questions/detail');
$pageMapping['widx_alp.php']        = array('new_page' => 'answers/list');
$pageMapping['popup_adp.php']  = array('new_page' => 'answers/detail');

/* added for upgrades default*/
$pageMapping['ask.php']             = array('new_page' => 'ask');
$pageMapping['acct_new.php']        = array('new_page' => 'utils/create_account');
$pageMapping['chat.php']            = array('new_page' => 'chat/chat_launch');
$pageMapping['acct_assistance.php'] = array('new_page' => 'utils/account_assistance');
$pageMapping['acct_assistance.php'] = array('new_page' => 'utils/account_assistance');
$pageMapping['help_general.php']    = array('new_page' => 'utils/help_search');


$globalMapping['p_search_text'] = 'search/1/kw';
$globalMapping['p_prods'] = 'p';
$globalMapping['p_cats'] = 'c';

/* end of upgrades default */
