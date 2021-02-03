(function ($) {
    "use strict";
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideUp('fast').removeClass('open');
                } else {
                    mainmenu.slideDown('fast').addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').slideDown();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            var multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideUp('fast');
                    } else {
                        $(this).siblings('ul').addClass('open').slideDown('fast');
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            var resizeFix = function () {
                if ($(window).width() > 992) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() < 992) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function ($) {
    "use strict";
    $(function () {
        var menu_list_svg = `<svg class="menu-list-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" height="30" width="30" viewBox="0 0 224 224" style="enable-background:new 0 0 224 224;" xml:space="preserve">
            <g transform="translate(0 -562.36)">
            	<g>
            		<g>
            			<path d="M13.35,590.166h197.3c17.8,0.5,17.8-28.299,0-27.799H13.35C-4.45,561.866-4.45,590.666,13.35,590.166z"/>
            			<path d="M210.65,660.464H13.35c-17.8-0.5-17.8,28.299,0,27.799h197.3C228.45,688.763,228.45,659.964,210.65,660.464z"/>
            			<path d="M210.65,758.061H13.35c-17.8,0-17.8,28.299,0,28.299h197.3C228.45,786.36,228.45,758.061,210.65,758.061z"/>
            		</g>
            	</g>
            </g>
            </svg>`;
        $(".header-menu").menumaker({
            title: menu_list_svg,
            format: "multitoggle"
        });
    });
})(jQuery);