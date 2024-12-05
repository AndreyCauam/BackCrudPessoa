import cors from "cors"
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
    router.use(
        cors({
            origin: ["*"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true,
        }),
    )
    router.get("/pessoas", getPessoas)
    router.get("/pessoa/:id", showPessoa)
    router.post("/pessoa", createPessoa)
    router.put("/pessoa/:id", updatePessoa)
    router.delete("/pessoa/:id", deletePessoa)

    return router
}

