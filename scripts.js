document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav a');

    function changePage(event) {
        const targetPage = event.target.getAttribute('href').substring(1);
        pages.forEach(page => {
            if (page.id === targetPage) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === targetPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', changePage);
    });

    // Set the default active page
    document.querySelector('#home').classList.add('active');
    navLinks[0].classList.add('active');
});
