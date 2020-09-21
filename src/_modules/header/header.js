'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    //Searchbar Logic

    const searchButton = $('.header__search-icons');
    const searchbar = $('.header__searchbar');

    searchButton.on('click', function() {
        searchbar.toggleClass('-open');
        searchButton.toggleClass('-open');
    })

    //Shop cart Logic
    const shopCartIcon = $('.header__cart');
    const shopCartContainer = $('.header__shop-cart');
    const shopCartCloseIcon = $('.header__shop-cart__close-button');

    shopCartIcon.on('click', function() {
        shopCartContainer.addClass('-open');
        body.addClass('-hideOverflow');
    })

    shopCartCloseIcon.on('click', function() {
        shopCartContainer.removeClass('-open');
        body.removeClass('-hideOverflow');
    })

    //Catalogo Banner Logic

    var catalogoPage = $('.catalogo');
    var url = new URL(window.location.href);
    var param = url.searchParams.get("guardar");

    if(typeof param == 'string') {
        catalogoPage.addClass('-top-banner');
    }

    //Checkout Accordion logic
    var accordionButton = $('.-js-accordion-button');
    var accordion = $('.-js-accordion');
    var accordionItems = $('.-js-accordion-item');
    var accordionItemHeight = $(accordionItems[0]).height() + 41;

    $(window).on('resize', function() {
        accordionItemHeight = $(accordionItems[0]).height() + 41;
        accordion.height(accordionItemHeight * accordionItems.length);
    })

    accordion.height(accordionItemHeight * accordionItems.length);

    accordionButton.on('click', function() {
        accordion.toggleClass('-closed');
    })

    //Privacy accordion logic
    var privacyAccordionItem = $('.privacy__accordion-item');

    privacyAccordionItem.on('click', function() {
        $(this).toggleClass('-open');
    })
};

module.exports = Header;
