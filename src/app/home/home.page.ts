import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor:string = "0";
  memoria:string = "0";
  operacao:string = "";
  
  incluiNumero(num:string) {
    if(this.valor == "0") {
      this.valor = num;
    } else {
      this.valor+= num;
    }
  }

  incluiPonto() {
    if(!this.valor.includes(".")) {
      this.valor+= ".";
    }
  }

  incluiOperacao(op:string) {
    if(this.operacao != "") {
      this.calcular();
    }
    this.memoria = this.valor;
    this.operacao = op;
    if(op != "=") {
      this.valor = "0";
    } else {
      this.memoria = "0";
      this.operacao = "";
    }
  }
  
  calcular() {
    if(this.operacao == "=") {
      this.memoria = "0";
      this.operacao = "";
    } else if(this.operacao == "/") {
      if(this.valor != "0") {
        this.valor = (parseFloat(this.memoria) / parseFloat(this.valor)).toString();
      }
    } else {
      this.valor = eval(this.memoria+this.operacao+this.valor).toString();
    }
    //   this.valor = (parseFloat(this.memoria) * parseFloat(this.valor)).toString();
    // } else if(this.operacao == "-") {
    //   this.valor = (parseFloat(this.memoria) - parseFloat(this.valor)).toString();
    // } else if(this.operacao == "+") {
    //   this.valor = (parseFloat(this.memoria) + parseFloat(this.valor)).toString();
    // }
  }

  limparTudo() {
    this.valor = "0";
    this.memoria = "0";
    this.operacao = "";
  }

  limparUltimo() {
    if(this.valor.length > 1) {
      this.valor = this.valor.substr(0,(this.valor.length - 1));
    } else {
      this.limparTudo();
    }
  }

  constructor() {}

}
 