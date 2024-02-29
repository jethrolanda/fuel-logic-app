<?php

define( 'APP_MAIN_THEME_PATH', get_template_directory_uri() );

require_once 'inc/scripts.php';
require_once 'inc/orders.php';
require_once 'inc/login.php';
require_once 'inc/register.php';

// Remove admin bar in the frontend
add_action('after_setup_theme', 'remove_admin_bar');
function remove_admin_bar() {
// if (!current_user_can('administrator') && !is_admin()) {
  show_admin_bar(false);
// }
}

// If user is not login then they can only access the login page
add_action( 'template_redirect', 'redirect_to_login_page' );
function redirect_to_login_page() {
  
  global $post;
  
  if ( $post && $post->post_title != 'Signup' && $post->post_title != 'Login' && !is_user_logged_in() ) {
    wp_redirect( site_url().'/login' ); exit;
  }
}

// If user is login then they should not see the login and signup page
add_action( 'template_redirect', 'redirect_to_home_page' );
function redirect_to_home_page() {

  global $post;
  
  if ( $post && ($post->post_title == 'Login' || $post->post_title == 'Signup') && is_user_logged_in() ) {
    wp_redirect( site_url() ); exit;
  }
}

// Create new customer role
add_action('after_setup_theme', function(){
  
  // remove_role('customer');
  global $wp_roles;

  $editor_cap = get_role( 'administrator' )->capabilities;
  add_role('customer', 'Customer', $editor_cap);

  // $role = get_role( 'customer' );
  // foreach($editor_cap as $cap => $val) {
  //   $role->add_cap($cap);
  // }
  
  // error_log(print_r($editor_cap,true));
  // error_log(print_r($wp_roles,true));
});

// Display fuel logic extra data to the edit user screen
add_action('edit_user_profile', function($profile_user) {
  require_once 'templates/edit-user.php';
});