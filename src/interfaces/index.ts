export type DateTime = String

export interface Pessoa {
    id: Number
    nome: String
    email: String
    data_de_nascimento: DateTime
    created_at: DateTime
    updated_at: DateTime
}

export interface Params {
    search?: String
    limit?: Number
    offset?: Number
}