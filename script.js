
function updateWeekendCountdown() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    if (day === 6 || day === 0) {
        document.getElementById('message').innerText = "It's the Weekend! 🎉";
        document.getElementById('time-left').innerText = "Enjoy your time! 🎊";
        return;
    }

    const daysUntilSaturday = 6 - day;
    const hoursUntilSaturday = 24 - hours;
    const minutesUntilSaturday = 60 - minutes;
    const secondsUntilSaturday = 60 - seconds;

    document.getElementById('message').innerText = `Hang in there, it's almost weekend! 😎`;
    document.getElementById('time-left').innerText = `${daysUntilSaturday} days, ${hoursUntilSaturday} hours, ${minutesUntilSaturday} minutes, and ${secondsUntilSaturday} seconds until the weekend!`;

    setTimeout(updateWeekendCountdown, 1000);
}

updateWeekendCountdown();
