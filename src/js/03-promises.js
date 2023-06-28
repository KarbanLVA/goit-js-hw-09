const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const buttonSubmit = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;  
  const promise = new Promise ((resolve, reject) => { 
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }    
    }, delay);
    })   
  promise.then(data => console.log(data)).catch(error => console.log(error));
};

const repeatPromise = function(event) {
  event.preventDefault();
  let startDelay = Number(inputDelay.value);  
  for (let i = 1; i <= inputAmount.value; i += 1) {
    createPromise(i, startDelay);
    startDelay += Number(inputStep.value);     
  }
};

buttonSubmit.addEventListener('click', repeatPromise);































































