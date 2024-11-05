// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;


// ! set fungus HP and player AP to 100
let fungusHP = 100
let playerAP = 100
// ! set attacks stats to const objects in an array
const attacks = [
    {   name: "Arcane Scepter",
        apCost: 12,
        hpDamage: 14
    },
    {   name: "Entangle",
        apCost: 23,
        hpDamage: 9
    },
    {   name: "Dragon Blade",
        apCost: 38,
        hpDamage: 47
    },
    {   name: "Star Fire",
        apCost: 33,
        hpDamage: 25
    }
  ]


// ! STATE 
function changeState(){
    // ! update player AP and fungus HP bars
    // console.log(document.getElementById("ap-text").value) 
    
}


// ! EVENT
// * function to affect dom with button clicks
function buttonClick(event){


    document.getElementById('ap-meter').textContent = `Player AP: ${playerAP}`
    document.getElementById('hp-meter').textContent = `Fungus HP: ${fungusHP}`
    console.log(document.getElementById('ap-meter').textContent = `Player AP: ${playerAP}`)
    console.log(document.getElementById('hp-meter').textContent = `Fungus HP: ${fungusHP}`)

}

// ! RENDER
function render(){

}