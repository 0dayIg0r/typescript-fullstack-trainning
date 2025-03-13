// classe abstrata serve de modelo para as outras

export abstract class Account {
    name: string;
    accountNumber: number;
    balance: number = 0;
  
    constructor(name: string, accountNumber: number) {
      (this.name = name), (this.accountNumber = accountNumber);
    }
  
    desposit = ():void => {
      console.log("você depositou");
    };
  
    withdraw = ():void => {
      console.log("Você sacou");
    };
  
    getBalance = ():void => {
      console.log(this.balance);
    };
  }