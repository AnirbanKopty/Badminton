shelf_content = document.getElementsByClassName("shelf")[0].getElementsByClassName("content")[0];


//-------------------------------------------------------------------
function InjectCard_Section(section_name){
    shelf_content.innerHTML += 
    "<div class=\"card section span2\">"+section_name+"</div>";
}


//-------------------------------------------------------------------
function InjectCard_Text(text){
    shelf_content.innerHTML += 
    "<div class=\"card text span2 \">" + text+"</div>";
}


//-------------------------------------------------------------------
function IconFromGender(gender){
    switch(gender.toLowerCase()){
        case "male": return "face";
        case "female": return "face_3";
        default: return "remove";
    }
}

function InjectCard_SinglePlayer(data){
    shelf_content.innerHTML +=
    `
    <div class="card players single">
        <div class="name">${data.name}</div>
        <div class="icon material-symbols-outlined">${IconFromGender(data.gender)}</div>
    </div>
    `
}

function InjectCard_DoublePlayer(data){
    shelf_content.innerHTML +=
    `
    <div class="card players double">
        <div class="name">${data.name[0]}</div>
        <div class="icon material-symbols-outlined">${IconFromGender(data.gender[0])}</div>
        <div class="name">${data.name[1]}</div>
        <div class="icon material-symbols-outlined">${IconFromGender(data.gender[1])}</div>
    </div>
    `
}


//-------------------------------------------------------------------
function InjectCard_Category(data){
    shelf_content.innerHTML +=
    `
    <div class="card game-category ${data.single_or_double} ${data.men_or_women}">
        <div class="text">
            <div class="name">${data.title}</div>
            <div ><span class="live ${data.live}">LIVE</span></div>
        </div>
        <div class="icon material-symbols-outlined">
            <!-- Icon filled by CSS -->
        </div>
    </div>
    `
}


//-------------------------------------------------------------------
function DivRoundFromScore(round,score){
    extra_grey = "";
    if(score==0){extra_grey = "extra-grey";}
    return `<div class="round${round.toString()} ${extra_grey}">${score}</div>`;
}

function InjectCard_Event(data){
    shelf_content.innerHTML +=
    `
    <div class="card game-event">
        <div class="schedule">
            <div class="match-no">Match ${data.matchno.toString()}</div>
            <div class="date">${data.date}</div>
            <div class="time">${data.time}</div>
        </div>

        <div class="team">
            <div class="top">
                <div class="${data.team[0].gender[0]}">${data.team[0].name[0]}</div>
                <div class="${data.team[0].gender[1]}">${data.team[0].name[1]}</div>
            </div>

            <div class="score">
                <div class="top">
                    ${DivRoundFromScore(1,data.team[0].score[0])}
                    ${DivRoundFromScore(2,data.team[0].score[1])}
                    ${DivRoundFromScore(3,data.team[0].score[2])}
                </div>
                <div class="bottom">
                    ${DivRoundFromScore(1,data.team[1].score[0])}
                    ${DivRoundFromScore(2,data.team[1].score[1])}
                    ${DivRoundFromScore(3,data.team[1].score[2])}
                </div>
            </div>
    
            <div class="bottom">
                <div class="${data.team[1].gender[0]}">${data.team[1].name[0]}</div>
                <div class="${data.team[1].gender[1]}">${data.team[1].name[1]}</div>
            </div>
        </div>
        <div class="result">${data.result}</div>
    </div>    
    `
}


//-------------------------------------------------------------------
function GenerateTableRows(teams){
    rows = "";
    for (t=0;t<teams.length;t++){
        team = teams[t]
        row = "<tr>"
        row +=      "<td>"
            for (p=0;p<team.names.length;p++){
                row += `<div class="${team.gender[p]}">${team.names[p]}</div>`
            }
        row +=      "</td>"
        row +=      `<td>${team.point.toString()}</td>`
        row += "</tr>"

        rows += row
    }
    return rows
}


function InjectCard_Table(data){
    shelf_content.innerHTML +=
    `
    <table class="card span2">
        <tr>
            <th>Name</th>
            <th>Points</th>
        </tr>
        ${GenerateTableRows(data.teams)}
    </table>
    `
}

