document.getElementById('deposit-button').addEventListener('click', function () {
  const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);

  // update deposit Total

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText)
  const newDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

  //update account balance

  const balanceTotal = document.getElementById('balance-total');
  const previousbalanceText = balanceTotal.innerText;
  const previousbalanceAmount = parseFloat(previousbalanceText);
  const newbalanceTotal = previousbalanceAmount + newDepositAmount;
  balanceTotal.innerText = newbalanceTotal;

  // clear the depositInput filed 
  depositInput.value = '';

});

// handel withdrw event handler
document.getElementById('withdrw-button').addEventListener('click', function () {
  const whitdrwInput = document.getElementById('withdrw-input');
  const whitdrwAmountText = whitdrwInput.value;
  const newWithdrwAmount = parseFloat(whitdrwAmountText);

  // set withdrw total
  const withdrwTotal = document.getElementById('withdrw-total');
  const previousWithdrwText = withdrwTotal.innerText;
  const previousWithdrwTotal = parseFloat(previousWithdrwText);
  const newWithdrwTotal = previousWithdrwTotal + newWithdrwAmount;
  withdrwTotal.innerText = newWithdrwTotal;

  // update balance
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const newBalanceTotal = previousBalanceTotal - newWithdrwAmount;
  balanceTotal.innerHTML= newBalanceTotal;

  // clear the depositInput filed 
  whitdrwInput.value = '';
});