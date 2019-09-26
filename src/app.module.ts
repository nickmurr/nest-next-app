import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestNextModule } from 'nest-next-module';
import { PagesController } from './pages/pages.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import config from './config/key';

const dev = process.env.NODE_ENV !== 'production';

@Module({
  imports: [
    NestNextModule.forRoot({ dev }),
    MongooseModule.forRoot(config.mongoURI),
    ItemsModule,
  ],
  controllers: [AppController, PagesController],
  providers: [AppService],
})
export class AppModule {}
