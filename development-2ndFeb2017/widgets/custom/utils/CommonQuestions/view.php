<rn:meta controller_path="custom/utils/CommonQuestions" js_path="custom/utils/CommonQuestions" base_css="custom/utils/CommonQuestions" compatibility_set="November '09+"/>

<?if(empty($this->data['reportData'])):?>
<p>NO DATA</p>
<?endif;?>
<?if(!empty($this->data['reportData'])):?>
<div id="rn_<?=$this->instanceID;?>" class="rn_CommonQuestions">
	<div id="rn_<?=$this->instanceID;?>_Grid" class="rn_CommonQuestions_Grid">		
	<?$maxChars = $this->data['attrs']['max_chars'];?>	
	<?foreach($this->data['reportData'] as $key => $value):?>            			
		<?$title = $value[1];?>		
		<?if(strlen($title) > $maxChars):?>
			<?$title = substr($title,0,$maxChars).'...';?>
		<?endif;?>		
		<div class="rn_CommonQuestions_Column">					
			<a href="<?=getShortEufAppUrl('sameAsCurrentPage', getConfig(CP_ANSWERS_DETAIL_URL) . "/a_id/$value[0]");?>">
			<div class="rn_CommonQuestions_Element">
				<div class="rn_CommonQuestions_Title"><?=$title;?></div>									
			</div>
			</a>
		</div>
	<?endforeach;?>
	</div>    
</div>
<?endif;?>