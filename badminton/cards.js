function ShowCategory(){
    AddSection("Category")
    AddCategory("Men's Single","single","men",false,"event.html?category=mens-single")
    AddCategory("Women's Single","single","women",false,"event.html?category=womens-single")
    AddCategory("Men's Double","double","men",false,"event.html?category=mens-double")
    AddCategory("Women's Double","double","women",false,"event.html?category=womens-double")
    AddCategory("Mixed Double","double","mix",false,"event.html?category=mix-double", "span2")
}


// data manipulation----------------------------------------------

// // creating placeholder for score difference for every match
// for (let d=0;d<schedule.length;d++){
//     for (let m=0;m<schedule[d].matches.length;m++){
//         schedule[d].matches[m].score_diff = 0;
//     }
// }

// to handle duplicates in doubles
// quickfix: we delete the partner's double entry dynamically from data.js
function HandleDuplicates(category){

    if (category == 'mixed double'){
        let indices = GetIndices(category, 'female');
        for (let i of indices){
            let ci = players[i].category.indexOf('mixed double');
            if (ci > -1){players[i].category.splice(ci, 1);}
        }

    } else if (category == 'double') {
        let handled_names = [];
        let indices = GetIndices(category);
        let names = GetNames(indices);
        let names2 = [];
        for (i in names) {
            names2.push([names[i], GetPartnerOf(indices[i])]);
        }
        names = names2;
        
        for (let i in indices){
            let player = names[i][0];
            let partner = names[i][1];
    
            if ( !(handled_names.includes(player)) ) {
                index_partner = GetIndex(partner);
                let ci = players[index_partner].category.indexOf('double');
                if (ci > -1){players[index_partner].category.splice(ci, 1);}
                handled_names.push(partner);
            }
        }
    }
    
}

HandleDuplicates('double');
HandleDuplicates('mixed double');

// creating placeholder for points for everyone
for (let i=0;i<players.length;i++){
    if (players[i].category.includes('single')){players[i].points_singles = 0;}
    if (players[i].category.includes('double')){players[i].points_doubles = 0;}
    if (players[i].category.includes('mixed double')){players[i].points_mixed = 0;}
}



// cards
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


// Schedules
function EventCards(category){
    // category = 'mens singles', ...
    indices = GetIndicesSchedule(category);

    // quickfix
    if (category == 'mens-single'){gender = 'male';}
    if (category == 'womens-single'){gender = 'female';}
    if (category == 'mens-double'){gender = ['male', 'male'];}
    if (category == 'womens-double'){gender = ['female', 'female'];}
    if (category == 'mix-double'){gender = ['male', 'female'];}

    
    let j=0;
    let k=0;
    for (let i in indices){
        i = parseInt(i);
        d = indices[i][0];
        m = indices[i][1];
        date = schedule[d].date;
        // get match_type
        if ('match_type' in schedule[d].matches[m]){match_type = schedule[d].matches[m].match_type;}
        else {match_type = schedule[d].match_type;}
        player1 = schedule[d].matches[m].player1;
        player2 = schedule[d].matches[m].player2;
        score1 = schedule[d].matches[m].score1;
        score2 = schedule[d].matches[m].score2;
        // time = schedule[d].matches[m].time;
        result_msg = schedule[d].matches[m].result;
        
        // preliminary maintainer input validation
        // not needed if mantainer inputs correctly
        // --------------------------------------------------------------------------------------
        if(score1[0]==null){score1[0]=0;}
        if(score1[1]==null){score1[1]=0;}
        if(score1[2]==null){score1[2]=0;}
        
        if(score2[0]==null){score2[0]=0;}
        if(score2[1]==null){score2[1]=0;}
        if(score2[2]==null){score2[2]=0;}
        
        if (match_type == 'Group Stages'){
            if (i==0){AddSection("Group Stages");}
            AddEvent("Match "+(i+1).toString(), date, "6+ PM", player1, player2, gender, score1, score2, result_msg);
        } else 
        if (match_type == 'Semi Finals'){
            if (j==0){AddSection("Semi Final")}
            AddEvent("Semi Final "+(j+1).toString(), date, "6+ PM", player1, player2, gender, score1, score2, result_msg);
            j+=1;
        } else 
        if(match_type == 'Finals'){
            if (k==0){AddSection('Final')}
            AddEvent("Final", date, "6+ PM", player1, player2, gender, score1, score2, result_msg, 'span2');
            k+=1;
        }
    }

}


// Tables
function Table(category, gender) {
    gender = [gender].flat();
    indices = GetIndices(category, gender[0]);     // gender needs to be a string
    names = GetNames(indices);
    points = [];

    // handling partner name for doubles and getting points data
    switch (category) {
        case 'single':
            for (let i of indices){
                points.push(players[i].points_singles)
            }
            break;
        case 'double':
            names2 = [];
            for (i in names) {
                names2.push([names[i], GetPartnerOf(indices[i])]);
            }
            names = names2;
            for (let i of indices){
                points.push(players[i].points_doubles)
            }
            break;
        case 'mixed double':
            names2 = [];
            for (i in names) {
                names2.push([names[i], GetMixedPartnerOf(indices[i])]);
            }
            names = names2;
            for (let i of indices){
                points.push(players[i].points_mixed)
            }
            break;
        default:
            break;
    }

    // to sort the names according to points
    var list = [];
    for (let j in names){list.push({'name':names[j], 'point':points[j]});}
    list.sort(function(a, b) {
        return ((a.point > b.point) ? -1 : ((a.point == b.point) ? 0 : 1));});
    // sort_by_property(list, ['point', 'name']);
    for (let j in list){names[j]=list[j].name;points[j]=list[j].point};
    
    AddPoints(category, names, gender, points)
}
