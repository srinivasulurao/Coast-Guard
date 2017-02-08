<rn:meta title="#rn:php:SEO::getDynamicTitle('answer', getUrlParm('a_id'))#" template="standard.php" answer_details="true" clickstream="answer_view"/>

<div id="rn_PageTitle" class="rn_AnswerDetail">
    <? /* adding in Search Controls area */ ?>
    <rn:condition is_spider="false">
        <div id="rn_SearchControls">
            <h1 class="rn_ScreenReaderOnly">#rn:msg:SEARCH_CMD#</h1>
            <form method="post" action="" onsubmit="return false" >
                <div class="rn_SearchInput">
                    <rn:widget path="search/AdvancedSearchDialog" report_page_url="/app/answers/list" report_id="176"  display_sort_filter="false"/>
                    <rn:widget path="search/KeywordText2" label_text="#rn:msg:FIND_THE_ANSWER_TO_YOUR_QUESTION_CMD#" initial_focus="true" report_id="176"/>
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
    <rn:widget path="knowledgebase/RelatedAnswers2" />*/ ?>
    <rn:widget path="knowledgebase/PreviousAnswers2" />
    <rn:condition is_spider="false">
        <div id="rn_DetailTools">
            <rn:widget path="utils/SocialBookmarkLink" />
            <rn:widget path="utils/PrintPageLink" />
            <rn:widget path="utils/EmailAnswerLink" />
           
        </div>
    </rn:condition>
    <div align="right" style="padding:7px 5px 0 0"><a href="javascript:history.go(-1)" id="bklink" class="label">Back to Search Results&nbsp;&nbsp;</a > <a href="javascript:history.go(-1)" id="bklink" class="label"><img width="34" height="30" border="0" src="/euf/assets/images/back_arrow.gif" alt="Back to Search Results" title="Back to Search Results"></a ></div>
</div>
