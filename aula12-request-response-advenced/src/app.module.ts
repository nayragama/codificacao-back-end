import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SegurancaController } from './seguramça.controller.js';

@Module({
  imports: [],
  controllers: [AppController, SegurancaController],
  providers: [AppService],
})
export class AppModule {}
