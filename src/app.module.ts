import { PrismaService } from './services/prisma.service';
import { BooksController } from './controllers/books.controller';
import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class AppModule {}
