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
;
}
