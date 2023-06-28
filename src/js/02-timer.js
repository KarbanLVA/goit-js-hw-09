import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const buttonStart = document.querySelector('[data-start]');

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
let timer = null;

buttonStart.disabled = true;

const options = {
  enableTime: true,  
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,   
  onClose(selectedDates) {
    console.log(selectedDates[0]);    
    if (selectedDates[0] < options.defaultDate) {
      console.log(window.alert("Please choose a date in the future"));
    } else {
      buttonStart.disabled = false; 
    }    
    buttonStart.addEventListener('click', () => {
      timer = setInterval(() => {
        delta = new Date() - selectedDates[0];        
        convertMs(delta);
        console.log(convertMs(delta));
        stopTimer();
      }, 1000);
      function stopTimer() {        
        if (selectedDates[0] - new Date() <= 999) {
          clearInterval(timer);
        }
      }
    });
  }
};

flatpickr(datetimePicker, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);  
  const hours = Math.floor((ms % day) / hour);  
  const minutes = Math.floor(((ms % day) % hour) / minute);  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
  // secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;


  return { days, hours, minutes, seconds };
}





