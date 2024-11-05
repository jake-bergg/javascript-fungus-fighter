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
    
    // ! get clicked buttons class
    let buttonClass = event.target.classList[1]
    console.log("You just used: ", buttonClass)
    // ! find specific attack based on which button is clicked
    let attack = findAttackbyClass(buttonClass)

    // ! Update AP and HP
    playerAP -= attack.apCost
    fungusHP -= attack.hpDamage

    // ! Prevent negative values for AP and HP
    playerAP = Math.max(playerAP, 0)
    fungusHP = Math.max(fungusHP, 0)
    
    // * this stuff basically did what the render function is doing now
    // document.getElementById('ap-meter').textContent = `Player AP: ${playerAP}`
    // document.getElementById('hp-meter').textContent = `Fungus HP: ${fungusHP}`
    // console.log(document.getElementById('ap-meter').textContent = `Player AP: ${playerAP}`)
    // console.log(document.getElementById('hp-meter').textContent = `Fungus HP: ${fungusHP}`)

    
    render()

}


// ! function to select correct attack
function findAttackbyClass(){
    // ! if the button that is clicked has the class of X button, it will log the correct stats
    if (buttonClass = 'arcane-scepter'){
        return attacks[0]
    }
    else if(buttonClass = 'entangle'){
        return attacks[1]
    }
    else if (buttonClass = 'dragon-blade'){
        return attacks[2]
    }
    else if (buttonClass = 'star-fire'){
        return attacks[3]
    }
}

// ! RENDER
function render(){


    // ! change the render HP/AP to the new value from buttonClick function
    let renderHP = document.getElementById("hp-meter")
    let renderAP = document.getElementById("ap-meter")
    
    // ? hopefully this can get the number above the bars to change
    let hpBar = document.querySelector(".hp-text")
    let apBar = document.querySelector(".ap-text")

    hpBar.innerText = `${fungusHP} HP`
    apBar.innerText = `${playerAP} AP`

    console.log('health bar should be: ', hpBar.innerText)
    console.log('ap bar should be: ', apBar.innerText)



    renderHP.value = fungusHP
    renderAP.value = playerAP



    console.log('HP is: ', renderHP.value)
    console.log('AP is: ', renderAP.value)

    
}