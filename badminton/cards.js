
function ShowCategory(){
    AddSection("Category")
    AddCategory("Men's Single","single","men",false,"event.html?category=mens-single", "")
    AddCategory("Women's Single","single","women",false,"event.html?category=womens-single", "")
    AddCategory("Men's Double","double","men",false,"event.html?category=mens-double")
    AddCategory("Women's Double","double","women",false,"event.html?category=womens-double")
    AddCategory("Mixed Double","double","mix",true,"event.html?category=mix-double")
    /*
    AddCategory("single", "men", "Men's Single", true);
    AddCategory("single", "women", "Women's Single", false);
    AddCategory("double", "men", "Men's Double", false);
    AddCategory("double", "women", "Women's Double", false);
    AddCategory("double", "mix", "Mixed Double", false);
    */
}


function PlayerCards() {
    // Add all players here
    AddSinglePlayer("Anirban Kopty", "mAle");
    AddSinglePlayer("Ranit Behera", "feMale");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "female");
}

function ScheduleCards() {
    
}

function Table() {
    
}