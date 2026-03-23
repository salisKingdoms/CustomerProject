import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Inject,
} from '@nestjs/common';
import { ICustomerRepository } from '../dao/interface/customer.repository.interface';
import { CreateCustomerRequest, UpdateCustomerRequest } from '../dto/customer-req.param';
import { CustomerService } from '../dao/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    @Inject('ICustomerRepository')
    private readonly repo: ICustomerRepository,
  ) {}

  

  @ Get()
  async getAll() {
    return this.repo.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.repo.findCustomerByid(Number(id));
  }

  @Post()
  async create(@Body() body: CreateCustomerRequest) {
    return this.customerService.createCustomer(body as any);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: UpdateCustomerRequest) {
    return this.repo.updateCustomer(Number(id), body as any);
  }

  @Delete(':id')
  async delete(@Param('id') id: number, @Body() body: UpdateCustomerRequest) {
    await this.repo.deleteCustomer(Number(id), body as any);
    return { message: 'Deleted successfully' };
  }
}