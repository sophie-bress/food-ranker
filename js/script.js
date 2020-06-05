/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	var color = ['salmon','tomato','orange','lemonchiffon','papayawhip','peachpuff','cornsilk','blanchedalmond','bisque','wheat','chocolate','olive','lime','cornflowerblue','lavender','plum','honeydew','mintcream'];

	var len = color.length;

	for (var i=0; i<len; i++) {

		$('.list').append('<div class="item" itemno="' + i + '">' + color[i] + '</div>');

	}

	//change colors

	$('.item').each(function(i){

		$(this).css({'background-color': color[i] });

	});

	//click submit button and make new array

	var newlist = [];

	$('.clicker').click(function(){

		$('.item').each(function(i){

			newlist[i] = Number($(this).attr('itemno'));

			console.log(newlist);

		});

		// $('.resultsbox').empty();

		var len2 = newlist.length

		for (var i=0; i<len; i++) {

			$('.resultsbox').append(
					'<div class="newitem">' 
					+ '<img src="img/food/' + color[newlist[i]] + '.jpg">'
					+ '<h4>' + color[newlist[i]] + '</h4>'
					+ '<p> Ranked: ' + (i+1) + '</p>'
					 + '<p> Previously: ' + (newlist[i] + 1) + '</p>' + '</div>' );

					$('.newitem').each(function(i){

						$(this).css({'background-color': color[newlist[i]] });

					});

		}

			
		

	});

	//make sortable

	$('.list').sortable();




}); //end document.ready block
