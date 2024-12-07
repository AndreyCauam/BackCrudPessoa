import db from '../../database/index'
import {Pessoa} from '../../interfaces/index'

export class UpdatePessoaService {
    public static async execute(id: Number,data: Pessoa){
        try {

            const pessoa = await db.transaction(async (trx) => {
                const createdPessoa = await trx("pessoas").where('id', id).update(data);
                return createdPessoa;
            });

            return pessoa
        } catch (error) {
            throw error
        }
    }
}
