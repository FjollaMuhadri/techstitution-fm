/*console.log("Hello world from Script.js");
var age=prompt("Enter your age");
/*var kalkulo=mosha*365;
alert(mosha+" years is roughly " + kalkulo   +  " days" );


if(age<18)
{
alert("Sorry, you are not old enough to enter here");
}
else if (age<21)
{
	alert("You can enter but cant drink");

}
else
{
	alert("Come on in.");
}
*/

/*var age=prompt("Enter your age");
var ageInt = parseInt(age); /*Per me konvertu stringun ne number
if(ageInt<0)
{
	alert("Error")
}
else if(ageInt===21)
{
	alert("Happy 21st birthday")
}
else if(ageInt % 2 != 0 )
{
    alert("Your age is odd")
}*/

/*var count=0;
while(count < 11)
{
	console.log("count is: " + count)
	count++;
}
*/



//i shfaq numrat prej -10 deri ne -19*/
 /*var nr= -10;  
while(nr >= -10 && nr<=40)
{
	if(nr % 2 == 0 )
    {
    	console.log(nr)
    }
	nr++;
}*/


/* printon numrat prej -10 deri ne 19
for(var nr=-10; nr>=-10&&nr<=19; nr++)
{
	console.log(nr)
}*/

//Funksionet 
/*function doSomething()
{
	console.log("HelloWorld")

}
doSomething();


function test(x)
{console.log(x);
	return x * 2;
	return x / 2;

}
test(40);
*/

/*function isEven(x)
{

if(x %2 === 0)
{
return true;}
else{
	return false;
}
}

var a = isEven(4);
console.log(a);
var b= isEven(21);
console.log(b);

var c=isEven(68);
console.log(c);
*/

//init array
/*var friends=["charlie","Sam","erza"];


//JS Objects 

var person={
	name: "Fjolla", age: 21, city: "PR"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person["name"]);*/

$(document).ready(function(){
	Highcharts.chart('container', {

    title: {
        text: 'Techstitution'
    },

    subtitle: {
        text: 'Grafiku'
    },

    yAxis: {
        title: {
            text: 'Numer'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
$('#trigger').click(function(){
	alert("Trigger is clicked");
	$('body').css('color','purple');

});

});











