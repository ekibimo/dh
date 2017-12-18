$(document).ready(function () {
//login
    $('#login-popup').on('click', function (e) {
        e.preventDefault();
        $('.dh-register__wrapper').fadeIn(100);
        $('#login-content').fadeIn();
        $('#register-content').hide();
        $('#register-button').removeClass('active');
        $('#login-button').addClass('active');
    });

    $('#login-button').on('click', function () {
        $('#login-content').fadeIn();
        $('#register-content').hide();
        $('#register-button').removeClass('active');
        $('#login-button').addClass('active');
    });
//    end of login

//register
    $('#register-popup').on('click', function (e) {
        e.preventDefault();
        $('.dh-register__wrapper').fadeIn(100);
        $('#register-content').fadeIn();
        $('#login-content').hide();
        $('#login-button').removeClass('active');
        $('#register-button').addClass('active');
    });

    $('#register-button').on('click', function () {
        $('#register-content').fadeIn();
        $('#login-content').hide();
        $('#login-button').removeClass('active');
        $('#register-button').addClass('active');
    });
    $('#popup-close').on('click', function () {
        $('.dh-register__wrapper').fadeOut(100);
    });
//    end of register
});