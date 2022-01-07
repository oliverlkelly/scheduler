var momentVar = moment();
$("#currentDay").text(momentVar.format('dddd, MMMM Do'));
var currentTime = momentVar.hour();


var fullDayHours = 
    Array.from(new Array(24)).map((val, i) => {
        return moment().hour(i).format('HH:00');
    });

fullDayHours.forEach((i) => {
    var timetableBlock = $(`<form data-name=${i} class=row></form>`);
    var blockTime = $(`<div class="hour time-block">${i}</div>`);
    var entryField = $(`<textarea name=${i} class=textarea></textarea>`);
    var saveButton = $(`<button class=saveBtn><i class="fas fa-save"></i></button>`);
    timetableBlock.append(blockTime);
    timetableBlock.append(entryField);
    timetableBlock.append(saveButton);
    $(".container").append(timetableBlock);
});