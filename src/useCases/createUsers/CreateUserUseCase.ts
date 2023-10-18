import { hash } from 'bcryptjs'
import { client } from "../../database/client"
import { randomUUID } from 'node:crypto'
import { date } from 'zod'

interface IUserRequest{
    id:         string
    name:       string
    username:   string
    email:      string
    passwd:     string
    cellphone:  string
    level:      number
    createdAt:  number
    updatedAt:  number
}

class CreateUserUseCase {
    async execute({ name, username, passwd, email, cellphone, level, createdAt,updatedAt, }: IUserRequest){
        //Verificar se o Usuário existe
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username
            }
        })

        if(userAlreadyExists){
            throw new Error('User already exists!')
        }

        //Cadastra o Usuario

        const passwdHash = await hash(passwd, 8)
        const idUUID = await randomUUID()
        const createdAtNOW = Date.now()
        const updatedAtNOW = Date.now()

        const user = await client.user.create({
            data:{
                id: idUUID,
                name, 
                username, 
                passwd: passwdHash,
                email,
                cellphone,
                level: 1,
                createdAt: createdAtNOW,
                updatedAt: updatedAtNOW,
            }
        })

        return user
    }
}

export { CreateUserUseCase }