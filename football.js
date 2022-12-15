"use strict";

window.onload = init;

const teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", 
    plays:"Kansas City, MO"},
   ];
document.getElementById("team_DAL").style.display = "none";
document.getElementById("team_DEN").style.display = "none";
document.getElementById("team_HOU").style.display = "none";
document.getElementById("team_KAN").style.display = "none";


function init() {

    const learnMoreButton = document.getElementById("thebutton");
    loadFootballDropdown();
    learnMoreButton.onclick = learnMoreButtonOnClick;
}

function loadFootballDropdown(){
    const teamList = document.getElementById("teamsList");
    
    let selectTeamOption = document.createElement("option");
    selectTeamOption.textContent = "Select a team ...";
    selectTeamOption.value = "";
    teamList.appendChild(selectTeamOption);

    let length = teams.length;

    for (let i = 0; i < length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = teams[i].name;
        theOption.value = teams[i].code;
        teamList.appendChild(theOption);
   }
   console.log("loadeddropdown");
}


function learnMoreButtonOnClick(){
    const teamList = document.getElementById("teamsList");
    let selectedValue = teamList.value;

    let selectedTeam = getTeamByCode(teams, selectedValue);
    

    let message = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}.`;

    let output = document.getElementById("outputteam");
    output.innerHTML = ("Team:  " + message);
    console.log(message);

    return false;

};

function getTeamByCode(teams, code){
    console.log("hello")
    let length = teams.length;
    for(let i = 0; i < length; i++){
        document.getElementsByClassName("card")[i].style.display = "none";
        if(teams[i].code == code){
            document.getElementById("team_" + code).style.display = "block";
             return teams[i];
        }
    }
    return null;
}