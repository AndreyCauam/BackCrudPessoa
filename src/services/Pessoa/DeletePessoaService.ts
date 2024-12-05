import db from '../../database/index'
import {Pessoa} from '../../interfaces/index'

export class DeletePessoaService {
    public static async execute(id: number){
        try {
            const deletedPessoa = await db.transaction(async (trx) => {

                const pessoaExists = await trx("pessoas").where("id", id).first();
                
                if (!pessoaExists) {
                  throw new Error("USER_NOT_FOUND");
                }

                await trx("pessoas").where("id", id).del();
      
                return pessoaExists; 
            });

            return { message: 'Pessoa deletada com sucesso', id };
        } catch (error) {
            throw error
        }
    }
}