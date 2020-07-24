/**
*
* Clock to add to a web page.
*
* Must have the folowing
*
* Load JQuery before this
* add <div class="dmjClock"></div> to html file
*
* dmjClock
* author Don Jensen
*
**/
const month_names = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const day_names = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function DmjClock(options) {

  // Variables
  this.options = options || {};
  this.yearDiv = $('<span class="dmjYear"></span>');
  this.monthDiv = $('<span class="dmjMonth"></span>');
  this.dateDiv = $('<span class="dmjDate"></span>');
  this.hoursDiv = $('<span class="dmjHour"></span>');
  this.minutesDiv = $('<span class="dmjMinute"></span>');
  this.dayOfWeekDiv = $('<span class="dmjDOW"></span>');
  this.ampmDiv = $('<span class="dmjAmPm"></span>');

  // Functions
  this.setUpDmjClock = function () {

    // append to the domain
    const baseDiv = $('.' + this.options.baseDivClass);
    if(baseDiv.length > 0){

      baseDiv.append(
        this.dayOfWeekDiv,
        this.monthDiv,
        this.dateDiv,
        this.yearDiv,
        this.hoursDiv,
        this.minutesDiv,
        this.ampmDiv
      );

    }

  };

  this.startDmjClock = function () {

    // Get the current date
    const currentDate = new Date();

    if (currentDate.getHours() > 12) {
      this.hoursDiv.text(currentDate.getHours() - 12);
      this.ampmDiv.text('PM');
    } else {
      this.hoursDiv.text(currentDate.getHours());
      this.ampmDiv.text('AM');
    }

    this.dayOfWeekDiv.text(day_names[currentDate.getDay()]);
    this.monthDiv.text(month_names[currentDate.getMonth()]);
    this.dateDiv.text(currentDate.getDate());
    this.yearDiv.text(currentDate.getFullYear());
    this.minutesDiv.text(pad(currentDate.getMinutes(), 2));

    setInterval(this._runClock, 15000, this);

  };


  this._runClock = function (context) {

    // Get the current date
    const currentDate = new Date();

    if (currentDate.getHours() > 12) {
      context.hoursDiv.text(currentDate.getHours() - 12);
      context.ampmDiv.text('PM');
    } else {
      context.hoursDiv.text(currentDate.getHours());
      context.ampmDiv.text('AM');
    }

    context.dayOfWeekDiv.text(day_names[currentDate.getDay()]);
    context.monthDiv.text(month_names[currentDate.getMonth()]);
    context.dateDiv.text(currentDate.getDate());
    context.yearDiv.text(currentDate.getFullYear());
    context.minutesDiv.text(pad(currentDate.getMinutes(), 2));

  };

}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
