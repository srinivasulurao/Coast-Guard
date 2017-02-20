<rn:meta title="#rn:php:SEO::getDynamicTitle('answer', getUrlParm('a_id'))#" template="standard.php" answer_details="true" clickstream="answer_view" sla_required_type="selfservice"/>

<div id="rn_PageTitle" class="rn_AnswerDetail">
    <? /* adding in Search Controls area */ ?>
    <rn:condition is_spider="false">
        <div id="rn_SearchControls">
            <h1 class="rn_ScreenReaderOnly">#rn:msg:SEARCH_CMD#</h1>
            <form method="post" action="" onsubmit="return false" >
                <div class="rn_SearchInput">
                    <rn:widget path="search/AdvancedSearchDialog" report_page_url="/app/answers/list" report_id="176"/>
                    <rn:widget path="search/KeywordText2" label_text="#rn:msg:FIND_THE_ANSWER_TO_YOUR_QUESTION_CMD#" initial_focus="true" report_id="176" label_placeholder=""/>
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
		
    <rn:widget path="feedback/AnswerFeedback"  options_count="5" dialog_threshold="5" label_dialog_title="Rating submitted" label_dialog_description="Please tell us how we can make this answer more useful."/>
    <br/>
    <rn:widget path="knowledgebase/RelatedAnswers2" label_title="Answers others found helpful"/>
    <rn:widget path="discussion/RecentlyViewedContent" label_heading="Previously viewed answers"/>
    <rn:condition is_spider="false">
        <div id="rn_DetailTools">
            <rn:widget path="utils/SocialBookmarkLink" sites="Delicious > Post to Delicious > http://del.icio.us/post?url=|URL|&title=|TITLE|,Digg > Post to Digg > http://digg.com/submit?url=|URL|&title=|TITLE|,Facebook > Post to Facebook > http://facebook.com/sharer.php?m2w&u=|URL|,Reddit > Post to Reddit > http://reddit.com/submit?url=|URL|&title=|TITLE| ,StumbleUpon > Post to StumbleUpon > http://stumbleupon.com/submit?url=|URL|&title=|TITLE|,Twitter > Tweet this > http://twitter.com/home?status=|TITLE|+|URL|"/>
            <rn:widget path="utils/PrintPageLink" />
            <rn:widget path="custom/utils/CustomEmailAnswerLink" />
        </div>
    </rn:condition>
</div>
