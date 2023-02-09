/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common'
import { Book } from 'src/interfaces/book.interface'
import { BooksService } from 'src/services/books.service'

@Controller('api')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get('books')
    async getAllBooks(): Promise<Book[]> {
        return this.booksService.findAll()
    }
}
