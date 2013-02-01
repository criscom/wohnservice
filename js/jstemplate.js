/* JQuery Template für wohnservice.at - alle JQuery Befehle */

(function ($) {
  $(document).ready(function() {

	$("div.projekt-bild-gross").children("a").addClass("colorbox init-colorbox-processed cboxElement");
	$("div.projekt-bild-gross").children("a").attr('rel', 'galerie_projekte');
//	$("div.projekt-bild-gross").children("a").children('span').children('img').add("abc");
	});

})(jQuery);
