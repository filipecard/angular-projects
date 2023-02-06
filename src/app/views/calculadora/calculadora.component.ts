import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operations = [,,,]
  numbers = [["C","<", "/","%"],[7,8,9,"*"],[4,5,6, "+"],[1,2,3,"-"],[0,",","="]]
  inputValue = ''

  addNumInput(num: string){
    if (Number(num)){
      this.inputValue += num;
    } else if (num == "," && !(this.inputValue.includes(","))) {
      this.inputValue += num;
    } else {

    }
   
  }

  updateValue(event: any){
    this.inputValue = event.target.value;
  }
}
