import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitController } from './produit/produit.controller';
import { ProduitModule } from './produit/produit.module';
import { UserModule } from './user/user.module';
import { ProduitCommanderModule } from './produit-commander/produit-commander.module';
import { CategorieModule } from './categorie/categorie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { CommuneModule } from './commune/commune.module';
import { WilayaModule } from './wilaya/wilaya.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      // logging: true
    })
    ,ProduitModule, UserModule, ProduitCommanderModule, CategorieModule, CommuneModule, WilayaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
