<rn:meta title="#rn:php:SEO::getDynamicTitle('answer', getUrlParm('a_id'))#" template="standard.php" answer_details="true" clickstream="answer_view"/>

<div id="rn_PageTitle" class="rn_AnswerDetail">
    <? /* adding in Search Controls area */ ?>
    <rn:condition is_spider="false">
        <div id="rn_SearchControls">
            <h1 class="rn_ScreenReaderOnly">#rn:msg:SEARCH_CMD#</h1>
            <form method="post" action="" onsubmit="return false" >
                <div class="rn_SearchInput">
            <rn:widget path="search/AdvancedSearchDialog" report_page_url="/app/answers/list" report_id="176"  display_sort_filter="false" display_categories_filter="false" />
            <rn:widget path="search/KeywordText2" label_placeholder="" label_text="" initial_focus="true" report_id="176"/>
          </div>
                <rn:widget path="search/SearchButton2" report_page_url="/app/answers/list" report_id="176"/>
            </form>
						
        </div>
    </rn:condition>
    <? /* end of adding in Search Controls area */ ?>
    <h1 id="rn_Summary"><rn:field name="answers.summary" highlight="true"/></h1>
   
    <div id="rn_AnswerInfo">
        #rn:msg:ANS_ID_LBL# <rn:field name="answers.a_id" />
      <? /*   &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        
        #rn:msg:PUBLISHED_LBL# <rn:field name="answers.created" />
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        #rn:msg:UPDATED_LBL# <rn:field name="answers.updated" />*/ ?>
    </div>
    <rn:field name="answers.description" highlight="true"/>
</div>
<div id="rn_PageContent" class="rn_AnswerDetail">
    <div id="rn_AnswerText">
        <rn:field name="answers.solution" highlight="true"/>
    </div>
    <rn:widget path="knowledgebase/GuidedAssistant" label_text_result=""/>
    <div id="rn_FileAttach">
        <rn:widget path="output/DataDisplay" name="answers.fattach" />
    </div>
    <? /*<rn:widget path="feedback/AnswerFeedback2"  options_count="5" dialog_threshold="0"/>
    <br/>
    <rn:widget path="knowledgebase/RelatedAnswers" />*/ ?>
  <rn:widget path="discussion/RecentlyViewedContent" label_heading="Previously viewed answers"/>
    <rn:condition is_spider="false">
        <div id="rn_DetailTools">
            <rn:widget path="utils/SocialBookmarkLink" sites="Delicious > Post to Delicious > http://del.icio.us/post?url=|URL|&title=|TITLE|,Digg > Post to Digg > http://digg.com/submit?url=|URL|&title=|TITLE|,Facebook > Post to Facebook > http://facebook.com/sharer.php?m2w&u=|URL|,Reddit > Post to Reddit > http://reddit.com/submit?url=|URL|&title=|TITLE| ,StumbleUpon > Post to StumbleUpon > http://stumbleupon.com/submit?url=|URL|&title=|TITLE|,Twitter > Tweet this > http://twitter.com/home?status=|TITLE|+|URL|"/>
            <rn:widget path="utils/PrintPageLink" />
         <rn:widget path="custom/utils/CustomEmailAnswerLink" />
           
        </div>
    </rn:condition>
    <div align="right" style="padding:7px 5px 0 0"><a href="javascript:history.go(-1)" id="bklink" class="label">Back to Search Results&nbsp;&nbsp;</a > <a href="javascript:history.go(-1)" id="bklink" class="label"><img width="34" height="30" border="0" src="/euf/assets/images/back_arrow.gif" alt="Back to Search Results" title="Back to Search Results"></a ></div>
</div>
