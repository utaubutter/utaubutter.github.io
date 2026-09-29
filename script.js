document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

window.addEventListener('pageshow', (event) => {
    document.body.classList.add('page-loaded');
});
