export class CustomerModel {
    id : number;
    name : string;
    email? : string;
    phone? : string;
    address : string;
    is_member : boolean;
    created_by : string;
    created_on : Date;
    modified_by? : string;
    modified_on? : Date;
}