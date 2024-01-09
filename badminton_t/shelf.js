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
}


function FillShelf_Events(category){
    InjectCard_Section("Events");
    
}


function FillShelf_Table(category){
    InjectCard_Section("Points Table");
    
}







/*

InjectCard_Section("Injection");
InjectCard_Text("JS Injected text.");


InjectCard_SinglePlayer(
    {
        name:"Ranit Behera",
        gender:"male"
    }
);

InjectCard_DoublePlayer(
    {
        name:["Ranit Behera","Anirban Kopty"],
        gender:["male","female"]
    }
);

InjectCard_Category(
    {
        single_or_double : "single",
        men_or_women : "men",
        title : "Men's Single",
        live : "hide"
    }
)

InjectCard_Event(
    {
        matchno : 1,
        date : "9 Jan",
        time : "6:00 PM",
        result : "",
        team : [
            {
                name : ["Ranit Behera", "Anirban Kopty"],
                gender : ["male","female"],
                score : [1,10,0]
            },
            {
                name : ["Ranit Behera", "Anirban Kopty"],
                gender : ["male","female"],
                score : [19,0,21]
            }
        ],
        result : "Someone won."
    }
)


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

