/*price range*/

 $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

/*$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});*/
window.onscroll = function () {
	toggleBackToTopButton();
};

function toggleBackToTopButton() {
	var button = document.querySelector('.back-to-top');
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.classList.add('show');
	} else {
		button.classList.remove('show');
	}
}

function scrollToTop() {
	scrollToTopAnimation(0, 500); // Scroll to top with animation, duration: 500ms
}

function scrollToTopAnimation(to, duration) {
	const start = window.scrollY || document.documentElement.scrollTop;
	const change = to - start;
	const increment = 20;
	let currentTime = 0;

	function easeInOutQuad(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	function animateScroll() {
		currentTime += increment;
		const val = easeInOutQuad(currentTime, start, change, duration);
		window.scrollTo(0, val);
		if (currentTime < duration) {
			requestAnimationFrame(animateScroll);
		}
	}

	requestAnimationFrame(animateScroll);
}
