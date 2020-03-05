import { Module, Global } from '@nestjs/common';
import { databaseProvider } from './database.provider';
import { ConfigModule } from '../config/config.module';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [...databaseProvider],
  exports: [...databaseProvider]
})
export class DatabaseModule {}
