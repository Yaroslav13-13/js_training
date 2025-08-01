const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

class Timer {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponent(deltaTime);

      console.log(time);
    }, 1000);
  }

  getTimeComponent(time) {
    const hours = (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    const mins = time(1000 * 60 * 60) / (1000 * 60);
    const secs = (time % (1000 * 60)) / 1000;
    return { hours, mins, secs };
  }
}

const time = new Timer();

startBtn.addEventListener("click", time.start);
