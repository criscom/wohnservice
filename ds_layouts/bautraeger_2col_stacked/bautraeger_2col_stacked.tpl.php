<?php

/**
 * @file
 * Display Suite 2 column stacked template.
 */
?>
<div class="bautraeger-detail-2col-stacked <?php print $classes;?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
  <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  <?php if ($header): ?>
    <div class="group-header<?php print $header_classes; ?>">
      <?php print $header; ?>
    </div>
  <?php endif; ?>
<!-- ><div id="container3">
<div id="container2"> -->
<div class="container1">
  <?php if ($left): ?>
    <div class="group-left<?php print $left_classes; ?>">
      <?php print $left; ?>
    </div>
  <?php endif; ?>

  <?php if ($right): ?>
    <div class="group-right<?php print $right_classes; ?>">
      <?php print $right; ?>
    </div>
    <div class="clear-float">&nbsp;</div>
  <?php endif; ?>
</div> <!-- end container1 -->
<!-- </div> --> <!-- end container2 -->
 <!-- </div> --> <!-- end container3 -->

  <?php if ($footer): ?>
    <div class="group-footer<?php print $footer_classes; ?>">
      <div class="footer-wrapper">
	      <?php print $footer; ?>    
     </div> <!-- close footer wrapper -->
     <div class="clear-float">&nbsp;</div>
    </div>
  <?php endif; ?>
</div>
