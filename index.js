//1
var str = "Backend As A Service";
var letters = [];
var string = str.split(" ");
Array.prototype.push.apply(letters, string); 
console.log(letters);
//2
var one = 5;
var date = new Date(2019,02,20,13,21,51);
function type(str) {
	if (typeof one == 'number') {
  		alert(date);
} else {
  alert("Неверный тип данных");
}
}
type();
//3








var arr = [];
for ( i = 0; i < 7; i++ ) {
    arr.push( Math.round( Math.random() * 100 ));
if (50 < arr[i])
    alert("i = "+arr[i]);
} console.log(arr);