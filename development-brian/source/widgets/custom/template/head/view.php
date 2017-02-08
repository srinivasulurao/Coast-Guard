<?/** ---------------------------------------------------------------------------
   *  File Name: widgets/custom/template/head/view.php
   *  Author:    Upgrades Team
   *  Purpose:   We like to seperate our customer's HTML code from our HTML code in the template.  
   *             We create 3 custom widgets to accomplish this, top,bottom, head
   *             On Classic to CP Migrations we are copying code from enduser/cci/head.php,top.phph,bottom.php into these widgets
   *             On Nov. 09 and Geater CP Migrations we are placing all header and footers into these widgests
   *  --------------------------------------------------------------------------- */?>
<rn:meta controller_path="standard/utils/Blank" />
 <div>
<link rel="stylesheet" type="text/css" href="/euf/assets/css/enduser.css">
<link rel="stylesheet" type="text/css" href="http://www.wizards.com/global/default.css">

<script type="text/javascript">

  var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-15020098-10']);
      _gaq.push(['_trackPageview']);

        (function() {
         var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
             ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();


</script>
</div>
