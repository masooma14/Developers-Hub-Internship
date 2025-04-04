function startCountdown(durationInSeconds) {
    let countdownElement = document.querySelector('.countdown');
    let interval = setInterval(() => {
        let days = Math.floor(durationInSeconds / (24 * 3600));
        let hours = Math.floor((durationInSeconds % (24 * 3600)) / 3600);
        let minutes = Math.floor((durationInSeconds % 3600) / 60);
        let seconds = durationInSeconds % 60;

        countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Min ${seconds} Sec`;

        if (durationInSeconds <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Deal Expired!";
        }

        durationInSeconds--;
    }, 1000);
}

startCountdown(345600); // Example: 4 Days
