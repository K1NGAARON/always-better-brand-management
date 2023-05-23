const processSteps = [
    {
        headline: 'Kennismakingsgesprek',
        body: "Er zijn heel wat zaken die gebeuren voordat we starten aan jouw project. We starten met een vrijblijvend kennismakingsgesprek om af te toetsen of we een goede match zijn. Hierin bekijken we ook de exacte doelen van het project en uiteindelijk komen we dan met een praktisch stap-voor-stap plan.",
        img: 'https://blitz-media.io/home/img/planning.jpg'
    },
    {
        headline: 'Digitaal voorbeeld',
        body: "Tijdens deze periode is er maar 1 doel: een digitaal voorbeeld ontwerpen waar jij 100% tevreden mee bent. De input uit ons kennismakingsgesprek zal hier verwerkt worden.",
        img: 'https://blitz-media.io/home/img/wireframe.jpg'
    },
    {
        headline: 'Ontwikkeling',
        body: "Eens het digitaal voorbeeld afgewerkt is beginnen we met de ontwikkeling van jouw custom website/webshop. Aangezien elke website volledig custom geprogrammeerd wordt zijn er hier absoluut geen limitaties aan wat er mogelijk is.",
        img: 'https://blitz-media.io/home/img/development.jpg'
    },
    {
        headline: 'Testen & Feedback',
        body: "Na verschillende feedback ronde is de nieuwe website af en gaan we deze uitgebreid gaan testen zodat er zeker geen fouten zijn eens we lanceren. Wanneer de testen succesvol afgerond zijn is het tijd om jouw project te lanceren!",
        img: 'https://blitz-media.io/home/img/feedback.jpg'
    },
    {
        headline: 'Onderhoud',
        body: "De samenwerking stopt uiteraard niet na het lanceren van jouw website. Blitz Media blijft het onderhoud van jouw website verzorgen.",
        img: 'https://blitz-media.io/home/img/hosting.jpg'
    }
];

function showProcess(e) {
    let titleHolder = document.querySelector('#titleHolder');
    let bodyHolder = document.querySelector('#bodyHolder');
    let imageHolder = document.querySelector('#imageHolder');

    let activeStep = e.target.id;

    $('.step').removeClass('active');
    $(this).addClass('active');


    if (activeStep === 'discovery') {
        $(titleHolder).text(processSteps[0].headline);
        $(bodyHolder).text(processSteps[0].body);
        $(imageHolder).attr('src', processSteps[0].img);
    } else if (activeStep === 'wireframe') {
        $(titleHolder).text(processSteps[1].headline);
        $(bodyHolder).text(processSteps[1].body);
        $(imageHolder).attr('src', processSteps[1].img);
    } else if (activeStep === 'development') {
        $(titleHolder).text(processSteps[2].headline);
        $(bodyHolder).text(processSteps[2].body);
        $(imageHolder).attr('src', processSteps[2].img);
    } else if (activeStep === 'testing') {
        $(titleHolder).text(processSteps[3].headline);
        $(bodyHolder).text(processSteps[3].body);
        $(imageHolder).attr('src', processSteps[3].img);
    } else if (activeStep === 'hosting') {
        $(titleHolder).text(processSteps[4].headline);
        $(bodyHolder).text(processSteps[4].body);
        $(imageHolder).attr('src', processSteps[4].img);
    };

};

const servicesContent = [
    {
        title: "Facial Work",
        id: "facial-work",
        img: "https://reset.blitz-media.io/home/img/services/image1.jpg",
        body: "facial work body",
    },
    {
        title: "Accupuncture",
        id: "accupuncture",
        img: "https://reset.blitz-media.io/home/img/services/image2.jpg",
        body: "accupuncture body",
    },
    {
        title: "Cupping",
        id: "cupping",
        img: "https://reset.blitz-media.io/home/img/services/image3.jpg",
        body: "cupping body",
    },
    {
        title: "Movement Analysis",
        id: "movement-analysis",
        img: "https://reset.blitz-media.io/home/img/services/image4.jpg",
        body: "movement analysis body",
    },
    {
        title: "Breathwork Analysis",
        id: "breathwork-analysis",
        img: "https://reset.blitz-media.io/home/img/services/image5.jpg",
        body: "breathwork analysis body",
    },
    {
        title: "Bloodwork Analysis",
        id: "bloodwork-analysis",
        img: "https://reset.blitz-media.io/home/img/services/image6.jpg",
        body: "bloodwork analysis body",
    },
];

const experiencesContent = [
    {
        title: "Breathwork classes",
        id: "breathwork-classes",
        img: "https://reset.blitz-media.io/home/img/services/image3.jpg",
        body: "breathwork classes body",
    },
    {
        title: "Bodywork classes",
        id: "bodywork-classes",
        img: "https://reset.blitz-media.io/home/img/services/image2.jpg",
        body: "bodywork body",
    },
    {
        title: "Breathwork 1-on-1",
        id: "breathwork",
        img: "https://reset.blitz-media.io/home/img/services/image1.jpg",
        body: "breathwork body",
    },
    {
        title: "Re set trips",
        id: "reset-trips",
        img: "https://reset.blitz-media.io/home/img/services/image4.jpg",
        body: "re set body",
    },
];

function filterServices(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedService = servicesContent.find(service => service.id === activeFilter);

    $('#service-img').attr('src', selectedService.img);
    $('#service-body').text(selectedService.body);
};

function filterExperiences(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedExperience = experiencesContent.find(experience => experience.id === activeFilter);
   
    $('#experiences-img').attr('src', selectedExperience.img);
    $('#experiences-body').text(selectedExperience.body);
}


$(document).ready(function() {
    $('.filters-services .filter-btn').click(filterServices);
    $('.filters-experiences .filter-btn').click(filterExperiences);
});



$('.step').click(showProcess);