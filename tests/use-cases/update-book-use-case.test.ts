import { UpdateBookUseCase } from '../../src/application/use-cases/update-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';

const bookRepositoryMock = {
  update: jest.fn(),
};

// Teste unitário
describe('UpdateBookUseCase', () => {
  let updateBookUseCase: UpdateBookUseCase;

  beforeEach(() => {
    updateBookUseCase = new UpdateBookUseCase(
      bookRepositoryMock as unknown as BookRepository,
    );
  });

  it('should update a book with given id and data', async () => {
    const bookId = 'book-id-123';
    const updateParams = { title: 'Updated Title' };

    await updateBookUseCase.execute(bookId, updateParams);

    expect(bookRepositoryMock.update).toHaveBeenCalledWith(bookId, updateParams);
  });
});
