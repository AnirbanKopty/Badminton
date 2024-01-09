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
            title.innerText="Men's Single";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('singles', 'male');
            } else 
            if (tab == 'Schedule'){
                AddSection("Schedule");
                // EventCards_test();                   // !
                EventCards('mens singles');                   // !
                
            } else
            if (tab == 'Table'){
                AddSection("Table");
                // Table_test();                        // !
                Table('doubles', 'male');                        // !
                
            }
            break;
            case 'womens-single':
                title.innerText="Women's Single";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('singles', 'female');
            } else
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards('womens singles');                   // !
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                Table('singles', 'female');                        // !
                
            }
            break;
            case 'mens-double':
                title.innerText="Men's Double";
                if (tab == 'Players'){
                    AddSection("Players");
                    PlayerCards('doubles', 'male')
                } else
                if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards('mens doubles');                   // !
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                
            }
            break;
            case 'womens-double':
            title.innerText="Women's Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('doubles', 'female')
            }
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards('womens doubles');                   // !
                
            } else 
            if (tab == 'Table'){
                AddSection("Table");
                
                }
            break;
        case 'mix-double':
            title.innerText="Mixed Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('mixed doubles', 'male') 
                // this takes only male as first participant
            }
            if (tab == 'Schedule'){
                AddSection("Schedule");
                EventCards('mixed doubles');                   // !
                
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



//

