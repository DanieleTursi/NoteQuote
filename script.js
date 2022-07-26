var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteBtns = document.querySelectorAll(".delbut");
var ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
  }

  for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function addListAfterClick() {
	if (input.value.length > 0) {
	var li = document.createElement("li");
	var btn=document.createElement("button");
	li.appendChild(document.createTextNode("\""+input.value + "\""));
	btn.appendChild(document.createTextNode("REMOVE"));
	btn.onclick = removeParent;
	ul.appendChild(li);
	btn.classList.add('delbut')
	li.appendChild(btn);
	input.value = "";
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		addListAfterClick();
	}
}
 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeThrough)
