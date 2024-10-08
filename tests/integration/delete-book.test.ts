import { DeleteBookUseCase } from '../../src/application/use-cases/delete-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';

const bookRepositoryMock = {
  delete: jest.fn(),
};

// Teste de integração
describe('DeleteBookE2E', () => {
  let deleteBookUseCase: DeleteBookUseCase;

  beforeEach(() => {
    deleteBookUseCase = new DeleteBookUseCase(
      bookRepositoryMock as unknown as BookRepository,
    );
  });

  it('should delete a book by id', async () => {
    const bookId = 'book-id-123';

    await deleteBookUseCase.execute(bookId);

    expect(bookRepositoryMock.delete).toHaveBeenCalledWith(bookId);
  });
});
