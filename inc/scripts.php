<?php
// Load Frontend APP
add_action('wp_enqueue_scripts', function(){
  
  // Backend Settings Page React App
  wp_enqueue_script('wp-api');

  
  // wp_enqueue_style('fuel-logic-app-leaflet-css', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
  // wp_enqueue_script('fuel-logic-app-leaflet-script', 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', array('wp-element', 'wp-i18n'), '1.0.0', true);

  wp_enqueue_style('fuel-logic-app-style', APP_MAIN_THEME_PATH . '/app/build/index.css');
  wp_enqueue_script('fuel-logic-app-script', APP_MAIN_THEME_PATH . '/app/build/index.js', array('wp-element', 'wp-i18n'), '1.0.0', true);
  wp_localize_script('fuel-logic-app-script', 'fuel_logic_app', array(
      'rest_url'   => esc_url_raw( get_rest_url() ),
      'nonce' => wp_create_nonce( 'wp_rest' ),
      'ajax_url' => admin_url('admin-ajax.php'),
      'save_location_nonce' => wp_create_nonce( 'save_location_nonce' ),
      'get_locations_nonce' => wp_create_nonce( 'get_locations_nonce' ),
      'login_nonce' => wp_create_nonce( 'login_nonce' ),
      'logout_nonce' => wp_create_nonce( 'logout_nonce' ),
      'register_nonce' => wp_create_nonce( 'register_nonce' ),
      'is_logged_in' => is_user_logged_in(),
      'home_url' => get_home_url()
  ));
});