import { cliente } from "./Cliente.js" 
import { contaCorrente } from "./ContaCorrente.js"

const cliente1 = new cliente() //conta 1
cliente1.nome = 'Amanda'
cliente1.cpf = 11122233304

const contaCorrenteAmanda = new contaCorrente() //conta 1
contaCorrenteAmanda.saldo = 5700
contaCorrenteAmanda.agencia = 1001
contaCorrenteAmanda.cliente = cliente1

contaCorrenteAmanda.depositar(200)
contaCorrenteAmanda.sacar(50)

const cliente2 = new cliente() //conta 2
cliente2.nome = 'Jiuvaldo'
cliente2.cpf = 11133333304


const contaCorrenteJivaldo = new contaCorrente() //conta 2
contaCorrenteJivaldo.saldo = 0
contaCorrenteJivaldo.agencia = 1002
contaCorrenteJivaldo.cliente = cliente2

contaCorrenteJivaldo.depositar(5800)
contaCorrenteJivaldo.sacar(200)





console.log(contaCorrenteAmanda)
console.log(contaCorrenteJivaldo)