import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("pessoas", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("email", 100).notNullable().unique();
    table.date("data_de_nascimento").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("pessoas");
}

