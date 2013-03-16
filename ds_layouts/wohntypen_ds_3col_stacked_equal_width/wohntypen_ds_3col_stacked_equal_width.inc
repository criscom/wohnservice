<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

function ds_wohntypen_ds_3col_stacked_equal_width() {
  return array(
    'label' => t('Wohntypen 3 column stacked equal width'),
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
