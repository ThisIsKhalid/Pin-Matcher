function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    } 
    else {
        // console.log('pin not', pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const pinInputField = document.getElementById('show-pin');
    pinInputField.value = pin;
})



document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-text');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        } 
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})


document.getElementById('verify-pin').addEventListener('click', function(){
    const pinInputField = document.getElementById('show-pin');
    const currentPin = pinInputField.value;

    const typeNumberField = document.getElementById('typed-text');
    const currentTypeNumber = typeNumberField.value;

    const pinCorrectMsg = document.getElementById('pin-correct');
    const pinIncorrectMsg = document.getElementById('pin-incorrect');
    if (currentPin === currentTypeNumber){
        pinCorrectMsg.style.display = 'block';
        pinIncorrectMsg.style.display = 'none';
    }
    else {
        pinCorrectMsg.style.display = 'none';
        pinIncorrectMsg.style.display = 'block';
    }
})