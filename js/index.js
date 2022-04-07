// calculate button event handling
document.getElementById('calculate-button').addEventListener('click', function(){
    // get all input value
   const incomeInputText = document.getElementById('user-income-input').value;
   const foodInputText = document.getElementById('user-food-input').value;
   const rentInputText = document.getElementById('user-rent-input').value;
   const clothesInputText = document.getElementById('user-clothes-input').value;

//    parseFloat all value
const incomeInputAmount = parseFloat(incomeInputText);
const foodInputAmount = parseFloat(foodInputText);
const rentInputAmount = parseFloat(rentInputText);
const clothesInputAmount= parseFloat(clothesInputText);

// expenses
const expensesAmount = foodInputAmount + rentInputAmount + clothesInputAmount;
const totalExpenses = document.getElementById('total-expanses');
totalExpenses.innerText = expensesAmount;

// available balance after expenses
const availableBalance = incomeInputAmount - expensesAmount;
const balance = document.getElementById('balance');
    balance.innerText = availableBalance;
    // clear input field value
    function clearInput(){
          totalExpenses.innerText = 0;
        balance.innerText = 0;
    }
    // validation
    if(incomeInputAmount < 0){
        alert ("Please enter your net income amount");
        // call clearInput function
        clearInput()
    }
    else if(incomeInputAmount < expensesAmount){
      alert ("You dont'd have enough balance");
      // call clearInput function
      clearInput()
    }
    else if(incomeInputAmount < 0 || foodInputAmount < 0 || rentInputAmount < 0 ||clothesInputAmount < 0){
        alert ("Assignment a nagetive value");
        // call clearInput function
        clearInput()
    }
    if(isNaN(incomeInputAmount) || isNaN(foodInputAmount) || isNaN(rentInputAmount) || isNaN(clothesInputAmount) ){
        alert ('Please give a number')

    }

});
// save button event handling

