    function initNav(){

    
    const nav = document.querySelector('.nav-container');
    const navOffsetTop = nav.offsetTop;

    function handleScroll() {
        if (window.scrollY > navOffsetTop) {

            nav.classList.add('fixed');
        } else {
  
            nav.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', handleScroll);
}

function changeMenu() {
    const navBtnItems = document.querySelectorAll('.nav-btn-item');
    navBtnItems.forEach(item => {
        item.classList.toggle('nav-btn-item-hidden'); 
    });
}


function changeIndex(){
    
    window.location.href = "index.html";
}