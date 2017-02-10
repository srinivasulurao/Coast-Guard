<rn:meta controller_path="custom/utils/NavTiles" js_path="custom/utils/NavTiles" base_css="custom/utils/NavTiles" compatibility_set="November '09+"/>

<?if(empty($this->data['reportData'])):?>
<p>NO DATA</p>
<?endif;?>
<?if(!empty($this->data['reportData'])):?>
<div id="rn_<?=$this->instanceID;?>" class="rn_NavTiles">
    <div id="rn_<?=$this->instanceID;?>_Container" class="rn_rn_NavTiles_Container">        
        <div id="rn_<?=$this->instanceID;?>_Grid" class="rn_NavTiles_Grid">		
		<?$static = (isset($value[8]) && !empty($value[8]) && is_string($value[8]) && strtolower($value[8]) === 'yes');?>
		<?$totalRows = $this->data['attrs']['rows'];?>		
		<?$totalColumns = $this->data['attrs']['columns'];?>				
		<?$currentColumn = 0;?>		
		<?$newRow = true;?>		
		<?$colWidth = (100/$totalColumns);?>
        <?foreach($this->data['reportData'] as $key => $value):?>            
			<?if($currentColumn==$totalColumns):?>
				<?$newRow = true;?>
			<?endif;?>	
            <?if($newRow==true):?>
				<div class="rn_NavTiles_Row">				
				<?$newRow = false;?>
			<?endif;?>
					<div class="rn_NavTiles_Column">					
						<?if(!$static):?><a href="<?=$value[5];?>" title="<?=$value[2];?>"><?endif;?>
						<div class="rn_NavTiles_Element">
						<div class="rn_NavTiles_Image">
						<img src="<?=$this->data['attrs']['root_path'].$value[3];?>" width="<?=$this->data['attrs']['icon_width'];?>" height="<?=$this->data['attrs']['icon_height'];?>" alt="Image for <?=$value[2];?>" border="0" align="absmiddle"/>
						</div>
						<div class="rn_NavTiles_Title"><?=$value[2];?></div>						
						</div>
						<?if(!$static):?></a><?endif;?>										
					</div>
			
            <?if($currentColumn==$totalColumns):?>
				</div>
			<?endif;?>			
        <?endforeach;?>
			</div>
        </div>
    </div>
</div>
<?endif;?>