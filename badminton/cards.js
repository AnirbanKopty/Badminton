
function ShowCategory(){
    AddSection("Category")
    AddCategory("Men's Single","single","men",false,"event.html?category=mens-single")
    AddCategory("Women's Single","single","women",false,"event.html?category=womens-single")
    AddCategory("Men's Double","double","men",false,"event.html?category=mens-double")
    AddCategory("Women's Double","double","women",false,"event.html?category=womens-double")
    AddCategory("Mixed Double","double","mix",true,"event.html?category=mix-double", "span2")
}


// Players
// function PlayerCards2(category, gender){
//     indices = GetIndices(category, gender);
//     names = GetNames(indices);
//     if (category == 'singles'){
//         for (i in indices){
//             AddSinglePlayer(names[i], gender)
//         }GetMixedPartner(indices[i])                //??
//             AddDoublePlayer(names[i], gender, GetPartner(indices[i]), gender);
//         }
//     } else if (category == 'mixed doubles'){
//         for (i in indices){
//             partner = GetMixedPartner(indices[i])
//             // AddDoublePlayer(names[i], gender[0], GetMixedPartner(indices[i]), gender[1])
//             // AddDoublePlayer(names[i], gender[0], GetMixedPartner(indices[i]), GetGenderOf(GetMixedPartner(indices[i])));
//             AddDoublePlayer(names[i], gender[0], partner, GetGenders(partner));
//         }
//     }
// }

function PlayerCards(category, gender){
    indices = GetIndices(category, gender);
    names = GetNames(indices);
    if (category == 'singles'){
        for (i in indices){
            AddSinglePlayer(names[i], gender)
        }
    } else if (category == 'doubles'){
        for (i in indices){
            AddDoublePlayer(names[i], gender, GetPartner(indices)[i], gender);
        }
    } else if (category == 'mixed doubles'){
        for (i in indices){
            partner = GetMixedPartnerOf(indices[i])
            // AddDoublePlayer(names[i], gender[0], GetMixedPartner(indices[i]), gender[1])
            // AddDoublePlayer(names[i], gender[0], GetMixedPartner(indices[i]), GetGenderOf(GetMixedPartner(indices[i])));
            AddDoublePlayer(names[i], gender[0], partner, GetGenderOf(indices[i]));
        }
    }
}

// let me write GetGenderOfPartner(), that's not needed here btw -
// for mixed doubles there will be issue for double registration
// can't get it, anyways will check later, lemme test this first
// okay

// nice - btw, gotta handle duplicate cases - yep utility should handle this, okay!
// will do that tommorow while testing
// lets get a working model first - agreed!
// for double player second name should come from partner
// use getpartner utility

function MensSinglePlayerCards() {
    AddSinglePlayer("Anirban Kopty", "mAle");
    AddSinglePlayer("Anirban Kopty", "mAle");
    AddSinglePlayer("Anirban Kopty", "mAle");
    AddSinglePlayer("Anirban Kopty", "mAle");
    
}
function WomensSinglePlayerCards() {
    AddSinglePlayer("Anirban Kopty", "femAle");
    AddSinglePlayer("Anirban Kopty", "femAle");
    AddSinglePlayer("Anirban Kopty", "femAle");
    AddSinglePlayer("Anirban Kopty", "femAle");
    
}
function MensDoublePlayerCards() {
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "male");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "male");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "male");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "male");
    
}
function WomensDoublePlayerCards(){
    AddDoublePlayer("Anirban Kopty", "female", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "female", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "female", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "female", "Ranit Behera", "female");
    
}
function MixedDoublePlayerCards(){
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "female");
    AddDoublePlayer("Anirban Kopty", "male", "Ranit Behera", "female");

}

// Schedules
function EventCards() {
    AddEvent("Match 1", "05 Jan", "6:00 PM", ["Anirban Kopty", "Ranit Behera"], ["Gopal Prabhu", "Sudhir Gholap"], ["male", "male"], 12, 10);
    AddEvent("Match 1", "05 Jan", "6:00 PM", ["Anirban Kopty", "Ranit Behera"], ["Gopal Prabhu", "Sudhir Gholap"], ["male", "male"], 12, 10, "Team 1");
}

// Tables - testing
function Table() {
    names = ["Anirban Kopty", "Ranit Behera",
            "Gopal Prabhu", "Sudhir Gholap",
            "Raghav Gogia", "Rajesh Mondal", "Rajesh Maiti"]
    gender = "male"
    points = [4,5,2,5,0,4,2]
    AddPoints("single", names, gender, points);
    
    names = [["Anirban Kopty", "Ranit Behera"],
            ["Raghav Gogia", "Rajesh Mondal", "Rajesh Maiti"], //why 3 here,
            ["Gopal Prabhu", "Sudhir Gholap"]]
    gender = ["male", "female"]
    points = [4,5,2,5,0,4,2]
    AddPoints("double", names, gender, points)
}