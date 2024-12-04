import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("pessoas").del();

    await knex("pessoas").insert([
        { 
            id: 1, 
            nome: "João Silva", 
            email: "joao.silva@email.com", 
            data_de_nascimento: "1990-01-01", 
            created_at: knex.fn.now(), 
            updated_at: knex.fn.now()
        },
        { 
            id: 2, 
            nome: "Maria Oliveira", 
            email: "maria.oliveira@email.com", 
            data_de_nascimento: "1985-05-10", 
            created_at: knex.fn.now(), 
            updated_at: knex.fn.now()
        },
        { 
            id: 3, 
            nome: "Pedro Souza", 
            email: "pedro.souza@email.com", 
            data_de_nascimento: "1992-11-23", 
            created_at: knex.fn.now(), 
            updated_at: knex.fn.now()
        },
        { 
            id: 4, 
            nome: "Ana Costa", 
            email: "ana.costa@email.com", 
            data_de_nascimento: "1988-02-15", 
            created_at: knex.fn.now(), 
            updated_at: knex.fn.now()
        },
        { 
            id: 5, 
            nome: "Carlos Pereira", 
            email: "carlos.pereira@email.com", 
            data_de_nascimento: "1995-08-30", 
            created_at: knex.fn.now(), 
            updated_at: knex.fn.now()
        }
    ]);
};