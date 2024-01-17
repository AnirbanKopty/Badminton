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

function GetIndicesScheduleAll(){
    indices = [];
    for (let d=0;d<schedule.length;d++){
        for (let m=0;m<schedule[d].matches.length;m++){
                indices.push([d,m]);
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


function GetFirstName(name){return name.split(" ")[0];}


function sort_by_property(list, property_name_list, order='ascending') {
    list.sort((a, b) => {
      for (var p = 0; p < property_name_list.length; p++) {
        prop = property_name_list[p];
        if (order.toLowerCase()=='descending'){
            if (a[prop] > b[prop]) {
            return -1;
            } else if (a[prop] !== a[prop]) {
            return 1;
            }
        } else {
            if (a[prop] < b[prop]) {
            return -1;
            } else if (a[prop] !== a[prop]) {
            return 1;
            }
        }
      }
      return 0;
    });
  }

  function ValidateScore(score1, score2){
    // preliminary maintainer input validation
    // not needed if mantainer inputs correctly
    // --------------------------------------------------------------------------------------
    score1 = [score1].flat();
    score2 = [score2].flat();
    if(score1[0]==null){score1[0]=0;}
    if(score1[1]==null){score1[1]=0;}
    if(score1[2]==null){score1[2]=0;}
    
    if(score2[0]==null){score2[0]=0;}
    if(score2[1]==null){score2[1]=0;}
    if(score2[2]==null){score2[2]=0;}
  }


function CalculatePoints(category){
    // Calculates the points and push it directly to data.js schedule
    date_today = parseInt(GetDate().split(" ")[0]);
    date_today = 13;
    indices = GetIndicesSchedule(category);

    for (let i in indices){
        i = parseInt(i);
        d = indices[i][0];
        m = indices[i][1];
        match_date = parseInt(schedule[d].date.split(" ")[0]);
        if ('match_type' in schedule[d].matches[m]){match_type = schedule[d].matches[m].match_type;}
        else{match_type = schedule[d].match_type;}
        player1 = schedule[d].matches[m].player1;
        player2 = schedule[d].matches[m].player2;
        // time = schedule[d].matches[m].time;
        score1 = schedule[d].matches[m].score1;
        score2 = schedule[d].matches[m].score2;
        
        // // if womens-single and group stages then `max_score_round`=15 instead of 21; this data feeded to CalculatePoints_each()
        // if(category=='womens-single' && match_type == 'Group Stages'){max_score_round=15;}
        // else{max_score_round=21;}

        score1 = [score1].flat()
        score2 = [score2].flat()
        player1 = [player1].flat()
        player2 = [player2].flat()
        
        ValidateScore(score1, score2);

        let p1_data = players[GetIndex(player1[0])];
        let p2_data = players[GetIndex(player2[0])];
        
        // Points Calculation and setting variables ------------------------
        if (match_type == 'Group Stages'){
            console.log("P1 : ", p1_data.name, " P2 : ", p2_data.name);
            if (category.includes('single')){
                console.log("Before:: p1_points: ", p1_data.points_singles, " p2_points: ", p2_data.points_singles);
                [p1_point_match, p2_point_match] = CalculatePoints_each(score1, score2);
                
                // integrating willing team idea
                if ('willing_team' in schedule[d].matches[m]){
                    if (schedule[d].matches[m].willing_team == 'player1'){p1_point_match=0;} else
                    if (schedule[d].matches[m].willing_team == 'player2'){p2_point_match=0;}
                }
                p1_data.points_singles += p1_point_match;
                p2_data.points_singles += p2_point_match;
                
                console.log("willing team : ", schedule[d].matches[m].willing_team);
                console.log("After:: p1_points: ", p1_data.points_singles, " p2_points: ", p2_data.points_singles);

            } else {
                if (category.includes('mix')){
                    console.log("Before:: p1_points: ", p1_data.points_mixed, " p2_points: ", p2_data.points_mixed);
                    [p1_point_match, p2_point_match] = CalculatePoints_each(score1, score2);
                    
                    // integrating willing team idea
                    if ('willing_team' in schedule[d].matches[m]){
                        if (schedule[d].matches[m].willing_team == 'player1'){p1_point_match=0;} else
                        if (schedule[d].matches[m].willing_team == 'player2'){p2_point_match=0;}
                    }
                    p1_data.points_mixed += p1_point_match;
                    p2_data.points_mixed += p2_point_match;
                    
                    console.log("willing team : ", schedule[d].matches[m].willing_team);
                    console.log("After:: p1_points: ", p1_data.points_mixed, " p2_points: ", p2_data.points_mixed);
                    
                } else {
                    console.log("Before:: p1_points: ", p1_data.points_doubles, " p2_points: ", p2_data.points_doubles);
                    [p1_point_match, p2_point_match] = CalculatePoints_each(score1, score2);
                    
                    // integrating willing team idea
                    if ('willing_team' in schedule[d].matches[m]){
                        if (schedule[d].matches[m].willing_team == 'player1'){p1_point_match=0;} else
                        if (schedule[d].matches[m].willing_team == 'player2'){p2_point_match=0;}
                    }
                    
                    // console.log(p2_data)

                    p1_data.points_doubles += p1_point_match;
                    p2_data.points_doubles += p2_point_match;
                    
                    console.log("willing team : ", schedule[d].matches[m].willing_team);
                    console.log("After:: p1_points: ", p1_data.points_doubles, " p2_points: ", p2_data.points_doubles);
                }
            }
            console.log(" ");
        }
    }

}

function CalculatePoints_each(score1, score2){
    // For the logic for points, see `Readme.md`
    let max_score_diff = 0;

    let p1_round_win = 0;
    let p2_round_win = 0;
    
    let p1_point = 0;
    let p2_point = 0;

    let score_diff = 0;
    let score_diff_f = 0;

    // each round analysis
    for (let r in score1){
        max_score_diff += Math.max(score1[r], score2[r]);
        score_diff_round = score1[r] - score2[r];
        if(score_diff_round > 0){p1_round_win+=1;}
        else if (score_diff_round < 0){p2_round_win+=1;}
        score_diff += score_diff_round;
        console.log("round", r, ": p1_score - ", score1[r], " p2_score - ", score2[r]);
        console.log("round", r, ": p1_round_win - ", p1_round_win, " p2_round_win - ", p2_round_win);
        console.log("score_diff_round : ", score_diff_round);
    }
    
    // match result
    // max_score_diff = max_score_round * (p1_round_win+p2_round_win);
    console.log("score_diff_total : ", score_diff);
    console.log("max_score_diff : ", max_score_diff);
    if (max_score_diff!=0){
        // To avoid NaN for match that did not happen
        score_diff_f = score_diff/max_score_diff;
        p1_point += p1_round_win + score_diff_f +1;  // +1 for playing the match
        p2_point += p2_round_win - score_diff_f +1;
    }
    console.log("score_diff_f : ", score_diff_f);

    return [p1_point, p2_point];
}
