<?php

/**
 * Login the user
 * 
 * @since 1.0
 */
function login_user(){

  // First check the nonce, if it fails the function will break
  if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'login_nonce')) {
    wp_die();
  } 

  $data = $_POST['data'];
  // Nonce is checked, get the POST data and sign user on
  $info = array();
  $info['user_login'] = isset($data['username']) ? sanitize_text_field($data['username']) : '';
  $info['user_password'] = isset($data['password']) ? sanitize_text_field($data['password']) : '';
  $info['remember'] = isset($data['remember']) ? filter_var($data['remember'], FILTER_VALIDATE_BOOLEAN) : '';
  
  $user_signon = wp_signon( $info, false );

  if ( is_wp_error($user_signon) ){
    wp_send_json(array(
      'status' => 'error',
      'message' => 'Wrong username or password.'
    ));
  } else {
    wp_send_json(array(
      'status' => 'success',
      'message' => 'Successfully logged-in!'
    ));
  }
}

add_action('wp_ajax_fuel_logic_app_login_user', 'login_user');
add_action('wp_ajax_nopriv_fuel_logic_app_login_user', 'login_user');



/**
 * Logout the user
 * 
 * @since 1.0
 */
function logout_user(){

  // First check the nonce, if it fails the function will break
  if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'logout_nonce')) {
    wp_die();
  } 

  wp_logout();

  wp_send_json(array(
    'status' => 'success',
    'message' => 'Successfully logged-out!'
  ));
}

add_action('wp_ajax_fuel_logic_app_logout_user', 'logout_user');
add_action('wp_ajax_nopriv_fuel_logic_app_logout_user', 'logout_user');

