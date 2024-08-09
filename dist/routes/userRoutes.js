"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Não deveria existir em uma aplicação real!
router.get("/", _userController2.default.index)
router.get("/:id", _userController2.default.show)

router.post("/", _loginRequired2.default, _userController2.default.store)
router.put("/:id", _loginRequired2.default, _userController2.default.update)
router.delete("/:id", _loginRequired2.default, _userController2.default.delete)


exports. default = router;

/*
Index -> Lista todos os usuários -> GET
Store/Create -> Cria um novo usuário -> POST
Delete -> Apaga um usuário -> DELETE
Show -> Mostra um usuário -> GET
Update -> Atualiza um usuário -> PATCH ou PUT
*/
