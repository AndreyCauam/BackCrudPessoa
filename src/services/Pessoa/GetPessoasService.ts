import db from '../../database/index'
import {Params} from '../../interfaces/index'

export class GetPessoasService {
    public static async execute(query: Params | {}){
        const limit = query.limit ? (Number(query.limit) === -1 ? Number.MAX_SAFE_INTEGER : Number(query.limit)): 10;
        const offset = query.offset ? Number(query.offset) : 0;
        try {

        const getPessoas = await db('pessoas')
            .where((builder) => {
                if(query.search){
                    builder.where('id', query.search)
                    .orWhere('nome', "like" , `%${query.search}%`)
                    .orWhere('email', "like" , `%${query.search}%`)
                    .orWhere('data_de_nascimento', query.search)
                }
        })
        .limit(limit)
        .offset(offset);

        return getPessoas
        } catch (error) {
            throw error
        }
    }
}