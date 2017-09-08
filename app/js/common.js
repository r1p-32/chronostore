$(function() {

	$('.header-right__click').click(function(){
		var popup = $(this).siblings('.header-popup');
		if ( $(popup).hasClass('active') ){
			$(popup).removeClass('active');
		} else {
			$('.header-popup.active').removeClass('active');
			$(popup).addClass('active');
		}
	});

	$('.cart-popup__continue').click(function(){
		$(this).parent('.header-popup').toggleClass('active');
	});

	$('.footer-main__mnu').equalHeights();
	$('.login-block').equalHeights();
	$('.products-item__wrap').equalHeights();

	$(window).resize(function(){
		$('.products-item__wrap').css('height', 'auto').equalHeights();
	})

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

	var amount = $("#amount");
	var min = Math.floor(amount.data('min'));
	var max = Math.ceil(amount.data('max'));
	amount.slider({from:min,to:max,step:0.01,smooth:!0,round:0,dimension:"&nbsp;$",  onstatechange:function( value ){
		var values = value.split(';');
		$('input[name="first_price"]').val(values[0]);
		$('input[name="last_price"]').val(values[1]);
	}, callback:function( value ){
		var values = value.split(';');
		var baseUrl = amount.data('url')+'?rate='+amount.data('rate')+'&first='+values[0]+'&last='+values[1]+amount.data('params');
		ajaxFilter(baseUrl);
	}});

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

	$('.ajax-popup-link').magnificPopup({
		type: 'ajax'
	});

	$('.make-an-offer__btn').click(function(){
		$('.make-an-offer__how').fadeToggle();
	});

	$('.close-popup').click(function(){
		$.magnificPopup.close();
	});

	$('.search-btn').click(function(){
		$(this).siblings('.search-form').fadeIn().children('.search-input').focus();
	});

	$('.search-input').focusout(function(){
		$(this).parent('.search-form').fadeOut();
	});

	//$('.cart-main__arrows li').click( function(){
	//	var field = $(this).parents('ul').siblings('.input');
	//	var testValue = field.val();
	//	if($(this).hasClass('minus')){
	//		testValue--;
	//		if(testValue == 0){
	//			testValue = 0;
	//		}
	//	}
	//	else{
	//		testValue++;
	//	}
    //
	//	if(testValue != 0)
	//		field.val(testValue).trigger('change');
	//});

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

	$('.back-to-main').click(function(){
		$(".submenu").removeClass("active");
	});

	$('.btn-nav').click(function(){
		$(this).toggleClass('active');
		$('.main-mnu').fadeToggle();
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

	$(".sidebar-dropdown").click(function(){
		$(this).toggleClass('active');
		$('.products-sidebar').slideToggle();
	});

	$(".more-details").click(function(){
		$(this).toggleClass('active');
		$('.product-details .more').slideToggle();
	});

	$('.main-readmore__btn').click(function(){
		$(this).parent('.main-readmore').toggleClass('active');
		if ($(this).parent('.main-readmore').hasClass('active')) {
			$(this).children('strong').html('Hide');
		} else {
			$(this).children('strong').html('More');
		}
	});

	$('.submenu__abc a').click(function(e){
		e.preventDefault();
		var $this = jQuery(this);
		var text = $this.text();

		if(text == 'View All Brands'){
			if(jQuery(this).hasClass('active')){
				jQuery('.submenu_brands_list li').css('display', '');
				$this.parents('table').find('a').removeClass('active');
			}else{
				$this.parents('table').find('a').removeClass('active');
				$this.addClass('active');
				jQuery('.submenu_brands_list li').css('display', 'block');
			}
		}else if(text == '0-9'){
			$this.parents('table').find('a').removeClass('active');
			$this.addClass('active');
			jQuery('.submenu_brands_list li').each(function(){
				var t = jQuery(this).text();
				if(t[0] == '0' || t[0] == '1' || t[0] == '2' || t[0] == '3' || t[0] == '4' || t[0] == '5' || t[0] == '6' || t[0] == '7' || t[0] == '8' || t[0] == '9'){
					jQuery(this).css('display', 'block');
				}else{
					jQuery(this).css('display', 'none');
				}
			});
		}else{
			$this.parents('table').find('a').removeClass('active');
			$this.addClass('active');
			jQuery('.submenu_brands_list li').each(function(){
				var t = jQuery(this).text();
				if(t[0].toLowerCase() == text && t != 'All Brands'){
					jQuery(this).css('display', 'block');
				}else{
					jQuery(this).css('display', 'none');
				}
			});
		}
	});
});
