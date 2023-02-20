/* eslint-disable prettier/prettier */
import { Book as BookInterface } from 'src/interfaces/book.interface';
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Param,
  Put,
  Delete,
  Query,
  Header
} from '@nestjs/common';
import { BooksService } from 'src/services/books.service';
import { Book } from '@prisma/client';
import { Queries } from 'src/interfaces/queries.interface';

@Controller('api')
export class BooksController {
  constructor(private booksService: BooksService) {}

  // Get All Books
  @Get('books')
  async getAllBooks(@Query() userQuery: Queries): Promise<Book[] | null> {
    return this.booksService.books(userQuery);
  }

  // Add New Book
  @Post('book/add-new')
  @Header('Access-Control-Allow-Origin', 'https://book-store-ke.vercel.app')
  @HttpCode(200)
  async createBook(@Body() bookData: BookInterface): Promise<Book> {
    return this.booksService.createBook(bookData);
  }

  // Get details of a specific book.
  @Get('book/:id')
  async getBookDetails(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.getBookDetails({
      id: Number(id),
    });
  }

  // Update a Book with a specific id.
  @Put('book/:id/update')
  @Header('Access-Control-Allow-Origin', 'https://book-store-ke.vercel.app')
  async updateBookDetails(
    @Param('id') id: string,
    @Body() updateData: Book,
  ): Promise<Book> {
    return this.booksService.updateBookDetails({
      where: { id: Number(id) },
      data: updateData,
    });
  }

  // Delete a Book with a specific id.
  @Delete('book/:id/delete')
  @Header('Access-Control-Allow-Origin', 'https://book-store-ke.vercel.app')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.booksService.deleteBook({
      id: Number(id),
    });
  }
}
