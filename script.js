const savingsBalance = 50.0;
const checkingBalance = 100.0;

function atmMenu() {
  const pickMenuOption = prompt(
    `What would you like to do?
    1) View Balance
    2) Make a Deposit
    3) Make a Withdrawl
    `
  );
  let i;

  if (pickMenuOption === 1) {
    viewBalance();
  } else if (pickMenuOption === 2);
  else if (pickMenuOption === 3);
  // Make Withdrawl
  function viewBalance() {
    const balanceMenu = prompt(
      `Welcome! Which account type would you like to view the balance of?
        For Savings Enter (1)
        For Checking Enter (2)`
    );
    let a;

    if (balanceMenu === 1) {
      console.log(savingsBalance);
    } else if (balanceMenu === 2) {
      console.log(checkingBalance);
      return checkingBalance;
    }
  }
}
atmMenu();

function makeDeposit() {}

function makeWithdawl() {}
