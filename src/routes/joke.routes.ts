import { Router } from 'express';
import { getSubmittedJokesController, getSubmittedJokeController, updateSubmittedJokeController, deleteSubmittedJokeController, getJokeTypesController, approveJokeController, rejectJokeController } from '../controllers/joke.controller';

const router = Router();

router.get('/submitted', getSubmittedJokesController);
router.get('/submitted/:id', getSubmittedJokeController);
router.patch('/submitted/:id', updateSubmittedJokeController);
router.delete('/submitted/:id', deleteSubmittedJokeController);
router.get('/joke-types', getJokeTypesController);
router.post('/approve/:id', approveJokeController);
router.delete('/reject/:id', rejectJokeController);

export default router;
