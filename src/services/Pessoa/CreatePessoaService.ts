import { log } from 'console'
import db from '../../database/index'
import {Pessoa} from '../../interfaces/index'

export class CreatePessoaService {
    public static async execute(data: Pessoa){
        try {
            const validateEmail = await db('pessoas').where('email', data.email).select('*')

            if(validateEmail.length > 0){
                throw new Error('Este email já está cadastrado!')
            }

            const pessoa = await db.transaction(async (trx) => {
                const [createdPessoa] = await trx("pessoas").insert(data);
                return createdPessoa; 
            });

            return pessoa
        } catch (error) {
            throw error
        }
    }
}
