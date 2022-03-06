var firstName = "Mouse";
var lastName = "Greens";
var username = "Username: " + firstName + " " + lastName;
console.log(username);

var characterName = "Dr. Doom";
var character = "Character: " + characterName;
console.log(character);


document.getElementById("username").innerHTML = username;
document.getElementById("character").innerHTML = character;
