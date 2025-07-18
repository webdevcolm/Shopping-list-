var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listall= document.querySelectorAll("li")

for (var i=0;i<listall.length;i++) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	listall[i].appendChild(btn);
  
  btn.onclick = function() {
    this.parentElement.style.display = "none";}
	
};


// for (const mist of listall) {
//   mist.addEventListener('click', function handleClick() {
//     mist.classList.toggle("done");
//   });
// }


// for (const mist of listall){
// var btn= document.createElement("button");
// btn.innerHTML= "delete";
// mist.appendChild(btn); }


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	 var deleteButton = document.createElement("button");

  deleteButton.appendChild(document.createTextNode("delete"));
  li.appendChild(deleteButton);
  deleteButton.onclick = function() {
    this.parentElement.style.display = "none";
  }
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function deleteElement() {
	
  
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

btn.addEventListener("click", deleteElement);

// btn.addEventListener("click", function(){
// 	const element = document.querySelector("li");
// element.remove(); });

