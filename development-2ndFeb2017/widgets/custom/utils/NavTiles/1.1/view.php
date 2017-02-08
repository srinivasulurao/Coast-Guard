<?php /* Originating Release: November 2015 */?>

<div id="rn_<?=$this->instanceID;?>" class="<?= $this->classList ?>">
  <rn:block id="top"/>
  <div id="rn_<?=$this->instanceID;?>_Alert" role="alert" class="rn_ScreenReaderOnly"></div>
  <rn:block id="preLoadingIndicator"/>
  <div id="rn_<?=$this->instanceID;?>_Loading"></div>
  <rn:block id="postLoadingIndicator"/>
<?php
            $tile_size=count($this->data['reportData']['data']);
            $counter_array=array(6=>3,7=>4,8=>4,9=>5,10=>5);
            $break_row=$counter_array[$tile_size]+1;
            $counter=1;
?>
  <div id="rn_<?=$this->instanceID;?>_Content" class="rn_Content <?php echo 'navtilebox_'.$tile_size; ?>">
    <rn:block id="topContent"/>
    <? if (is_array($this->data['reportData']['data']) && count($this->data['reportData']['data']) > 0): ?>
    <rn:block id="preResultList"/>
    <? if ($this->data['reportData']['row_num']): ?>
    <ol start="<?=$this->data['reportData']['start_num'];?>">
      <? else: ?>
      <ul>
      <? endif; ?>
      <rn:block id="topResultList"/>
      <? $reportColumns = count($this->data['reportData']['headers']);
            foreach ($this->data['reportData']['data'] as $value):
            $break_line=($break_row==$counter)?"break_row":"";
            $counter++;
          ?>
      
      <div class="rn_NavTiles_Row <?php echo "navtile_".$tile_size; ?> <?php echo $break_line; ?>">
        <div class="rn_NavTiles_Column">
          <?if(!$static):?>
          <a href="<?=$value[5];?>" title="<?=$value[2];?>">
          <?endif;?>
          <div class="rn_NavTiles_Element">
            <div class="rn_NavTiles_Image"> <img src="/euf/assets/images/<?=$value[3];?>" width="80" height="60" alt="Image for <?=$value[2];?>" border="0" align="absmiddle"/> </div>
            <div class="rn_NavTiles_Title">
              <?=$value[2];?>
            </div>
          </div>
          <?if(!$static):?>
          </a>
          <?endif;?>
        </div>
      </div>
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

