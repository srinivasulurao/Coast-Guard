<rn:meta controller_path="custom/utils/Alerts" js_path="custom/utils/Alerts" base_css="custom/utils/Alerts" compatibility_set="November '09+"/>

<?if(!empty($this->data['reportData'])):?>
<div id="rn_<?=$this->instanceID;?>" class="rn_Alerts">
	<div id="rn_<?=$this->instanceID;?>_Grid" class="rn_Alerts_Grid">			
	<?foreach($this->data['reportData'] as $key => $value):?>            			
		<?$static = (isset($value[2]) && !empty($value[2]) && is_string($value[2]) && strtolower($value[2]) == 'alert - static');?>		
		<div class="rn_Alerts_Column">	
			<?if(!$static):?><a href="<?=getShortEufAppUrl('sameAsCurrentPage', getConfig(CP_ANSWERS_DETAIL_URL) . "/a_id/$value[0]");?>"><?endif;?>
				<div class="rn_Alerts_Image">
					<img src="<?=$this->data['attrs']['image_path'];?>" width="<?=$this->data['attrs']['image_width'];?>" height="<?=$this->data['attrs']['image_height'];?>" />
					<div class="rn_Alerts_Title"><?=$value[1];?></div>	
				</div>												
			<?if(!$static):?></a><?endif;?>
		</div>
	<?endforeach;?>
	</div>    
</div>
<?endif;?>