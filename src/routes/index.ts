import { Router, json } from "express"
import { 
    createPessoa,
    updatePessoa,
    getPessoas,
    showPessoa,
    deletePessoa
} from "../controllers/pessoasController"

export default () => {
    const router = Router()
    router.use(json())

    router.get("/pessoas", getPessoas)
    router.get("/pessoa/:id", showPessoa)
    router.post("/pessoa", createPessoa)
    router.put("/pessoa/:id", updatePessoa)
    router.delete("/pessoa/:id", deletePessoa)

    return router
}

