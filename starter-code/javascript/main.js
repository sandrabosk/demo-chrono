var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
  printMinutes(minutes);
  printSeconds(seconds);
}

function printMinutes(minutes) {
  try {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
  } catch (error) {
    console.log(error);
  }

}

function printSeconds(seconds) {
  try {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
  } catch (error) {
    console.log(error);
  }

}

function printMilliseconds(miliseconds) {
  try {
    milDec.innerHTML = miliseconds[0];
    milUni.innerHTML = miliseconds[1];
  } catch (error) {
    console.log(error);
  }

}

function printSplit(time) {
  try {
    let ulSplits = document.getElementById('splits');
    let newLi = document.createElement('li');
    let timeText = document.createTextNode(time);
  
    newLi.appendChild(timeText);
  
    ulSplits.appendChild(newLi);
  } catch (error) {
    console.log(error);
  }

}

function clearSplits() {
  let ulSplits = document.getElementById('splits');
  ulSplits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  } else {
    chronometer.splitClick();
  }

});
