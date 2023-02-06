import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numbers = [[1,2,3],[4,5,6],[7,8,9],[0]]
  inputValue = ''

  addNumInput(num: string){
    this.inputValue += num;
  }


  updateValue(event: any){
    this.inputValue = event.target.value;
  }
}
