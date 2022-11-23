const cardNameEl = document.getElementById("card-name");
const cardNumEl = document.getElementById("card-number");
const mmEl = document.getElementById("mm");
const yyEl = document.getElementById("yy");
const cvvEl = document.getElementById("cvv");
const btnEl = document.querySelector(".btn");
const thanksEl = document.querySelector(".thank-you");
const wrongSpanEl = document.querySelector(".wrong-span");
const blankEl = document.querySelector(".blank");
const blankLastEl = document.querySelector(".blank-last");


const digitEl = document.querySelector(".digits");
const nameEl = document.querySelector(".name");
const expDatemmEl = document.querySelector(".exp-date-mm");
const expDateyyEl = document.querySelector(".exp-date-yy");
const cvvBackEl = document.querySelector(".cvv-back");

cardNameEl.addEventListener("keyup", updateCard);
cardNumEl.addEventListener("keyup", updateCard);
mmEl.addEventListener("keyup", updateCard);
yyEl.addEventListener("keyup", updateCard);
cvvEl.addEventListener("keyup", updateCard);

btnEl.addEventListener("click", ()=>{
    
    if (isNaN(cardNumEl.value) ) {
        wrongSpanEl.classList.remove("active");
        
    } else if (mmEl.value === "") {
        blankEl.classList.remove("active");

    } else if (yyEl.value === "") {
        blankEl.classList.remove("active");
    } else if (cvvEl.value === "") {
        blankLastEl.classList.remove("active");
    }
     else {
        updateCard();
        thanksEl.classList.remove("active");
    }

});


function updateCard() {
    nameEl.innerHTML = cardNameEl.value;
    digitEl.innerHTML = cardNumEl.value;
    expDatemmEl.innerHTML = mmEl.value;
    expDateyyEl.innerHTML = yyEl.value;
    cvvBackEl.innerHTML = cvvEl.value;

}


