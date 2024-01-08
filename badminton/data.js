players = [
    {
        name: "Raghav Gogia",
        gender: "male",
        designation: "PhD",
        category:["doubles"],
        partner: "Gopalkrishna Prabhu"
    },
    {
        name: "Gopalkrishna Prabhu",
        gender: "male",
        designation: "PhD",
        category: ["singles", "doubles"],
        partner: "Raghav Gogia"
    },
    {
        name: "Manish Kataria",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles"],
        partner: "Suvas Chaudhury"
    },
    {
        name: "Suprovo Ghosh",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles"],
        partner: "Shivaraj Kandhasamy"
    },
    {
        name: "Rahul G",
        gender: "male",
        designation: "project student",
        category:["singles", "doubles", "mixed doubles"],
        partner: "Swarnim",
        mixed_partner: null
    },
    {
        name: "Tanuman Ghosh",
        gender: "male",
        designation: "PostDoc",
        category:["doubles", "mixed doubles"],
        partner: null,
        mixed_partner: null
    },
    {
        name: "Rahul Suresh Gaikwad",
        gender: "male",
        designation: "admin staff",
        category:["singles"]
    },
    {
        name: "Shivaraj Kandhasamy",
        gender: "male",
        designation: "scientific staff",
        category:["singles", "doubles"],
        partner: "Suprovo Ghosh"
    },
    {
        name: "Mayur Shende",
        gender: "male",
        designation: "PostDoc",
        category:["singles", "doubles"],
        partner: "Bikram Keshari Pradhan"
    },
    {
        name: "Chayan Mondal",
        gender: "male",
        designation: "PostDoc",
        category:["singles", "doubles"],
        partner: "Partha Pratim Deka"
    },
    {
        name: "Santosh Bhujpal",
        gender: "male",
        designation: "scientific staff",
        category:["singles", "doubles"],
        partner: "Rajesh Parmar"
    },
    {
        name: "Pushpak Pandey",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles"],
        partner: "Prashant Nishad"
    },
    {
        name: "Meenakshi",
        gender: "female",
        designation: "PhD",
        category:["singles", "doubles", "mixed doubles"],
        partner: "Megha Anand",
        mixed_partner: "Partha Pratim Deka"
    },
    {
        name: "Samruddhi Bhandare",
        gender: "female",
        designatin: "scientific staff",
        category:["singles"]
    },
    {
        name: "Partha Pratim Deka",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles", "mixed doubles"],
        partner: "Chayan Mondal",
        mixed_partner: "Meenakshi"
    },
    {
        name: "Swati Rokade",
        gender: "female",
        designation: "others",
        category:["singles", "doubles", "mixed doubles"],
        partner: null,
        mixed_partner: null
    },
    {
        name: "Om Mestry",
        gender: "male",
        designation: "others",
        category:["singles", "doubles", "mixed doubles"],
        partner: null,
        mixed_partner: null
    },
    {
        name: "Rohan Gaikwad",
        gender: "male",
        designation: "others",
        category:["singles"]
    },
    {
        name: "Prashant Nishad",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles"],
        partner: "Pushpak Pandey"
    },
    {
        name: "Bikram Keshari Pradhan",
        gender: "male",
        designation: "PhD",
        category:["singles", "doubles", "mixed doubles"],
        partner: "Mayur Shende",
        mixed_partner: null
    },
    {
        name: "Pushparaj Chakravarti",
        gender: "male",
        designation: "project student",
        category:["singles", "doubles", "mixed doubles"],
        partner: "Gautam Upadhay",
        mixed_partner: null
    },
    {
        name: "Megha Anand",
        gender: "female",
        designation: "PostDoc",
        category:["singles", "doubles"],
        partner: "Meenakshi"
    },
    
    {
        name: "Swarnim",
        gender: "male",
        designation: "PhD",
        category:["doubles"],
        partner: "Rahul G",
    },
    {
        name: "Rajesh Parmar",
        gender: "male",
        designation: "others",
        category:["doubles"],
        partner: "Santosh Bhujpal"
    },
    {
        name: "Gautam Upadhay",
        gender: "male",
        designation: "others",
        category:["doubles"],
        partner: "Pushparaj Chakravarti"
    }
]

schedule_1 = {
    day_1: {
            day: "Tuesday",
            match_1: {
                type: "singles",
                player1: "Gopalkrishna Prabhu",
                player2: "Suprovo Ghosh",
                time: "6:00 PM"
            },
            match_2: {

            }
        },

    day_2: [],

    day_3: [],

    day_4: []
}

schedule = {
    days: [
        {
            day: "Tuesday",
            date: "09 Jan",
            match_type: "Group Stages",
            matches: [
                {
                    category: "mens singles",
                    player1: "Gopalkrishna Prabhu",
                    player2: "Suprovo Ghosh",
                    // time: "6:00 PM"
                },
                {
                    category: "mens singles",
                    player1: "Rahul G",
                    player2: "Rahul Suresh Gaikwad",
                    // time: "6:20 PM"
                },
                {
                    category: "mens singles",
                    player1: "Shivaraj Kandhasamy",
                    player2: "Mayur Shende"
                },
                {
                    category: "mens singles",
                    player1: "Chayan Mondal",
                    player2: "Santosh Bhujpal"
                },

                {
                    category: "mens doubles",
                    player1: ["Pushpak Pandey", "Prashant Nishad"],
                    player2: ["Partha Pratim Deka", "Chayan Mondal"]
                },
                {
                    category: "mens doubles",
                    player1: ["Pushparaj Chakravarti", "Gautam Upadhay"],
                    player2: ["Manish Kataria", "Suvas Chaudhury"]
                }
            ]
        },
        {
            day: "Wednesday",
            date: "10 Jan",
            match_type: "Group Stages",
            matches: [
                {
                    category: "mens singles",
                    player1: "Santosh Bhujpal",
                    player2: "Om Mestry",
                    // time: "6:00 PM"
                },
                {
                    category: "mens singles",
                    player1: "Rohan Gaikwad",
                    player2: "Chayan Mondal",
                    // time: "6:20 PM"
                },
                {
                    category: "mens singles",
                    player1: "Partha Pratim Deka",
                    player2: "Bikram Keshari Pradhan"
                },
                {
                    category: "womens singles",
                    player1: "Meenakshi",
                    player2: "Swati Rokade"
                },

                {
                    category: "mens doubles",
                    player1: ["Tanuman Ghosh", "Om Mestry"],
                    player2: null
                },
                {
                    category: "mens doubles",
                    player1: ["Pushpak Pandey", "Prashant Nishad"],
                    player2: ["Gopalkrishna Prabhu", "Raghav Gogia"]
                }
            ]
        },
    ]
}