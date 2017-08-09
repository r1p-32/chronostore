$(function() {

	$('.header-right__click').click(function(){
		$(this).siblings('.header-popup').toggleClass('active');
	});

	$('.cart-popup__continue').click(function(){
		$(this).parent('.header-popup').toggleClass('active');
	});

	$('.footer-main__mnu').equalHeights();

	$('.scroll-top').mPageScroll2id({
		offset: 70
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

	$('.close-cart-popup').click(function(){
		$.magnificPopup.close();
	});

});