import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class ListAllBooksUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository
  ) {}

  async execute(): Promise<Array<Book>> {
    return await this.bookRepository.findAll();
  }

}