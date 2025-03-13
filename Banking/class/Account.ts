// classe abstrata serve de modelo para as outras

export abstract class Account {
  private name: string;
  accountNumber: number;
  balance: number = 0;
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

  desposit = (): void => {
    if(this.validateStatus()){
        console.log('VocÊ depositou')
    } else(
        console.log('Deposito não concluido')
    )
  };

  withdraw = (): void => {
    console.log("Você sacou");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  };
}
