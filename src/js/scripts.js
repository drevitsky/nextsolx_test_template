$(document).ready(function () {

	// search
	$("#search").click(function () {

		$(".search__wrap, .input").toggleClass("active");
		$("input[type='text']").focus();
	});
	$('.menu-tog').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('menu--opened');
	})
})
