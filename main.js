// Задание 1
function printWindowValues() {
	console.log(window);	
}
printWindowValues();

// Задание 2
var x;
function expTen(x) {
	var y=x;
	for (var i=1; i<10; i++){
		y=x*y;		
	}
	console.log(y);
} 
expTen(10);

// Задание 3
var x;
var y;
function getFuncRes(x,y){
	var z = x(y);
}
getFuncRes(console.log,"Hello World!");



	



