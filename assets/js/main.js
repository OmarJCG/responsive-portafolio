/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalClose = document.querySelectorAll('.services__modal-close');
let modalAbierto = false;
let num;



let modal = function(modalClick){
    modalViews[modalClick].classList.add('acitve-modal')
    
};

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', ()=>{
        modal(i);
        num=i;
        if(document.querySelector('.acitve-modal')){
            modalAbierto=true;
        }
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('acitve-modal')
            modalAbierto = false;
        })
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

