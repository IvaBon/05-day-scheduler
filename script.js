

// moment made in the unit 5 mini project

var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#time-display').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
});
// make for loop to add times to block so it knows what time it is
var textHours=['9 AM','10 AM','11 AM','12 AM','1 PM', '2 PM','3 PM','4 PM', '5 PM']
var timeOfDay=['9','10','11','12','13','14','15','16','17']

// need to to make timeblock dynamically
var container=$('.container')
var block= $('.time-block');
var text=$('.description');
var button=$('.saveBtn');
var saves=[];

//fucniton to make rows and add classes
function makeRow(){
    for(var i =0; i < textHours.length; i++){
     var row=$('<div>').addClass('row time-block');
     var time=$('<h3>').addClass('col-2 hour').text(textHours[i]);
     var text=$('<textarea>').addClass('col-8 description');
     text.attr('id',timeOfDay.indexOf(timeOfDay[i]));
     var button=$('<button>').addClass('col-2 saveBtn')
     container.append(row)
     row.append(time,text,button);
    }
    if (saves[i]){
        text.val(saves[i])
    }
}
makeRow();
// now 

button.on('click', function(){
    e.preventDefault();
    localStorage.setItem('hr9text',hr9.value);

    
});