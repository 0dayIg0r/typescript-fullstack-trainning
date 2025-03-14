import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber);
    this.balance = balance;
  }

  getLoan = (amount: number): void => {
    if(this.balance < amount){
      throw new Error('Saldo insuficiente')
    } else if(amount === 0){
      throw new Error('Emprestimo disponivel a partir de 1 real.')
    }

    this.balance -= amount
    console.log(`Você pegou um emprestimo de  ${amount}. Saldo atual: ${this.balance}`);
  };

  deposit = (amount: number) => {
    if (amount <= 0) {
      throw new Error("Somente depositos a partir de 1 real");
    } else if (!this.isActive()) {
      throw new Error("A conta de deposito está desativada");
    }
    this.balance += amount;
    console.log(`Você despositou ${amount}. Saldo atual: ${this.balance}`);
  };
}
