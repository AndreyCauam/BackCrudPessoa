import db from '../../database/index'
import {Pessoa} from '../../interfaces/index'

export class ShowPessoaService {
    public static async execute(id: number){
        try {
            const showPessoa = await db('pessoas')
                .where('id', id)
                .select('*')
                .first()

            return showPessoa
        } catch (error) {
            throw error
        }
    }
}