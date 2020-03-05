import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';
import { User } from '../user/user.model';
import { Todo } from '../todo/todo.model';

export const databaseProvider = [
  {
    provide: 'SequelizeInstance',
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        pool: {
          max: configService.get('DB_MAX_CONNECTION') ? parseInt(configService.get('DB_MAX_CONNECTION'), 0) : 5,
          idle: configService.get('DB_IDLE_CONNECTION_TIME') ? parseInt(configService.get('DB_IDLE_CONNECTION_TIME'), 0) : 10000
        }
      });
      if (process.env.NODE_ENV === 'test' && process.env.APP_ENV === 'test') {
        sequelize.sync({ force: true });
      }
      sequelize.addModels([
        // Write Model Names here
        User,
        Todo
      ]);
      return sequelize;
    },
    inject: [ConfigService]
  }
];
