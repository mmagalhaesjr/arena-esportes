import bcrypt, { hash } from 'bcrypt';
import { v4 as uuid } from "uuid";
import userRepositories from '../repositories/user-repositories.js';

async function signUp({ nome, email, senha, telefone }) {

  const user = await userRepositories.findUserByEmail(email)
  if (user) throw new Error("User already exists");

  const hashPassword = bcrypt.hashSync(senha, 10)

  await userRepositories.createUser({ nome, email, senha: hashPassword, telefone })

}


async function signIn({ email, senha }) {



}

const authServices = {
  signIn,
  signUp
}

export default authServices

















