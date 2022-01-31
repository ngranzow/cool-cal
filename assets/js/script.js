$(document).ready(function() {
    // display date using momentjs
    $("#currentDay").text(moment().format("MMMM, YYYY Do"));

    $(".saveBtn").on("click", function() {
        // saves text and id to local storage upon clicking button
        var time = $(this).siblings(".col-md-10").attr("id");
        var text = $(this).siblings(".col-md-10").val();

        localStorage.setItem(time, text);
    });

    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    $("#18").val(localStorage.getItem("18"));

    $(".col-md-10").each(function() {
        var currentHour = moment().hour();
        var idHour = parseInt($(this).attr("id"));

        if (idHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (idHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

        // for (var i = 9; i < 19; i++) {
        //     if (i < currentHour) {
        //         classList.add("past");
        //         classList.remove("present");
        //         classList.remove("future");
        //     }
        //     else if (i === currentHour) {
        //         classList.remove("past");
        //         classList.add("present");
        //         classList.remove("future");
        //     }
        //     else {
        //         classList.remove("past");
        //         classList.remove("present");
        //         classList.add("future");
        //     }
        // }
    })    
})