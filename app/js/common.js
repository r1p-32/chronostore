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

	$('.main-banner').slick({
		dots: true,
		fade: true,
		arrows: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<button type="button" class="product-slider-arr product-slider-arr_next"><i>&#xe801</i></button>',
		prevArrow: '<button type="button" class="product-slider-arr product-slider-arr_prev"><i>&#xe801</i></button>',
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

	$('.testimonials-item__text').each(function(){
		if ($(this).height() > 46){
			$(this).height(46);
			$(this).siblings('.testimonials-item__bottom').children('.testimonials-item__dots').css('display', 'inline');
			$(this).closest('.testimonials-wrap').addClass('testimonials-wrap_cut')
		}
	})

	$('.testimonials-wrap_cut').hover(
		function(){
			$(this).children(".testimonials-item").addClass("active");
		}, function(){
			$(this).children(".testimonials-item").removeClass("active");
		});

	$('.main-mnu li').hover(
		function(){
			$(this).children(".submenu").addClass("active");
		}, function(){
			$(this).children(".submenu").removeClass("active");
		});

	$('.btn-nav').click(function(){
		$(this).toggleClass('active');
	});

	$('.footer-main__title').click(function(){
		if ( $(window).width() < 768){
			$(this).toggleClass('active');
			$(this).siblings('.footer-main__mnu').slideToggle();
		}
	});

	$(".compare-wrap").niceScroll({
		cursorcolor:"#e94350",
		cursorwidth: "12px",
		cursorborderradius: "0px",
	});

	$('.main-readmore__btn').click(function(){
		$(this).parent('.main-readmore').toggleClass('active');
		if ($(this).parent('.main-readmore').hasClass('active')) {
			$(this).children('strong').html('Hide');
		} else {
			$(this).children('strong').html('More');
		}
	});

});
