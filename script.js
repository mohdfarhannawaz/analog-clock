const hour_el = document.querySelector(".hours");
const minute_el = document.querySelector(".minutes");
const second_el = document.querySelector(".seconds");

function update_clock() {
    const current_date = new Date();
    const hour = current_date.getHours();
    const minute = current_date.getMinutes();
    const second = current_date.getSeconds();
    
    const hour_deg = (hour/12) * 360;
    hour_el.style.transform = `rotate(${hour_deg}deg)`;
    const minute_deg = (minute/60) * 360;
    minute_el.style.transform = `rotate(${minute_deg}deg)`;
    const second_deg = (second/60) * 360;
    second_el.style.transform = `rotate(${second_deg}deg)`;

}

setInterval(update_clock, 1000);