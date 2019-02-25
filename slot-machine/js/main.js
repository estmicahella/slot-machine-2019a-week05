// document.getElementById('min').addEventListener("click", function(){
//   alert('hi')
// });


var total = 100;

document.getElementById('min').addEventListener("click", function(){

  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()

  if( checkMatch(reel1,reel2,reel3) ){
    total = total + 25;
  }else{
    total = total - 1;
  }

  document.getElementById('results').innerHTML = total;
});

document.getElementById('max').addEventListener("click", function(){

  var reel1 = randomReel()
  var reel2 = randomReel()
  var reel3 = randomReel()

  if( checkMatch(reel1,reel2,reel3) ){
    total = total + 250;
  }else{
    total = total - 25;
  }

  document.getElementById('results').innerHTML = total;
});


function randomReel(){


  var choice = Math.random()
  if (choice <= .2){
    choice = "777"
  }else if(choice <= .4){
    choice = "dollar"
  }else if(choice <= .6){
    choice = "cherry"
  }else if(choice <= .8){
    choice = "bell"
  }else{
    choice = "gold"
  }

  return choice;

}

function checkMatch(reel1,reel2,reel3){
  if( reel1 === reel2 && reel1 === reel3 ){
    return true
  }else{
    return false
  }
}
