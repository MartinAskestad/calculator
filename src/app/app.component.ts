import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _expression = '0';
  public get expression() {
    if (this._expression.startsWith('0') && this._expression.length > 1) {
      return this._expression.substr(1);
    }
    return this._expression;
  }
  public set expression(value) {
    this._expression = value;
  }

  constructor(private calculator: CalculatorService) {}

  onButtonClick(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const text = target.innerText.replace('·', '.');
    if (text === 'C') {
      this.expression = '0';
      return;
    }
    if (text === '=') {
      this.expression = `${this.calculator.calculate(this.expression)}`;
      return;
    }
    this.expression += text;
  }
}
