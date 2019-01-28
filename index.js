function dwarfRollCall(dwarves) {
  var dwarfString = [] ; 
  for (let i = 0; i < dwarves.length; i++ ) {
   dwarfString += (i+1) + `. ${dwarves[i]} `
  } 
  return dwarfString.toString() ;
}

function summonCaptainPlanet(planeteerCalls) {
var callArray = []  
 for (let i = 0; i < planeteerCalls.length; i++) {
   callArray.push(planeteerCalls[i].toUpperCase() + '!')
 }
 return callArray
}

function longPlaneteerCalls(words) {
  var i = [0]
  return (words[i].length > 4)
  }
  console.log(words.every(longPlaneteerCalls))



//function cheese(foods) {
//return(foods.includes("cheddar" || "gouda" || "camembert"))
//}

function findTheCheese(foods) {
  if(foods.includes("cheddar" || "gouda" || "camembert")) {
    return(foods.find(foods))
  } else {
    return("no cheese!")
  }
}
