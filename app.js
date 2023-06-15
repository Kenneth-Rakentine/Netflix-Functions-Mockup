

let changeBkg = ()=>{
    let switched = document.querySelector('.hanna')
    switched.setAttribute('src','https://i.gifer.com/S14x.gif')
}

let changeTxt = ()=>{
    let grow = document.querySelector('.hannaTitle')
    grow.classList.toggle('bigger')
}

let swapSynopsis = ()=>{
    let bio = document.querySelector('.synopsis')
    bio.innerHTML = "Raised by her father (Eric Bana) in the Finnish <br> wilderness, teenage Hanna (Saoirse Ronan) has <br>  trained all her life to be the perfect assassin."
    let btn = document.querySelector('.switch')
    btn.innerHTML = "Back"
    // back.setAttribute("src", "revert")
}

// const flipBack = ()=>{
//     swapSynopsis()
//     let backed = document.querySelector('.switch.synopsis')
//     backed.innerHTML = "Raised in isolation and trained as an assassin, teen  <br> Hanna longs  for a normal life, but when she comes <br> out of hiding she becomes targeted by the CIA."
// }

const startSlide = ()=>{
    let swoosh = document.querySelector('.continueBar')
    swoosh.classList.toggle('sliding')
}

const startScatter= ()=>{
    let swish = document.querySelector('.lou')
    swish.classList.toggle('skating')

    let swash = document.querySelector('.prisoners')
    swash.classList.toggle('skatingTwo')

    let swoush = document.querySelector('.thing')
    swoush.classList.toggle('skatingThree')

    let swesh = document.querySelector('.theDays')
    swesh.classList.toggle('skatingFour')

}