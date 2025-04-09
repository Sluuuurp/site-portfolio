// *********************************SECTION FOND ANIMER *******************************

const divAnim = document.querySelectorAll('.anim-fond p')
//créé les chiffre
function creaChiffre() {
    let monBinaire = '';
    for (let i = 0; i < 8; i++) {
      monBinaire += Math.random() > 0.5 ? '1' : '0';
    }
    return monBinaire;
  }

//Affiche l'animation
setInterval(() => {
    divAnim.forEach(chiffre =>{
    chiffre.textContent = creaChiffre();
    }) 
}, 100); // Intervalle de 100ms entre chaque changement de binaire


// *********************************ECRITURE DU TITRE *******************************
const anim1 = document.querySelector('.ecriture-anim1')
console.log(anim1)
const anim2 = document.querySelector('.ecriture-anim2')

// anim1.addEventListener('animationend', ()=> {
//     anim1.style.border = 'none'
// })

// anim2.addEventListener('animationstart', ()=> {
//     anim2.style.borderRight = '15px solid white'
// })



setTimeout(() => {
    anim1.style.border = 'none'
}, 1600);

setTimeout(() => {
    anim2.style.borderRight = '15px solid white'
}, 1600);




// *********************************SECTION PARCOURS*************************************

// gestion de l'anim des tuiles
const tuiles = document.querySelectorAll(".parcours__tuile")

tuiles.forEach(tuile =>{
    tuile.addEventListener('mouseover', (e) =>{
        const tuilePlacement = tuile.getBoundingClientRect(); //recup poisition de la tuile
        const tuileCentreX = tuilePlacement.left + tuilePlacement.width / 2;
        const tuileCentreY = tuilePlacement.top + tuilePlacement.height / 2;

        const mouseX = e.clientX; //position de la souris
        const mouseY = e.clientY;

        const distCentreX = (mouseX - tuileCentreX) / (tuilePlacement.width / 2)
        const distCentreY = (mouseY - tuileCentreY) / (tuilePlacement.height / 2)

        tuile.style.transform = `rotateX(${distCentreY *30}deg) rotateY(${distCentreX *30}deg)`
    })

    tuiles.forEach(tuile => {
        tuile.addEventListener('mouseleave', () => {
            tuile.style.transform = 'rotateX(0deg) rotateY(0deg)'
        })
    })     
})

//gestion du tri
//recup bouton
const boutons = document.querySelectorAll(".bouton-tri")
//gestion de la selection des boutons
boutons.forEach(bouton=>{
    bouton.addEventListener('click', ()=> {
        boutons.forEach(bouton => {bouton.classList.remove("selectionner")}) //deselectionne
        bouton.classList.add("selectionner") //selectiionne
        
        //affichage des tuiles
        tuiles.forEach(tuile => {
            tuile.classList.remove('hidden')//remise a zero
            if (bouton.textContent === "TOUT"){
                tuile.classList.remove('hidden')
            }
            else if (tuile.classList[1] !== bouton.textContent){
                tuile.classList.add('hidden')
            }
        })
    })
})







