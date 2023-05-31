const predictableGrowth = [
    {
        title: "Commercial Consulting",
        id: "commercial-consulting",
        img: "https://reset.blitz-media.io/home/img/services/image1.jpg",
        body: "Commercial consulting",
    },
    {
        title: "Lead Generation",
        id: "lead-generation",
        img: "https://reset.blitz-media.io/home/img/services/image2.jpg",
        body: "Lead Generation",
    },
    {
        title: "Lead Conversion",
        id: "lead-conversion",
        img: "https://reset.blitz-media.io/home/img/services/image3.jpg",
        body: "Lead conversion",
    },
    {
        title: "Sales Funnels Set Up",
        id: "sales-funnel",
        img: "https://reset.blitz-media.io/home/img/services/image4.jpg",
        body: "sales funnel set up",
    },
    {
        title: "Performance reporting",
        id: "performance-reporting",
        img: "https://reset.blitz-media.io/home/img/services/image5.jpg",
        body: "performance reporting",
    },
    {
        title: "Marketing Management",
        id: "marketing-management",
        img: "https://reset.blitz-media.io/home/img/services/image6.jpg",
        body: "Mkt management",
    },
    {
        title: "Content Creation",
        id: "content-creation",
        img: "https://reset.blitz-media.io/home/img/services/image6.jpg",
        body: "Content Creation",
    },
];

const engagedCommunities = [
    {
        title: "Community Analyse",
        id: "community-analyse",
        img: "https://reset.blitz-media.io/home/img/services/image3.jpg",
        body: "Communuty analyse",
    },
    {
        title: "Community Event Strategie",
        id: "community-event-strategy",
        img: "https://reset.blitz-media.io/home/img/services/image2.jpg",
        body: "Community event strategie",
    },
    {
        title: "Event management",
        id: "event-management",
        img: "https://reset.blitz-media.io/home/img/services/image1.jpg",
        body: "Event management",
    },
];

const brandExperiences = [
    {
        title: "Brand Experience Analyse",
        id: "brand-experience-analyse",
        img: "https://reset.blitz-media.io/home/img/services/image3.jpg",
        body: "Brand experience analyse",
    },
    {
        title: "Brand Experience Strategy",
        id: "brand-experience-strategy",
        img: "https://reset.blitz-media.io/home/img/services/image2.jpg",
        body: "Brand experience strategy",
    },
    {
        title: "Offline Brand Development",
        id: "offline-brand-development",
        img: "https://reset.blitz-media.io/home/img/services/image1.jpg",
        body: "Offline Brand Development",
    },
];


function filterPredictableGrowth(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedGrowth = predictableGrowth.find(growth => growth.id === activeFilter);

    $('#growth-img').attr('src', selectedGrowth.img);
    $('#growth-body').text(selectedGrowth.body);
};

function filterEngagedCommunities(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedCommunities = engagedCommunities.find(engagedCommunities => engagedCommunities.id === activeFilter);
   
    $('#engagedCommunities-img').attr('src', selectedCommunities.img);
    $('#engagedCommunities-body').text(selectedCommunities.body);
};

function filterBrandExperiences(e) {
    const filterWrapper = $(this).closest('.filters');
    filterWrapper.find('.filter-btn').removeClass('active');
    $(this).addClass('active');

    let activeFilter = $(this).attr('id');

    const selectedBrandExperience = brandExperiences.find(brandExperiences => brandExperiences.id === activeFilter);
   
    $('#brandExperiences-img').attr('src', selectedBrandExperience.img);
    $('#brandExperiences-body').text(selectedBrandExperience.body);
};


$(document).ready(function() {
    $('.filters-predictable-growth .filter-btn').click(filterPredictableGrowth);
    $('.filters-engaged-communities .filter-btn').click(filterEngagedCommunities);
    $('.filters-brand-experiences .filter-btn').click(filterBrandExperiences);
});



$('.step').click(showProcess);