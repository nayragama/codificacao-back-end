import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModules } from './alunos/alunos.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/escola_dbn'),
    AlunosModules,
  ],
})
export class AppModule {}
