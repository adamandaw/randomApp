"use strict";
// 
const PATH_TERMINAL = "cd Desktop\Mon_Code\javascript\randomApp";
const button = document.getElementById("button");
const form = document.querySelector(".form");
const input = document.getElementById("input"); // récupère l'élément input
let inputValue = Number(input.value); // convertit la valeur de l'élément en nombre
const block = document.querySelector('.number');
const guides = document.querySelector('.guides');
const impairArray = [];
const generateNumber = (x) => {
    (x = Math.floor(Math.random() * 99));
    const maxValue = document.getElementById('max');
    maxValue.innerHTML = ` ${x}`;
    for (let i = 0; i < x; i++) {
        if (i % 2 != 0) {
            impairArray.push(i);
        }
    }
    console.table(impairArray);
    // console.log(Math.floor(Math.random() * impairArray.length ))
};
generateNumber();
let rand = (Math.floor(Math.random() * impairArray.length));
console.log("nombre mystere :", rand);
// let soustraction =   rand - inputValue - 30
// console.log(soustraction);
button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById("input"); // récupère l'élément input
    let inputValue = Number(input.value); // convertit la valeur de l'élément en nombre
    // console.log(inputValue);
    let counter = document.querySelector('.childrenNumber');
    counter.innerHTML = inputValue.toString();
    if (inputValue > rand) {
        guides.innerHTML = "La Valeur doit être Inférieur😮";
        guides.style.color = "red";
    }
    if (inputValue < rand) {
        guides.innerHTML = `La Valeur doit être Supérieur😃 `;
        // alert(`le nombre mystere est dans les environ de ${soustraction} `)
        guides.style.color = "orange";
    }
    if (inputValue < 0) {
        guides.innerHTML = `Pas de Valeur Negatif `;
        // alert(`le nombre mystere est dans les environ de ${soustraction} `)
        guides.style.color = "orange";
    }
    if (inputValue === rand) {
        guides.innerHTML = "Trouvé 👍🏻";
        guides.style.color = "green";
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
        reload(modal);
        //    (confirm('voulez vous rejouer ?'));
    }
});
const reload = (modal) => {
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", () => {
        modal.style.display = "none";
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    });
};
const replayBtn = document.getElementById('replayButton');
replayBtn.addEventListener('click', function () {
    // reload(modal)
});
