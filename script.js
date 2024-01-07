// Auto detect number of tabs and adjust CSS
tabbar = document.getElementsByClassName("tabbar")[0]
if(tabbar!=null){
    num_tabs = tabbar.childElementCount;
    tabbar.style.setProperty('--num-tabs', num_tabs);
}

// URL parameters
urlParams = new URLSearchParams(window.location.search);
function GetURLParameter(key){return urlParams.get(key);}
function GetActiveTab(){return document.getElementsByClassName("tab active")[0].innerText}


shelf_content = document.getElementsByClassName("shelf")[0].getElementsByClassName("content")[0];


// Tab switching
var tabs=document.getElementsByClassName("tab");
for(let i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){TabClick(this);})}

function TabClick(sender){
    // Tab switching CSS
    for(let i=0;i<tabs.length;i++){tabs[i].classList.remove("active");}
    sender.classList.toggle("active");
    
    // Tab interaction JS
    shelf_content.innerHTML = "";
    FillCards();
}

// This function is called every time tab is changed
title=document.getElementsByClassName('title')[0]
function FillCards(){
    category = GetURLParameter('category');
    tab = GetActiveTab();
    switch(category) {
        case "mens-single":
            console.log('hello')
            title.innerText="Men's Single";
            break;
        case 'womens-single':
            title.innerText="Women's Single";
            break;
        case 'mens-double':
            title.innerText="Men's Double";
            break;
        case 'womens-double':
            title.innerText="Women's Double";
            break;
        case 'mix-double':
            title.innerText="Mix Double";
            break;
        default:
            console.log("case default");
      }

}












// By Anirban
function Gender_Icon(gender){
    if (gender.toLowerCase() == 'male') {icon = "face";}
    else if (gender.toLowerCase() == 'female') {icon = "face_3";}
    else {icon = "remove";}
    return icon;
}

// Card Area
function AddSection(section_name){
    html = "<div class=\"card section span2\">"+section_name+"</div>";
    shelf_content.innerHTML += html;
}

function AddText(text){
    html = "<div class=\"card text span2 \">" + text+"</div>";
    shelf_content.innerHTML += html;
}


function AddSinglePlayer(name, gender){
    icon = Gender_Icon(gender);
    html  = "<div class=\"card players single\">";
    html += "<div class=\"name\">"+name+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddDoublePlayer(name1, gender1, name2, gender2) {
    icon1 = Gender_Icon(gender1);
    icon2 = Gender_Icon(gender2);
    html  = "<div class=\"card players double\">";
    html += "<div class=\"name\">"+name1+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon1+"</div>";
    html += "<div class=\"name\">"+name2+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon2+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddCategory(card_title, single_or_double, gender, live,href, span2="span2") {
    html  = "<a href=\"" + href +"\">";
    html += "<div class=\"card game-category " + single_or_double + " " + gender + " span2 " + "\">";
    html += "<div class=\"text\">";
    html += "<div class=\"name\">"+ card_title +"</div>";
    if (live == true){
        html += "<div ><span class=\"live\">LIVE</span></div>";
    } else {
        html += "<div ><span class=\"live hide\">LIVE</span></div>";
    }
    html += "</div>";
    html += "<div class=\"icon material-symbols-outlined\">";
    // <!-- Implement control by here -->
    // <!-- Right now by CSS -->
    // <!-- Alignment Issue via HTML -->
    html += " </div>"; /* Add at least one character (even whitespace) otherwise css letter-spacing will break*/
    html += "</div>";
    html += "</a>";
    shelf_content.innerHTML += html;
}


// 
// 
function ChangeTheme(){
    console.log("Test");
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    if(document.body.classList.split(' ').includes("theme-dark")){
        document.body.style.backgroundColor="black";
    }else{
        document.body.style.backgroundColor="white";
    }
}
// 
// 