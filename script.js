/*jslint browser: true*/
/*global $, jQuery, alert*/

$("#menulink").on("click", function(e) {
	e.preventDefault();
	$(".navlinks").toggle();
});