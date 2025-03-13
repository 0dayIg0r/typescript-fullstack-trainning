
import { CompanyAccount } from "./class/CompanyAccount";
import { NormalAccount } from "./class/NormalAccount";


const normalAccount = new NormalAccount(1, "IGOR", 2);
normalAccount.getLoan()



const companyAccount = new CompanyAccount("KKK", 25);
companyAccount.deposit()
