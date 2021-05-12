const clockElement = document.getElementById("clock");

const currentTime = () => {
  clockElement.innerText = new Date().toLocaleTimeString();
};

setInterval(currentTime, 1000);
