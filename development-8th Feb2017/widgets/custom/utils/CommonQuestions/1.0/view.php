<?php /* Originating Release: November 2015 */?>

<div id="rn_<?=$this->instanceID;?>" class="<?= $this->classList ?>">
  <rn:block id="top"/>
  <div id="rn_<?=$this->instanceID;?>_Alert" role="alert" class="rn_ScreenReaderOnly"></div>
  <rn:block id="preLoadingIndicator"/>
  <div id="rn_<?=$this->instanceID;?>_Loading"></div>
  <rn:block id="postLoadingIndicator"/>
  <div id="rn_<?=$this->instanceID;?>_Content" class="rn_Content">
    <rn:block id="topContent"/>
    <? if (is_array($this->data['reportData']['data']) && count($this->data['reportData']['data']) > 0): ?>
    <rn:block id="preResultList"/>
    <? if ($this->data['reportData']['row_num']): ?>
    <ol start="<?=$this->data['reportData']['start_num'];?>">
      <? else: ?>
      <ul>
      <? endif; ?>
      <rn:block id="topResultList"/>
      <? $maxChars =60; ?>
      <? $reportColumns = count($this->data['reportData']['headers']);
           foreach ($this->data['reportData']['data'] as $value): ?>
      <?$title = $value[1];?>
      <?if(strlen($title) > $maxChars):?>
      <?$title = substr($title,0,$maxChars).'...';?>
      <?endif;?>
      <div class="rn_CommonQuestions_Column"> <a href="<?=getShortEufAppUrl('sameAsCurrentPage', getConfig(CP_ANSWERS_DETAIL_URL) . "/a_id/$value[0]");?>">
        <div class="rn_CommonQuestions_Element">
          <div class="rn_CommonQuestions_Title">
            <?=$title;?>
          </div>
        </div>
        </a> </div>
      <? endforeach; ?>
      <rn:block id="bottomResultList"/>
      <? if ($this->data['reportData']['row_num']): ?>
    </ol>
    <? else: ?>
    </ul>
    <? endif; ?>
    <rn:block id="postResultList"/>
    <? else: ?>
    <rn:block id="noResultListItem"/>
    <? endif; ?>
    <rn:block id="bottomContent"/>
  </div>
  <rn:block id="bottom"/>
</div>
