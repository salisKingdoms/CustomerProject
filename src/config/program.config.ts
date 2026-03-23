import { Module } from '@nestjs/common';
import { CustomerRepository } from '../dao/customer.repository';
import { ICustomerRepository } from '../dao/interface/customer.repository.interface';
import { CustomerController } from '../controllers/customer.controller';
import { DatabaseModule } from '../database/database.module';
import { CustomerService } from '../dao/customer.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomerController],
  providers: [
    CustomerService,
    {
      provide: ICustomerRepository,
      useClass: CustomerRepository,
    },
  ],
})
export class DependencyInjectionModule {}