import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/mongo-db/connection';

export const app = express();
app.use(express.json());


const { bookController } = configureDependencies();


app.post('/books', (req, res) => bookController.create(req, res));
app.get('/books', (req, res) => bookController.listAll(req, res));
app.patch('/book/:id', (req, res) => bookController.update(req, res));
app.delete('/book/:id', (req, res) => bookController.delete(req, res));


const startServer = async () => {
  try {
    await connectDB(); 
    const PORT = 3333;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};


if (require.main === module) {
  startServer(); 
}
