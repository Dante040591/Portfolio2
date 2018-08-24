$(function(){
	$(".rslides").responsiveSlides({
		auto: false,
		pager: true
	});

	$(".rslides_here, .rslides1_s1").css({"background":"black", "color":"#fff", "text-decoration":"none"});
	$("ul.rslides_tabs.rslides1_tabs").prependTo(".pager");

	$(".closed").click(function () {
		$(".home-page-content").fadeOut();
	});

	$(".home-page").click(function () {
		$(".home-page-content").fadeToggle();
	});
});
