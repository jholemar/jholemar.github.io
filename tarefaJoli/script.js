document.querySelector('.header-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-navagation').classList.toggle('active');
});
