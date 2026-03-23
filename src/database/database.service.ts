import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { Pool, PoolClient, QueryResult } from 'pg';
import { ConfigService } from '@nestjs/config';

interface DbSettings {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

@Injectable()
export class DatabaseService implements OnModuleDestroy {
  private pool: Pool;

  constructor(private configService: ConfigService) {
    const dbConfig = this.configService.get<DbSettings>('DbSettings');

    if (!dbConfig) {
      throw new Error('Database configuration not found');
    }

     this.pool = new Pool({
      host: dbConfig.host,
      port: dbConfig.port,
      database: dbConfig.database,
      user: dbConfig.user,
      password: dbConfig.password,
      ssl: false, // change true if needed
    });
  }
 
  // for SELECT / INSERT / UPDATE / DELETE common
  async query<T>(
    query: string,
    params?: any[],
  ): Promise<QueryResult<T>> {
    return this.pool.query<T>(query, params);
  }

  // for transaction (BEGIN / COMMIT / ROLLBACK)
  async getClient(): Promise<PoolClient> {
    return this.pool.connect();
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}