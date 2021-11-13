let catbutton = document.querySelector(".catbutton");
let catstage = document.querySelector("#catstage");
let catpics = [];
let catCount = 0;
catbutton.addEventListener("click", showcats);

function preload() {
fetchcats();
fetchcats();
fetchcats();
fetchcats();
}
function fetchcats() {
	fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', {
	  mode: 'cors',
	  headers: {
	    'Access-Control-Allow-Origin':'*',
	    'x-api-key': 'f2f8d007-8f66-4340-b643-d898bd0c2efc'
	  }
	})
	  .then(response => response.json())
	  .then(data => {
		let catImgUrl = data[0].url;
		catpics.push(catImgUrl);
	})
}
var odd = true;
function showcats() {
	let catImgElement = document.createElement("img");
	catImgElement.src = catpics[catpics.length - 1];
	if (odd) 
		catImgElement.classList.add("catimg_1");
	else
		catImgElement.classList.add("catimg_2");
	catstage.appendChild(catImgElement);
	catImgElement.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
	catpics.pop();
	fetchcats();

	odd = !odd;
	catCount++;
	changebutton();
}

function changebutton() {
	if (catCount >= 90)
		catbutton.innerText = "ĐẠT TỚI CẢNH GIỚI MÈO!";
	else if (catCount > 50)
		catbutton.innerText = "HÃY CHO TÔI MÈO!!!"
	else if (catCount > 20)
		catbutton.innerText = "MEOW MEOW MEOW!!!";
	else if (catCount > 10)
		catbutton.innerText = "MEOW MEOW MEOW?";
	else if (catCount > 2)
		catbutton.innerText = "THÊM MÈO?";
}
