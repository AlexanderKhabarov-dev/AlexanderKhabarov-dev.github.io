"use strict";

$(window).load(function() {
	$(".loader").delay(500).fadeOut();
	$("#mask").delay(1000).fadeOut("slow");
});

$(document).ready(function(){ 

$(".header").sticky({ topSpacing: 0 });

/* Menu Anchors */
$('a[href*=#]').click(function() {
 if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	 var $target = $(this.hash);
	 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	 if ($target.length) {
		 var targetOffset = $target.offset().top;
		 $('html,body').animate({scrollTop: targetOffset-75}, 1000);
		 return false;
		}
	}
});


});



    $(document).ready(function (){

        /* Формы */

        /* заполняем utm-метки */
        var params = getSearchParameters(window.location.search);
        if(params['utm_source'] != null)
            $('.utm_source').val(decodeURIComponent(params['utm_source']));
        if(params['utm_medium'] != null)
            $('.utm_medium').val(decodeURIComponent(params['utm_medium']));
        if(params['utm_campaign'] != null)
            $('.utm_campaign').val(decodeURIComponent(params['utm_campaign']));
        if(params['utm_content'] != null)
            $('.utm_content').val(decodeURIComponent(params['utm_content']));
        if(params['utm_term'] != null)
            $('.utm_term').val(decodeURIComponent(params['utm_term']));
        else if (document.referrer != null && document.referrer.substring(0, 13) == "http://yandex") {
            var refparams = getSearchParameters(document.referrer);
            if (refparams["text"] != null) {
                $('form .utm_term').val(decodeURIComponent(refparams["text"]));
            }
        }

        $('.link_referrer').val(decodeURIComponent(document.referrer));

        ymaps.ready(function(){
            var geolocation = ymaps.geolocation;
            $('.geo_country').val(geolocation.country);
            $('.geo_city').val(geolocation.city);
            $('.geo_region').val(geolocation.region);
        });
    });

    function getSearchParameters( httprequest ) {
        var prmstr = httprequest.substr(1);
        return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }

    function transformToAssocArray( prmstr ) {
        var params = {};
        var prmarr = prmstr.split("&");
        for ( var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
        }
        return params;
    }
