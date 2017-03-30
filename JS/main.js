$(document).ready(function () {
    
    $('.modal, .dimmer, .modal-dimmer, #exhibits-awards, .exhibits-awards-list, .temple-set-img, .alice-set-img, .simulacra-set-img, .glories-set-img, .simulacra-book-set-img, .lightbox, .set-description, #news').hide();
    
    $('#about').on('click', function () {
        $('#about-modal, #about-dimmer, #exhibits-awards').fadeToggle(200);
        $("#exhibits-awards-title").animate({"left": "25px"}, "slow");
        $('#contact-modal, #contact-dimmer').fadeOut(200);
    });
    
    $("#exhibits-awards").toggle(function () {
        $('#about-modal-body, .exhibits-awards-list').slideToggle("slow");
        $("#exhibits-awards").animate({"top": "150px"}, "slow");
    }, function () {
        $('#about-modal-body, .exhibits-awards-list').slideToggle("slow");
        $("#exhibits-awards").animate({"top": "1130px"}, "slow");
    });
    
    $('#contact').on('click', function () {
        $('#contact-modal, #contact-dimmer').fadeToggle(200);
        $('#about-modal, #about-dimmer, #exhibits-awards').fadeOut(200);
    });
    
    $('.modal').on('click', function () {
        $(this).fadeOut(200);
        $('.modal-dimmer, #exhibits-awards').fadeOut(200);
    });
    
    $('.modal-dimmer').on('click', function () {
        $(this).fadeOut(200);
        $('.modal, #exhibits-awards').fadeOut(200);
    });
    
    $('.project-img').on('click', function () {
        $('.dimmer').fadeToggle(function () {
            $(this).on('click', function () {
                $(this).fadeOut(200);
            });
        });
    });
    
    $('.dimmer').on('click', function () {
        $('.lightbox, .set-description').hide();
    });
    
    
    //street temple images
    $('#temple-thumb').on('click', function () {
        $('.lightbox').show();
        $('.temple-text').fadeIn(200);
        $('.lightbox-img').removeClass('lightbox-img').hide();
        $('.temple-set-img').first().addClass('lightbox-img').fadeIn(200);
    });
    
    $('.temple-set-img').on('click', function () {
        $(this).removeClass('lightbox-img').hide();
        $(this).next().fadeIn(200).addClass('lightbox-img');
        if ($(this).is(':last-child')) {
            $(this).removeClass('lightbox-img').hide();
            $('.temple-set-img').first().addClass('lightbox-img').fadeIn(200);
        }
    });
    
    
    //alice images
    $('#alice-thumb').on('click', function () {
        $('.lightbox').show();
        $('.alice-text').fadeIn(200);
        $('.lightbox-img').removeClass('lightbox-img').hide();
        $('.alice-set-img').first().addClass('lightbox-img').fadeIn(200);
    });
    
    $('.alice-set-img').on('click', function () {
        $(this).removeClass('lightbox-img').hide();
        $(this).next().fadeIn(200).addClass('lightbox-img');
        if ($(this).is(':last-child')) {
            $(this).removeClass('lightbox-img').hide();
            $('.alice-set-img').first().addClass('lightbox-img').fadeIn(200);
        }
    });
    
    
    //simulacra images
    $('#simulacra-thumb').on('click', function () {
        $('.lightbox').show();
        $('.simulacra-text').fadeIn(200);
        $('.lightbox-img').removeClass('lightbox-img').hide();
        $('.simulacra-set-img').first().addClass('lightbox-img').fadeIn(200);
    });
    
    $('.simulacra-set-img').on('click', function () {
        $(this).removeClass('lightbox-img').hide();
        $(this).next().fadeIn(200).addClass('lightbox-img');
        if ($(this).is(':last-child')) {
            $(this).removeClass('lightbox-img').hide();
            $('.simulacra-set-img').first().addClass('lightbox-img').fadeIn(200);
        }
    });
    
    
    //glories images
    $('#glories-thumb').on('click', function () {
        $('.lightbox').show();
        $('.glories-text').fadeIn(200);
        $('.lightbox-img').removeClass('lightbox-img').hide();
        $('.glories-set-img').first().addClass('lightbox-img').fadeIn(200);
    });
    
    $('.glories-set-img').on('click', function () {
        $(this).removeClass('lightbox-img').hide();
        $(this).next().fadeIn(200).addClass('lightbox-img');
        if ($(this).is(':last-child')) {
            $(this).removeClass('lightbox-img').hide();
            $('.glories-set-img').first().addClass('lightbox-img').fadeIn(200);
        }
    });
    
    
    //simulacra book images
    $('#simulacra-book-thumb').on('click', function () {
        $('.lightbox').show();
        $('.simulacra-book-text').fadeIn(200);
        $('.lightbox-img').removeClass('lightbox-img').hide();
        $('.simulacra-book-set-img').first().addClass('lightbox-img').fadeIn(200);
    });
    
    $('.simulacra-book-set-img').on('click', function () {
        $(this).removeClass('lightbox-img').hide();
        $(this).next().fadeIn(200).addClass('lightbox-img');
        if ($(this).is(':last-child')) {
            $(this).removeClass('lightbox-img').hide();
            $('.simulacra-book-set-img').first().addClass('lightbox-img').fadeIn(200);
        }
    });
    
    
    
    

});