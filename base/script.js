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
    console.log("hello")
    
    switch(category) {
        case "mens-single":
            console.log(tab);
            title.innerText="Men's Single";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('single', 'male');
            } else 
            if (tab == 'Schedule'){
                AddSection("Schedule");
                console.log(category);
                EventCards(category);
                
            } else
            if (tab == 'Table'){
                AddSection("Table");
                // Table_test();    
                Table('single', 'male');    
                
            }
            break;
        case 'womens-single':
                title.innerText="Women's Single";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('single', 'female');
            } else
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards(category);
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                Table('singles', 'female');
                
            }
            break;
        case 'mens-double':
                title.innerText="Men's Double";
                if (tab == 'Players'){
                    AddSection("Players");
                    PlayerCards('double', 'male')
                } else
                if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards(category);
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                
            }
            break;
        case 'womens-double':
            title.innerText="Women's Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('double', 'female')
            }
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards(category);
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                
                }
            break;
        case 'mix-double':
            title.innerText="Mixed Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('mixed double', 'male') 
                // this takes only male as first participant
            }
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards(category);
                
            } else
            if (tab == 'Table'){
                AddSection("Table");
                
            }
            break;
        default:
            console.log("case default");
      }

}




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






function FillShelf(){
    key = GetURLParameter('key');         
    tab = GetActiveTab().toLowerCase();

    title=document.getElementsByClassName('title')[0];

    switch(key){
        case "":
            FillShelf_Tab1(key);break;
        case "tab2":
            FillShelf_Tab2(key);break;
        case "tab2":
            FillShelf_Tab3(key);break;
        default:
            FillShelf_Tab1(key);
    }



    shelf_content = document.getElementsByClassName("shelf")[0].getElementsByClassName("content")[0];
    shelf_content.innerHTML = "";

    switch(true){
        case (tab=="tab1"):
            FillShelf_Tab1(key);break;
        case (tab=="tab2"):
            FillShelf_Tab2(key);break;
        case (tab=="tab2"):
            FillShelf_Tab3(key);break;
        default:
            FillShelf_Tab1(key);
    }

}




