
var weatherAPI = "http://api.openweathermap.org/data/2.5/box/city?bbox=-125,28,-68,49&cluster=yes&units=imperial&APPID=7e537b40eee13813ab75948536f6de90&callback=?"

//top left 49.056411, -124.902756
//bottom right 27.926771, -68.034433
var getAverage = function(){
$.getJSON(weatherAPI, function(json){
	var array = $.map(json.list, function(x) 
		{return x}); //^object to array^
		sumtotal = 0;
		for (i = 0; i < array.length; i++) {
			sumtotal += array[i].main.temp;
		}
		var average = (sumtotal / array.length)
		average = parseFloat(average).toFixed(2);
		console.log(average);
})};

getAverage();