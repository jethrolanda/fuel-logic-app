<?php 
/**
 * Register a user
 * 
 * @since 1.0
 */
function register_user(){

  // First check the nonce, if it fails the function will break
  if (isset($_POST['nonce']) && !wp_verify_nonce($_POST['nonce'], 'register_nonce')) {
    wp_die();
  } 

  global $wp_roles;
  
  $data = $_POST['data'];
  $email = isset($data['email_address']) ? sanitize_email($data['email_address']) : "";
  $user_id = wp_create_user( $email, '12345', $email );
  
  // Error
  if ( is_wp_error($user_id) ) {

    wp_send_json(array(
      'status' => 'error',
      'message' => "Sorry, that email already exist!"
    ));

  } else { // Success

    // Change role
    $user_role = new WP_User($user_id);
    $user_role->set_role('administrator');

    // Save Extra Data
    foreach($data as $k => $d) {
      
      
      switch($k){
        case 'first_name':
        case 'last_name':
        case 'have_account':
        case 'company_name':
        case 'mobile_number':
          $value = sanitize_text_field($d);
          update_user_meta($user_id, $k, $value);
          break;
        case 'terms_of_service':
          $value = rest_sanitize_boolean($d);
          update_user_meta($user_id, $k, $value);
          break;
        default:
      }
      error_log(print_r('---',true));
    }

    $info = array();
    $info['user_login'] = $email;
    $info['user_password'] = 12345;
    $info['remember'] = true;
    wp_signon( $info, false );

    wp_send_json(array(
      'status' => 'success',
      'message' => 'User successfully registered!'
    ));

  }

}

add_action('wp_ajax_fuel_logic_app_register_user', 'register_user');
add_action('wp_ajax_nopriv_fuel_logic_app_register_user', 'register_user');