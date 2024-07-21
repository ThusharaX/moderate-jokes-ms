import User from '../models/user.model';

const createUser = async (data: { email: string; password: string }) => {
  const user = new User(data);
  return await user.save();
};

const getUserByEmail = async (email: string) => {
  return await User.findOne({
    email
  });
};

export { createUser, getUserByEmail };