import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import {ENV_PATH} from './config';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(ENV_PATH),
    },
  ],
  exports: [
    ConfigService,
  ],
})
export class ConfigModule {}
