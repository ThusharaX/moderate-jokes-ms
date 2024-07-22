import { Request, Response } from "express";
import {
  getAllSubmittedJokes,
  getSubmittedJokeById,
  updateSubmittedJoke,
  deleteSubmittedJoke,
  getJokeTypes,
  approveJoke,
  rejectJoke,
} from "../services/joke.service";

const getSubmittedJokesController = async (req: Request, res: Response) => {
  try {
    const jokes = await getAllSubmittedJokes();
    res.json(jokes);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getSubmittedJokeController = async (req: Request, res: Response) => {
  try {
    const joke = await getSubmittedJokeById(req.params.id);
    if (!joke) {
      res.status(404).json({ message: "Joke not found" });
    } else {
      res.json(joke);
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateSubmittedJokeController = async (req: Request, res: Response) => {
  try {
    const joke = await updateSubmittedJoke(req.params.id, req.body);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteSubmittedJokeController = async (req: Request, res: Response) => {
  try {
    const joke = await deleteSubmittedJoke(req.params.id);
    res.status(204).json({ message: "Joke deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getJokeTypesController = async (req: Request, res: Response) => {
  try {
    const jokeTypes = await getJokeTypes();
    res.json(jokeTypes);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const approveJokeController = async (req: Request, res: Response) => {
  try {
    const joke = await approveJoke(req.params.id, req.body);
    res.status(200).json(joke);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const rejectJokeController = async (req: Request, res: Response) => {
  try {
    await rejectJoke(req.params.id);
    res.status(204).json({ message: "Joke rejected successfully" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export {
  getSubmittedJokesController,
  getSubmittedJokeController,
  updateSubmittedJokeController,
  deleteSubmittedJokeController,
  getJokeTypesController,
  approveJokeController,
  rejectJokeController,
};
