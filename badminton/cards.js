function ShowCategory(){
    AddSection("Category")
    AddCategory("Men's Single","single","men",false,"event.html?category=mens-single")
    AddCategory("Women's Single","single","women",false,"event.html?category=womens-single")
    AddCategory("Men's Double","double","men",false,"event.html?category=mens-double")
    AddCategory("Women's Double","double","women",false,"event.html?category=womens-double")
    AddCategory("Mixed Double","double","mix",false,"event.html?category=mix-double", "span2")
}


function PlayerCards(category, gender){
    indices = GetIndices(category, gender);
    names = GetNames(indices);
    if (category == 'single'){
        for (i in indices){
            AddSinglePlayer(names[i], gender)
        }
    } else if (category == 'double'){
        for (i in indices){
            AddDoublePlayer(names[i], gender, GetPartner(indices)[i], gender);
        }
    } else if (category == 'mixed double'){
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

// Now, gotta fetch events from schedule 
function EventCards(category){
    // category = 'mens singles', ...
    indices = GetIndicesSchedule(category);

    // quickfix
    if (category == 'mens-single'){gender = 'male';}
    if (category == 'womens-single'){gender = 'female';}
    if (category == 'mens-double'){gender = ['male', 'male'];}
    if (category == 'womens-double'){gender = ['female', 'female'];}
    if (category == 'mix-double'){gender = ['male', 'female'];}

    for (i in indices){
        i = parseInt(i);
        d = indices[i][0];
        m = indices[i][1];
        date = schedule[d].date;
        player1 = schedule[d].matches[m].player1;
        player2 = schedule[d].matches[m].player2;
        score1 = schedule[d].matches[m].score1;
        score2 = schedule[d].matches[m].score2;
        // time = schedule[d].matches[m].time;
        AddEvent("Match "+(i+1).toString(), date, "6+ PM", player1, player2, gender, score1, score2);
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


function Table(category, gender) {
    gender = [gender].flat();
    indices = GetIndices(category, gender[0]);     // gender needs to be a string
    names = GetNames(indices);
    points = [];

    if (category == 'double'){
        names2 = [];
        for (i in names) {
            names2.push([names[i], GetPartner(indices)[i]]);
        }
        names = names2;
    } else if (category == 'mixed double'){
        names2 = [];
        for (i in names) {
            names2.push([names[i], GetMixedPartnerOf(indices[i])]);
        }
        names = names2;
    }

    
    if (category == 'single'){
        for (let i of indices){
            points.push(players[i].points_singles)
        }
    } else if (category == 'double'){
        for (let i of indices){
            points.push(players[i].points_doubles)
        }
    } else if (category == 'mixed double'){
        for (let i of indices){
            points.push(players[i].points_mixed)
        }
    }

    // if (points == null){points = Array(indices.length).fill(0);}
    
    AddPoints(category, names, gender, points)
}


// Table('mixed doubles', 'male');