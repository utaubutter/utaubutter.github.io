document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');

    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');

            if (link.getAttribute('target') === '_blank' || destination === '#') return;

            e.preventDefault();

            // body全体（背景ごと）を一括で消す
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 150);
        });
    });
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('fade-out');
    }
});
