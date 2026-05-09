import './style.css'
import {displayFooter, homedisplay, fooddisplay, drinksdisplay,initialhomecontentdisplay} from "./funky.js"

document.querySelector('#app').innerHTML = `
<nav><p id="brandname">SnackIt </p><button id="home-btn">Home</button><button id="food-btn">Foodzzz</button><button id="drinks-btn">Sippy</button></nav>
<br>
<br>
<div id="card-container">
<div class="card-container-content" id="home"></div>

<div class="card-container-content hidden" id="food"></div>
<div class="card-container-content hidden" id="drinks"></div>
<br>
</div>
<footer id="justconsole"></footer>
`
initialhomecontentdisplay();

document.getElementById("home-btn").addEventListener("click",homedisplay);
document.getElementById("food-btn").addEventListener("click",fooddisplay);
document.getElementById("drinks-btn").addEventListener("click",drinksdisplay);

displayFooter();

