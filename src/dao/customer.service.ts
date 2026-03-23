import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { ICustomerRepository } from '../dao/interface/customer.repository.interface';
import { CustomerModel } from '../models/customer.model';
import { CreateCustomerRequest, UpdateCustomerRequest } from '../dto/customer-req.param';

@Injectable()
export class CustomerService {

  constructor(
    @Inject('ICustomerRepository')
    private readonly repo: ICustomerRepository,
  ) {}

  // =============================
  // CREATE
  // =============================
  async createCustomer(dto: CreateCustomerRequest): Promise<CustomerModel> {

    const mapped: CustomerModel = {
      id : 0,
      name: dto.customer_name,
      email: dto.email ,
      phone: dto.phone ,
      address : dto.address,
      is_member: dto.isMember,
      created_by:  'system',// will be change on future using user name login
      created_on: new Date(),
    
    };

    return await this.repo.createNewCustomer(mapped);
  }

  // =============================
  // GET ALL
  // =============================
  async getAllCustomers(): Promise<CustomerModel[]> {
    return await this.repo.findAll();
  }

  // =============================
  // GET BY ID
  // =============================
  async getCustomerById(id: number): Promise<CustomerModel> {
    const customer = await this.repo.findCustomerByid(id);

    if (!customer) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    return customer;
  }

  // =============================
  // UPDATE
  // =============================
  async updateCustomer(id: number, dto: UpdateCustomerRequest): Promise<CustomerModel> {

    const existing = await this.repo.findCustomerByid(id);

    if (!existing) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    const updated: CustomerModel = {
      ...existing,
      name: dto.customer_name ?? existing.name,
      email: dto.email ?? existing.email,
      phone: dto.phone ?? existing.phone,
      is_member: dto.isMember ?? existing.is_member,
      modified_on: new Date(),
      modified_by: 'system'
    };

    return await this.repo.updateCustomer(id, updated);
  }

  // =============================
  // DELETE
  // =============================
  async deleteCustomer(id: number,dto: UpdateCustomerRequest): Promise<CustomerModel> {

    const existing = await this.repo.findCustomerByid(id);

    if (!existing) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

      const updated: CustomerModel = {
      ...existing,
      name:  existing.name,
      email:  existing.email,
      phone:  existing.phone,
      is_member: dto.isMember ,
      modified_on: new Date(),
      modified_by: 'system'
    };

    return await this.repo.deleteCustomer(id, updated);
  }
}