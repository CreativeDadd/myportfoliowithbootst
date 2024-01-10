document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    // const scrolledNav = document.querySelector('.scrolled-nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled-nav');
           
            
        } else {
            nav.classList.remove('scrolled-nav');
            
        }
    })

})

