document.addEventListener("DOMContentLoaded", function () {
    fetch('./components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-components').innerHTML = data;


            const navScript = document.createElement('script');
            navScript.src = './js/nav.js';
            navScript.onload = function () {
                console.log('nav.js');
                if (typeof initNav === 'function') {
                    initNav();
                }
            };
            document.body.appendChild(navScript);
            console.log('nav.html');
        })
        .catch(error => {
            console.error('Error loading nav component:', error);
        });
    fetch('./components/banner.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner-components').innerHTML = data;
            const bannerScript = document.createElement('script');
            bannerScript.src = './js/banner.js';
            bannerScript.onload = function () {
                console.log('banner.js');
                if (typeof initBanner === 'function') {
                    initBanner();
                }
            };
            document.body.appendChild(bannerScript);
        })
        .catch(error => {
            console.error('Error loading banner component:', error);
        });
    fetch('./components/video.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('video').innerHTML = data;
            console.log('video.html');
        })
        .catch(error => {
            console.error('Error loading video component:', error);
        });

    fetch('./components/time.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('time').innerHTML = data;

            const timeScript = document.createElement('script');
            timeScript.src = './js/time.js';
            timeScript.onload = function () {
                console.log('time.js');
            };
            document.body.appendChild(timeScript);
        })
        .catch(error => {
            console.error('Error loading time component:', error);
        });


        fetch('./components/main-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
            console.log('main-content');
        })
        .catch(error => {
            console.error('Error loading video component:', error);
        });

        fetch('./components/product.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('product').innerHTML = data;
            console.log('product');
        })
        .catch(error => {
            console.error('Error loading video component:', error);
        });

        fetch('./components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            console.log('footer');
        })
        .catch(error => {
            console.error('Error loading video component:', error);
        });
});
