function Gender_Icon(gender){
    if (gender.toLowerCase() == 'male' || gender.toLowerCase() == 'men') {icon = "face";}
    else if (gender.toLowerCase() == 'female' || gender.toLowerCase() == 'women') {icon = "face_3";}
    else {icon = "remove";}
    return icon;
}

// Card Area
function AddSection(section_name){shelf_content.innerHTML += "<div class=\"card section span2\">"+section_name+"</div>";}
function AddText(text){shelf_content.innerHTML += "<div class=\"card text span2 \">" + text+"</div>";}


function AddSinglePlayer(name, gender){
    icon = Gender_Icon(gender);
    html  = "<div class=\"card players single\">";
    html += "<div class=\"name\">"+name+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddDoublePlayer(name1, gender1, name2, gender2) {
    icon1 = Gender_Icon(gender1);
    icon2 = Gender_Icon(gender2);
    html  = "<div class=\"card players double\">";
    html += "<div class=\"name\">"+name1+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon1+"</div>";
    html += "<div class=\"name\">"+name2+"</div>";
    html += "<div class=\"icon material-symbols-outlined\">"+icon2+"</div>";
    html += "</div>";
    shelf_content.innerHTML += html;
}

function AddCategory(card_title, single_or_double, gender, live, href, span2="") {
    html  = "<a href=" + href + ">";
    html += "<div class=\"card game-category " + single_or_double + " " + gender + " " + span2 + "\">";
    html += "<div class=\"text\">";
    html += "<div class=\"name\">"+ card_title +"</div>";
    if (live == true){
        html += "<div ><span class=\"live\">LIVE</span></div>";
    } else {
        // html += "<div ><span class=\"live hide\">LIVE</span></div>";
    }
    html += "</div>";
    html += "<div class=\"icon material-symbols-outlined\">";
    // <!-- Implement control by here -->
    // <!-- Right now by CSS -->
    // <!-- Alignment Issue via HTML -->
    html += " </div>"; /* Add at least one character (even whitespace) otherwise css letter-spacing will break*/
    html += "</div>";
    html += "</a>";
    shelf_content.innerHTML += html;
}


// quick hacky fix as round string
function GetRoundDivHTML(round,score){
    html = "<div class=\"round" + round.toString() + " ";
    if(score==null || score==0){html+= "extra-grey";}
    html+= "\">";

    if(score==null){html+="00";}
    else{html+=score.toString().padStart(2,'0');}
    
    html+="</div>";

    return html
}


function AddEvent(match_no, date, time, name1, name2, gender, score1, score2, result, span2=""){ 
    system_today = GetDate();

    // np.atleast1d()
    name1 = [name1].flat();
    name2 = [name2].flat();
    score1 = [score1].flat();
    score2 = [score2].flat();
    gender = [gender].flat();

    net_score = score1[0] + score1[1] + score1[2] + score2[0] + score2[1] + score2[2];


    // card highlight automation
    html = "<div class=\"card game-event ";
    if (date == system_today){html+="highlight ";}
    html+=span2;
    html+="\">";

    html += "<div class=\"schedule\">";
    html += "    <div class=\"match-no\">" + match_no + "</div>";

    // "Today" modifier automation
    html += "    <div class=\"date\">";
    if(date == system_today){html+="Today";}
    else{html+= date;}
    html += "</div>";
    
    html += "    <div class=\"time\">"+ time +"</div>";
    html += "</div>";
    html += "<div class=\"team\">";
    html += "    <div class=\"top\">";
    for (i in name1){
        html += "        <div class=\"" + gender[i] + "\">" + name1[i] + "</div>";
    }
    
    // doont make it in begining but inside score, at you have to add 
    // extra-grey tag in class for that condtion

    html += "    </div>";
    if (net_score == 0){html += "    <div class=\"score hide\">";}
    else {html += "    <div class=\"score\">";}
    html += "        <div class=\"top\">";
    html +=             GetRoundDivHTML(1, score1[0]);
    html +=             GetRoundDivHTML(2, score1[1]);
    html +=             GetRoundDivHTML(3, score1[2]);
    html += "        </div>";
    html += "        <div class=\"bottom\">";
    html +=             GetRoundDivHTML(1, score2[0]);
    html +=             GetRoundDivHTML(2, score2[1]); 
    html +=             GetRoundDivHTML(3, score2[2]);
    html += "        </div>";
    html += "    </div>";
    html += "    <div class=\"bottom\">";

    for (i in name2){
        html += "        <div class=\"" + gender[i] + "\">" + name2[i] + "</div>";
    }
    
    html += "    </div>";
    html += "</div>";

    if(net_score==0){html += "<div class=\"result hide\">";}
    else{html += "<div class=\"result\">";}
    // ----------------------------------------------------------------------------------------
    // Win automation
    if(result==null || result == ""){
        if(net_score!=0){
            team1_win = 0;
            team2_win = 0;
            result = "";

            if(score1[0]>score2[0]){team1_win+=1;}
            else if (score1[0]<score2[0]){team2_win+=1;}

            if(score1[1]>score2[1]){team1_win+=1;}
            else if (score1[1]<score2[1]){team2_win+=1;}

            if(score1[2]>score2[2]){team1_win+=1;}
            else if (score1[2]<score2[2]){team2_win+=1;}

            if(team1_win>team2_win){
                for (i in name1){
                    result += name1[i];
                    if (i<name1.length-1){result += " & ";}
                }
            }else{
                for (i in name2){
                    result += name2[i];
                    if (i<name2.length-1){result += " & ";}
                }
            }
            result += " win!"
        }
    }
    html += result;
    html += "</div>";
    html += "</div>";
    
    shelf_content.innerHTML += html;
}



function AddPoints(single_or_double, names, gender, points){
    html = "<table class=\"card span2\">";
    html += "<tr>";
    html += "    <th>Name</th>";
    html += "    <th>Points</th>";
    html += "</tr>";

    for (i in names){
        html += "<tr>";
        html += "    <td>";

        if (single_or_double.toLowerCase() == 'single'){
            html += "        <div class=\""+ gender +"\">" + names[i] + "</div>";
        }else if (single_or_double.toLowerCase() == 'double'){
            html += "        <div class=\""+ gender[0] +"\">" + names[i][0] + "</div>";
            html += "        <div class=\""+ gender[1] +"\">" + names[i][1] + "</div>";
        }
        
        html += "    </td>";
        html += "    <td>" + points[i].toFixed(2) + "</td>";
        html += "</tr>";
    }

    html += "</table>";
    // html += "<div class=\"card text span2\">Top 4 will qualify for semi-finals.</div>";

    shelf_content.innerHTML += html;
}
