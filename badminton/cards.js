AddSection("WorkingSection");
AddText("It's workinggggg");

function ShowCategory(){
    AddCategory("single", "men", "Men's Single", true);
    AddCategory("single", "women", "Women's Single", false);
    AddCategory("double", "men", "Men's Double", false);
    AddCategory("double", "women", "Women's Double", false);
    AddCategory("double", "mix", "Mixed Double", false);
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