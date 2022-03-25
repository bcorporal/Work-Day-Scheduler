// Clock in realtime at top of page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
window.setInterval(function () {
$('#currentDay').html(moment().format('ddd MM/DD/y hh:mm:ss'))
}, 1000);
// button event to local storage
$(document).ready(function () {
	$(".saveBtn").on("click", function () {
	var text = $(this).prev(".textarea").val();
	var time = $(this).prev().attr("id");
	localStorage.setItem(time, JSON.stringify(text));
	});
// timeblock color properties
	var currentHour = new Date().getHours();
	$(".blocks").each(function () {
		var val = parseInt($(this).prop("id"));
		if (val > currentHour) {
			$(this).addClass("future");
		} else if (val < currentHour) {
			$(this).addClass("past");
		} else if (val == currentHour) {
			$(this).addClass("present");
		}
	});
});
// local storage
//  var saveButton = $(".saveBtn");
// saveButton.on("click", textarea);

// $function(".saveBtn").on("click", function() {
// 	var schedule = $(this).attr("id");
// 	$(this).text(localStorage.getItem(schedule))
// });


//  var saveButton = document.querySelector("#saveBtn");
//  saveButton.addEventListener("click", function(event) {
//  	event.preventDefault();



