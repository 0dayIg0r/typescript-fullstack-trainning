import { NormalAccount } from "./NormalAccount";

export class RichAccout extends NormalAccount {
  constructor(doc_id: number, name: string, accountNumber: number) {
    super(doc_id, name, accountNumber);
    this.doc_id = doc_id;
  }

  deposit = (amount: number) => {
    if (amount <= 0) {
      throw new Error("Somente depositos a partir de 1 real");
    } else if (!this.isActive()) {
      throw new Error("A conta de deposito está desativada");
    }
    this.balance += amount +10;
    console.log(`Você despositou ${amount}. Saldo atual: ${this.balance}`);
  };
}
