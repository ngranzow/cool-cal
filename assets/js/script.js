var currentDay = document.getElementById("currentDay")
var currentTime = moment();
var currentHour = currentTime.hour();

window.onload = function () {
    displayCurrentDate();
    displayTimeBlock();
}

// use moment.js to disply date
function displayCurrentDate() {
    var momentTime = moment().format('dddd, MMMM Do');
    currentDay.textContent = momentTime;
}

function displayTimeBlock() {
    // working hours 9-18 (9-6)
    for (let i = 9; i = 18; i++) {
        var timeBlock = createTBRow(i);
        var hourCol = createHourCol(i);
        var textArea = createTextArea(i, currentHour);
        var saveBtn = createSaveBtn(i);
        document.querySelector(".container").appendChild(timeBlock, hourCol, textArea, saveBtn);
    }
}

function createTBRow() {
    var timeBlock = document.createElement("div");
    timeBlock.classList.add("row", "time-block");
    return timeBlock;
}

function createHourCol(hour) {
    var hourCol = document.createElement("div");
    hourCol.classList.add("hour", "col-1", "p-0");
    hourCol.textContent = formatHour(hour);
    return hourCol;
}

function formatHour(hour) {
    var hourString = String(hour);
    return moment(hourString, "h").format("ha");
}

function createTextArea(currentHour) {
    var textArea = document.createElement("textarea");
    textArea.classList.add("col-10", "p-0");
    if (textArea < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (textArea === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    } else if (textArea > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }

    return textArea;
}

function createSaveBtn(hour) {
    var saveBtn = document.createElement("button");
    saveBtn.classList.add("saveBtn");
    saveBtn.innerHTML = "<i class='fas fa-save'></i>";
    saveBtn.setAttribute("data-hour", hour);
    return saveBtn;
}