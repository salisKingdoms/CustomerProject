import { Injectable } from "@nestjs/common";
import { DatabaseService } from  "../database/database.service";
import { ICustomerRepository } from "./interface/customer.repository.interface";
import { CustomerModel } from "../models/customer.model";


@Injectable()
export class CustomerRepository implements ICustomerRepository{
    constructor(private readonly db: DatabaseService){}

    async findAll() : Promise<CustomerModel[]>{
        const query=`
                    SELECT * FROM ws_customer ORDER BY name
        `;

        const result = await this.db.query(query);
        return result.rows;
    }

    async findCustomerByid(id : number) : Promise<CustomerModel>{
        const query =`
                    SELECT * FROM ws_customer WHERE id = $1
        `;

        const result = await this.db.query(query,[id]);
        return result.rows[0];
    }

    async createNewCustomer(data : CustomerModel) : Promise<CustomerModel>{
        const query =`
                    INSERT INTO ws_customer
                    (name, email, phone, address, is_member, created_by,  created_on)
                    VALUES
                    ($1, $2, $3, $4, $5, $6, NOW())
        `;

        const param =[
            data.name,
            data.email,
            data.phone,
            data.address,
            data.is_member,
            data.created_by
        ];

        const result = await this.db.query(query, param);
        return result.rows[0];
    }

    async updateCustomer (id:number, data:CustomerModel) : Promise<CustomerModel>{
        const query =`
                    UPDATE  ws_customer
                    SET 
                        name =$1, email =$2, phone=$3, address=$4, is_member=$5, modified_by=$6, modified_on=NOW()
                    WHERE id= $7
                    RETURNING *
        `;

        const param =[
            data.name,
            data.email,
            data.phone,
            data.address,
            data.is_member,
            data.modified_by,
            data.id
        ];

        const result = await this.db.query(query,param);
        return result.rows[0];
    }

    async deleteCustomer(id:number, data: CustomerModel): Promise<CustomerModel>{

        const query=`
                UPDATE  ws_customer
                    SET 
                        is_member=false,modified_by=$1,modified_on=NOW()
                    WHERE id= $2
        `;

         const param =[
            data.modified_by,
            data.id
        ];

        const result = await this.db.query(query, param);
        return result.rows[0];
    }
}