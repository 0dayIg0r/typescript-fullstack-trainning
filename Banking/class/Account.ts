// classe abstrata serve de modelo para as outras

export abstract class Account {
  private name: string;
  accountNumber: number;
  balance: number = 0;

  constructor(name: string, accountNumber: number) {
    (this.name = name), (this.accountNumber = accountNumber);
  }
  setName = (name: string): void => {
    this.name = name;
    console.log("nome alterado");
  };

  desposit = (): void => {
    console.log("você depositou");
  };

  withdraw = (): void => {
    console.log("Você sacou");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };
}
