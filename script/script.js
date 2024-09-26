document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('a[href="#about"], a[href="#projects"], a[href="#resume"]');
    const toggler = document.querySelector(".navbar-toggler");

    


    // Handle navbar collapse style
    const navbarCollapse = document.querySelector('.navbar-expand-lg .navbar-collapse');
    if (navbarCollapse) {
        window.addEventListener('scroll', function() {
            navbarCollapse.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const navbar = document.querySelector('.navbar');
    
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    });

    // Toggle button functionality
    if (toggler) {
        toggler.addEventListener('click', function() {
            this.classList.toggle('on');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const toggler = document.querySelector(".navbar-toggler");

    // Listen for scroll events
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle button functionality
    if (toggler) {
        toggler.addEventListener('click', function() {
            this.classList.toggle('on');
        });
    }
});
