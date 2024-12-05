import { Request, Response } from "express"
import { CreatePessoaService } from "../services/Pessoa/CreatePessoaService"
import { UpdatePessoaService } from "../services/Pessoa/UpdatePessoaService"
import { GetPessoasService } from "../services/Pessoa/GetPessoasService"
import { ShowPessoaService } from "../services/Pessoa/ShowPessoaService"
import { DeletePessoaService } from "../services/Pessoa/DeletePessoaService"

export const createPessoa = async ({body}: Request, res: Response) => {
    try {
        const createPessoa = await CreatePessoaService.execute(body)

        return res.status(200).json({
            message: "Pessoa criada com sucesso!",
            pessoa: createPessoa
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const updatePessoa = async ({body, params}: Request, res: Response) => {
    const {id} = params
    try {
        const updatePessoa = await UpdatePessoaService.execute(id, body)

        return res.status(200).json({
            message: "Pessoa atualizada com sucesso!",
            pessoa: updatePessoa
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const getPessoas = async ({query}: Request, res: Response) => {
    try {

        const getPessoas = await GetPessoasService.execute(query)

        return res.status(200).json({
            pessoas: getPessoas
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const showPessoa = async ({params}: Request, res: Response) => {
    const {id} = params
    try {
        const showPessoa = await ShowPessoaService.execute(id)

        return res.status(200).json({
            pessoa: showPessoa
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

export const deletePessoa = async ({params}: Request, res: Response) => {
    const {id} = params
    try {
        await DeletePessoaService.execute(id)

        return res.status(200).json({
            message: "Pessoa deletada com sucesso!",
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

