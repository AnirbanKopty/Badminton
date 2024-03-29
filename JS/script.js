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

function ScrollToHL(){
    hl_card = document.getElementsByClassName("highlight")[0];
    if (hl_card != null){hl_card.scrollIntoView();}
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
                PlayerCards('single', 'male');
            } else 
            if (tab == 'Events'){
                EventCards(category);
                ScrollToHL();
                
            } else
            if (tab == 'Table'){
                AddSection("Points Table");
                Table('single', 'male');
            }
            break;
        case 'womens-single':
                title.innerText="Women's Single";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('single', 'female');
            } else
            if (tab == 'Events'){
                EventCards(category);
                ScrollToHL();
                
            } else 
            if (tab == 'Table'){
                AddSection("Points Table");
                Table('single', 'female');
                
            }
            break;
        case 'mens-double':
            title.innerText="Men's Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('double', 'male')
            } else
            if (tab == 'Events'){
                EventCards(category);
                ScrollToHL();
                
            } else 
            if (tab == 'Table'){
                AddSection("Points Table");
                Table('double', ['male','male']);
            }
            break;
        case 'womens-double':
            title.innerText="Women's Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('double', 'female')
            }
            if (tab == 'Events'){
                EventCards(category);
                ScrollToHL();
                
            } else 
            if (tab == 'Table'){
                AddSection("Points Table");
                // Table('double', ['female','female']);
                AddText("No Table due to not enough participants.")
            }
            break;
        case 'mix-double':
            title.innerText="Mixed Double";
            if (tab == 'Players'){
                AddSection("Players");
                PlayerCards('mixed double', 'male') 
                // this takes only male as first participant
            }
            if (tab == 'Events'){
                EventCards(category);
                ScrollToHL();
                
            } else
            if (tab == 'Table'){
                AddSection("Points Table");
                // Table('mixed-double', ['male','female']);
                AddText("No Table due to not enough participants.")
            }
            break;
        // case 'all':
        //     break;
        default:
            console.log("case default");
        }
        
        // AddShortCredits();
        
    }
    
