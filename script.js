
var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#time-display').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
        
});

