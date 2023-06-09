import { Sessao, Usuario } from '@prisma/client';
import prisma from '../config/database.js';


type UserData = Omit<Usuario, "id" | "adm" | "created_at">;

type SessionData = Omit<Sessao, "id" | "created_at">


async function findUserByEmail(email: string) {
  return await prisma.usuario.findUnique({
    where: {
      email,
    },
  });
}

async function createUser({ nome, email, senha, telefone }: UserData) {
  return await prisma.usuario.create({
    data: { nome, email, senha, telefone },
  });
}

async function createSession({ id_usuario, token }: SessionData) {
  return await prisma.sessao.create({
    data: {
      id_usuario,
      token,
    },
  })
}


const userRepositories = {
  findUserByEmail,
  createUser,
  createSession,
};

export default userRepositories;