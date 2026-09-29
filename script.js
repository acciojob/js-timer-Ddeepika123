// write js code here if required
function showTimer() {
    let date = new Date();

    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();

    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    document.getElementById("timer").innerText =
        `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}
showTimer();
setInterval(showTimer, 1000);

