(function () {
    var container = document.getElementById('header-container');
    if (!container) return;

    fetch('header.html')
        .then(function (res) { return res.text(); })
        .then(function (html) {
            container.innerHTML = html;
            var page = window.location.pathname.split('/').pop() || 'index.html';
            container.querySelectorAll('.nav-link[data-page]').forEach(function (link) {
                if (link.getAttribute('data-page') === page) {
                    link.classList.add('active');
                    link.setAttribute('aria-current', 'page');
                }
            });
        })
        .catch(function () {
            container.innerHTML = '';
        });
})();
