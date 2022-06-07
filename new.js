// function User(nome, email) {
//   this.nome = nome
//   this.email = email

//   this.exibirInfo = function () {
//     return `${this.nome}, ${this.email}`
//   }
// }

// //const novoUser = new User('Juliana', 'ju@email.com')
// //console.log(novoUser.exibirInfo())

// function Admin(role) {
//   User.call(this, 'Juliana', 'ju@email.com')
//   this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.role)
// console.log(novoUser.exibirInfo())

const user = {
  init: function (nome, email) {
    this.nome = nome
    this.email = email
  },

  exibirInfo: function () {
    return this.nome
  }
}

// const novoUser = Object.create(user)
// console.log(novoUser.exibirInfo('Juliana'))
// console.log(user.isPrototypeOf(novoUser))

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfo())
