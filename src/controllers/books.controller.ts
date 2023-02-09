/* eslint-disable prettier/prettier */
import { Book as BookInterface } from 'src/interfaces/book.interface';
import { Controller, Get, Post, Body, HttpCode, Param, Put } from '@nestjs/common';
import { BooksService } from 'src/services/books.service';
import { Book } from '@prisma/client';

@Controller('api')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('books')
  async getAllBooks(): Promise<Book[] | null> {
    return this.booksService.books();
  }

  @Post('book/add-new')
  @HttpCode(200)
  async createBook(@Body() bookData: BookInterface): Promise<Book> {
    return this.booksService.createBook(bookData);
  }

  @Get('book/:id')
  async getBookDetails(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.getBookDetails({
        id: Number(id),
    });
  }

  @Put('book/:id/update')
  async updateBookDetails(@Param('id') id: string, @Body() updateData: Book): Promise<Book> {
    return this.booksService.updateBookDetails({
        where: { id: Number(id) },
        data: updateData
      })
  }
}
