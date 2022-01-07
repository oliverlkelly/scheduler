var momentVar = moment();
$("#currentDay").text(momentVar.format('dddd, MMMM Do'));
var currentTime = momentVar.hour();


var fullDayHours = 
    Array.from(new Array(24)).map((val, i) => {
        return moment().hour(i).format('HH:00');
    });

fullDayHours.forEach((i) => {
    var timetableBlock = $(`<form data-name="${i}"></form>`);
    $(".container").append(timetableBlock);
});