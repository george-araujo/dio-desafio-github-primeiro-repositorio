class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    set saldo(valor){
        this._saldo = valor
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if (this._saldo < valor){
            return "Saldo insuficiente."
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this.tipo = 'credito'
        this._cartaoCredito = cartaoCredito;
    }
    
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }
}

class ContaPoup extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}

class ContaUni extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = 'universitaria'
    }

    sacar(valor){
        if (valor > 500){
            return 'Operação inválida'
        }
        
        this._saldo = this._saldo - valor;
		return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUni(2, 333);