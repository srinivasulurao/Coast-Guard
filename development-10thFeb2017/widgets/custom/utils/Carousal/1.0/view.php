<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="/euf/assets/themes/standard/bootstrap.min.css">
<link rel="stylesheet" href="/euf/assets/themes/standard/bootstrap-theme.min.css">
<script src="/euf/assets/themes/standard/jquery.min.js"></script>
<script src="/euf/assets/themes/standard/bootstrap.min.js"></script>
</head>
<body>
<div class="">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <? $len = count($this->data['reportData']['data']);
		if( $len>1)
		{
	    for($i=0;$i<$len;$i++)
			{
			  $carouse[$i] = $this->data['reportData']['data'][$i][4];
				
			}
		}
		 $length = count($carouse);?>
    <ol class="carousel-indicators">
      <?	for($i=0;$i<$length;$i++){ ?>
      <li data-target="#myCarousel" data-slide-to="<?=$i?>" > </li>
      <?   }?>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <? $isFirst = true; ?>
      <? foreach($this->data['reportData']['data'] as $val){?>
      <div class="item<?= $isFirst ? ' active' : '' ?>"> <a href="<?=$val[4];?>" title="<?=$val[1];?>"> <img class="imgCarouselDesktop"  style="display:none;" src="/euf/assets/images/<?=$val[2]?>" ></a>
			</div>
	   <div class="item<?= $isFirst ? ' active' : '' ?>"> <a href="<?=$val[4];?>" title="<?=$val[1];?>"> <img class="imgCarouselMobile"  style="display:none;" src="/euf/assets/images/<?=$val[3]?>" ></a>
	          
      </div>
      <? $isFirst = false; }?>
    </div>
  </div>
</div>
</body>
</html>
