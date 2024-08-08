import { Router } from "express";
import userController from "../controllers/userController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveria existir em uma aplicação real!
router.get("/", userController.index)
router.get("/:id", userController.show)

router.post("/", loginRequired, userController.store)
router.put("/:id", loginRequired, userController.update)
router.delete("/:id", loginRequired, userController.delete)


export default router;

/*
Index -> Lista todos os usuários -> GET
Store/Create -> Cria um novo usuário -> POST
Delete -> Apaga um usuário -> DELETE
Show -> Mostra um usuário -> GET
Update -> Atualiza um usuário -> PATCH ou PUT
*/
