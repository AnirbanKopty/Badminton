players = [
    {
        name: "Gopalkrishna Prabhu",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Raghav Gogia"
    },
    {
        name: "Raghav Gogia",
        gender: "male",
        designation: "PhD",
        category: ["double"],
        partner: "Gopalkrishna Prabhu"
    },
    {
        name: "Manish Kataria",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Suvas Chaudhury"
    },
    {
        name: "Suvas Chaudhury",
        gender: "male",
        designation: "PhD",
        category: ["double"],
        partner: "Manish Kataria"
    },
    {
        name: "Suprovo Ghosh",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Shivaraj Kandhasamy"
    },
    {
        name: "Rahul G",
        gender: "male",
        designation: "project student",
        category: ["single", "double"],
        partner: "Swarnim"
    },
    {
        name: "Tanuman Ghosh",
        gender: "male",
        designation: "PostDoc",
        category: ["double"],
        partner: "Tathagata Ghosh"
    },
    {
        name: "Rahul Suresh Gaikwad",
        gender: "male",
        designation: "admin staff",
        category: ["single"]
    },
    {
        name: "Shivaraj Kandhasamy",
        gender: "male",
        designation: "scientific staff",
        category: ["single", "double"],
        partner: "Suprovo Ghosh"
    },
    {
        name: "Bikram Keshari Pradhan",
        gender: "male",
        designation: "PhD",
        category: ["single", "double", "mixed double"],
        partner: "Mayur Shende",
        mixed_partner: "Swati Rokade"
    },
    {
        name: "Mayur Shende",
        gender: "male",
        designation: "PostDoc",
        category: ["single", "double"],
        partner: "Bikram Keshari Pradhan"
    },
    {
        name: "Chayan Mondal",
        gender: "male",
        designation: "PostDoc",
        category: ["single", "double"],
        partner: "Partha Pratim Deka"
    },
    {
        name: "Partha Pratim Deka",
        gender: "male",
        designation: "PhD",
        category: ["single", "double", "mixed double"],
        partner: "Chayan Mondal",
        mixed_partner: "Meenakshi"
    },
    {
        name: "Santosh Bhujbal",
        gender: "male",
        designation: "scientific staff",
        category: ["single", "double"],
        partner: "Rajesh Parmar"
    },
    {
        name: "Pushpak Pandey",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Prashant Nishad"
    },
    {
        name: "Megha Anand",
        gender: "female",
        designation: "PostDoc",
        category: ["single", "double"],
        partner: "Meenakshi"
    },
    {
        name: "Meenakshi",
        gender: "female",
        designation: "PhD",
        category: ["single", "double", "mixed double"],
        partner: "Megha Anand",
        mixed_partner: "Partha Pratim Deka"
    },
    {
        name: "Swati Rokade",
        gender: "female",
        designation: "others",
        category: ["single", "double", "mixed double"],
        partner: "Samruddhi Bhandare",
        mixed_partner: "Bikram Keshari Pradhan"
    },
    {
        name: "Samruddhi Bhandare",
        gender: "female",
        designatin: "scientific staff",
        category: ["single", "double"],
        partner: "Swati Rokade" 
    },
    {
        name: "Tathagata Ghosh",
        gender: "male",
        designation: "others",
        category: ["double"],
        partner: "Tanuman Ghosh"
    },
    {
        name: "Rohan Gaikwad",
        gender: "male",
        designation: "others",
        category: ["single"],
    },
    {
        name: "Prashant Nishad",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Pushpak Pandey" 
    },
    {
        name: "Pushparaj Chakravarti",
        gender: "male",
        designation: "project student",
        category: ["single", "double"],
        partner: "Gautam Upadhay"
    },
    
    {
        name: "Swarnim",
        gender: "male",
        designation: "PhD",
        category: ["double"],
        partner: "Rahul G"
    },
    {
        name: "Rajesh Parmar",
        gender: "male",
        designation: "others",
        category: ["double"],
        partner: "Santosh Bhujbal"
    },
    {
        name: "Gautam Upadhay",
        gender: "male",
        designation: "others",
        category: ["double"],
        partner: "Pushparaj Chakravarti"
    }
]

// ----------------------------------------------------------------------------------

schedule = [
    {
        day: "Tuesday",
        date: "9 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-single",
                player1: "Gopalkrishna Prabhu",
                player2: "Suprovo Ghosh",
                // time: "6:00 PM",
                score1: [5,4,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Rahul G",
                player2: "Rahul Suresh Gaikwad",
                // time: "6:20 PM",
                score1: [21,21,0],
                score2: [6,1,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Shivaraj Kandhasamy",
                player2: "Mayur Shende",
                score1: [21,21,0],
                score2: [12,14,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Chayan Mondal",
                player2: "Santosh Bhujbal",
                score1: [21,21,0],
                score2: [13,9,0],
                result: ""
            },

            {
                category: "mens-double",
                player1: ["Pushpak Pandey", "Prashant Nishad"],
                player2: ["Chayan Mondal", "Partha Pratim Deka"],
                score1: [5,7,0],
                score2: [21,21,0],
                result: ""
            }
        ]
    },
    {
        day: "Wednesday",
        date: "10 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-double",
                player1: ["Bikram Keshari Pradhan", "Mayur Shende"],
                player2: ["Suprovo Ghosh", "Shivaraj Kandhasamy"],
                score1: [12,10,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                player2: ["Rahul G", "Swarnim"],
                score1: [6,12,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Prashant Nishad",
                player2: "Chayan Mondal",
                score1: [4,4,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Rohan Gaikwad",
                player2: "Manish Kataria",
                score1: [21,21,0],
                score2: [3,3,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Pushparaj Chakravarti",
                player2: "Bikram Keshari Pradhan",
                score1: [14,10,0],
                score2: [21,21,0],
                result: ""
            },
            // {
            //     category: "mens-single",
            //     player1: "Santosh Bhujbal",
            //     player2: "Tathagata Ghosh",
            //     score1: [0,0,0],
            //     score2: [0,0,0],
            //     result: ""
            // }   //!
        ]
    },
    {
        day: "Thursday",
        date: "11 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-double",
                player1: ["Tanuman Ghosh", "Tathagata Ghosh"],
                player2: ["Manish Kataria", "Suvas Chaudhury"],
                score1: [21,21,0],
                score2: [8,14,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "Meenakshi",
                player2: "Swati Rokade",
                score1: [15,15,0],
                score2: [3,3,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Rohan Gaikwad",
                player2: "Santosh Bhujbal",
                score1: [21,21,0],
                score2: [13,9,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Shivaraj Kandhasamy",
                player2: "Rahul G",
                score1: [21,21,0],
                score2: [8,7,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Rahul G", "Swarnim"],
                player2: ["Suprovo Ghosh", "Shivaraj Kandhaswamy"],
                score1: [7,6,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Manish Kataria",
                player2: "Pushparaj Chakravarti",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    },
        {
            day: "Friday",
            date: "12 Jan",
            match_type: "Group Stages",
            matches: [
                {
                    category: "mens-single",
                    player1: "Suprovo Ghosh",
                    player2: "Mayur Shende",
                score1: [21,21,0],
                score2: [7,11,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Santosh Bhujbal", "Rajesh Parmar"],
                player2: ["Bikram Keshari Pradhan", "Mayur Shende"],
                score1: [10,13,0],
                score2: [21,21,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "Swati Rokade",
                player2: "Samruddhi Bhandare",
                score1: [3,12,0],
                score2: [15,15,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Chayan Mondal", "Partha Pratim Deka"],
                player2: ["Manish Kataria", "Suvas Chaudhury"],
                score1: [21,21,0],
                score2: [4,6,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Partha Pratim Deka",
                player2: "Bikram Keshari Pradhan",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Rahul Suresh Gaikwad",
                player2: "Pushpak Pandey",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    },
    {
        day: "Saturday",
        date: "13 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-single",
                player1: "Pushpak Pandey",
                player2: "Partha Pratim Deka",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "Megha Anand",
                player2: "Samruddhi Bhandare",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Pushparaj Chakravarti", "Gautam Upadhay"],
                player2: ["Santosh Bhujbal", "Rajesh Parmar"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "Gopalkrishna Prabhu",
                player2: "Prashant Nishad",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "womens-double",
                match_type: "Finals",
                player1: ["Megha Anand", "Meenakshi"],
                player2: ["Swati Rokade", "Samruddhi Bhandare"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Pushpak Pandey", "Prashant Nishad"],
                player2: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    },
    {
        day: "Sunday",
        date: "14 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-double",
                player1: ["Tanuman Ghosh", "Tathagata Ghosh"],
                player2: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                willing_team: 'player2',
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["Pushparaj Chakravarti", "Gautam Upadhay"],
                player2: ["Manish Kataria", "Suvas Chaudhury"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "Megha Anand",
                player2: "Meenakshi",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mix-double",
                match_type: "Finals",
                player1: ["Partha Pratim Deka", "Meenakshi"],
                player2: ["Bikram Keshari Pradhan", "Swati Rokade"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    },
    {
        day: "Monday",
        date: "15 Jan",
        match_type: "Semi Finals",
        matches: [
            {
                category: "mens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["TBD","TBD"],
                player2: ["TBD","TBD"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["TBD","TBD"],
                player2: ["TBD","TBD"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },

            {
                category: "womens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    },
    {
        day: "Tuesday",
        date: "16 Jan",
        match_type: "Finals",
        matches: [
            {
                category: "mens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "mens-double",
                player1: ["TBD","TBD"],
                player2: ["TBD","TBD"],
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            },
            {
                category: "womens-single",
                player1: "TBD",
                player2: "TBD",
                score1: [0,0,0],
                score2: [0,0,0],
                result: ""
            }
        ]
    }
]
