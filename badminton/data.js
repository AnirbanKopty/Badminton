players = [
    {
        name: "Raghav Gogia",
        gender: "male",
        designation: "PhD",
        category: ["doubles"],
        partner: "Gopalkrishna Prabhu"
    },
    {
        name: "Gopalkrishna Prabhu",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Raghav Gogia"
    },
    {
        name: "Manish Kataria",
        gender: "male",
        designation: "PhD",
        category: ["single", "double"],
        partner: "Suvas Chaudhury"
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
        partner: "Om Mestry"
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
        name: "Santosh Bhujpal",
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
        name: "Meenakshi",
        gender: "female",
        designation: "PhD",
        category: ["single", "double", "mixed double"],
        partner: "Megha Anand",
        mixed_partner: "Partha Pratim Deka"
    },
    {
        name: "Samruddhi Bhandare",
        gender: "female",
        designatin: "scientific staff",
        category: ["single", "double"],
        partner: "Swati Rokade" 
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
        name: "Swati Rokade",
        gender: "female",
        designation: "others",
        category: ["single", "double", "mixed double"],
        partner: "Samruddhi Bhandare",
        mixed_partner: "Bikram Keshari Pradhan"
    },
    {
        name: "Om Mestry",
        gender: "male",
        designation: "others",
        category: ["single", "double"],
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
        name: "Bikram Keshari Pradhan",
        gender: "male",
        designation: "PhD",
        category: ["single", "double", "mixed double"],
        partner: "Mayur Shende",
        mixed_partner: "Swati Rokade"
    },
    {
        name: "Pushparaj Chakravarti",
        gender: "male",
        designation: "project student",
        category: ["single", "double"],
        partner: "Gautam Upadhay"
    },
    {
        name: "Megha Anand",
        gender: "female",
        designation: "PostDoc",
        category: ["single", "double"],
        partner: "Meenakshi"
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
        partner: "Santosh Bhujpal"
    },
    {
        name: "Gautam Upadhay",
        gender: "male",
        designation: "others",
        category: ["double"],
        partner: "Pushparaj Chakravarti"
    }
]

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
                score1: [5,4],
                score2: [21,21]
            },
            {
                category: "mens-single",
                player1: "Rahul G",
                player2: "Rahul Suresh Gaikwad",
                // time: "6:20 PM",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Shivaraj Kandhasamy",
                player2: "Mayur Shende",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Chayan Mondal",
                player2: "Santosh Bhujpal",
                score1: null,
                score2: null
            },

            {
                category: "mens-double",
                player1: ["Pushpak Pandey", "Prashant Nishad"],
                player2: ["Partha Pratim Deka", "Chayan Mondal"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Pushparaj Chakravarti", "Gautam Upadhay"],
                player2: ["Manish Kataria", "Suvas Chaudhury"],
                score1: null,
                score2: null
            }
        ]
    },
    {
        day: "Wednesday",
        date: "10 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-single",
                player1: "Santosh Bhujpal",
                player2: "Om Mestry",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Rohan Gaikwad",
                player2: "Chayan Mondal",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Partha Pratim Deka",
                player2: "Bikram Keshari Pradhan",
                score1: null,
                score2: null
            },
            {
                category: "womens-single",
                player1: "Meenakshi",
                player2: "Swati Rokade",
                score1: null,
                score2: null
            },

            {
                category: "mens-double",
                player1: ["Tanuman Ghosh", "Om Mestry"],
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Pushpak Pandey", "Prashant Nishad"],
                player2: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                score1: null,
                score2: null
            }
        ]
    },
    {
        day: "Thursday",
        date: "11 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "mens-single",
                player1: "Pushpak Pandey",
                player2: "Partha Pratim Deka",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Om Mestry",
                player2: "Prashant Nishad",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Rohan Gaikwad",
                player2: "Manish Kataria",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Shivaraj Kandhasamy",
                player2: "Rahul G",
                score1: null,
                score2: null
            },

            {
                category: "womens-double",
                player1: ["Megha Anand", "Meenakshi"],
                player2: ["Swati Rokade", "Samruddhi Bhandare"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Rahul Gaikwad", "Swarnim"],
                player2: ["Shivaraj Kandhaswamy", "Suprovo Ghosh"],
                score1: null,
                score2: null
            }
        ]
    },
    {
        day: "Friday",
        date: "12 Jan",
        match_type: "Group Stages",
        matches: [
            {
                category: "womens-single",
                player1: "Megha Anand",
                player2: "Meenakshi",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Pushparaj Chakravarti",
                player2: "Bikram Keshari Pradhan",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Suprovo Ghosh",
                player2: "Mayur Shende",
                score1: null,
                score2: null
            },
            {
                category: "womens-single",
                player1: "Swati Rokade",
                player2: "Samruddhi Bhandare",
                score1: null,
                score2: null
            },

            {
                category: "mens-double",
                player1: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                player2: ["Rahul G", "Swarnim"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Santosh Bhandare", "Rajesh Parmar"],
                player2: ["Bikram Keshari Pradhan", "Mayur Shende"],
                score1: null,
                score2: null
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
                player1: "Manish Kataria",
                player2: "Pushparaj Chakravarti",
                score1: null,
                score2: null
            },
            {
                category: "womens-single",
                player1: "Megha Anand",
                player2: "Samruddhi Bhandare",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Rahul Gaikwad",
                player2: "Pushpak Pandey",
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: "Gopalkrishna Prabhu",
                player2: "Prashant Nishad",
                score1: null,
                score2: null
            },

            {
                category: "mens-double",
                player1: ["Bikram Keshari Pradhan", "Mayur Shende"],
                player2: ["Suprovo Ghosh", "Shivaraj Kandhasamy"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Chayan Mondal", "Partha Pratim Deka"],
                player2: ["Manish Kataria", "Suvas Chaudhury"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Tanuman Ghosh", "Om Mestry"],
                player2: ["Gopalkrishna Prabhu", "Raghav Gogia"],
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: ["Pushparaj Chakravarti", "Gautam Upadhay"],
                player2: ["Santosh Bhujpal", "Rajesh Parmar"],
                score1: null,
                score2: null
            }
        ]
    },
    {
        day: "Sunday",
        date: "14 Jan",
        match_type: "Semi Finals",
        matches: [
            {
                category: "mens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },

            {
                category: "womens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "womens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mix-double",
                player1: ["Partha Pratim Deka", "Meenakshi"],
                player2: ["Bikram Keshari Pradhan", "Swati Rokade"],
                score1: null,
                score2: null
            }
        ]
    },
    {
        day: "Monday",
        date: "15 Jan",
        match_type: "Finals",
        matches: [
            {
                category: "mens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "mens-double",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            },
            {
                category: "womens-single",
                player1: null,
                player2: null,
                score1: null,
                score2: null
            }
        ]
    }
]
