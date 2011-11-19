//--------------------------------------->
//-- main.js
// Author: Joseph Malone            
// Course: Advanced SDI
// Term  : 1111 Instructor: Rick Osborne
// Date  : November 09, 2011           
// ---------------------------------------->

$(document).ready(function() {
	$('#view1 a').click(function (){
		$('#nicelist').empty();
		$.ajax({
			"url": '/jmaloneasd/_design/jmaloneasd/_view/gifts',
			"dataType": "json",
			"success": function(data) {
				$.each(data.rows, function(index, gifts){
					var whofor = gifts.value.whofor;
                	var item = gifts.value.item;
                	var note = gifts.value.note;
                	var bought = gifts.value.bought;
                	var wrapped = gifts.value.wrapped;
                	$(''+
                		'<li>'+
                			'<h3 class="ui-li-aside">'+ bought +"--"+ wrapped +'</h3>'+
                			'<h2>'+ whofor +'</h2>'+
                			'<p>'+"Gift : "+ item +'</p>'+
                			'<p>'+"Note : "+ note +'</p>'+
                		'</li>'	
                	).appendTo('#nicelist');
				});
			}
		});
	});
	$('#view2 a').click(function (){
		$('#nicelist').empty();
		$.ajax({
			"url": "/jmaloneasd/_design/jmaloneasd/_view/stockings",
			"dataType": "json",
			"success": function(data) {
				$.each(data.rows, function(index, stockings){
					var whofor = stockings.value.whofor;
                	var item = stockings.value.item;
                	var note = stockings.value.note;
                	var bought = stockings.value.bought;
                	var wrapped = stockings.value.wrapped;
                	$(''+
                		'<li>'+
                			'<h3 class="ui-li-aside">'+ bought +"--"+ wrapped +'</h3>'+
                			'<h2>'+ whofor +'</h2>'+
                			'<p>'+"Gift : "+ item +'</p>'+
                			'<p>'+"Note : "+ note +'</p>'+
                		'</li>'	
                	).appendTo('#nicelist');
				});
			}
		});
	});
	$('#view3 a').click(function (){
		$('#nicelist').empty();
		$.ajax({
			"url": "/jmaloneasd/_design/jmaloneasd/_view/dinners",
			"dataType": "json",
			"success": function(data) {
				$.each(data.rows, function(index, dinners){
					var whofor = dinners.value.whofor;
                	var item = dinners.value.item;
                	var note = dinners.value.note;
                	var bought = dinners.value.bought;
                	var wrapped = dinners.value.wrapped;
                	$(''+
                		'<li>'+
                			'<h3 class="ui-li-aside">'+ bought +"--"+ wrapped +'</h3>'+
                			'<h2>'+ whofor +'</h2>'+
                			'<p>'+"Gift : "+ item +'</p>'+
                			'<p>'+"Note : "+ note +'</p>'+
                		'</li>'	
                	).appendTo('#nicelist');
				});
			}
		});
	});
	$('#view4 a').click(function (){
		$('#nicelist').empty();
		$.ajax({
			"url": "/jmaloneasd/_design/jmaloneasd/_view/others",
			"dataType": "json",
			"success": function(data) {
				$.each(data.rows, function(index, others){
					var whofor = others.value.whofor;
                	var item = others.value.item;
                	var note = others.value.note;
                	var bought = others.value.bought;
                	var wrapped = others.value.wrapped;
                	$(''+
                		'<li>'+
                			'<h3 class="ui-li-aside">'+ bought +"--"+ wrapped +'</h3>'+
                			'<h2>'+ whofor +'</h2>'+
                			'<p>'+"Gift : "+ item +'</p>'+
                			'<p>'+"Note : "+ note +'</p>'+
                		'</li>'	
                	).appendTo('#nicelist');
				});
			}
		});
	});
	$('#clrlist a').click(function (){
		$('#nicelist').empty();
	});
});
