

// moment made in the unit 5 mini project
var timer= null;

$(document).ready(function(){
    timer = setInterval(function(){
        $('#time-display').text(moment().format("MMM DD, YYYY h:mm:ss a"));
    },1000);
        
});

var text=$('textarea.text');
console.log(text)
var button=$('button');
// var textInfo=[' '];
console.log(button)

// function when save button is clikced the text 
//  is saved in the local storage 


function saveText() {
    
    localStorage.setItem('textInfo',(text.value))



    var storedText =(localStorage.getItem('textInfo'))
    console.log(storedText)
}



button.on('click', function(e){
    e.preventDefault();
    saveText();

});