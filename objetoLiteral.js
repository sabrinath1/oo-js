const user = {
  nome: 'Sabrina',
  email: 'sabrinath1@hotmail.com',
  nascimento: '22/05/1994',
  role: 'admin',
  ativo: true,
  exiberInfo: function () {
    console.log(this.nome, this.email)
  }
}
const admin = {
  nome: 'Mariana',
  email: 'email@email.com',
  role: 'estudante',
  criarCurso() {
    console.log('Curso criado!')
  }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exiberInfo()
