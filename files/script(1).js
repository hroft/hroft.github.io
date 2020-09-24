function hidenCatItem(itemLength, num, items) {
    for (var i = num; i < itemLength; i++) {
        items.eq(i).hide();
    }
    return false;
}

function addCatItem(itemLength, num, items) {
    for (var i = num; i < itemLength; i++) {
        items.eq(i).show();
    }
    return false;
}


(function ($) {
    $(document).ready(function () {
        $('.slick').slick({
            vertical: true,
            prevArrow: '<div class="slide-arr-wrapper"><button class="prev-video-slide"></button></div>',
            nextArrow: '<div class="slide-arr-wrapper"><button class="next-video-slide"></button></div>',
            slidesToShow: 2,
            slidesToScroll: 1,
            verticalSwiping: true,
            infinite: true
        });

        sliderInitTradein();
        sliderInit();
        sliderFancy();
        sliderTovar();
        sliderAnalog();
        footerBrands();
        slideTovarBu();
        $(window).resize(function () {
            sliderInitTradein();
            sliderInit();
            sliderTovar();
            sliderFancy();
            footerBrands();
            sliderAnalog();
            slideTovarBu();

        });

        $(".j-loadfiles").click(function () {
            var fileBlock = $(".j-file-box-html");
            $('#mail-files').append(fileBlock.clone().removeClass("j-file-box-html"));
            $("#mail-files .j-file-box:last input[type='file']").click();
            return false;
        });


        $(".j-formContacts").on("change", "#mail-files .j-file-box input[type='file']", function () {
            console.log(fileName);
            var fileName = $(this).val(), fileBlock = $(this).parents(".j-file-box"),
                shortFileName = fileName.split('\\').pop();
            console.log(shortFileName);
            fileBlock.find("span").prepend(shortFileName);
            fileBlock.removeClass("hide");
            switch (shortFileName.substring(shortFileName.lastIndexOf(".") + 1, shortFileName.length).toLowerCase()) {
                case 'txt':
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'zip':
                case 'rar':
                case 'pdf':
                case 'doc':
                case 'docx':
                    break;
                default:
                    $(this).parent().remove();
                    break;
            }


            return false;
        }).on("click", "#mail-files .j-remove_file", function () {
            $(this).parents(".j-file-box").remove();
            return false;
        });

        if ($(".js-hide-text__btn").length) {
            $(".js-hide-text__btn").click(function () {
                var blockText = $(document).find('.js-hide-text');
                if (blockText.hasClass('js-active')) {
                    blockText.removeClass("js-active");
                    this.innerText = "???????? ??????";
                }
                else {
                    blockText.addClass("js-active");
                    this.innerText = "??????";
                }
            });
        }

        function sliderInitTradein() {
            var slideCat = $('.js-benefit');
            if (slideCat.length) {
                if (slideCat.length > 0 && $(window).width() <= 1023) {
                    slideCat.owlCarousel({
                        items: 1,
                        margin: 10,
                        loop: true,
                        nav: true,
                        dots: true
                    });

                } else {
                    slideCat.owlCarousel('destroy');
                }
            }
        }
        $(".g-accordion__body:eq(0)").find(".g-accordion__descr").slideDown();
        $(".g-accordion__body:eq(0)").removeClass("i-open").addClass("i-close");
        $(".j-accordion").click(function () {
            var context = $(this).parent(".g-accordion__body"),
                hid_block = context.find(".g-accordion__descr"),
                cur_index = context.index();
            if (hid_block.css('display') == 'block') {
                hid_block.slideUp();
                context.removeClass("i-close").addClass("i-open");
            } else {
                $(".j-accordion").each(function () {
                    var ind = $(this).parent(".g-accordion__body").index(),
                        hid = $(this).parent(".g-accordion__body").find('.g-accordion__descr');
                    if (hid.css('display') == 'block' && hid != cur_index) {
                        $(this).click();
                    }
                });
                hid_block.slideDown();
                context.removeClass("i-open").addClass("i-close");
            }
        });





        $(".js-more").click(function () {
            var blockText = $(document).find('.b-step');
            if (blockText.hasClass('b-step-all')) {
                blockText.removeClass("b-step-all");
                console.log(this);
                $(this).removeClass("lurk");
                $(this).find(".b-step__item").slideDown()
                this.innerText = "���������";
            }
            else {
                blockText.addClass("b-step-all");
                this.innerText = "������";
                console.log($(this).find(".b-step__item"));
                $(this).find(".b-step__item").slideUp(2000)
                $(this).addClass('lurk');

            }
        });

        if ($(".js-filter-title-mob").length) {
            var filterTitle = $(".js-filter-title-mob");
            if ($(window).width() < 767) {
                filterTitle.parents(".filter").find(".content").slideUp(0);
                filterTitle.removeClass("js-active");

            }
            filterTitle.on("click", filterTitle, function () {

                if (filterTitle.hasClass("js-active")) {
                    filterTitle.removeClass("js-active");
                    filterTitle.parents(".filter").find(".content").slideUp(500);
                    return false;
                }
                else {
                    filterTitle.parents(".filter").find(".content").slideDown(500);
                    filterTitle.addClass("js-active");
                    return false;
                }
            });
            $(document).resize(function () {
                if ($(window).width() < 767) {
                    filterTitle.parents(".filter").find(".content").slideUp(500);
                    filterTitle.removeClass("js-active");
                    return false;
                } else {
                    filterTitle.parents(".filter").find(".content").slideDown(500);
                    return false;
                }
            });
        }
        if ($(".big-tovar").length) {
            $(".big-tovar").fancybox();
        }
        function sliderFancy() {
            if ($(".mob-tovar").length) {
                if ($(window).width() < 767) {
                    $(".mob-tovar").fancybox();
                    return false;
                }
                else {
                    // ??????? ???????? ? ???????? ??????
                    $('.mob-tovar').on('click', function () {
                        var newImg = $(this).find('img').data('loadbig');
                        $('.big-tovar').attr('href', newImg).find('img').attr('src', newImg);
                        return false;
                    });
                }
            }
        };
        if ($(".js-tabs-title-mobile").length) {
            var tabTitle = $(".js-tabs-title-mobile"),
                tabText = tabTitle.parents(".tabs").find(".tabs-content");
            tabTitle.on("click", function () {
                if (tabText.hasClass("js-active")) {
                    tabTitle.removeClass("js-active");
                    tabText.hide(500).removeClass("js-active");
                }
                else {
                    tabTitle.addClass("js-active");
                    tabText.show(500).addClass("js-active");
                }

            });
        }
        if ($(".tabs-title a").length) {
            $(document).on("click", ".tabs-title a", function () {
                var ind = $(this).attr("href"),
                    container = $(this).parents(".tabs"),
                    links_container = container.find(".tabs-title"),
                    content_container = container.find(".tabs-content");

                $("a", links_container).removeClass("active");
                $(this).addClass("active");
                $(".tab", content_container).removeClass("active");
                $(ind, content_container).addClass("active");
            });

        }
        if ((".b-regeon-list__title").length) {
            $(".b-label").slideUp(500);
            $(".b-regeon-list__title").on("click", function () {
                var container = $(this).parents(".b-regions"),
                    active_index = $(".b-regeon-list__items .b-list__item.js-active", container).index();
                if (active_index == -1)
                    active_index = 0;
                if (!$(this).hasClass("js-active")) {
                    $(this).addClass("js-active");
                    $(".b-regions__adress", container).slideUp(500);
                    $(".b-regeon-list__items", container).slideDown(500);
                } else {
                    $(this).removeClass("js-active");
                    $(".b-regeon-list__items", container).slideUp(500);
                    $(".b-regions__adress:eq(" + active_index + ")", container).slideDown(500);
                }
                return false;
            });
            $(".b-regeon-list__items .b-list__item").on("click", function () {
                var main_container = $(this).parents(".b-regions"),
                    ind = $(this).index(),
                    title = $(this).text();
                $(".b-regions__adress", main_container).slideUp(500);
                $(".b-list__item", main_container).removeClass("js-active");

                $(".b-regeon-list__title", main_container).removeClass("js-active").text(title);
                $(".b-regeon-list__items", main_container).removeClass("js-active").slideUp(500);
                $(this).addClass("js-active");
                $(".b-regions__adress:eq(" + ind + ")", main_container).slideDown(500);
                return false;
            });
        }


        $('.cat-catalog-dl2-title').removeClass("js-active");
        $('.cat-catalog-dl2-title').on("click", function () {
            if (!$(this).hasClass("js-active")) {
                $(this).addClass("js-active").parents(".cat-catalog-dl2-section").addClass("js-active").find(".cat-catalog-inner").addClass("js-active").show(1000);
                return false;
            }
        });

        if ($('.mainpage__catalog .mainpage__catalog-inner').find(".mp-catalog-el")) {
            var items = $('.mainpage__catalog .mainpage__catalog-inner').find(".mp-catalog-el"),
                itemLength = items.length,
                num = 5;
            if ($(window).width() < 767) hidenCatItem(itemLength, num, items);
            $(window).resize(function () {
                ($(window).width() < 767) ? hidenCatItem(itemLength, num, items) : addCatItem(itemLength, num, items);
            });
        }

        if ($('.js-main-slider')) {
            $('.js-main-slider').owlCarousel({
                items: 1,
                autoHeight: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 8000,
                smartSpeed: 1000,
                autoplayHoverPause: true
            });
        }
        function footerBrands() {
            var footer_brands = $('.js-footer__brands');
            if (footer_brands.length > 0 && $(window).width() < 1023) {
                $('.js-footer__brands').owlCarousel({
                    responsive: {
                        0: {
                            items: 1,
                            mouseDrag: true,
                            touchDrag: true
                        },

                        420: {
                            items: 2,
                            mouseDrag: true,
                            touchDrag: true
                        },

                        560: {
                            items: 3,
                            mouseDrag: true,
                            touchDrag: true
                        },

                        767: {
                            items: 4,
                            mouseDrag: true,
                            touchDrag: true
                        }
                    }
                });
            }
        }
        $("a#fancybox").fancybox({
            'titlePosition': 'inside'
        });
        $("a#youtube").click(function () {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'title': this.title,
                'width': 640,
                'height': 360,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });

            return false;
        });

        $("a[rel=youtube]").click(function () {
            $.fancybox({
                'padding': 0,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'width': 640,
                'height': 360,
                'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type': 'swf',
                'swf': {
                    'wmode': 'transparent',
                    'allowfullscreen': 'true'
                }
            });
            return false;
        });
        $("a[rel=fancybox]").fancybox({
            'transitionIn': 'none',
            'transitionOut': 'none',
            'titlePosition': 'over',
            'titleFormat': function (title, currentArray, currentIndex, currentOpts) {
                return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
            }
        });

        function sliderAnalog() {
            var tovarAnalog = $('.js-slider-analog');
            if (tovarAnalog.length) {
                if (tovarAnalog.length > 0 && $(window).width() < 767 && tovarAnalog.find(".item").length > 1) {
                    tovarAnalog.owlCarousel({
                        margin: 10,
                        responsive: {
                            0: {
                                items: 1
                            },

                            480: {
                                items: 2
                            }
                        }
                    });
                    tovarAnalog.parents(".block-analog").find(".slider-arrow").addClass("js-active");
                    $('.tovars-analog-l-arrow').click(function () {
                        tovarAnalog.trigger('prev.owl.carousel');
                    });
                    $('.tovars-analog-r-arrow').click(function () {
                        tovarAnalog.trigger('next.owl.carousel');
                    });
                } else {
                    tovarAnalog.owlCarousel('destroy');
                    tovarAnalog.parents(".block-analog").find(".slider-arrow").removeClass("js-active");
                }
            }
        }

        function slideTovarBu() {
            var tovarBu = $('.js-tovar-bu');
            if (tovarBu.length) {
                if (tovarBu.length > 0 && $(window).width() < 1023 && tovarBu.find(".item").length > 1) {
                    tovarBu.owlCarousel({
                        margin: 10,
                        autoHeight: true,
                        loop: true,
                        item: 3,
                        responsive: {
                            0: {
                                items: 1
                            },

                            520: {
                                items: 2
                            }
                        }
                    });
                    tovarBu.parents(".tovar-bu-wrapper").find(".slider-arrow").addClass("js-active");
                    $('.tovar-bu-l-arrow').click(function () {
                        tovarBu.trigger('prev.owl.carousel');
                    });
                    $('.tovar-bu-r-arrow').click(function () {
                        tovarBu.trigger('next.owl.carousel');
                    });
                } else {
                    tovarBu.owlCarousel('destroy');
                    tovarBu.parents(".tovar-bu-wrapper").find(".slider-arrow").removeClass("js-active");
                }
            }
        }

        function sliderTovar() {
            var miniPhoto = $('.js-mini-photo');
            if (miniPhoto.length) {
                if (miniPhoto.length > 0 && $(window).width() < 767 && miniPhoto.find(".fb2").length > 1) {
                    miniPhoto.owlCarousel({
                        autoHeight: true,
                        items: 1
                    });
                    miniPhoto.parents(".tovar-left").find(".slider-arrow").addClass("js-active");
                    $('.mini-photo-l-arrow').click(function () {
                        miniPhoto.trigger('prev.owl.carousel');
                    });
                    $('.mini-photo-r-arrow').click(function () {
                        miniPhoto.trigger('next.owl.carousel');
                    });
                } else {
                    miniPhoto.owlCarousel('destroy');
                    miniPhoto.parents(".tovar-left").find(".slider-arrow").removeClass("js-active");

                }
            }
        }

        function sliderInit() {
            var slideCat = $('.js-slide-cat');
            if (slideCat.length) {
                if (slideCat.length > 0 && $(window).width() < 1023 && slideCat.find(".item").length > 1) {
                    slideCat.owlCarousel({
                        items: 3,
                        margin: 10,
                        loop: true,
                        autoHeight: true,
                        responsive: {
                            0: {
                                items: 1
                            },

                            613: {
                                items: 2
                            }
                        }
                    });
                    slideCat.parents(".catalog-dl2-popular").find(".slider-arrow").addClass("js-active");
                    $('.cat__popular-l-arrow').click(function () {
                        slideCat.trigger('prev.owl.carousel');
                    });

                    $('.cat__popular-r-arrow').click(function () {
                        slideCat.trigger('next.owl.carousel');
                    });
                } else {
                    slideCat.owlCarousel('destroy');
                    slideCat.parents(".catalog-dl2-popular").find(".slider-arrow").removeClass("js-active");
                }
            }
        }

        if ($('.sale-carousel').length) {
            var saleCarousel = $('.sale-carousel');
            if (saleCarousel.length > 0) {
                saleCarousel.owlCarousel({
                    loop: false,
                    items: 5,
                    margin: 5,
                    responsive: {
                        0: {
                            items: 1
                        },
                        530: {
                            items: 2
                        },
                        767: {
                            items: 3
                        },
                        1024: {
                            items: 4
                        },
                        1199: {
                            items: 5
                        }
                    }
                });
                $('.mainpage__sale-l-arrow').click(function () {
                    saleCarousel.trigger('prev.owl.carousel');
                });
                $('.mainpage__sale-r-arrow').click(function () {
                    saleCarousel.trigger('next.owl.carousel');
                });
            }
        }
        if ($('.bu-carousel').length > 0) {
            var buCarousel = $('.bu-carousel');
            buCarousel.owlCarousel({
                loop: false,
                items: 4,
                margin: 10,
                responsive: {
                    0: {
                        items: 1
                    },
                    530: {
                        items: 2
                    },
                    767: {
                        items: 3
                    },
                    1024: {

                        items: 4
                    },
                    1199: {
                        items: 4
                    }
                }
            });
            $('.mainpage__bu-l-arrow').click(function () {
                buCarousel.trigger('prev.owl.carousel');
            });
            $('.mainpage__bu-r-arrow').click(function () {
                buCarousel.trigger('next.owl.carousel');
            });
        }
        var toTop = $('.to-top');
        if (toTop.length > 0) {
            toTop.click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
            });
        }

        $(".popup-button").click(function (event) {
            event.stopPropagation();
            event.preventDefault();

            var form = $(this).attr("data-form");

            $("div.catalog-popup-form-darker").show();
            $("#" + form).show();
            $('body').css('overflow', 'hidden');
        });

        $('div.catalog-popup-form').click(function (event) {
            event.stopPropagation();
        });

        $("div.catalog-popup-form-darker").click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            $(this).hide();
            $("div.catalog-popup-form").hide();
            $('body').css('overflow', 'auto');
        });

        $("div.catalog-popup-form-close").click(function (event) {
            event.stopPropagation();
            event.preventDefault();
            $("div.catalog-popup-form-darker").hide();
            $("div.catalog-popup-form").hide();
            $('body').css('overflow', 'auto');
        });

        $('#left-menu').sidr({
            timing: 'ease-in-out',
            speed: 1000
        });

        $(window).resize(function () {
            $.sidr('close', 'sidr');
        });

        $('.b-close-menu__button').click(function () {
            $.sidr('close', 'sidr');
        });


        $(".left-menu__list > li").eq(2).each(function () {
            return open_first_level_li($(this));
        });

        $(".left-menu__list").find(".left-menu__element--cat").eq(0).find(".left-menu__two").addClass("left-menu__element--havelist");


        $(".left-menu__list .left-menu__link").on("click", function () {
            var parent_li = $(this).closest("li");
            if (parent_li.find(">ul").length) {
                if (parent_li.hasClass("js-active")) {
                    return true;
                } else {
                    var parent_ul = parent_li.closest("ul"),
                        cur_li_index = parent_li.index();
                    $(">li", parent_ul).each(function () {
                        var each_ind = $(this).index();
                        if (each_ind != cur_li_index) {
                            hide_all_inner_elements($(this));
                        } else {
                            open_first_level_li($(this));

                        }
                    });
                    return false;
                }
            }
            else
                return true;
        });

        $(".sm-contacts__search").on("click", $(".sm-contacts__search"), function () {

            if ($(".header__search").hasClass('sm-search')) {
                $(".sm-contacts__search").removeClass('js-close');
                $(".header__search").removeClass('sm-search');
            }
            else {
                $(".sm-contacts__search").addClass('js-close');
                $(".header__search").addClass('sm-search');

            }
        });


        if ($('#gallery').length) {
            var gallery_brand = $('#gallery');
            if (gallery_brand.length > 0) {
                gallery_brand.owlCarousel({
                    loop: false,
                    items: 5,
                    margin: 10,
                    responsive: {
                        0: {
                            items: 1
                        },
                        530: {
                            items: 2
                        },
                        767: {
                            items: 3
                        },
                        1024: {

                            items: 4
                        },
                        1199: {
                            items: 4
                        }
                    }
                });
                $('.gallery_brand-l-arrow').click(function () {
                    gallery_brand.trigger('prev.owl.carousel');
                });
                $('.gallery_brand-r-arrow').click(function () {
                    gallery_brand.trigger('next.owl.carousel');
                });
            }

            $(".gallery_brand__img").fancybox({});
        }

        $('.b-close-menu__button').bind('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                hTop = 0,
                $target = $(target);

            ($('.header').hasClass('smaller')) ? hTop = 76 : hTop = 176;


            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - hTop
            });
        });
    });

})(jQuery);

function open_first_level_li(context) {
    var inner_ul = context.find(">ul");
    if (inner_ul.length) {
        context.addClass("js-active");
        inner_ul.addClass("js-active");

        // $(">li", inner_ul).each(function(){
        //     return open_first_level_li($(this));
        // });

        return false;
    }
}

function hide_all_inner_elements(context) {
    context.removeClass("js-active");

    var inner_ul = $("ul", context);
    if (inner_ul.length) {
        inner_ul.removeClass("js-active");
        $("li", inner_ul).each(function () {
            hide_all_inner_elements($(this));
        });
    }
    return false;
}

(function () {
    function init() {
        window.addEventListener('scroll', function (e) {
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 180,
                header = document.querySelector("header"),
                bottomLine = document.querySelector(".bottom-line");
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
                classie.add(bottomLine, "bottom-line_show");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                }
                if (classie.has(bottomLine, "bottom-line_show")) {
                    classie.remove(bottomLine, "bottom-line_show");
                }
            }
        });
    }

    window.onload = init();
})();

