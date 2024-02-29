<?php

/**
 * Get location
 * 
 * @since 1.0
 */
function get_locations() {
    
  if(!get_current_user_id()){
    wp_die();
  }

  if (!defined('DOING_AJAX') || !DOING_AJAX) {
    wp_die();
  }

  /**
   * Verify nonce
   */
  if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'get_locations_nonce')) {
    wp_die();
  }  

  try{

    // From DB
    $locations = get_user_meta(get_current_user_id(), '_fuel_logic_app_locations', true);
    
    wp_send_json(array(
        'status' => 'success',
        'locations' => $locations
    ));

  } catch (Exception $e) {

    wp_send_json(array(
        'status' => 'error',
        'message' => $e->getMessage()
    ));

  }
    
}

// Get locations
add_action('wp_ajax_fuel_logic_app_get_locations', 'get_locations');
add_action('wp_ajax_nopriv_fuel_logic_app_get_locations', 'get_locations');

/**
 * Save location
 * 
 * @since 1.0
 */
function save_location() {
    
  if(!get_current_user_id()){
    wp_die();
  }

  if (!defined('DOING_AJAX') || !DOING_AJAX) {
    wp_die();
  }

  /**
   * Verify nonce
   */
  if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'save_location_nonce')) {
    wp_die();
  }  

  try{

    // From frontend request
    $coordinates = isset($_POST['data']['coordinates']) ? $_POST['data']['coordinates'] : '';
    $location = isset($_POST['data']['location']) ? sanitize_text_field($_POST['data']['location']) : '';

    // From DB
    $locations = get_user_meta(get_current_user_id(), '_fuel_logic_app_locations', true);
    
    // Save if first time / meta data not initialized
    if(empty($locations)){

      update_user_meta(get_current_user_id(), '_fuel_logic_app_locations', array(
        array(
          'coordinates' => $coordinates,
          'location' => $location
        )
      ));
      
    } else {

      $duplicate = false;

      // Find duplicate
      foreach($locations as $loc) {
        
        if(
          $loc['coordinates'][0] == $coordinates[0] && 
          $loc['coordinates'][1] == $coordinates[1]
          ) {
            $duplicate = true;
            break;
          }

      }

      array_push(
        $locations,
        array(
          'coordinates' => $coordinates,
          'location' => $location
        )
      );

      // if no duplicate then save it
      if(!$duplicate){
        update_user_meta(get_current_user_id(), '_fuel_logic_app_locations', $locations);
      }

    }
    
    wp_send_json(array(
      'status' => 'success',
      'locations' => $locations
    ));

  } catch (Exception $e) {

    wp_send_json(array(
      'status' => 'error',
      'message' => $e->getMessage()
    ));

  }
    
}

// Save location
add_action('wp_ajax_fuel_logic_app_save_location', 'save_location');
add_action('wp_ajax_nopriv_fuel_logic_app_save_location', 'save_location');