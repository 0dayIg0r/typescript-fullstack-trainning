// classe abstrata serve de modelo para as outras

export abstract class Account {
  private name: string;
  readonly accountNumber: number;
 protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    (this.name = name), (this.accountNumber = accountNumber);
  }
  setName = (name: string): void => {
    this.name = name;
    console.log("nome alterado");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      console.log("Você depositou");
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}. Saldo restante ${this.balance}`);
    } else if (this.balance < amount) {
      throw new Error("Saldo insuficiente para o saque");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida");
  };

  isActive():boolean{
    return this.status
  }
}
