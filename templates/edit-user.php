<?php 
$id = $profile_user->ID;
$have_account = get_user_meta($id, 'have_account', true);
$company_name = get_user_meta($id, 'company_name', true);
$first_name = get_user_meta($id, 'first_name', true);
$last_name = get_user_meta($id, 'last_name', true);
$email_address = $profile_user->user_email;
$mobile_number = get_user_meta($id, 'mobile_number', true);
$terms_of_service = get_user_meta($id, 'terms_of_service', true);
?>
<br/>
<hr/>
<br/>
<h2>Fuel Logic Business Data</h2>
<table class="form-table">
  <tr>
    <th>Do you have fuel logic account?</th>
    <td><?php echo $have_account; ?></td>
  </tr>
  <tr>
    <th>Company Name</th>
    <td><?php echo $company_name; ?></td>
  </tr>
  <tr>
    <th>First Name</th>
    <td><?php echo $first_name; ?></td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td><?php echo $last_name; ?></td>
  </tr>
  <tr>
    <th>Email Address</th>
    <td><?php echo $email_address; ?></td>
  </tr>
  <tr>
    <th>Mobile Number</th>
    <td><?php echo $mobile_number; ?></td>
  </tr>
  <tr>
    <th>Terms of service</th>
    <td><?php echo $terms_of_service == 1 ? "Agree" : "Disagree"; ?></td>
  </tr>
</table>