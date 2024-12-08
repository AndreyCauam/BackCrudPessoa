import db from '../../database/index'
import {Params} from '../../interfaces/index'

export class GetPessoasService {
    public static async execute(query: Params | {}){
        const isParams = (obj: any): obj is Params => {
            return 'limit' in obj || 'offset' in obj || 'search' in obj;
        };
        const limit = isParams(query)  ? (Number(query.limit) === -1 ? Number.MAX_SAFE_INTEGER : Number(query.limit)): 10;
        const offset = isParams(query)  ? Number(query.offset) : 0;
        try {

        const getPessoas = await db('pessoas')
            .where((builder) => {
                if (query.search) {
                    if (!isNaN(query.search)) {
                      builder.where("id", query.search);
                    }
                    builder
                    .orWhere("name", "like", `%${query.search}%`)
                    .orWhere("email", "like", `%${query.search}%`);
                  }
        })
        .orderBy('id','desc')
        .limit(limit)
        .offset(offset);

        return getPessoas
        } catch (error) {
            throw error
        }
    }
}