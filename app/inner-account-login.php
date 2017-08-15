<?php include 'header.html'; ?>

<div class="breadcrumbs">
	<div class="container">
		<ul>
			<li><a href="/">Home</a><i>&#xE805</i></li>
			<li><span>Shop by Brand</span></li>
		</ul>
	</div>
</div>

<h1 class="page-title">Account Login</h1>

<div class="container">
	<div class="inner-section">
		<div class="row">
			<div class="col-sm-4">
				<aside class="account-sidebar">
					<div class="account-title">Account:</div>
					<ul class="account-mnu">
						<li class="active"><a href="javascript:void(0)">Login</a></li>
						<li><a href="javascript:void(0)">Register</a></li>
						<li><a href="javascript:void(0)">Forgoten Password</a></li>
						<li><a href="javascript:void(0)">My Wishlist</a></li>
						<li><a href="javascript:void(0)">My Order</a></li>
						<li><a href="javascript:void(0)">Downloads</a></li>
						<li><a href="javascript:void(0)">Newsletter</a></li>
					</ul>
				</aside>
			</div>
			<div class="col-sm-8 col-md-7">
				<div class="row">
					<div class="col-sm-6 col-sm-push-6">
						<div class="account-title">Login:</div>
						<form action="" class="account-form login-block">
							<div class="account-form__title">Registered Customers:</div>
							<div class="account-form__descr">I am a returning customer</div>
							<input type="text" class="input" name="email" placeholder="Email Address *">
							<input type="password" class="input" name="first-name" placeholder="Password *">
							<div class="account-form__forgot">
								<a href="javascript:void(0)">Forgot Your Password?</a>
							</div>
							<button class="btn btn_accent">Login</button>
						</form>
					</div>
					<div class="col-sm-6 col-sm-pull-6">
						<div class="account-title">Account Customers:</div>
						<div class="login-block">
							<div class="account-form__descr login-block__text">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</div>
							<a href="javascript:void(0)" class="btn btn_light login-block__btn">Create an account</a>
						</div>
					</div>
					<div class="col-sm-12">
						<div class="account-title">Sign in another way:</div>
						<a href="javascript:void(0)" class="btn btn_amazon">Login with <i>&#xE814</i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>


<?php include 'footer.html'; ?>