import { cliente } from "../Cliente.js" 
import { contaCorrente } from "../ContaCorrente.js"

const cliente1 = new cliente()
cliente1.nome = 'Amanda'
cliente1.cpf = 11122233304

const contaCorrenteAmanda = new contaCorrente()
contaCorrenteAmanda.saldo = 57
contaCorrenteAmanda.agencia = 1001

contaCorrenteAmanda.depositar(200)
contaCorrenteAmanda.sacar(50)

const cliente2 = new cliente()
cliente2.nome = 'Jiuvaldo'
cliente2.cpf = 11133333304


const contaCorrenteJivaldo = new contaCorrente()
contaCorrenteJivaldo.saldo = 0
contaCorrenteJivaldo.agencia = 1002

contaCorrenteJivaldo.depositar(5800)
contaCorrenteJivaldo.sacar(200)





console.log(contaCorrenteAmanda)
console.log(contaCorrenteJivaldo)