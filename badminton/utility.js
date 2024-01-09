function GetDate(){
    var today = new Date();
    var dd = String(today.getDate());
    var mon = today.toLocaleString('default', { month: 'short' });
    return dd + " " + mon;
}

function GetIndices(category,gender){
    // cannot handle gender to be an array
    indices = [];
    for (let i=0;i<players.length;i++){
        if (players[i].category.map(s => s.toLowerCase()).includes(category)){
            if (gender==null){indices.push(i)}
            else if (players[i].gender.toLowerCase()==gender.toLowerCase()){indices.push(i);}       
        }
    }
    return indices;
}

function GetIndex(name){for (let i=0;i<players.length;i++){if (players[i].name == name){return i;}}}

function GetIndicesSchedule(category){
    indices = [];
    for (let d=0;d<schedule.length;d++){
        for (let m=0;m<schedule[d].matches.length;m++){
            if (schedule[d].matches[m].category.toLowerCase() == category){
                indices.push([d,m]);
            }
        }
    }
    return indices;
}


function GetNames(indices){return indices.map(i => players[i].name)}
function GetGenders(indices){return indices.map(i => players[i].gender)}
function GetCategory(indices){return indices.map(i => players[i].category)}
function GetPartner(indices){return indices.map(i => players[i].partner)}
// These functions, using 'map', can't handle if single index is given


function GetGenderOf(index){return players[index].gender;}
function GetPartnerOf(index){return players[index].partner;}
function GetMixedPartnerOf(index){return players[index].mixed_partner;}




// data manipulation for scores and points ----------------
// creating placeholder for points for everyone

// utility script is never used this way
// anyway
// utility script only provide helper function
// they themselved never execute any code
// standard namings
// you come from callin scripts to one function, and only look at that function body
// not the whole utility script 
// anyways
// anyways
// anyways

for (let i=0;i<players.length;i++){
    if (players[i].category.includes('single')){players[i].points_singles = 0;}
    if (players[i].category.includes('double')){players[i].points_doubles = 0;}
    if (players[i].category.includes('mixed double')){players[i].points_mixed = 0;}
}

// creating placeholder for score difference for every match
for (let d=0;d<schedule.length;d++){
    for (let m=0;m<schedule[d].matches.length;m++){
        schedule[d].matches[m].score_diff = 0;
    }
}


function CalculatePoints(category){
    // Calculates the points and push it directly to data.js schedule
    date_today = parseInt(GetDate().split(" ")[0]);
    date_today = 10;
    indices = GetIndicesSchedule(category);

    for (let i in indices){
        i = parseInt(i);
        d = indices[i][0];
        m = indices[i][1];
        match_date = parseInt(schedule[d].date.split(" ")[0]);
        match_type = schedule[d].match_type;
        player1 = schedule[d].matches[m].player1;
        player2 = schedule[d].matches[m].player2;
        // time = schedule[d].matches[m].time;
        score1 = schedule[d].matches[m].score1;
        score2 = schedule[d].matches[m].score2;

        score1 = [score1].flat()
        score2 = [score2].flat()
        player1 = [player1].flat()
        player2 = [player2].flat()
        
        if(score1[0]==null){score1[0]=0;}
        if(score1[1]==null){score1[1]=0;}
        if(score1[2]==null){score1[2]=0;}
        
        if(score2[0]==null){score2[0]=0;}
        if(score2[1]==null){score2[1]=0;}
        if(score2[2]==null){score2[2]=0;}
        
        let p1_data = players[GetIndex(player1[0])];
        let p2_data = players[GetIndex(player2[0])];
        
        // All Points logic here --------------------------
        if (match_type == 'Group Stages'){
            if (date_today > match_date){
            //! This works only if whole tournament is in the same month
    
                if (category.includes('single')){
                    p1_points = p1_data.points_singles;    //<-- where are you initialising points_single
                    p2_points = p2_data.points_singles;
                } else {
                    if (category.includes('mix')){
                        p1_points = p1_data.points_mixed;
                        p2_points = p2_data.points_mixed;
                    } else {
                        p1_points = p1_data.points_doubles;
                        p2_points = p2_data.points_doubles;
                    }
                }
    
                // The logic for points
                max_score = 21;
                win_reward_pt = 1;      // win point
                score_diff = (score1[0] + score1[1] + score1[2] - score2[0] - score2[1] - score2[2]);
                schedule[d].matches[m].score_diff = score_diff;
                score_diff_f = score_diff/max_score;
                if (score_diff_f > 0){p1_points += win_reward_pt;}
                else if (score_diff_f < 0){p2_points += win_reward_pt;} // but here it gets only once
                p1_points += score_diff_f;
                p2_points -= score_diff_f;

                // explain your code and wiring to me after two month
                // hmmmm


                if (category.includes('single')){
                    p1_data.points_singles = p1_points;
                    p2_data.points_singles = p2_points;
                } else {
                    if (category.includes('mix')){
                        p1_data.points_mixed = p1_points;
                        p2_data.points_mixed = p2_points;
                    } else {
                        p1_data.points_doubles = p1_points;
                        p2_data.points_doubles = p2_points;
                    }
                }
            }
        }
    }

}


// calculating points each time browser loads
// Not good - we should maintain a data file (json) and update the file
// CalculatePoints("mens-single");