var momentVar = moment();
$("#currentDay").text(momentVar.format('dddd, MMMM Do'));
var currentTime = momentVar.format('HH:00');
var storage = window.localStorage;
var startTime = 6;
var dayLength = 17;

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
    Array.from(new Array(dayLength)).map((val, i) => {
        return moment().hour(i+startTime).format('HH:00');
    });

fullDayHours.forEach((i) => {
    var timetableBlock = $(`<form data-time=${i} class=row></form>`);
    var blockTime = $(`<div class="hour"><p class="hourText">${i}</p></div>`);
    var entryField = $(`<textarea time=${i} class=textarea>${storage.getItem(i) || ""}</textarea>`);
    var saveButton = $(`<button type="submit" class=saveBtn><i class="fas fa-save"></i></button>`);
    timetableBlock.submit((j) => {
        j.preventDefault();
        var value = $(`textarea[time="${i}"]`).val();
        storage.setItem(i, value);
    })
    timetableBlock.append(blockTime);
    timetableBlock.append(entryField);
    timetableBlock.append(saveButton);
    $(".container").append(timetableBlock);
});

var containerChildren = Array.from(document.getElementById("container").children);
timeIndicator(containerChildren);