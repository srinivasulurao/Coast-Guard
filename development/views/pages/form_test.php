<rn:meta title="#rn:msg:ASK_QUESTION_HDG#" template="standard.php" clickstream="incident_create"/>

<div class="rn_Hero">
  <div id="rn_PageTitle" class="rn_HeroInner">
    <div class="rn_HeroCopy">
      <h1>#rn:msg:SUBMIT_QUESTION_OUR_SUPPORT_TEAM_CMD#</h1>
    </div>
  </div>
</div>
<div id="rn_PageContent" class="rn_PageContent rn_AskQuestion rn_Container">
  <div class="rn_Padding css-hint">
    <form id="rn_QuestionSubmit" method="post" action="/ci/ajaxCustom/getForm" >
        <div id='txtHint'><rn:widget path="input/FormInput" name="incidents.c$book_name"/></div>
        <rn:widget path="input/FormSubmit" label_button="#rn:msg:CONTINUE_ELLIPSIS_CMD#" on_success_url="/app/ask_confirm" error_location="rn_ErrorLocation" />
        <button type='button' onclick='load()'>Submit</button>
			<!--  CustomFireProduct is used to fire the productid if the url contains any product id.After firing the product id from this widget  the corresponding dynamic custom fields are shown.So when the page loads with a product id in its url then dynamic fields are shown on the ask page.-->
    
    </form>
  </div>
</div>

<script>
function load(){
      var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","/cc/testingAjax/ajaxRoutingHandler",true);
        xmlhttp.send();
}
</script>
