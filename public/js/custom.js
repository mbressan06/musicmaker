jQuery(document).ready(function() {

    //Portfolio Hover Effect
    $(' #project-eliment > li ').each(function() {
        $(this).hoverdir();
    });

    // Select Boxes
    $(" SELECT ").selectBox();

    //Responsive Nav
    $('.mobile-nav select').change(function() {
        window.location = $(this).val();
    });

    $('.small-img a').click(function(e) {        
        e.preventDefault();
        
        if($(this).data('type') == 'video') {
            $('.big-img').html($(this).data('iframe'));
        } else {
            $('.big-img').html($(this).html());
        }
        
        
        $('.big-img img').hide();
        $('.big-img img').fadeIn('slow');
    });

    //Dropdown Navigation
    $("nav > ul > li").hover(function() {
        $(this).children("ul").stop(true, true).slideDown(500);
    }, function() {
        $(this).children("ul").stop(true, true).slideUp(500);
    });

    //Slider Overlay
    $('.plus').toggle(function() {
        $('.slider-overlay').animate({width: '720px', height: '120px'}, 1000);
        $(this).toggleClass('minus');
        $(this).siblings('p').fadeIn(1000);
        $()
    }, function() {
        $('.slider-overlay').animate({width: '414px', height: '55px'}, 1000);
        $(this).toggleClass('minus');
        $(this).siblings('p').fadeOut(1000);
    });

    //Social Nav
    $('.social-nav a').hover(function() {
        $(this).stop().animate({backgroundPosition: "(0 -44px)"}, {duration: 500})
    }, function() {
        $(this).stop().animate({backgroundPosition: "(0 0)"}, {duration: 500})
    }
    );

    //Search Form
    $('.search_form').hover(function() {
        $('.search-bar').fadeIn('fast');
        $('.desktop-nav > ul').fadeOut('fast');
    }, function() {
        $('.search-bar').fadeOut('fast');
        $('.desktop-nav > ul').fadeIn('fast');
    });

    //Accordion
    $("#accordion").accordion({
        heightStyle: "content"
    });

    //Serivices Hover Effect
    $(".service figure").hover(function() {
        $(this).children('.overlay').stop(true, true).fadeIn(500);
    }, function() {
        $(this).children('.overlay').stop(true, true).fadeOut(500);
    });

    //Tabs
    $("#tabs").tabs();

    //about Timeliner
    if ($('body').hasClass('aboutpage')) {
        $().timelinr({
            arrowKeys: 'true'
        });
    }

    //About Scrollpane
    $('#flip').jScrollPane({
        showArrows: true,
        horizontalArrowPositions: 'after'
    });

    //Social Nav Effect Function
    $.extend($.fx.step, {
        backgroundPosition: function(fx) {
            if (fx.pos === 0 && typeof fx.end == 'string') {
                var start = $.css(fx.elem, 'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0], start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0], end[2]];
                fx.unit = [end[1], end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
            fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1];
            function toArray(strg) {
                strg = strg.replace(/left|top/g, '0px');
                strg = strg.replace(/right|bottom/g, '100%');
                strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
                var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
                return [parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]];
            }
        }
    });

    //Prety Photos
    $("a.prettyPhoto").prettyPhoto({
        social_tools: ''
    });

    // Suggestion
    $('#SearchSearch').autocomplete({
        source: "/categoria/autocomplete",
        minLength: 2,       
        appendTo: '.search-bar',
        messages: {
            noResults: '',
            results: function() {
            }
        },
        delay: 300,
        select: function(event, ui) {
            window.location = ui.item.url;            
        }
    });


    //  Sticky Footer
    var $container = $('#project-eliment');
    $container.isotope({
        itemSelector: '.item'
    });
    var $optionSets = $('.my-selector'), $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.my-selector');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options)
        } else {
            $container.isotope(options);
        }

        return false;
    });

    // Page height	
    function changeHeight() {
        $('.contant').css('min-height', '');
        var sigma = $(window).height() - $('body').height();
        if (sigma > 0)
            $('.contant').css('min-height', $('.contant').height() + sigma - $('html').offset().top);
    }

    function SGaddEvent(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        }
        else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function() {
                obj["e" + type + fn](window.event);
            }
            obj.attachEvent("on" + type, obj[type + fn]);
        }
    }
    SGaddEvent(window, 'load', changeHeight);
    SGaddEvent(window, 'resize', changeHeight);
});






