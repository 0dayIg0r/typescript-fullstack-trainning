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
}