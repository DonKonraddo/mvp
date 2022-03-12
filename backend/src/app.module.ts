import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), GraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
