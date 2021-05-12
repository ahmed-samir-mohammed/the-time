const clockElement = document.getElementById("clock");

const setCurrentTime = () => {
  clockElement.innerText = new Date().toLocaleTimeString();
};

setInterval(setCurrentTime, 1000);
