// Choisir un mot aléatoirement parmis une liste (tableau)
  //Le mot doit être caché au début du jeu.(Affichage du mot caché avec des espaces pour les lettres à deviner.)
//Permettre au joueur de pouvoir faire une proposition
  //Vérification de la validité des lettres proposées
    //Affichage des lettres correctes dans le mot caché
      //Mise à jour de l'affichage du pendu en cas de lettre incorrecte.
//Définir les conditions de fin de jeu, Victoire/défaite


let word = ["temps", "chips", "avion", "balcon", "microphone", "mercenaire", "charge", "parachute", "conte", "igloo" ]
let guessWord = ""
let result = []
let hiddenWord = []
let tryout = null
let letterFind = null
let intro = null
let error = 0
let gg = new Audio("./assets/son/gg.mp4")
let nt = new Audio ("./assets/son/nt.mp4")
let pad = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let addPad = document.querySelector("#pad")
// let score = 0

keyboard()
document.querySelector("#start").addEventListener("click", ()=> {
    clearInterval(random)
    hiddenWord = []
    clearInterval(checkGuess)
    random()
} )

document.querySelector('#retry-lose').addEventListener("click", () => {
    clearInterval(random)
    hiddenWord = []
    clearInterval(checkGuess)
    random()
})


// jeu

function random() {
    document.querySelector("#win-container").classList.add("hidden")
    document.querySelector("#comment").classList.remove("hidden")
    document.querySelector("#comment-container").classList.remove("hidden")
    document.querySelector("#chanceLeft-container").classList.remove("hidden")
    document.querySelector("#chancesLeft").classList.remove("hidden")
    document.querySelector("#hiddenWord-container").classList.remove("hidden")
    document.querySelector("#hiddenWord").classList.remove("hidden")
    document.querySelector("#win").classList.add("hidden")
    document.querySelector("#lose-container").classList.add("hidden")
    document.querySelector("#lose").classList.add("hidden")
    tryout = 7
    error = 0
    document.querySelector('#chancesLeft').textContent = `Vous avez ${tryout} éssaie`
        let alea = randomize(0, word.length - 1)
        guessWord = word[alea]
    console.log(guessWord);
    for (let i = 0; i < guessWord.length; i++) {
        hiddenWord[i] = "?"
    }
    console.log(hiddenWord);
    document.querySelector('#hiddenWord').textContent = hiddenWord.join("")
}

function checkGuess(letter) {
    if (tryout === 0) {
        document.querySelector("#chancesLeft").textContent = `Vous avez perdu !! Cliquer sur <<Commencer>> pour retenter votre chance !`
        document.querySelector("#lose-container").classList.remove("hidden")
        document.querySelector("#comment").classList.add("hidden")
        document.querySelector("#comment-container").classList.add("hidden")
        document.querySelector("#chanceLeft-container").classList.add("hidden")
        document.querySelector("#chancesLeft").classList.add("hidden")
        document.querySelector("#hiddenWord-container").classList.add("hidden")
        document.querySelector("#hiddenWord").classList.add("hidden")
        document.querySelector("#lose").classList.remove("hidden")
        return  
        }
    console.log(guessWord)

    letterFind = false
    for (let i = 0; i < guessWord.length; i++) {
        if (letter.toLowerCase() === guessWord[i]) {
                gg.play()
                letterFind = true
                hiddenWord[i] = letter
                result[i] = hiddenWord
                document.querySelector('#hiddenWord').textContent = hiddenWord.join("")
                console.log(`Bien joué : Il vous reste ${tryout} essai !`);
                document.querySelector("#chancesLeft").textContent = `Bien joué : Il vous reste ${tryout} essai !`
             }
            }
        if (letterFind !== true) {
            nt.play()
            error++
            let image = document.createElement("img")
            image.src = `./assets/img/${error}.png`
            document.querySelector("#imgContainer").innerHTML = ""
            document.querySelector("#imgContainer").appendChild(image)
            tryout--
            console.log(`La lettre n'est pas présente ou elle a dejà été appellé plus tot. Il vous reste ${tryout} essai !`);
            document.querySelector("#chancesLeft").textContent = `La lettre n'est pas présente ou elle a dejà été appellé plus tot. \n Il vous reste ${tryout} essai !`
        }
        else if (tryout > 0 && hiddenWord.join("").toLowerCase() === guessWord) {
        console.log("Vous avez gagnez !");
        document.querySelector("#win-container").classList.remove("hidden")
        document.querySelector("#comment").classList.add("hidden")
        document.querySelector("#comment-container").classList.add("hidden")
        document.querySelector("#chanceLeft-container").classList.add("hidden")
        document.querySelector("#chancesLeft").classList.add("hidden")
        document.querySelector("#hiddenWord-container").classList.add("hidden")
        document.querySelector("#hiddenWord").classList.add("hidden")
        document.querySelector("#win").classList.remove("hidden")
        gameOver()
        return  
        }
        }
        function gameOver() {
            document.querySelector("#image").classList.add("hidden")
            clearInterval(random)
            clearInterval(checkGuess)
        }
        function keyboard() {
            pad.forEach(element => {
                let para = document.createElement('p')
                para.textContent = element.toUpperCase()
                para.addEventListener("click", () => {
                    checkGuess(element)
                })
                addPad.appendChild(para)
            });
        }

















// if (tryout === 0) {
//     console.log(`Vous avez perdu ! Votre score est de ${score}`);
//     tryout = 5
// } else {
//     console.log("Vous avez gagnez !");
// }












//         let userGuess = null
//         while (hiddenWord.join("") !== guessWord && tryout > 0) {
//             console.log(hiddenWord.join(" "));
//             letterFind = false
//             userGuess = prompt("Entrez une lettre !").toLowerCase()
//             for (let i = 0; i < guessWord.length; i++) {
//                 if (userGuess === guessWord[i]) {
//                     letterFind = true
//                     hiddenWord[i] = userGuess

//                     result[i] = hiddenWord
//                 }
//             }
//             if (letterFind !== true) {
//                 tryout--
//                 console.log(`La lettre n'est pas présente ou elle a dejà été appellé plus tot. Il vous reste ${tryout} essai !`);
//                 document.querySelector("#chancesLeft") = tryout
//             }
//         }
//         if (tryout === 0) {
//             console.log(`Vous avez perdu ! Votre score est de ${score}`);
//             score-- 
//         } else {
//             console.log("Vous avez gagnez !");
//             score++
//             tryout++
//         }
//         intro = 0
//         while (intro !== "oui" && intro !== "non") {
//             intro = prompt(" Voulez-vous rejouer ?").toLowerCase()
//         }
//         if (intro === "non") {
//             console.log(`Dommage ! Votre score est de ${score}`);
//         }  

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}