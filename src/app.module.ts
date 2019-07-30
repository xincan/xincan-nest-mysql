import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from './user/user.module';

const connection = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'xincan-nest',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  timezone: 'MT',
});

@Module({
  imports: [
      connection,
      UserModule,
  ],
})
export class AppModule {}
