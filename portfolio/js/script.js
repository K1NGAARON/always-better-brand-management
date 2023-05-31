const content = [
    {
        title: "Gloednieuwe website voor Klimatherm",
        tag: "website-development",
        body: "Klimatherm is een loodgietersbedrijf dat bij ons aanklopte met verschillende uitdagingen. Ze hadden een onprofessionele uitstraling vanwege een gebrek aan merkidentiteit en website.",
        img: "https://blitz-media.io/blog/website-bouwer-oostende/img/banner.jpg",
        url: "/portfolio/klimatherm/"
    },
    {
        title: "Digitale marketing campagne voor een boekhouder",
        tag: "advertising",
        body: "Onze klant, een accountant, benaderde ons met een uitdaging. Ze hadden bijna geen nieuwe klanten meer en wisten niet hoe ze nieuwe klanten konden bereiken.",
        img: "https://blitz-media.io/blog/website-laten-optimaliseren/img/banner.jpg",
        url: "/portfolio/online-boekhouder/"
    },
    {
        title: "Custom website met online boekingsysteem",
        tag: "website-development",
        body: "Een van de grootste uitdagingen waarmee ze werden geconfronteerd, was dat ze reserveringen telefonisch moesten aannemen omdat ze geen boekingssysteem hadden.",
        img: "/portfolio/coin-perdu/img/banner.jpg",
        url: "/portfolio/coin-perdu/"
    },
    {
        title: "Hoe een nieuwe website voor meer leads gezorgd heeft",
        tag: "website-development",
        body: "Een jaar na de Sunday rebranding realiseerden ze dat de nieuwe website niet presteerde en niet voldeed aan de wensen van (potentiële) klanten.",
        img: "https://blitz-media.io/blog/12-seo-tips-om-te-scoren-in-google/img/banner.jpg",
        url: "/portfolio/sunday/"
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/portfolio/",
    //     url: "/portfolio/"
    // },
];

function createCards(e) {
    const target = document.querySelector('#content');

    const cards = content.map(item => {
        const tagWithSpaces = item.tag.replace(/-/g, ' ');

        return `
            <div class="card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <p class="tag">
                        ${tagWithSpaces}
                    </p>
                    <h5>
                        ${item.title}
                    </h5>
                    <a href="${item.url}" class="">
                        Lees meer
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

// Create related content on the post pages
// => target
// => content (use above?)
// => map through content

function filterContent(e) {
    // Toggle Active Class on Filter
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    // Selected Tag
    let activeFilter = $(this).attr('id');
    console.log(activeFilter);

    if (activeFilter === 'all') {
        $('.content .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});