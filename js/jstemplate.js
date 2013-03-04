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
		
		//Projektseite
		if ($('#edit-field-groesse-value-min').length > 0) {
			if (!$('#edit-field-groesse-value-min').val().match("m2$")) {
				$('#edit-field-groesse-value-min').val($('#edit-field-groesse-value-min').val()+" m2");
			}
			
			if (!$('#edit-field-groesse-value-max').val().match("m2$")) {
				$('#edit-field-groesse-value-max').val($('#edit-field-groesse-value-max').val()+" m2");
			}
			
			$('.view-projekt-bersicht-frei-finanzierte-projekte .pager-previous a').html("zur&uuml;ck");
			$('.view-projekt-bersicht-frei-finanzierte-projekte .pager-next a').html("n&auml;chste");
		}
		
		/*if ($('#block-system-main .group-header .field-name-anfrage').length > 0) {
			$('#block-system-main .group-header').before($('#block-system-main .group-header .field-name-anfrage'));
		}*/
		
	});

})(jQuery);
