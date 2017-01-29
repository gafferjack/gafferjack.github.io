// var myName = "Jack";
//
// function sayHello(myName) {
//   alert("Hello" + myName)
// }
//
// sayHello(myName);
// var my name

var land= document.getElementById("water")
var bestAnimal= document.getElementById("bestAnimal")

function getbestAnimal() {
  // get the users's favorite animal
  // store the favorite animal as a variable
  var fave = prompt("what is your favorite animal type?")
  console.log(fave)
  // change the animal to match the user's input
   var bestAnimal = document.getElementById("bestAnimal")
   bestAnimal.textContent = fave;
// if the vaulue of fave is empty
  if(fave ==''){
    // do something
    bestAnimal.textContent ="Tuna"

// if user does enter animal
  } else {
    // do something else
    console.log(fave)
    console.log(bestAnimal)
    bestAnimal.textContent
  }
}

getbestAnimal()
