import prisma from "../config/database.js"

async function findUserByEmail(email) {

    return await prisma.usuario.findUnique({
        where: {
            email
        }
    })
}


async function createUser({ nome, email, senha, telefone }) {
    return await prisma.usuario.create({
        data: { nome, email, senha, telefone }
    })
}

async function createSession({ user, token }) {

}



const userRepositories = {
    findUserByEmail,
    createUser,
    createSession
}

export default userRepositories