const formName = document.getElementById("name");
const formNumber = document.getElementById("card-number");
const formMonth = document.getElementById("exp-month");
const formYear = document.getElementById("exp-year");
const formCVC = document.getElementById("card-cvc");
const fieldset = document.getElementById("date-field");
const form = document.getElementById("form");
const completeState = document.getElementById("complete-state");
const cardName = document.getElementById("card-name");
const cardCVC = document.getElementById("back-cvc");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardNumber = document.getElementById("front-card-number");

formName.addEventListener('click', () => {
    formName.classList.remove("error-input");
    const errorMessage = formName.parentNode.lastElementChild;
    errorMessage.style.display = "none";
});

formNumber.addEventListener('click', () => {
    formNumber.classList.remove("error-input");
    const errorMessage = formNumber.parentNode.lastElementChild;
    errorMessage.style.display = "none";
});

formMonth.addEventListener('click', () => {
    formMonth.classList.remove("error-input");
    const errorMessage = fieldset.lastElementChild;
    errorMessage.style.display = "none";
});

formYear.addEventListener('click', () => {
    formYear.classList.remove("error-input");
    const errorMessage = fieldset.lastElementChild;
    errorMessage.style.display = "none";
});

formCVC.addEventListener('click', () => {
    formCVC.classList.remove("error-input");
    const errorMessage = formCVC.parentNode.lastElementChild;
    errorMessage.style.display = "none";
});

function submitForm(){
    let submit = true;
    const cardNumberRegex = new RegExp('(\\d{4}\\s){3}\\d{4}', 'gm');

    if(formName.value == ""){
        submit = false;
        formName.classList.add("error-input");
        const errorMessage = formName.parentNode.lastElementChild;
        errorMessage.style.display = "block";
    }

    if(formNumber.value == ""){
        submit = false;
        formNumber.classList.add("error-input");
        const errorMessage = formNumber.parentNode.lastElementChild;
        errorMessage.innerText = "Can't be blank";
        errorMessage.style.display = "block";
    }
    else if(!cardNumberRegex.exec(formNumber.value)){
        submit = false;
        formNumber.classList.add("error-input");
        const errorMessage = formNumber.parentNode.lastElementChild;
        errorMessage.innerText = "Wrong format, numbers only";
        errorMessage.style.display = "block";
    }
    

    if(formMonth.value == ""){
        submit = false;
        formMonth.classList.add("error-input");
        const errorMessage = fieldset.lastElementChild;
        errorMessage.innerText = "Can't be blank";
        errorMessage.style.display = "block";
    } 
    else if((formMonth.value).length < 2){
        formMonth.classList.add("error-input");
        const errorMessage = fieldset.lastElementChild;
        errorMessage.innerText = "Invalid Month or Year";
        errorMessage.style.display = "block";
    }

    if(formYear.value == ""){
        submit = false;
        formYear.classList.add("error-input");
        const errorMessage = fieldset.lastElementChild;
        errorMessage.innerText = "Can't be blank";
        errorMessage.style.display = "block";
    }
    else if((formYear.value).length < 2){
        formYear.classList.add("error-input");
        const errorMessage = fieldset.lastElementChild;
        errorMessage.innerText = "Invalid Month or Year";
        errorMessage.style.display = "block";
    }

    if(formCVC.value == ""){
        submit = false;
        formCVC.classList.add("error-input");
        const errorMessage = formCVC.parentNode.lastElementChild;
        errorMessage.innerText = "Can't be blank";
        errorMessage.style.display = "block";
    }
    else if((formCVC.value).length < 3){
        formCVC.classList.add("error-input");
        const errorMessage = formCVC.parentNode.lastElementChild;
        errorMessage.innerText = "Invalid CVC";
        errorMessage.style.display = "block";
    }

    if(submit){
        const completeState = document.getElementById("complete-state");
        
        form.style.display = "none";
        completeState.style.display = "flex";
    }

}

function returnFormHandler(){
    form.reset();
    cardName.innerText = "Jane Appleseed";
    cardCVC.innerText = "000";
    cardMonth.innerText = "00";
    cardYear.innerText = "00";
    cardNumber.innerText = "0000 0000 0000 0000";
    form.style.display = "grid";
    completeState.style.display = "none";
}

function changeName(element){
    if(element.value !== "") {
        cardName.innerText = element.value;
    }else{
        cardName.innerText = "Jane Appleseed";
    }
}

function changeCVC(element){
    
    if(element.value !== "") {
        (element.value).length < 3 ? cardCVC.innerText = "000" : cardCVC.innerText = element.value;
    }else{
        cardCVC.innerText = "000";
    }
}

function changeMonth(element){
    
    if(element.value !== "") {
        (element.value).length < 2 ? cardMonth.innerText = "00" : cardMonth.innerText = element.value;
    }else{
        cardMonth.innerText = "00";
    }
}

function changeYear(element){

    if(element.value !== "") {
        (element.value).length < 2 ? cardYear.innerText = "00" : cardYear.innerText = element.value;
    }else{
        cardYear.innerText = "00";
    }
}

function changeNumber(element){

    if(element.value !== "") {
        (element.value).length < 19 ? cardNumber.innerText = "0000 0000 0000 0000" : cardNumber.innerText = element.value;
    }else{
        cardNumber.innerText = "0000 0000 0000 0000";
    }
}