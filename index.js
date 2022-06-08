import User from './User.js'
import Docente from './Docente.js'
import Admin from './Admin.js'

const novoUser = new User('Mariana', 'maria@email.com', '22/09/1996')
console.log(novoUser.exibirInfo())

const novoAdmin = new Admin('Rodrigo', 'ro@email.com', '27/06/1989')
console.log(novoAdmin.nome)
novoAdmin.nome = 'Andre'
console.log(novoAdmin.nome)
