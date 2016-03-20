
var getAverage = function(){
$.getJSON("weather.json", function(json){
	var array = $.map(json.list, function(x) 
		{return x}); //^object to array^
		sumtotal = 0;
		for (i = 0; i < array.length; i++) {
			sumtotal += array[i].main.temp;
		}
		var average = (sumtotal / array.length)
		console.log(average);
})};

getAverage();