function initBanner() {
    let currentIndex = 0;
    const bannerImgs = document.querySelectorAll(".banner-img > div");
    const rounds = document.querySelectorAll(".contral-round-container > span");

    if (bannerImgs.length === 0 || rounds.length === 0) {
        console.warn("banner未找到");
        return;
    }

    function showBanner(index) {
        bannerImgs.forEach((img, i) => {
            img.style.transform = `translateX(${-index * 100}%)`;
            img.classList.toggle("active", i === index);
        });

        rounds.forEach((round, i) => {
            round.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    document.querySelector(".button-left").addEventListener("click", function () {
        const newIndex = (currentIndex - 1 + bannerImgs.length) % bannerImgs.length;
        showBanner(newIndex);
    });

    document.querySelector(".button-right").addEventListener("click", function () {
        const newIndex = (currentIndex + 1) % bannerImgs.length;
        showBanner(newIndex);
    });

    rounds.forEach((dot) => {
        dot.addEventListener("click", function () {
            const index = parseInt(dot.getAttribute("data-index"));
            if (!isNaN(index)) {
                showBanner(index);
            }
        });
    });

    setInterval(() => {
        const newIndex = (currentIndex + 1) % bannerImgs.length;
        showBanner(newIndex);
    }, 1500);

  
    showBanner(currentIndex);
}
initBanner();
