class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome
    this.email = email
    this.nascimento = nascimento
    this.role = role || 'estusante'
    this.ativo = ativo
  }

  exibirInfo() {
    return `${this.nome}, ${this.email}`
  }
}

const novoUser = new User('Juliana', 'ju@email.com', '22/05/1998')
console.log(novoUser)
console.log(novoUser.exibirInfo())

console.log(User.prototype.isPrototypeOf(novoUser))
