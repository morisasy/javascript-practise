addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/


removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/

function displayCities(){
    var cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
    for(var i=0; i< cityArray.length; i++){
        console.log(cityArray[i]);
    }
}

function displayHometownData(){
    var hometownObject = instructorData.additionalData.moreDetails.hometown;
    for(var key in hometownObject){
        console.log(hometownObject[key]);
    }
}

function addDetail(key,value){
    var detailsObject = instructorData.additionalData.moreDetails;
    detailsObject[key] = value;
    return detailsObject;
}


function removeDetail(key){
    var detailsObject = instructorData.additionalData.moreDetails;
    var valueToBeRemoved = detailsObject[key];
    delete detailsObject[key];
    return detailsObject;
}