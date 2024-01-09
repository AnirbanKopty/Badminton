function FillShelf_Category(){
    InjectCard_Section("Category");
    InjectCard_Category(
        {
            single_or_double : "single",
            men_or_women : "men",
            title : "Men's Single",
            live : "hide",
            href : "page.html?category=mens-single",
            span2 : ""

        }
    );

    InjectCard_Category(
        {
            single_or_double : "single",
            men_or_women : "women",
            title : "Women's Single",
            live : "hide",
            href : "page.html?category=womens-single",
            span2 : ""
            
        }    
    );

    InjectCard_Category(
        {
            single_or_double : "double",
            men_or_women : "men",
            title : "Men's Double",
            live : "hide",
            href : "page.html?category=mens-double",
            span2 : ""
            
        }
    );
    
    InjectCard_Category(
        {
            single_or_double : "double",
            men_or_women : "women",
            title : "Women's Double",
            live : "hide",
            href : "page.html?category=womens-double",
            span2 : ""
            
        }
    );

    InjectCard_Category(
        {
            single_or_double : "double",
            men_or_women : "mix",
            title : "Mixed Double",
            live : "hide",
            href : "page.html?category=mix-double",
            span2 : "span2"

        }
    );
}


function FillShelf_Players(category){
    InjectCard_Section("Players");
    var names;
    var gender;
    var partner;
    switch (category){
        case "mens-single":
            indices = GetIndices("single","male")
            names = GetNames(indices);
            gender =["male"];
            break;
        case "womens-single":
            console.log(category);
            indices = GetIndices("single","female");
            names = GetNames(indices);
            gender = ["female"];
            break;
        case "mens-double":
            indices= GetIndices("double","male")
            names = GetNames(indices);
            partner = GetPartner(indices)
            gender = ["male","male"];
            break;
        case "womens-double":
            indices = GetIndices("double","female");
            names = GetNames(indices);
            partner = GetPartner(indices)
            gender = ["female","female"];
            break;
        case "mix-double":
            indicess = GetIndices("mixed double","male");
            names = GetNames(indices);
            partner = GetMixedPartner(indices)
            gender = ["male","female"];
            
        default:
            
    }

    if (category=="mens-single" || category=="womens-single"){
        for (let n=0;n<names.length;n++){
            InjectCard_SinglePlayer(
                {
                    name: names[n],
                    gender:gender[0]
                }
            );
        }
    }

    if (category=="mens-double" || category=="womens-double" || category=="mix-double"){
        for (let n=0;n<names.length;n++){
            InjectCard_DoublePlayer(
                {
                    name: [names[n],partner[n]],
                    gender:gender
                }
            );
        }
    }

}



function GetAutoResult(name1,name2,score1,score2){
    result=""
    // preliminary maintainer input validation

    net_score = score1[0] + score1[1] + score1[2] + score2[0] + score2[1] + score2[2];
    if(net_score==0){result="No scores available yet."}
    // ----------------------------------------------------------------------------------------
    else{
        team1_win = 0;
        team2_win = 0;

        if(score1[0]>score2[0]){team1_win+=1;}else{team2_win+=1;}
        if(score1[1]>score2[1]){team1_win+=1;}else{team2_win+=1;}
        if(score1[2]>score2[2]){team1_win+=1;}else{team2_win+=1;}

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
    return result;
}



function FillShelf_Events(category){
    let match=0;
    
    // From Anirban
    indices = GetIndicesSchedule(category);

    // quickfix
    let single_or_double="";
    let gender="";

    if (category == 'mens-single'){
        gender = ["male"];
        single_or_double = "single";
    }
    if (category == 'womens-single'){
        gender = ["female"];
        single_or_double = "single";
    }
    if (category == 'mens-double'){
        gender = ["male", "male"];
        single_or_double = "double";
    }
    if (category == 'womens-double'){
        gender = ["female", "female"];
        single_or_double = "double";
    }
    if (category == 'mixed-double'){
        gender = ["male", "female"];
        single_or_double = "double";
    }



    
    today = GetDate();

    // For group stages
    InjectCard_Section("Group Stages")

    for (let i=0;i<indices.length;i++){
        s=indices[i][0];
        m=indices[i][1];
        if(schedule[s].match_type != "Group Stages"){continue;}

        
        hl="";
        date =schedule[s].date;
        if (schedule[s].date==today){
            hl="highlight";
            date = "Today"
        }

        let hideres=""
        s1 =schedule[s].matches[m].score1
        s2 =schedule[s].matches[m].score2
        let net_score = s1[0] + s1[1] + s1[2] + s2[0] + s2[1] + s2[2];
        if (net_score==0){hideres="hide"}
        
        mat = schedule[s].matches[m];
        result=mat.result;;
        if(result==""){result = GetAutoResult(mat.player1,mat.player2,mat.score1,mat.score2);}

        match +=1;
        InjectCard_Event(
            {
                matchno : match,
                date : date,
                time : "6:00 PM",
                highlight : hl,
                single_or_double:single_or_double,
                team : [
                    {
                        name : schedule[s].matches[m].player1,
                        gender : gender,
                        score : schedule[s].matches[m].score1
                    },
                    {
                        name : schedule[s].matches[m].player2,
                        gender : gender,
                        score : schedule[s].matches[m].score2
                    }
                ],
                result : result,
                hideresult : hideres
            }
        )
    }


    // Semi=Finals
    InjectCard_Section("Semi Finals")

    for (let i=0;i<indices.length;i++){
        s=indices[i][0];
        m=indices[i][1];
        if(schedule[s].match_type != "Semi Finals"){continue;}
        
        today = GetDate();
        hl="";
        if (schedule[s].date==today){hl="highlight";}


        let hideres=""
        s1 =schedule[s].matches[m].score1
        s2 =schedule[s].matches[m].score2
        let net_score = s1[0] + s1[1] + s1[2] + s2[0] + s2[1] + s2[2];
        if (net_score==0){hideres="hide"}

        mat = schedule[s].matches[m];
        result=mat.result;
        if(result==""){result = GetAutoResult(mat.player1,mat.player2,mat.score1,mat.score2);}

        InjectCard_Event(
            {
                matchno : "Semi-Final",
                date : schedule[s].date,
                time : "6:00 PM",
                highlight : hl,
                single_or_double:single_or_double,
                team : [
                    {
                        name : schedule[s].matches[m].player1,
                        gender : gender,
                        score : schedule[s].matches[m].score1
                    },
                    {
                        name : schedule[s].matches[m].player2,
                        gender : gender,
                        score : schedule[s].matches[m].score2
                    }
                ],
                result : result,
                hideresult : hideres
            }
        )
    }

    // Finals
    InjectCard_Section("Finals")

    for (let i=0;i<indices.length;i++){
        s=indices[i][0];
        m=indices[i][1];
        if(schedule[s].match_type != "Finals"){continue;}
        
        today = GetDate();
        hl="";
        if (schedule[s].date==today){hl="highlight";}

        let hideres=""
        s1 =schedule[s].matches[m].score1
        s2 =schedule[s].matches[m].score2
        let net_score = s1[0] + s1[1] + s1[2] + s2[0] + s2[1] + s2[2];
        if (net_score==0){hideres="hide"}

        mat = schedule[s].matches[m];
        result=mat.result;
        if(result==""){result = GetAutoResult(mat.player1,mat.player2,mat.score1,mat.score2);}

        InjectCard_Event(
            {
                matchno : "Finals",
                date : schedule[s].date,
                time : "6:00 PM",
                highlight : hl,
                single_or_double:single_or_double,
                team : [
                    {
                        name : schedule[s].matches[m].player1,
                        gender : gender,
                        score : schedule[s].matches[m].score1
                    },
                    {
                        name : schedule[s].matches[m].player2,
                        gender : gender,
                        score : schedule[s].matches[m].score2
                    }
                ],
                result : result,
                hideresult : hideres
            }
        )
    }





}




function FillShelf_Table(category){
    InjectCard_Section("Points Table");

    // GetNames()
    // GetPoints()
    // sort points
    
    // loop
    // print
    InjectCard_Table(
        {
            teams:[
                {
                    names : ["Ranit Behera"],
                    gender : ["male"],
                    point : 1.94
                },
                {
                    names : ["Ranit Behera","Anirban Kopty"],
                    gender : ["male","female"],
                    point : 3.43
                }
            ]
        }
    )


}







/*

InjectCard_Table(
    {
        teams:[
            {
                names : ["Ranit Behera"],
                gender : ["male"],
                point : 1.94
            },
            {
                names : ["Ranit Behera","Anirban Kopty"],
                gender : ["male","female"],
                point : 3.43
            }
        ]
    }
)

*/

