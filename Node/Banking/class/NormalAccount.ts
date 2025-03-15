import { Account } from "./Account";

export class NormalAccount extends Account {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
  

  getLoan = (): void => {
    console.log("Você pegou um empréstimo");
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