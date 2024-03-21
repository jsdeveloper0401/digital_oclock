const hours = document.querySelector("#hrs");
const minut = document.querySelector("#mins");
const second = document.querySelector("#sec");

setInterval(() => {
    let currentTime = new Date();
    hours.innerHTML =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minut.innerHTML =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    second.innerHTML =
        (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
