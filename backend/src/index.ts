import express from 'express';
import cors from 'cors';
import answerRoutes from './routes/answer';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', answerRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});

