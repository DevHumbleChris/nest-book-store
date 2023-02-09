/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
// import { Book } from "src/interfaces/book.interface";
import { Book, Prisma } from '@prisma/client'
import { PrismaService } from "./prisma.service";

@Injectable()
export class BooksService {
    constructor(private prisma: PrismaService) {}

    async books(): Promise<Book[] | null > {
        return this.prisma.book.findMany()
    }

    async createBook(data: Prisma.BookCreateInput): Promise<Book> {
        return this.prisma.book.create({
            data,
        })
    }
}
