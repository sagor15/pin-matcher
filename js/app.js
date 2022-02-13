
function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    console.log(pin)
    if(pinString.length == 4){
        return pin;
    }else {

       return getPin();
    }
};




function generatPin(){
    const pin = getPin();
    document.getElementById('inputForm').value = pin;
    // console.log(pin)
    // const inputValue = document.getElementById('inputForm');
    // const userValue = inputValue.value;
    // inputValue.value = pin;
    
};

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)){
        // console.log(number);
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
})


function verifyPin(){
    // console.log('going to veryfy')
    const pin = document.getElementById('inputForm')
}
document.getElementById('submit').addEventListener('click',function(){
   const firstOne = document.getElementById('inputForm');
   const firstOneValue = firstOne.value;
   const secondOne = document.getElementById('typed-numbers');
   const secondOneValue = secondOne.value;
   const succesMessege = document.getElementById('notify-pass');
   const wrongMessege = document.getElementById('notify-fail');
   if(firstOneValue == secondOneValue){
    //    console.log('sob thik thak')
    succesMessege.style.display = 'block';
    wrongMessege.style.display = 'none';
    
    
   }else{
    //    console.log('not done sob thik nai')
    
    succesMessege.style.display = 'none';
    wrongMessege.style.display = 'block';
   }
})