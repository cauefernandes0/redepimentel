const secondNavbar = document.querySelector('.second-navbar');

const scrollTo = targetSection.getBoundingClientRect().top + window.scrollY - secondNavbar.clientHeight;

scrollToTopLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});