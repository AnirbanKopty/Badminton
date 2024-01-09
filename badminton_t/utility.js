function GetDate(){
    var today = new Date();
    var dd = String(today.getDate());
    var mon = today.toLocaleString('default', { month: 'short' });
    return dd + " " + mon;
}

function GetIndices(category,gender){
    // cannot handle gender to be an array
    indices = [];
    for (i=0;i<players.length;i++){
        if (players[i].category.map(s => s.toLowerCase()).includes(category)){
            if (gender==null){indices.push(i)}
            else if (players[i].gender.toLowerCase()==gender.toLowerCase()){indices.push(i);}       
        }
    }
    return indices;
}

function GetIndicesSchedule(category){
    indices = [];
    // console.log(schedule[1].matches[1].category);
    for (i=0;i<schedule.length;i++){
        for (j=0;j<schedule[i].matches.length;j++){
            if (schedule[i].matches[j].category.toLowerCase() == category){
                indices.push([i,j]);
            }
        }
    }
    return indices;
}
// function GetNamesSchedule(indices){return indices.map(i => schedule[i].name)}


function GetNames(indices){return indices.map(i => players[i].name)}
function GetGenders(indices){return indices.map(i => players[i].gender)}
function GetCategory(indices){return indices.map(i => players[i].category)}
function GetPartner(indices){return indices.map(i => players[i].partner)}
// These functions, using 'map', can't handle if single index is given


function GetGenderOf(index){return players[index].gender;}
function GetPartnerOf(index){return players[index].partner;}
function GetMixedPartnerOf(index){return players[index].mixed_partner;}


// Check site, well something appeared by using "null" intead of null (data.js),
// Not a good solution, I know, but wanted to get around that null.property issue
// using null where??
// which property??

// Changed all null to "null" in data.js
// are, instead of using null kye, I used "null" as a string, exactly,
// In GetPartnerOf(name), you used name.property
// in code it was getting executed as null.property, which triggered error
// just to avoid it, and see whether it works
// It's not a good solution, just to check, will change it back,
// Since you finished that GetPartner(index), using this now

// null is uninitiliased
// "null" is string
// why use "null"
// i need to call you tommorow i dont get exactly
// sure

// function GetGendersOfPartner(name){
//     partner_name = GetPartnerOf(name)
//     return GetGenderOf(partner_name);
// }


// console.log(GetIndicesSchedule('mens singles'));

