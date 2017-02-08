<rn:meta controller_path="custom/utils/Carousel" js_path="custom/utils/Carousel" base_css="custom/utils/Carousel" presentation_css="widgetCss/Carousel.css" compatibility_set="November '09+"/>

<?
    $this->addJavaScriptInclude(getYUICodePath('carousel/carousel-min.js'));
    $this->addJavaScriptInclude(getYUICodePath('paginator/paginator-min.js'));
?>

<?if(!empty($this->data['reportData'])):?>
<div id="rn_<?=$this->instanceID;?>" class="rn_Carousel">
    <div id="rn_<?=$this->instanceID;?>_Container" class="rn_Carousel_Container">
        <div id="rn_<?=$this->instanceID;?>_Pagination"></div>
        <ol id="rn_<?=$this->instanceID;?>_Container" class="rn_Carousel_Images">
        <?foreach($this->data['reportData'] as $key => $value):?>
            <?$static = (isset($value[6]) && !empty($value[6]) && is_string($value[6]) && strtolower($value[6]) === 'yes');?>
            <li class="rn_Carousel_Image">
                <?if(!$static):?><a href="<?=$value[4];?>" title="<?=$value[1];?>"><?endif;?>
                    <img class="imgCarouselDesktop" src="<?=$this->data['attrs']['root_path'].$value[2];?>" width="<?=$this->data['attrs']['image_width'];?>" height="<?=$this->data['attrs']['image_height'];?>" alt="Image for <?=$value[1];?>"/>
					<img class="imgCarouselMobile" style="display:none;" src="<?=$this->data['attrs']['root_path'].$value[3];?>" width="<?=$this->data['attrs']['image_width_mobile'];?>" height="<?=$this->data['attrs']['image_height_mobile'];?>" alt="Image for <?=$value[1];?>"/>
                <?if(!$static):?></a><?endif;?>
            </li>
        <?endforeach;?>
        </ol>
		<?/*
		<div id="rn_<?=$this->instanceID;?>_Buttons">
			<span id="rn_<?=$this->instanceID;?>_btnCarouselPrev" class="rn_Carousel_btnCarouselPrev">&nbsp;</span>
			<span id="rn_<?=$this->instanceID;?>_btnCarouselNext" class="rn_Carousel_btnCarouselNext">&nbsp;</span>
		</div>
		*/?>
		<?/*
		<div id="rn_<?=$this->instanceID;?>_CarouselContent" class="rn_CarouselContent">
			<div id="rn_<?=$this->instanceID;?>_CarouselContentTitle" class="rn_CarouselContentTitle">
			<p>
			MAGIC DUELS AVAILABLE NOW!
			</p>
			</div>
			<div id="rn_<?=$this->instanceID;?>_CarouselContentBody" class="rn_CarouselContentBody">
			<p>
			Magic Duels has launched, and we're ready to help with troubleshooting and support!
			</p>
			</div>
			<div id="rn_<?=$this->instanceID;?>_CarouselContentButton" class="rn_CarouselContentButton">
			<p>Learn More<p>
			</div>
		</div>
		*/?>
    </div>
</div>
<?endif;?>