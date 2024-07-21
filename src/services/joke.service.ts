import axios from "axios";
import { envs } from "../config/env";

const SUBMIT_JOKES_MS = `${envs.BACKEND_DOMAIN}/submit`;
const DELIVER_JOKES_MS = `${envs.BACKEND_DOMAIN}/deliver`;

const getAllSubmittedJokes = async () => {
  // ! api request to 'submit-jokes-ms' microservice
  const response = await axios.get(`${SUBMIT_JOKES_MS}/jokes`);
  return response.data;
};

const getSubmittedJokeById = async (id: string) => {
  // ! api request to 'submit-jokes-ms' microservice
  const response = await axios.get(`${SUBMIT_JOKES_MS}/jokes/${id}`);
  return response.data;
};

const updateSubmittedJoke = async (
  id: string,
  data: Partial<{
    setup: string;
    punchline: string;
    type: string;
    author: string;
  }>,
) => {
  // ! api request to 'submit-jokes-ms' microservice
  const response = await axios.patch(`${SUBMIT_JOKES_MS}/jokes/${id}`, data);
  return response.data;
};

const deleteSubmittedJoke = async (id: string) => {
  // ! api request to 'submit-jokes-ms' microservice
  const response = await axios.delete(`${SUBMIT_JOKES_MS}/jokes/${id}`);
  return response.data;
};

const getJokeTypes = async () => {
  // ! api request to 'deliver-jokes-ms' microservice
  const response = await axios.get(`${DELIVER_JOKES_MS}/joke-types`);
  return response.data;
};

const approveJoke = async (
  id: string,
  data: { setup: string; punchline: string; type: string; author: string },
) => {
  // ! api request to 'deliver-jokes-ms' microservice - create joke
  // ! api request to 'submit-jokes-ms' microservice - delete joke
  const createJokeResponse = await axios.post(
    `${DELIVER_JOKES_MS}/jokes`,
    data,
  );

  if (createJokeResponse.status === 201) {
    const deleteJokeResponse = await axios.delete(
      `${SUBMIT_JOKES_MS}/jokes/${id}`,
    );
    return deleteJokeResponse.data;
  } else {
    return createJokeResponse.data;
  }
};

const rejectJoke = async (id: string) => {
  // ! api request to 'submit-jokes-ms' microservice - delete joke
  const response = await axios.delete(`${SUBMIT_JOKES_MS}/jokes/${id}`);
  return response.data;
};

export {
  getAllSubmittedJokes,
  getSubmittedJokeById,
  updateSubmittedJoke,
  deleteSubmittedJoke,
  getJokeTypes,
  approveJoke,
  rejectJoke,
};
