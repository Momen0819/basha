/*global $,owl,smoothScroll,AOS,alert*/
$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('#loading').fadeOut(1000);
    });


    $('[data-tool="tooltip"]').tooltip({
        trigger: 'hover',
        animate: true,
        delay: 50,
        container: 'body'
    });



    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: -50
    });
    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 44) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('[data-fancybox]').fancybox();

    $(".cl-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        items: 5,
        mouseDrag: true,
        pagination: false,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 3],
			[700, 3],
            [800, 4],
			[1000, 4],
			[1200, 5],
			[1400, 5],
			[1600, 5]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        stopOnHover: true
    });

    $(".hero-slider").owlCarousel({
        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 1000,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        stopOnHover: false,
        mouseDrag: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        afterAction: function (el) {
            //remove class active
            this
                .$owlItems
                .removeClass('active');

            //add class active
            this
                .$owlItems //owl internal $ object containing items
                .eq(this.currentItem)
                .addClass('active');
        }
    });

    $(".real-slider").owlCarousel({
        //        transitionStyle: "fade",
        navigation: true,
        slideSpeed: 1000,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        stopOnHover: false,
        mouseDrag: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });

    // for upload file
    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(':file').on('fileselect', function (event, numFiles, label) {

        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }
    });


    $('.side-nav').mCustomScrollbar({
        autoHideScrollbar: false,
        setTop: 0,
        scrollInertia: 50,
        theme: "light-1"
    });

    $('.open-sidebar').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeIn();
        $('body').addClass('sided');
    });

    $('.overlay_gen').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeOut();
        $('body').removeClass('sided');
    });

    $('.op-search, .search-form').on("click", function (e) {
        e.stopPropagation();
    });

    $('.op-search').click(function () {
        $('.search-form').slideDown();
    });

    $('body').click(function () {
        $('.search-form').slideUp();
    });




});