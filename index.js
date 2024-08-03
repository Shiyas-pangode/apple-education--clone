const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 10,
    


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
    let navFour = document.querySelector('.navthree-ul')
    function opensearch() {
        searchbar.style.display = 'flex';
        searchbar.classList.add('show');
        searchbar.classList.remove('hide');
        searchbar.style.animation = "slideIn 0.5s forwards";
    }
    function closesearch(){
        searchbar.classList.add('show');
        searchbar.classList.remove('hide');
        searchbar.style.animation = "slideOut 0.5s forwards";
        setTimeout (() => {
            searchbar.style.display = "none";
        },500);
    }
    function openshop() {
        nav3.style.display = 'flex';
    }
    function closeshop () {
        setTimeout(()=>{
            nav3.style.display = 'none';
        },1000);
    }
    function open() {
        nav3.style.display = 'flex';
    }

    icon.addEventListener('click', opensearch);
    closebar.addEventListener('click',closesearch);
    carticon.addEventListener('mouseover',openshop);
    navFour.addEventListener('mouseout',closeshop);

    let searchInput = document.getElementsByClassName('input');
    function searchinput(){
        
    } 
    searchInput.addEventListener('input',searchinput);
   
});

