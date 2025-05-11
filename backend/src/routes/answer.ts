import { Router } from 'express';

let latestAnswer = '';

const router = Router();

router.post('/create-answer', (req, res) => {
  const { data } = req.body;
  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid data format' });
  }
  latestAnswer = data;
  res.status(200).json({ message: 'Data received' });
});

router.get('/latest-answer', (_, res) => {
  res.json({ data: latestAnswer });
});

export default router;

