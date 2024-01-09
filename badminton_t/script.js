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

// Tab switching
var tabs=document.getElementsByClassName("tab");
for(let i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){TabClick(this);})}

function TabClick(sender){
    // Tab switching CSS
    for(let i=0;i<tabs.length;i++){tabs[i].classList.remove("active");}
    sender.classList.toggle("active");
    
    // Tab interaction JS
    FillShelf();
}

window.onload = function() {
    FillShelf();
    highlight = document.getElementsByClassName("highlight")[0].scrollIntoView()
};


// -------------------------------------
function FillShelf(){
    // Reset Shelf Content
    shelf_content = document.getElementsByClassName("shelf")[0].getElementsByClassName("content")[0];
    shelf_content.innerHTML = "";

    // Get DOM
    tabbar = document.getElementsByClassName("tabbar")[0];
    title=document.getElementsByClassName('title')[0];
    
    // Get URL parameter and tab active status
    category = GetURLParameter('category');
    tab = GetActiveTab().toLowerCase();
    
    // Show hide tabbar
    // Change banner title
    // Fill shelf
    if (category=="category"){
        tabbar.classList.add("hide");
        title.innerText = "Badminton"
        FillShelf_Category();
    }else{
        tabbar.classList.remove("hide");

        switch (category){
            case "mens-single":
                title.innerText = "Men's Single";break;
            case "womens-single":
                title.innerText = "Women's Single";break;
            case "mens-double":
                title.innerText = "Men's Double";break;
            case "womens-double":
                title.innerText = "Women's Double";break;
            case "mix-double":
                title.innerText = "Mixed Double";break;
            default:
                console.log("default");
        }

        switch(tab){
            case "players":
                FillShelf_Players(category);break;
            case "events":
                FillShelf_Events(category);break;
            case "table":
                FillShelf_Table(category);break;
            default:
                FillShelf_Players(category);
        }
    }

}
