// 
const PATH_TERMINAL : string = "cd Desktop\Mon_Code\javascript\randomApp";

const button : HTMLButtonElement = document.getElementById("button") as HTMLButtonElement;
const form :HTMLFormElement = document.querySelector(".form") as  HTMLFormElement;
const input: HTMLInputElement = document.getElementById("input") as HTMLInputElement; // récupère l'élément input
let inputValue: number = Number(input.value); // convertit la valeur de l'élément en nombre
const block : HTMLElement = document.querySelector('.number') as HTMLElement;

const guides :HTMLElement = document.querySelector('.guides') as HTMLElement;



const impairArray : number[] = [];

const generateNumber = (x?:number) =>{
   (x = Math.floor(Math.random() * 99)); 
   const maxValue : HTMLElement = document.getElementById('max') as HTMLElement;
   maxValue.innerHTML = ` ${x}`;
    for (let i = 0; i < x; i++) {
        if (i % 2 != 0) {
            impairArray.push(i);          
        }  
    }
    console.table(impairArray);
    // console.log(Math.floor(Math.random() * impairArray.length ))
}
generateNumber()

let rand : number = (Math.floor(Math.random() * impairArray.length ));
console.log("nombre mystere :",rand);


// let soustraction =   rand - inputValue - 30


button.addEventListener('click',(e:Event) =>{
    e.preventDefault();
    const input: HTMLInputElement = document.getElementById("input") as HTMLInputElement; // récupère l'élément input
    let inputValue: number = Number(input.value); // convertit la valeur de l'élément en nombre
    // console.log(inputValue);
    let counter : HTMLElement|string = document.querySelector('.childrenNumber') as HTMLElement ;
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
        let modal = document.getElementById("myModal") as HTMLElement;
        modal.style.display = "block";
        reload(modal);
    //    (confirm('voulez vous rejouer ?'));

    }
})
const reload = (modal:HTMLElement) =>{
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click",()=>{
        modal.style.display = "none";
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
    
    })
}


const replayBtn  = document.getElementById('replayButton') as HTMLButtonElement

replayBtn.addEventListener('click',function(){
    // reload(modal)
})


