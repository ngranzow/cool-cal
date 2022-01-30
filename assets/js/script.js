var currentDay = document.getElementById("currentDay")

function currentTime () {
    var momentTime = moment().format('dddd, MMMM Do');
    currentDay.textContent = momentTime;
};



currentTime();