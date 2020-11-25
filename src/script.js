let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let time_id;

document.form_main.start.onclick = (event) => start();
document.form_main.pause.onclick = (event) => pause();
document.form_main.reset.onclick = (event) => reset();

//------start func-------
let start = (event) => {
  pause();
  time_id = setInterval(() => {
    console.log(time_id);
    timer();
  }, 10);
};
//-----pause func-------
let pause = (event) => {
  clearInterval(time_id);
};
//------reset func------
let reset = (event) => {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  //   document.getElementById("millisecond").innerText = "000";
};
//---------timer func-------
let timer = () => {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  //   document.getElementById("millisecond").innerText = returnData(millisecond);
};
//---------input data func--------
let returnData = (input) => {
  return input > 9 ? input : `0${input}`;
};
