document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');

            if (link.getAttribute('target') === '_blank') return;

            e.preventDefault();

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 350);
        });
    });
});
