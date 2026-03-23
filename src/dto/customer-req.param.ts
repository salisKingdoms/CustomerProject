export class CreateCustomerRequest{
    customer_name: string;
    email? : string;
    phone? : string;
    address: string;
    isMember : boolean;
}

export class UpdateCustomerRequest{
    customer_name: string;
    email? : string;
    phone? : string;
    address: string;
    isMember : boolean;
}
