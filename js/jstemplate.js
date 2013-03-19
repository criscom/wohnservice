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
		
		$('.pager-previous a').html("zur&uuml;ck");
		$('.pager-next a').html("n&auml;chste");
		
		/*if ($('#block-system-main .group-header .field-name-anfrage').length > 0) {
			$('#block-system-main .group-header').before($('#block-system-main .group-header .field-name-anfrage'));
		}*/
		
		if ($('.item-list .pager .pager-next').length == 0) {
			$('.item-list .pager').append('<li class="pager-next">nächste</li>');
		}
		
		if ($('.item-list .pager .pager-previous').length == 0) {
			$('.item-list .pager').append('<li class="pager-previous">zurück</li>');
		}
		
		
		$('input[type="checkbox"]').next('label').prepend("<span></span>");
		$('input[type="radio"]').next('label').prepend("<span></span>");
		
		$('.node-projekte .group-header').after($('.group_wohnungstypen'));
		
		var projectheight = $('.group_projekt_projektbilder').height();
		var leftsideheight = $('#block-system-main .group-header .group_projektdetail_projektinfos').height();
		if (projectheight > leftsideheight) {
			$('#block-system-main .group-header .group_projektdetail_projektinfos').height(projectheight-7);
		}
		
		$('.field-name-field-projekt-bilder-klein a').mouseenter(function() {
			$('div.imghover').remove();
			$(this).append('<div class="imghover"></div>');
			$(this).find('div.imghover').mouseleave(function() {
				$('div.imghover').remove();
			});
		});
		
		$('.field-name-field-wohnungstyp-bilder-klein a').mouseenter(function() {
			$('div.imghover').remove();
			$(this).append('<div class="imghover"></div>');
			$(this).find('div.imghover').mouseleave(function() {
				$('div.imghover').remove();
			});
		});
		
		//Projektdetailseite unten: Höhe bestimmen und entsprechend die anderen zwei Spalten anpassen
		var heightleft = $('.node-projekte .group-left').height();
		var heightmiddle = $('.node-projekte .group-middle').height();
		var heightright = $('.node-projekte .group-right').height();
		if ((heightleft >= heightmiddle) && (heightleft >= heightright))
		{
			$('.node-projekte .group-middle').height(heightleft);
			$('.node-projekte .group-right').height(heightleft);
		} else if ((heightmiddle >= heightleft) && (heightmiddle >= heightright)) {
			$('.node-projekte .group-left').height(heightmiddle);
			$('.node-projekte .group-right').height(heightmiddle);
		} else if ((heightright >= heightmiddle) && (heightright >= heightleft)) {
			$('.node-projekte .group-middle').height(heightright);
			$('.node-projekte .group-left').height(heightright);
		}
		
		$('.field-name-title h3').each(function(){
			if ($(this).height() > 20) {
					$(this).height(18);
			}	
		});
		
		$('.aktuelle-projekte-field-item .field-name-field-projekt-bild a').append('<div class="projektimghover"></div>');
		$('.weitere-projekte-field .field-name-field-projekt-bild a').append('<div class="projektimghover2"></div>');
		
		//Typenseite unten: Höhe bestimmen und anpassen
		$('.node-type-wohnungstype .group_wohnungstypen_kaufdaten').append('<div class="clear"></div>');
		var heightleft = $('.node-type-wohnungstype .group-left').height();
		var heightmiddle = $('.node-type-wohnungstype .group-middle').height();
		var heightright = $('.node-type-wohnungstype .group-right').height();
		if ((heightleft >= heightmiddle) && (heightleft >= heightright))
		{
			$('.node-type-wohnungstype .group-middle').height(heightleft);
			$('.node-type-wohnungstype .group-right').height(heightleft);
		} else if ((heightmiddle >= heightleft) && (heightmiddle >= heightright)) {
			$('.node-type-wohnungstype .group-left').height(heightmiddle);
			$('.node-type-wohnungstype .group-right').height(heightmiddle);
		} else if ((heightright >= heightmiddle) && (heightright >= heightleft)) {
			$('.node-type-wohnungstype .group-middle').height(heightright-16);
			$('.node-type-wohnungstype .group-left').height(heightright-16);
		}
	});

})(jQuery);
