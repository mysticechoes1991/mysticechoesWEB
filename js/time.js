let remainingTime = 
    44 * 24 * 60 * 60 * 1000 +
    44 * 60 * 60 * 1000 +
    44 * 60 * 1000 + 
    44 * 1000;

function updateCountdown() {
    if (remainingTime <= 0) {
        const timeElement = document.getElementById("time-active");
        if (timeElement) {
            timeElement.innerText = "finish";
        }
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const timeElement = document.getElementById("time-active");
    if (timeElement) {
        timeElement.innerText = `${days}天${hours}小時${minutes}分鐘${seconds}秒`;
    } else {
        console.warn("error");
    }

    remainingTime -= 1000;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
