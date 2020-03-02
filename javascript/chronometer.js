// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
  this.milliIntervalId = 0;
  this.milliCurrentTime = 0;
  this.milliseconds = 0;

}

Chronometer.prototype.startClick = function () {
  let that = this;
  this.intervalId = setInterval(function() {
    // console.log(this, that);
    that.currentTime++;
    that.setTime();
    printTime(that.minutes, that.seconds, that.milliseconds); 
  },1000);

  this.milliIntervalId = setInterval(function() {
    that.milliCurrentTime++;
    that.milliseconds = that.twoDigitsNumber(that.setMilliseconds());
    printMilliseconds(that.milliseconds);
    if (that.milliseconds === 99) that.milliseconds = 0; 
  }, 10);
};

Chronometer.prototype.setMinutes = function () {
  return Math.floor(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return Math.floor(this.currentTime - this.setMinutes(this.currentTime) * 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  // console.log(number.length, typeof number);
  return (number.toString().length === 1) ? `0${number}` : number.toString();
};

Chronometer.prototype.setTime = function () {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

Chronometer.prototype.setMilliseconds = function () {
  return this.milliCurrentTime.toString().slice(-2);
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
  clearInterval(this.milliIntervalId);
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0;
  printTime('00', '00');
  printMilliseconds('00');
};

Chronometer.prototype.splitClick = function () {
  let time = `${this.minutes}:${this.seconds}:${this.milliseconds}`;
  printSplit(time);
};
