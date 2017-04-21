console.log("events.js");

var output = document.getElementById("output-target");

var clickedOn = document.getElementsByClassName("article-section");
	console.log("article-section", clickedOn);
	for(var i = 1; i < clickedOn.length; i++){
		clickedOn.item(i).addEventListener("click", clickedSection)

}

function clickedSection(event){
	console.log("event", event);
	var clicked = event.target.innerHTML;
	output.innerHTML = "You've clicked on " + clicked;
}

var header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event){
	output.innerHTML = "You moved your mouse over the header";
}

function handleHeaderMouseOut(event){
	output.innerHTML = "You left me!";
}


var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("blue")
	});


document.getElementById("make-large")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("large")
	});

document.getElementById("add-border")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("bordered")
	});

document.getElementById("add-rounding")
	.addEventListener("click", function(){
		guineaPig.classList.toggle("rounded")
	})

