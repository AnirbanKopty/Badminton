// Auto detect number of tabs and adjust CSS
tabbar = document.getElementsByClassName("tabbar")[0]
num_tabs = tabbar.childElementCount;
tabbar.style.setProperty('--num-tabs', num_tabs);

// Tab switching
var tabs=document.getElementsByClassName("tab");
for(let i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){TabClick(this);})}

function TabClick(sender){
    for(let i=0;i<tabs.length;i++){tabs[i].classList.remove("active");}
    sender.classList.toggle("active");
}


// --- CARD SPECIFIC
function ProcessPlayerCards(){
    cards = document.getElementsByClassName("card players");
    for (c=0; c<cards.length;c++){
        card = cards[c];

        html = ""
        players = card.children

        for (p=0;p<players.length;p++){
            player = players[p]
            html += player.outerHTML

            // Add Icon
            html += "<div class=\"icon material-symbols-outlined\">";
                // player_class=card.className.split(' ');
                player_class=card.children[p].className.split(' ');
                // player_class=card.getElementsByClassName("name")[0].className.split(' );

                if (player_class.includes("male")){html += "face";}
                else if(player_class.includes("female")){html += "face_3";}
                else{html += "no_accounts";}
            html += "</div>"
        }
        
        card.innerHTML = html;
    }
}
ProcessPlayerCards()



function ProcessCategoryCards(){
    cards = document.getElementsByClassName("card category");
    for (c=0; c<cards.length;c++){
        card = cards[c];
        html = card.innerHTML
            
        card_class=card.className.split(' ');
        // Add Icon
        /*
        if (card_class.includes("single")){
            html += "<span class=\"icon material-symbols-outlined\">";
            if (card_class.includes("men")){html += "man";}
            else if(card_class.includes("women")){html += "woman";}
            else{html += "man";}
            html += "</span>"
        }else if (card_class.includes("double")){
            for (i=0;i<2;i++){
                html += "<span class=\"icon material-symbols-outlined\">";
                if (card_class.includes("men")){html += "man";}
                else if(card_class.includes("women")){html += "woman";}
                else{html += "man";}
                html += "</span>"
            }
        }else{

        }
        */
        html += "<span class=\"icon material-symbols-outlined\"></span>";

        card.innerHTML = html;
    }
        
}
ProcessCategoryCards()