import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      'type':'postgres',
      'host':'localhost',
      'port':5432,
      'username':'postgres',
      'password':'123789oaf',
      'database':'cf5-nest',
      'entities':[__dirname+'/**/*.entity.{ts,js}'], //para que tome cual arch .entity y haga una tabla
      'synchronize': true //esto solo en desarrollo
    }),
    ProductModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
