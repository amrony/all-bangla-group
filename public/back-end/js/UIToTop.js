/**
 * @module       UIToTop
 * @author       Matt Varone
 * @see          http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
 * @license      MIT
 */
!function(o){o.fn.UItoTop=function(n){var e={text:"",min:500,scrollSpeed:800,containerID:"ui-to-top",containerClass:"ui-to-top fa fa-angle-up",easingType:"easeIn"},t=o.extend(e,n),i="#"+t.containerID;o("body").append('<a href="#" id="'+t.containerID+'" class="'+t.containerClass+'" >'+t.text+"</a>"),o(i).click(function(){return o("html, body").stop().animate({scrollTop:0},t.scrollSpeed,t.easingType),!1}),o(window).scroll(function(){var n=o(window).scrollTop();"undefined"==typeof document.body.style.maxHeight&&o(i).css({position:"absolute",top:o(window).scrollTop()+o(window).height()-50}),n>t.min?o(i).stop(!0,!0).addClass("active"):o(i).removeClass("active")})}}(jQuery);
