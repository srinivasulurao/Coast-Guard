<rn:meta title="#rn:msg:NOTIFICATIONS_HDG#" template="standard.php" login_required="true"/>
<div id="rn_PageTitle" class="rn_Account">
  <h1>#rn:msg:NOTIFICATIONS_HDG#</h1>
</div>
<div id="rn_PageContent">
  <div class="rn_Padding">
    <div id="rn_message"></div>
    <rn:widget path="notifications/AnswerNotificationManager" message_element="rn_message"/>
    <h2>#rn:msg:PRODUCT_LBL#/#rn:msg:CATEGORY_LBL# #rn:msg:NOTIFICATIONS_HDG#</h2>
    <div id="rn_message2"></div>
    <rn:widget path="custom/notifications/CustomProdCatNotificationManager2" message_element="rn_message2" label_add_notif_dialog=" Add Notifications"/>
  </div>
</div>
