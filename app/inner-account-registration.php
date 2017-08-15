<?php include 'header.html'; ?>

<div class="breadcrumbs">
	<div class="container">
		<ul>
			<li><a href="/">Home</a><i>&#xE805</i></li>
			<li><span>Shop by Brand</span></li>
		</ul>
	</div>
</div>

<h1 class="page-title">Create Account</h1>

<div class="container">
	<div class="inner-section">
		<div class="row">
			<div class="col-sm-4">
				<aside class="account-sidebar">
					<div class="account-title">Account:</div>
					<ul class="account-mnu">
						<li><a href="javascript:void(0)">Login</a></li>
						<li class="active"><a href="javascript:void(0)">Register</a></li>
						<li><a href="javascript:void(0)">Forgoten Password</a></li>
						<li><a href="javascript:void(0)">My Wishlist</a></li>
						<li><a href="javascript:void(0)">My Order</a></li>
						<li><a href="javascript:void(0)">Downloads</a></li>
						<li><a href="javascript:void(0)">Newsletter</a></li>
					</ul>
				</aside>
			</div>
			<div class="col-sm-8 col-md-7">
				<div class="account-title">Register Account:</div>
				<form action="" class="account-form">
					<div class="account-form__descr">If you already have an account with us, please login at the login page.</div>
					<div class="account-form__title">Your Personal Details:</div>
					<div class="row">
						<div class="col-sm-6">
							<input type="text" class="input" name="first-name" placeholder="First Name *">
						</div>
						<div class="col-sm-6">
							<input type="text" class="input" name="last-name" placeholder="Last Name *">
						</div>
						<div class="col-sm-12">
							<input type="text" class="input" name="email" placeholder="Email Address *">
						</div>
						<div class="col-sm-6">
							<input type="password" class="input" name="first-name" placeholder="Password *">
						</div>
						<div class="col-sm-6">
							<input type="password" class="input" name="last-name" placeholder="Confirm Password *">
						</div>
					</div>
					<div class="account-form__required"><span class="accent">*</span> Required Fields</div>
					<div class="account-title account-title_14">Newsletter:</div>
					<input type="checkbox" class="checkbox" id="newsletter">
					<label for="newsletter" class="check-label">Sign Up for Newsletter</label>
					<div class="row">
						<div class="col-sm-3">
							<a href="javascript:void(0)" class="btn">Back</a>
						</div>
						<div class="col-sm-5 col-sm-offset-4">
							<button type="submit" class="btn btn_dark">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</div>


<?php include 'footer.html'; ?>