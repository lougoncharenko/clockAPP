//variables for my div classes
const hourHand= document.querySelector('.hour-hand');
const minHand= document.querySelector('.min-hand');
const secHand= document.querySelector('.second-hand');

//function
function setDate(){
  const now= new Date();
  const seconds= now.getSeconds();
  //console.log(seconds); used this to check if it works
  const secondsDeg=((seconds/60)*360)+90;
  secHand.style.transform= `rotate(${secondsDeg}deg)`;

  const minutes= now.getMinutes();
  const minDeg= ((minutes/60)*360)+90;
  minHand.style.transform= `rotate(${minDeg}deg)`;

  const hour= now.getHours();
  const hourDeg= ((hour/12)*360)+90;
  hourHand.style.transform= `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);//makes the function run every 1000ms(which is 1 second)
