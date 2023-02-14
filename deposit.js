document.getElementById('btn-diposit').addEventListener('click', function(){

    //get the deposit ammout
  const depositF = document.getElementById('depo-field');
  const depoAmountString = depositF.value;
  const newDeposit = parseFloat(depoAmountString);

  //get the cuureent deposit 
  const depositTotal = document.getElementById('dipo-Current');
  const depoToAmountString = depositTotal.innerText;
  const previousAmount = parseFloat(depoToAmountString);

//adding 2 deposit
  const curentDeposit = newDeposit + previousAmount;
  //console.log( curentDeposit);
  depositTotal.innerText = curentDeposit;

  //get the current balance
  const balField = document.getElementById('bal-current')
  const balamountString =balField.innerText
  const balAmaount= parseFloat(balamountString)

  //adding Balance
  const newBal= balAmaount+newDeposit
  balField.innerText= newBal

  //clear the field
  depositF.value='';
  
})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //getting the withdraw ammout
    const withdrawF = document.getElementById('with-field');
    const withdrawAmountString = withdrawF.value;
    const newWithdraw = parseFloat(withdrawAmountString);

      //get the cuureent deposit 
  const withdrawTotal = document.getElementById('withdraw');
  const withdrawToAmountString = withdrawTotal.innerText;
  const previousWithAmount = parseFloat(withdrawToAmountString);

  //adding 2 deposit
  const curentWithdraw = newWithdraw + previousWithAmount;
  //console.log( curentDeposit);
  withdrawTotal.innerText = curentWithdraw ;

  //get the current balance
  const balField = document.getElementById('bal-current')
  const balamountString =balField.innerText
  const balAmaount= parseFloat(balamountString)

   //subtruct Balance
   const newwithBal= balAmaount-newWithdraw
   balField.innerText= newwithBal

   //clear the field
   withdrawF.value='';
})