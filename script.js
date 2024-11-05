// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;


// ! set fungus HP and player AP to 100
let fungusHP = 100
let playerAP = 100
// ! set attacks stats to const objects in an array
const attacks = [
    { apCost: 20, damage: 10 },
    { apCost: 50, damage: 30 },
    { apCost: 100, damage: 70 }
  ]


// ! STATE 
function changeState(){
    // ! update player AP and fungus HP bars
    // console.log(document.getElementById("ap-text").value) 

}

// ! function to affect dom with button clicks
function buttonClick(event){
    console.log('Player AP is at: ', playerAP)
    console.log('Fungus HP is at: ', fungusHP)
}