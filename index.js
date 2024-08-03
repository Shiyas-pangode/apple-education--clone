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
    let carticon = document.querySelector('.cart')
    let nav3 = document.querySelector('#nav-three');
    function opensearch() {
        searchbar.style.display = 'flex';
        searchbar.style.csstext = "animation-name:slideIn";
    }
    function closesearch(){
        
        searchbar.style.display = 'none';      
    }
    function openshop() {
        nav3.style.display = 'flex';
    }
    function closeshop () {
        nav3.style.display = 'none';
    }

    icon.addEventListener('click', opensearch);
    closebar.addEventListener('click',closesearch);
    carticon.addEventListener('mouseover',openshop);
    carticon.addEventListener('mouseout',closeshop);
   
});

  
