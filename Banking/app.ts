
import { CompanyAccount } from "./class/CompanyAccount";
import { NormalAccount } from "./class/NormalAccount";
import { RichAccout } from "./class/richAccount";


const newCompanyAccount = new CompanyAccount('Igor', 1, 0);
newCompanyAccount.deposit(1000)
newCompanyAccount.getLoan(150)
newCompanyAccount.getName()
newCompanyAccount.isActive()

const newNormalAccout = new NormalAccount(123, 'Jr', 1)
newNormalAccout.deposit(100)

const richAccount = new RichAccout(12,'teste',1)
richAccount.deposit(100)





