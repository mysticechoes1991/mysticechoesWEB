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

    fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        console.log('footer');
    })
    








    const novels = document.querySelectorAll('.novel-pages li');


    novels.forEach(novel => {
        const title = novel.querySelector('h3'); 
        const content = novel.querySelector('p'); 

        if (title) {
            console.log("找到標題：", title.innerText);
        } else {
            console.warn("未找到標題 h3");
        }

        if (title && content) {
            title.addEventListener('click', function () {
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block"; 
                } else {
                    content.style.display = "none";
                }
            });
        }
    });
    
});
