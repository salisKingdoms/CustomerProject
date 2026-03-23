import { CustomerModel } from "../../models/customer.model";
import { CreateCustomerRequest} from "../../dto/customer-req.param";

export const ICustomerRepository ="ICustomerRepository";


export interface ICustomerRepository{
     findAll() : Promise<CustomerModel[]>;
     findCustomerByid(id : number) : Promise<CustomerModel>;
     createNewCustomer(data : CustomerModel) : Promise<CustomerModel>;
     updateCustomer (id:number, data:CustomerModel) : Promise<CustomerModel>;
     deleteCustomer(id:number, data: CustomerModel): Promise<CustomerModel>;
}