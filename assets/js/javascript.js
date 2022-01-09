var momentVar = moment();
$("#currentDay").text(momentVar.format('dddd, MMMM Do'));
var currentTime = momentVar.format('HH:00');

function timeIndicator(elements){
    elements.forEach(t =>{
        if(t.dataset.time === currentTime){
            t.children[1].classList.add("present");
        }
        else if(t.dataset.time < currentTime){
            t.children[1].classList.add("past");
        }
        else{
            t.children[1].classList.add("future");
        }
    })
}

var fullDayHours = 
    Array.from(new Array(24)).map((val, i) => {
        return moment().hour(i).format('HH:00');
    });

fullDayHours.forEach((i) => {
    var timetableBlock = $(`<form data-time=${i} class=row></form>`);
    var blockTime = $(`<div class="hour"><p class="hourText">${i}</p></div>`);
    var entryField = $(`<textarea time=${i} class=textarea></textarea>`);
    var saveButton = $(`<button class=saveBtn><i class="fas fa-save"></i></button>`);
    timetableBlock.append(blockTime);
    timetableBlock.append(entryField);
    timetableBlock.append(saveButton);
    $(".container").append(timetableBlock);
});

var containerChildren = Array.from(document.getElementById("container").children);
timeIndicator(containerChildren);