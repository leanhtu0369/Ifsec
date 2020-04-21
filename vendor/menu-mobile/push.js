var MenuTop = {
    fixed: function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('body').addClass('fixed-menu').removeClass('not-fixed');
            } else {
                $('body').removeClass('fixed-menu');
            }
        })
    }
};

var Push = {

    menu: function(selector, buttonId, pushTo) {
        var chatSection = $('.chat_section');
        var widthChatSection = chatSection.width();
        if (selector.hasClass('active')) {
            selector.removeClass('active');
        } else {
            selector.addClass('active');
        }
        var classBody = 'cbp-spmenu-push-toright';
        if (pushTo == 'right') {
            classBody = 'cbp-spmenu-push-toleft';
        }
        classie.toggle(document.body, classBody);
        classie.toggle(buttonId, 'cbp-spmenu-open');
        if (pushTo == 'right') {
            if (chatSection.hasClass('open')) {
                chatSection.removeClass('open').animate({ 'margin': '0' }).width(widthChatSection);
            } else {
                chatSection.addClass('open').animate({ 'margin': '0 280px 0 0' });
            }
        }
    }

};


$(document).ready(function() {
    MenuTop.fixed();

    var menuRight = document.getElementById('cbp-spmenu-s2'),
        showRightPush = document.getElementById('showRightPush'),
        body = document.body;

    showRightPush.onclick = function() {
        if ($('body').hasClass('not-fixed')) {
            $('body').removeClass('not-fixed');
        } else {
            $('body').addClass('not-fixed');
        }
        Push.menu($(this), menuRight, 'right');
    };
    $('.closeRight').click(function() {

        Push.menu($('#showRightPush'), menuRight, 'right');
    });

    $('.navbarTop').find('a').each(function() {
        $(this).click(function() {
            var position = $(this).data('position');
            var top = $('#' + position).offset().top;
            $('.navbarTop').find('a').removeClass('active');
            $(this).addClass('active');
            $('body').removeClass('cbp-spmenu-push-toleft');
            $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
            $('html, body').animate({
                scrollTop: top - 50
            });
            return false;
        })
    });
    $('.contactBottom .title').click(function() {
        $('.contactBottom').toggleClass('openBottom');
    })

    $('.registerBtn').click(function() {
        $('.overlay').addClass('showPopupRegister');
    })

    $('.closeBtn').click(function() {
        $('.overlay').removeClass('showPopupRegister');
    })

    $('.loginBtn').click(function() {
        $('.overlay').addClass('showPopupLogin');
    })

    $('.closeBtn').click(function() {
        $('.overlay').removeClass('showPopupLogin');
    })

    $('.forgotBtn').click(function() {
        $('.overlay').addClass('showPopupForgot');
        $('.overlay').removeClass('showPopupLogin');
    })

    $('.closeBtn').click(function() {
        $('.overlay').removeClass('showPopupForgot');
    })

});