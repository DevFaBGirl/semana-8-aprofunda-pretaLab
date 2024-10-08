import request from 'supertest';
import { app } from '../../src/interface/index'; // Importe seu servidor
import { connectDB, disconnectDB } from '../../src/infrastructure/database/mongo-db/connection'; // Conexão com o banco de dados

describe('ListAllBooks Integration Test', () => {
  // Conectar e desconectar do banco antes e depois dos testes
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  it('should return a list of all books', async () => {
    // Primeiro, insira um livro no banco de dados
    const bookPayload = {
      title: 'Devops',
      author: 'John Doe',
      isbn: '978-0132350884',
      publisher: 'TechPress',
      category: 'Tech',
      status: 'read'
    };
    
    // Criar um livro através da rota POST para garantir que haja algo no banco
    await request(app)
      .post('/books')
      .send(bookPayload)
      .expect(201);

    // Requisição GET para listar todos os livros
    const response = await request(app)
      .get('/books')
      .expect(200);

    // Verifique a resposta
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toMatchObject(bookPayload);
  });
});
