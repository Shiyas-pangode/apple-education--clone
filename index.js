const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 10,
    

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },


});   


document.addEventListener("DOMContentLoaded", function() {
    let searchbar = document.querySelector('.hover-searchbar');
    let icon = document.querySelector('.search-bar');
    let closebar = document.querySelector('.close-icon');

    function opensearch() {
        searchbar.style.display = 'flex';
    }
    function closesearch(){
        
        searchbar.style.display = 'none';      
    }

    icon.addEventListener('click', opensearch);
    closebar.addEventListener('click',closesearch);
});

  
