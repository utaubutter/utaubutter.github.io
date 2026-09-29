document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');

    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');

            if (link.getAttribute('target') === '_blank' || destination === '#') return;

            e.preventDefault();

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = destination;
            }, 350);
        });
    });
});

window.addEventListener('pageshow', (event) => {
    // キャッシュから読み込まれた場合、強制的に表示状態に戻す
    if (event.persisted) {
        document.body.classList.remove('fade-out');
    }
});
