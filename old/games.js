

// Tab Change
var tabs=document.getElementsByClassName("tab");
for(let i=0;i<tabs.length;i++){tabs[i].addEventListener('click',function(){TabClick(this);})}

function TabClick(sender){
    for(let i=0;i<tabs.length;i++){tabs[i].classList.remove("active");}
    sender.classList.toggle("active");
}


