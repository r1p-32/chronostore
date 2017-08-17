$(function() {

	$('.header-right__click').click(function(){
		$(this).siblings('.header-popup').toggleClass('active');
	});

	$('.cart-popup__continue').click(function(){
		$(this).parent('.header-popup').toggleClass('active');
	});

	$('.footer-main__mnu, .login-block').equalHeights();

	$('.scroll-top').mPageScroll2id({
		offset: 70
	});

	$('.faq-list__link').click(function(){
		$('.faq-item.active, .faq-list__link.active').removeClass('active');
		$(this).addClass('active');
		var questId = $(this).attr('href');
		$(questId).addClass('active');
	}).mPageScroll2id({
		offset: 100
	});

	$('select').styler({
		locale: 'en'
	});

	$("#price-slider").slider({ 
		from: 1000, 
		to: 30000,
		step: 1, 
		smooth: true, 
		round: 0, 
		dimension: "&nbsp;$" });

	$('.product-slider').slick({
		dots: true,
		fade: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="product-slider-arr product-slider-arr_next"><i>&#xe801</i></button>',
		prevArrow: '<button type="button" class="product-slider-arr product-slider-arr_prev"><i>&#xe801</i></button>'
	});

	$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
		$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.product-tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.question-list__title').click(function(){
		if ($(this).hasClass('active')){
			$(this).siblings('.question-list__text').slideUp().removeClass('active');
			$(this).removeClass('active');
		} else {
			$('.question-list__text.active').slideUp();
			$('.question-list__title.active').removeClass('active');
			$(this).addClass('active');
			$(this).siblings('.question-list__text').slideDown().addClass('active');
		}
	});

	$('.popup-inline').magnificPopup({
		type: "inline"
	}).click(function(){
		$('.slick-slider').slick('refresh');
	});

	$('.make-an-offer__btn').click(function(){
		$('.make-an-offer__how').fadeToggle();
	});

	$('.close-popup').click(function(){
		$.magnificPopup.close();
	});

	$('.search-btn').click(function(){
		$('.search-form').addClass('active').children('.search-input').focus();
	});

	$('.search-input').focusout(function(){
		$(this).parent('.search-form').removeClass('active');
	});

	$('.cart-main__arrows li').click( function(){
		var field = $(this).parents('ul').siblings('.input');
		var testValue = field.val();
		if($(this).hasClass('minus')){
			testValue--;
			if(testValue == 0){
				testValue = 0;
			}
		}	
		else{
			testValue++;
		}

		if(testValue != 0)
			field.val(testValue).trigger('change');
});

	$('.newsletter-switcher__btn').click(function(){
		$(this).toggleClass('active');
	});

});

// $(document).ready(function() {
// 	$('.testimonials-item__text').dotdotdot({
// 		after: "a.readmore"
// 	});
// });