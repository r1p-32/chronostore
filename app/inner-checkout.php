<?php include 'header.html'; ?>

<div class="breadcrumbs">
	<div class="container">
		<ul>
			<li><a href="/">Home</a><i>&#xE805</i></li>
			<li><span>Shop by Brand</span></li>
		</ul>
	</div>
</div>

<h1 class="page-title">Checkout</h1>

<div class="container">
	<div class="inner-section checkout">
		<div class="row">

			<div class="checkout-main">
				<div class="account-title">Customer Information
					<span class="checkout-title__login"><strong>Already Registered?</strong> Please <a href="javascript:void(0)">LogIn Here.</a></span>
				</div>
				<form action="" class="checkout-form">
					<div class="row">
						<div class="col-sm-6">
							<div class="checkout-form__label">First Name <span class="accent">*</span></div>
							<input type="text" name="first-name" class="input">
						</div>
						<div class="col-sm-6">
							<div class="checkout-form__label">Last Name <span class="accent">*</span></div>
							<input type="text" name="ast-name" class="input">
						</div>
						<div class="col-sm-6">
							<div class="checkout-form__label">Telephone <span class="accent">*</span></div>
							<input type="text" name="phone" class="input">
						</div>
						<div class="col-sm-6">
							<div class="checkout-form__label">Email Address <span class="accent">*</span></div>
							<input type="text" name="email" class="input">
						</div>
						<div class="col-sm-12">
							<div class="checkout-form__label">Company</div>
							<input type="text" name="company" class="input">
						</div>
						<div class="col-sm-12">
							<button type="submit" class="btn btn_light">Continue</button>
						</div>
					</div>
				</form>
				<div class="checkout-title">Address</div>
				<div class="checkout-step">
					<form action="" class="checkout-form">
						<div class="checkout-form__title">Choose shipping</div>
						<ul class="radio-list">
							<li>
								<input type="radio" name="shipping" class="radio" id="shipping-1" checked hidden>
								<label for="shipping-1" class="radio-label">Standart(3-4 days)</label>
							</li>
							<li>
								<input type="radio" name="shipping" class="radio" id="shipping-2" hidden>
								<label for="shipping-2" class="radio-label">Next day Air $19.99</label>
							</li>
						</ul>
						<div class="row">
							<div class="col-sm-6">
								<div class="checkout-form__label">Address 1 <span class="accent">*</span></div>
								<input type="text" name="adress-1" class="input">
							</div>
							<div class="col-sm-6">
								<div class="checkout-form__label">Address 2</div>
								<input type="text" name="addres-2" class="input">
							</div>
							<div class="col-sm-6">
								<div class="checkout-form__label">City <span class="accent">*</span></div>
								<input type="text" name="city" class="input">
							</div>
							<div class="col-sm-6">
								<div class="checkout-form__label">State/Province <span class="accent">*</span></div>
								<select name="country" id="" class="product-sidebar__select" data-placeholder="Choose">
									<option value="">Region, State or Province</option>
								</select>
							</div>
							<div class="col-sm-6">
								<div class="checkout-form__label">Zip Code <span class="accent">*</span></div>
								<input type="text" name="zip" class="input">
							</div>
							<div class="col-sm-6">
								<div class="checkout-form__label">Country <span class="accent">*</span></div>
								<select name="country" id="" class="product-sidebar__select" data-placeholder="Choose">
									<option value="">United States</option>
								</select>
							</div>
							<div class="col-sm-12">
								<button type="submit" class="btn btn_light">Continue</button>
							</div>
						</div>
					</form>
				</div>
				<div class="checkout-title">Payment method</div>
				<div class="checkout-step">
					<form action="" class="checkout-form">
						<div class="checkout-form__title">Choose your payment method</div>
						<ul class="radio-list">
							<li>
								<input type="radio" name="payment" class="radio" id="payment-1" checked hidden>
								<label for="payment-1" class="radio-label">Credit Card</label>
							</li>
							<li>
								<input type="radio" name="payment" class="radio" id="payment-2" hidden>
								<label for="payment-2" class="radio-label">PayPal</label>
							</li>
							<li>
								<input type="radio" name="payment" class="radio" id="payment-3" hidden>
								<label for="payment-3" class="radio-label">PayPal Credit</label>
							</li>
							<li>
								<input type="radio" name="payment" class="radio" id="payment-4" hidden>
								<label for="payment-4" class="radio-label">Pay with Amazon</label>
							</li>
						</ul>
					</form>
				</div>
			</div>

			<div class="checkout-right">
				<div class="account-title">Your Cart:</div>
				<aside class="checkout-sidebar">
					<ul class="product-small-list checkout-product-list">
						<li>
							<a href="javascript:void(0)" class="product-small-item clearfix">
								<div class="product-small-item__img">
									<img src="img/_product_1.jpg" class="img-responsive" alt="">
								</div>
								<div class="product-small-item__text">
									<div class="product-small-item__name">Rolex Daytona Rolex Daytona Rolex Daytona</div>
									<div class="product-small-item__model">116515LNI</div>
									<div class="product-small-item__descr">18K Everose Gold Automatic</div>
									<div class="product-small-item__price">$21,999.00</div>
								</div>
								<div class="product-small-item__amount">
									x1
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0)" class="product-small-item clearfix">
								<div class="product-small-item__img">
									<img src="img/_product_1.jpg" class="img-responsive" alt="">
								</div>
								<div class="product-small-item__text">
									<div class="product-small-item__name">Rolex Daytona Rolex Daytona Rolex Daytona</div>
									<div class="product-small-item__model">116515LNI</div>
									<div class="product-small-item__descr">18K Everose Gold Automatic</div>
									<div class="product-small-item__price">$21,999.00</div>
								</div>
								<div class="product-small-item__amount">
									x1
								</div>
							</a>
						</li>
					</ul>
					<ul class="checkout-subtotal">
						<li class="clearfix">
							<strong>SubTotal:</strong>
							<span>$56,917.00</span>
						</li>
						<li class="clearfix">
							<strong>Tax:</strong>
							<span>$8.00</span>
						</li>
						<li class="clearfix">
							<strong>Shipping & Handling:</strong>
							<span>$10.00</span>
						</li>
					</ul>
					<div class="checkout-total clearfix">
						Grand total:
						<span>$56,935.00</span>
					</div>
					<button type="submit" class="btn btn_accent">Place order</button>
				</aside>
			</div>
		</div>
	</div>
</div>

<div class="hidden">
	<div class="payment-message">
		<span class="payment-message__icon"><i>&#xE803</i></span>
		<div class="payment-message__title">Payment was successful</div>
		<div class="payment-message__orders">You ordered <span>345789LK</span> and <span>245790JK</span></div>
		<div class="payment-message__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium mi dolor, eu mollis massa condimentum nons facilisis arcu.</div>
		<a href="javascript:void(0)" class="btn btn_accent close-popup">Close</a>
	</div>
</div>

<?php include 'footer.html'; ?>