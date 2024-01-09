function ShowCategory(){
    AddSection("Category")
    AddCategory("Men's Single","single","men",false,"event.html?category=mens-single")
    AddCategory("Women's Single","single","women",false,"event.html?category=womens-single")
    AddCategory("Men's Double","double","men",false,"event.html?category=mens-double")
    AddCategory("Women's Double","double","women",false,"event.html?category=womens-double")
    AddCategory("Mixed Double","double","mix",true,"event.html?category=mix-double", "span2")
}


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
            partner = GetMixedPartnerOf(indices[i]);
            AddDoublePlayer(names[i], 'male', partner, 'female');
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


// Schedules
function EventCards_test() {
    AddEvent("Match 1", "5 Jan", "6:00 PM", ["Anirban Kopty", "Ranit Behera"], ["Gopal Prabhu", "Sudhir Gholap"], ["male", "male"], [12,10,10], [10,10,10]);
    AddEvent("Match 1", "5 Jan", "6:00 PM", ["Anirban Kopty"], ["Ranit Behera"], "male", [12,10, null], [10,11]);
    AddEvent("Match 1", "9 Jan", "6:00 PM", "Anirban Kopty", "Ranit Behera", "male", 12, 10, "hello");
}

//! Now, gotta fetch events from schedule ...
function EventCards(category){
    // category = 'mens singles', ...
    indices = GetIndicesSchedule(category);

    // quickfix
    if (category == 'mens singles'){gender = 'male';}
    if (category == 'womens singles'){gender = 'female';}
    if (category == 'mens doubles'){gender = ['male', 'male'];}
    if (category == 'womens doubles'){gender = ['female', 'female'];}
    if (category == 'mixed doubles'){gender = ['male', 'female'];}

    for (i in indices){
        i = parseInt(i)
        date = schedule[indices[i][0]].date;
        player1 = schedule[indices[i][0]].matches[indices[i][1]].player1;
        player2 = schedule[indices[i][0]].matches[indices[i][1]].player2;
        score1 = schedule[indices[i][0]].matches[indices[i][1]].score1;
        score2 = schedule[indices[i][0]].matches[indices[i][1]].score2;
        // time = schedule[indices[i][0]].matches[indices[i][1]].time;
        AddEvent("Match "+(i+1).toString(), date, "6 PM", player1, player2, gender, score1, score2);
    }

}

// Tables - testing
function Table_test() {
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


function Table(category, gender, points) {
    gender = [gender].flat();
    indices = GetIndices(category, gender[0]);     // gender needs to be a string
    names = GetNames(indices);

    if (category == 'doubles'){
        names2 = [];
        for (i in names) {
            names2.push([names[i], GetPartner(indices)[i]]);
        }
        names = names2;
    } else if (category == 'mixed doubles'){
        names2 = [];
        for (i in names) {
            names2.push([names[i], GetMixedPartnerOf(indices[i])]);
        }
        names = names2;
    }

    if (points == null){points = Array(indices.length).fill(0);}

    if (category == 'singles'){
        // ! change the single to singles in css
        // ! or change singles to single in data
        // ! or make them equal
        AddPoints("single", names, gender, points)
    } else if (category == 'doubles'){
        for (i in indices){
            AddPoints("double", names, gender, points)
        }
    } else if (category == 'mixed doubles'){
        for (i in indices){
            AddPoints("double", names, gender, points)
        }
    }
}


// Table('mixed doubles', 'male');