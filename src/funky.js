function displayFooter(){
    let justconsole=document.getElementById("justconsole");
    justconsole.innerHTML=`
        <p id="contactus">Contact Us</p>
        <p>Hp: 2374387139423443</p>
        <p>Email: sefhslilfvfnnlisnb@siugf.com</p>
    `;
}

function initialhomecontentdisplay(){
    let home=document.getElementById("home");
    home.innerHTML=`
    <div class="title-heading">Operating Hours</div>
    <div>Mon-Sun 6am to 3am (Excluding Public Holiday)</div>
    <div class="title-heading">Location</div>
    <div id="addr">Address: 987 John Marr Ave, Wakaka, WA 12345</div>
    `;
}

function homedisplay(){
    let home=document.getElementById("home");
    let food=document.getElementById("food");
    let drinks=document.getElementById("drinks");
    home.classList.remove("hidden");
    food.classList.add("hidden");
    drinks.classList.add("hidden");
    initialhomecontentdisplay();
}

function fooddisplay(){
    let home=document.getElementById("home");
    let food=document.getElementById("food");
    let drinks=document.getElementById("drinks");
    food.classList.remove("hidden");
    home.classList.add("hidden");
    drinks.classList.add("hidden");
    food.innerHTML=`
    <div class="title-heading">Food Menu</div>
    
    `;
}

function drinksdisplay(){
    let home=document.getElementById("home");
    let food=document.getElementById("food");
    let drinks=document.getElementById("drinks");
    drinks.classList.remove("hidden");
    home.classList.add("hidden");
    food.classList.add("hidden");
    drinks.innerHTML=`
    <div class="title-heading">Beverages</div>
    
    `;
}

export {displayFooter,fooddisplay,drinksdisplay,homedisplay,initialhomecontentdisplay};