/* JQuery Template für wohnservice.at - alle JQuery Befehle */

(function ($) {
  $(document).ready(function() {

	$("div.projekt-bild-gross").children("a").addClass("colorbox init-colorbox-processed cboxElement");
	$("div.projekt-bild-gross").children("a").attr('rel', 'galerie_projekte');
//	$("div.projekt-bild-gross").children("a").children('span').children('img').add("abc");
		
/*		var a = $('body.page-frontpage .flexslider-views-slideshow-main-frame-row > div');
		for( var i = 0; i < a.length; i+=3 ) {
		    a.slice(i, i+2).wrapAll('<div class="front-slideshow-beschreibung"></div>');
		}*/
		
		
	});

})(jQuery);
