import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DependencyInjectionModule } from './config/program.config';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//  Resolve path safely
const filePath = join(process.cwd(), 'appsetting.json');

if (!existsSync(filePath)) {
  throw new Error('appsetting.json not found in project root');
}

// Parse JSON safely
const appSettings = JSON.parse(
  readFileSync(filePath, 'utf-8'),
);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => appSettings],
    }),
    DependencyInjectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}