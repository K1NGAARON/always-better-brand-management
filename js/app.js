// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const headerLogo = $('.header .logo');
    const darkHeader = document.querySelector('.header.dark');

    if (darkHeader) {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        }
    } else {
        if ($(this).scrollTop() > header.height()) {
            header.addClass('active');
            headerLogo.attr('src', "/assets/logo/logo-black.png")
        } else {
            header.removeClass('active');
            headerLogo.attr('src', "/assets/logo/logo-white.png")
        }
    }
});

function closeMenu() {
    $('.small-menu-wrapper').css('display', 'none');
};

function closeAccordion(e) {
    $('.accordion-head').removeClass('active');
    $('.accordion-body').removeClass('active');
    $('.accordion-head').children('.icon').removeClass('active');
    $('.accordion-head').children('.icon').children('i').removeClass('fa-minus');
    $('.accordion-head').children('.icon').children('i').addClass('fa-plus');
};

$('.accordion-item').click(function () {
    closeAccordion();

    $(this).children('.accordion-head').toggleClass('active');
    $(this).children('.accordion-head').siblings('.accordion-body').toggleClass('active');
    $(this).children('.accordion-head').children('.icon').toggleClass('active');

    $(this).children('.accordion-head').children('.icon').children('i').removeClass('fa-plus');
    $(this).children('.accordion-head').children('.icon').children('i').addClass('fa-minus');
});


$('.small-menu-content .nav').click(closeMenu);

$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

// CREATE LOGO SECTION
const target = document.querySelector('#logos-wrapper');
const logos = [
    {
        img: 'https://blitz-media.io/img/clients/cfl-logo.png',
        client: 'Cashflow For Life'
    },
    {
        img: 'https://blitz-media.io/img/clients/fa-logo.png',
        client: 'Freedom Academy'
    },
    {
        img: 'https://blitz-media.io/img/clients/sunday-logo.png',
        client: 'Sunday'
    },
    {
        img: 'https://blitz-media.io/img/clients/klimatherm-logo.png',
        client: 'Klimatherm'
    },
    {
        img: 'https://blitz-media.io/img/clients/tvh.png',
        client: 'TVH',
    },
    {
        img: 'https://blitz-media.io/img/clients/lansweeper.png',
        client: 'Lansweeper',
    },
    {
        img: 'https://blitz-media.io/img/clients/kordekor-logo.png',
        client: 'Kordekor',
    },
];


function createLogos() {
    if (target) {
        for (let i = 0; i < 5; i++) {
            const template = `
                <div class="item">
                    <img src="${logos[i].img}" alt="${logos[i].client}">
                </div>
            `;
            target.insertAdjacentHTML("beforeend", template);
        };
    }
};

$(document).ready(createLogos);