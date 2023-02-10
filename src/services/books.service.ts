/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { Queries } from 'src/interfaces/queries.interface';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async books(queries: Queries): Promise<Book[] | null> {
    const { title, author, type } = queries;
    return this.prisma.book.findMany({
      where: {
        OR: [
          {
            title: {
              contains: title,
            },
          },
          {
            author: {
              contains: author,
            },
          },
          {
            type: {
              contains: type,
            },
          },
        ],
      },
    });
  }

  async createBook(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({
      data,
    });
  }

  async getBookDetails(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.findUnique({
      where,
    });
  }

  async updateBookDetails(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    const { where, data } = params;
    return this.prisma.book.update({
      where,
      data,
    });
  }

  async deleteBook(where: Prisma.BookWhereUniqueInput): Promise<Book> {
    return this.prisma.book.delete({
      where,
    });
  }
}
