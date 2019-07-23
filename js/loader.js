$(window).load(function() {
	$('#loader').addClass('is_active');
	setTimeout(function() {
		$('#loader').addClass('is_loaded');
	}, 4000);
	setTimeout(function() {
		$('#loader_second').addClass('is_loaded');
	}, 1800);
});


var $slider = document.getElementById('slider');
var $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});