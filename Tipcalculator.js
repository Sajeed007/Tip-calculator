
//alert(percentage);

function calculate(){
    var bill_amount =document.getElementById("bill").value;
var rateing =  document.getElementById("service").value;
var persons =document.getElementById("split").value;

var percentage =( bill_amount * rateing ) / 100;
    var answer = percentage / persons;
    document.getElementById("show").innerHTML = 'Tip amount Per person:' + answer;
}

document.body.style.backgroundColor = '#F291ED';