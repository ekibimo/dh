$(document).ready(function () {
// Custom Slider setting
    $("#owl-1").owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-1'
    });
    $("#owl-2").owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-2'
    });
    $("#owl-3").owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-3'
    });
    $("#owl-4").owlCarousel({
        items: 1,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-4'
    });
    $("#owl-5").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-5'
    });
    $("#owl-6").owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-6'
    });
    $("#owl-7").owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-7'
    });
    $("#owl-8").owlCarousel({
        items: 3,
        margin: 10,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dotsContainer: '#carousel-custom-dots-8'
    });
    //custom dots nav
    $('#carousel-custom-dots-1 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-1 > .owl-dot').index(this);
        $('#carousel-custom-dots-1 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-1 > .owl-dot').eq(index).addClass('active');
        $("#owl-1").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-2 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-2 > .owl-dot').index(this);
        $('#carousel-custom-dots-2 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-2 > .owl-dot').eq(index).addClass('active');
        $("#owl-2").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-3 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-3 > .owl-dot').index(this);
        $('#carousel-custom-dots-3 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-3 > .owl-dot').eq(index).addClass('active');
        $("#owl-3").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-4 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-4 > .owl-dot').index(this);
        $('#carousel-custom-dots-4 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-4 > .owl-dot').eq(index).addClass('active');
        $("#owl-4").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-5 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-5 > .owl-dot').index(this);
        $('#carousel-custom-dots-5 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-5 > .owl-dot').eq(index).addClass('active');
        $("#owl-5").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-6 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-6 > .owl-dot').index(this);
        $('#carousel-custom-dots-6 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-6 > .owl-dot').eq(index).addClass('active');
        $("#owl-6").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-7 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-7 > .owl-dot').index(this);
        $('#carousel-custom-dots-7 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-7 > .owl-dot').eq(index).addClass('active');
        $("#owl-7").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('#carousel-custom-dots-8 > .owl-dot').click(function () {
        var index = $('#carousel-custom-dots-8 > .owl-dot').index(this);
        $('#carousel-custom-dots-8 > .owl-dot').removeClass('active');
        $('#carousel-custom-dots-8 > .owl-dot').eq(index).addClass('active');
        $("#owl-8").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.owl-next').html('<i class="fa fa-chevron-right"></i>');

//loop then stop at first slide
    $("#owl-2").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-2").trigger('stop.owl.autoplay');
                    $("#owl-2").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-3").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-3").trigger('stop.owl.autoplay');
                    $("#owl-3").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-4").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-4").trigger('stop.owl.autoplay');
                    $("#owl-4").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-5").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-5").trigger('stop.owl.autoplay');
                    $("#owl-5").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-6").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-6").trigger('stop.owl.autoplay');
                    $("#owl-6").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-7").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-7").trigger('stop.owl.autoplay');
                    $("#owl-7").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
    $("#owl-8").on('changed.owl.carousel', (function () {
        var current, stopAfterLoop;
        return stopAfterLoop = function (e) {
            // Check if the carousel changed it's current position.
            if (e.namespace && e.property.name === 'position') {
                // When the carousel starts over at the beginning of the loop the
                // following condition will be true:
                if (e.property.value < current) {
                    // Stop the autoplay plugin and remove this event listener.
                    $("#owl-8").trigger('stop.owl.autoplay');
                    $("#owl-8").off('changed.owl.carousel', stopAfterLoop);
                } else {
                    current = e.property.value;
                }
            }
        }
    })());
});