<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

function ds_bautraeger_2col_stacked() {
  return array(
    'label' => t('Bauträger 2 column stacked'),
    'regions' => array(
      'header' => t('Header'),
      'left' => t('Left'),
      'right' => t('Right'),
      'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css)
     'css' => TRUE,
    // Uncomment if this is a template for a node form.
    // 'form' => TRUE,
  );
}
