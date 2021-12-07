
function petPick() {

    var randomNum = (Math.floor(Math.random()*6) +1);

    var newPic = "images/pet" + randomNum + ".png";
    document.getElementById("questionMark").setAttribute ("src", newPic);
    console.log(randomNum);
    
  if (randomNum == 1) {
  document.getElementById("name-heading").innerHTML = "Don't discount aliens, available soon, love Egypt documentaries.";
  }  else if (randomNum == 2) {
    document.getElementById("name-heading").innerHTML = "You love cats and cats love you!";
  } else if (randomNum == 3) {
    document.getElementById("name-heading").innerHTML = "Little godzilla loves Nintendo Switch.";
  } else if (randomNum == 4) {
    document.getElementById("name-heading").innerHTML = "Pigs love to be petted.";
  } else if (randomNum == 5) {
    document.getElementById("name-heading").innerHTML = "Zebras get along well with cats and like milkshakes.";
  } else {
    document.getElementById("name-heading").innerHTML = "A snail will keep you company in the garden.";
  } 
  
}
