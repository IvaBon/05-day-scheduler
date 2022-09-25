

// moment made in the unit 5 mini project

var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#time-display').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
});
//telling browser what time it is
var timeRN=moment().format('HH')
console.log(timeRN)
// make for loop to add times to block so it knows what time it is
var textHours=['9 AM','10 AM','11 AM','12 AM','1 PM', '2 PM','3 PM','4 PM', '5 PM']
var timeOfDay=['09','10','11','12','13','14','15','16','17']

// need to to make timeblock dynamically
var container=$('.container')
var block= $('.time-block');
var text=$('.description');
var button=$('.saveBtn');
var saves=[];

// var clickButton=$('button')
//fucniton to make rows and add classes
// function makeRow(){
    var button=$('<button>').addClass('col-2 saveBtn').text('save');
    button.attr('type','button');

function pullText(){
    if(JSON.parse(localStorage.getItem("text"))){
        saves = JSON.parse(localStorage.getItem("text")); 
      };
        
}  

    for(var i =0; i < textHours.length; i++){
        pullText();
     var row=$('<div>').addClass('row time-block');
     var time=$('<h3>').addClass('col-2 hour').text(textHours[i]);
     var text=$('<textarea>').addClass('col-8 description');
     text.attr('id',timeOfDay.indexOf(timeOfDay[i]));
     var button=$('<button>').addClass('col-2 saveBtn').text('save');
     button.attr('type','button');
     container.append(row)
     row.append(time,text,button);
     
     checkTime();
      // any saved values with auto populate
     if (saves[i]){
        text.val(saves[i])
    }

    //  button that pushes to text to local storage
     button.on("click",function(){
        console.log("click")
        var text= [];
        for(var i=0;i < timeOfDay.length;i++){
            text.push($('textarea')[i].value)
        }
        saves=text;
        localStorage.setItem('text',JSON.stringify(saves))
        
        
    })

  
    }
   
   


    // console.log(timeOfDay[i])
    // attempt to have color change with time

// }

// makeRow();
function checkTime(){
    // for(var i =0; i < timeOfDay.length; i++){
     if (timeRN < timeOfDay[i]){
         text.addClass('future');
     } else if(timeRN > timeOfDay[i]){
          text.addClass('past');
     } else {
          text.addClass('present')
     }
    console.log(timeOfDay[i])
//    }  
}


   
    // button.on("click",function(){
       
    //     console.log("click")
    // })
