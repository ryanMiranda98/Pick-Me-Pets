const countdown = () => {
  const dateToCountdown = new Date("July 1 2021 00:00:00").getTime();
  const getCurrentDate = new Date().getTime();

  const countdown = dateToCountdown - getCurrentDate;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(countdown / day);
  const textHour = Math.floor((countdown % day) / hour);
  const textMinute = Math.floor((countdown % hour) / minute);
  const textSecond = Math.floor((countdown % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);
