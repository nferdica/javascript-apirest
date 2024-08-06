import Aluno from "../models/aluno"

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Nathan",
      sobrenome: "Ferdinando",
      email: "nferdica@outlook.com",
      idade: 22,
      peso: 90.0,
      altura: 1.81
    })
    res.json({novoAluno})
  }
}

export default new HomeController();
