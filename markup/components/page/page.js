

import Inputmask from "inputmask/dist/inputmask/inputmask.numeric.extensions";
import base from "../../static/js/base/base";

export default function() {
    /* */
    $.fn.extend({
        autoHeight: function () {
            function autoHeight_(element) {
                var a = $(element).outerHeight() - $(element).height();
                return $(element)
                    .css({'height': 'auto', 'overflow-y': 'hidden'})
                    .height(element.scrollHeight - a);
            }

            return this.each(function () {
                autoHeight_(this).on('input', function () {
                    autoHeight_(this);
                });
            });
        }
    });
    /**/
    if ($('.b-product').length == 0) {
        $("body").prepend($(".page-header").clone().addClass("fixed-header"));
    }
    if (window.location.search == '?backstop') {
        $("body").addClass("backstop");
    }

    $("body").prepend($(".page__menu"));
    if (($("body").width() > 991) && ($(window).height() > 650)) {

        $(window).scroll(function () {
            if ($(window).scrollTop() > $(".page-header").outerHeight() +200) {


                $(".page__up").fadeIn();

            } else {


                $(".page__up").fadeOut();

            }
        })
        $(".page__up").on('click', function() {
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 800);
            return false;
        });
        $('body').keydown(function (e) {
            if (e.which == '9') {
                $('body').addClass('tab-user');
            }
        });
        //$(window).Scrollax();
        /*new WOW().init({
            offset:       100
        });*/
    }
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() > $(".page-header").outerHeight() +200) {
    //         window.requestAnimationFrame(showFixedHeader)
    //
    //     } else {
    //         window.requestAnimationFrame(hideFixedHeader)
    //     }
    // })
    function showFixedHeader() {
        $(".fixed-header").addClass("sticky");
    }
    function hideFixedHeader() {
        $(".fixed-header").removeClass("sticky");
    }


    $(".form-control").focus(function(e){
        $(this).parent().addClass("is-active is-completed");
    });

    $(".form-control").on('change blur', function(e){
        mInputSetState()
    })
    mInputSetState()
    function mInputSetState() {
        $(".form-control").each(function(i,e) {
            if($(this).val() === "") {
                $(this).parent().removeClass("is-completed");
                $(this).parent().removeClass("is-active");
            } else {
                $(this).parent().addClass("is-active is-completed");
            }
        })
    }



    function addScript(link, callback) {
        var script = document.createElement('script');
        script.src = link;
        document.body.appendChild(script);
        script.onload = function() {
            callback()
        };
    }

    // $('.lightgallery').lightGallery({
    //     selector: 'a'
    // });
    //$('input[type="tel"]').inputmask("+9 (999) 999-99-99");
    new Inputmask("+7 (999) 999-99-99").mask('input[type="tel"]')


    // $('.selectric').selectric();


    $("textarea.form-control").autoHeight();

    $('.modal').on('shown.bs.modal', function (e) {
        try {

            $(window).trigger('resize');
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            var resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent .initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
        }

    })
    $('.modal').on('show.bs.modal', function (e) {
        setTimeout(function() {
            $("textarea.form-control").autoHeight();
        },200)

    });



    $('.modal').each(function (i, e) {
        if (!$(this).is('.modal-not-moving')) {
            $(this).appendTo('body')
        }
    });

    //$('.selectric').selectric();




    $('body').on('click', '.js-anchor[href^="#"]', function(e) {
        var scroll_el = $(this).attr("href");
        let d = 0
        if ($('.fixed-header').height()) {
            d = $('.fixed-header').outerHeight() + 30;
        }
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top-d }, 800);
        return false
    })


    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);







    function offsetfix() {
        if ($('body').width() < 991) {
            return
        }

        $('.js-right').each(function (i,e) {
            var w = $('body').width();
            var o = $(this).offset().left;
            var iw = $(this).width();
            var d = w - o - iw;
            $(this).css('margin-right', -d);
        });
        $('.js-left').each(function (i,e) {
            var o = $(this).offset().left;
            $(this).css('margin-left', -o);
        })
    }
    offsetfix()
    $(window).resize(function () {
        $('.js-right').css('margin-right', '');
        $('.js-left').css('margin-left', '');
        offsetfix();
    })



    var customViewportCorrectionVariable = 'vh';

    /*Viewport Height Correction
    https://github.com/Faisal-Manzer/postcss-viewport-height-correction
     .foo {
            height: 100vh;
            height: calc(var(--vh, 1vh) * 100); //
      }
    */
    function setViewportProperty(doc) {
        var prevClientHeight;
        var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
        function handleResize() {
            var clientHeight = doc.clientHeight;
            if (clientHeight === prevClientHeight) return;
            requestAnimationFrame(function updateViewportHeight(){
                doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
                prevClientHeight = clientHeight;
            });
        }
        handleResize();
        return handleResize;
    }
    window.addEventListener('resize', setViewportProperty(document.documentElement));
    /*/Viewport Height Correction*/

    $('.js-print').on('click', function () {
        $('.page__print-break').remove()
        $('.b-options-apart__col:nth-child(4n)').after('<div class="page__print-break"></div>')

        window.print()

        return false
    })


}


