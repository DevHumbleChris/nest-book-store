import { BooksController } from './controllers/books.controller';
import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
