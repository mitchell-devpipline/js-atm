/*
OOP - ATM assignment
********************************************
Due: Mon 3/6
Virtual ATM Machine (OOP Project)
- Build a console app that mimics an atm machine
- Persitent balance (CRUDable)
- Main Menu that routes to other menus 
  *********
  Welcome
  1) view balance
   ..... etc
  *********
- Redirect back to the main menu
- Error handling for withdrawals 
- Deposit
- Withdrawal
- View Balance
- Exit the program via selection
- Receipt 
- BONUS:
  - Include pin number for users  
  - Easter Egg code for FBI Lockout


HAVE FUN
*/
class User {
  constructor(firstName, lastName, password, email, balance= 0 ) {
    this.firstName = firstName
    this.lastName = lastName
    this.password = password
    this.email = email
    this.balance = balance

  }

  get viewBalance() {
    const prompt = `Welcome here is your balance.`;
    alert(`You're Balance is :$ ${this.balance}`);
    atmMenu();
  }

  get makeDeposit() {
    const deposit = Number(
      prompt("Please enter the ammount you would like to deposit")
      );
      this.balance = this.balance + deposit;
      let showBal = alert(`Your new balance is ${this.balance}`);
      atmMenu();
      return this.balance;
    }

  get makeWithdrawl() {
    const withdraw = Number(
      prompt("Please enter the ammount you would like to withdraw")
    );
    this.balance = this.balance - withdraw;
    let showBal = alert(`Your new balance is ${this.balance}`);
    atmMenu();
    return this.balance;
  }
}

const mitchell = new User ("Mitchell", "Nelson", '1234', 'mitchell@devpipeline.com', 950)
// alert(mitchell.atmMenu)

let balance = 50.0;

function atmMenu() {
  const pickMenuOption = prompt(
    `What would you like to do?
    1) View Balance
    2) Make a Deposit
    3) Make a Withdrawl
    `
  );

  if (pickMenuOption === "1") {
    alert(mitchell.viewBalance)
    viewBalance()

  } else if (pickMenuOption === "2") {
    alert(mitchell.makeDeposit)
    makeDeposit();

  } else if (pickMenuOption === "3") {
    alert(mitchell.makeWithdrawl)
    makeWithdrawl();
  }
}

atmMenu();
  
    // VIEW BALANCE
    // function viewBalance() {
    //   const prompt = `Welcome here is your balance.`;
    //   alert(`You're Balance is :${balance}`);
    //   atmMenu();
    // }
  
//DEPOSIT
// function makeDeposit() {
//   const deposit = Number(
//     prompt("Please enter the ammount you would like to deposit")
//   );
//   balance = balance + deposit;
//   let showBal = alert(`Your new balance is ${balance}`);
//   atmMenu();
//   return balance;
// }

//WITHDRAWL
// function makeWithdrawl() {
//   const withdraw = Number(
//     prompt("Please enter the ammount you would like to withdraw")
//   );
//   balance = balance - withdraw;
//   let showBal = alert(`Your new balance is ${balance}`);
//   atmMenu();
//   return balance;
// }
