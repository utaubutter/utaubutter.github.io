document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');

    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');

            if (link.getAttribute('target') === '_blank' || destination === '#') return;

            e.preventDefault();

            document.body.classList.remove('page-loaded');

            setTimeout(() => {
                window.location.href = destination;
            }, 80);
        });
    });
});

window.addEventListener('pageshow', (event) => {
    document.body.classList.add('page-loaded');
});
