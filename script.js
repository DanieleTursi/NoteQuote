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

let quotesArr=[
	'The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela',
    'Life is what happens when you are busy making other plans. -John Lennon',
	'You must be the change you wish to see in the world. — Gandhi',
	'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing. — George Bernhard Shaw',
	'Most people do not listen with the intent to understand; they listen with the intent to reply.— Stephen Covey'
]

let ran = document.querySelector("#gen");
let randomP= document.querySelector("#random");

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

ran.addEventListener ("click", ()=>{
    input.value = getRandomItem(quotesArr);
})


const quotes=[];
const getQuote= async (query) => {
    const url = `https://api.paperquotes.com/quotes?tags=love,life&language=en`
    await fetch(url)
        .then((res) => res.text())
        .then((text) => text.length ? JSON.parse(text) : {})
        .then(data => { quotes.push(data); }) //api data will be visible in your browser console. 
        .catch(err => console.warn("ERROR", err));
    console.log(quote);
};
