$(document).ready(function(){$(".owl-one").owlCarousel({margin:10,nav:!0,loop:!0,center:!0,responsive:{0:{items:3}}}),AOS.init(),$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})});