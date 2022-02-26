import { Component } from '@angular/core';
import { filter, fromEvent, map, tap } from 'rxjs';
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
  keyPress$ = fromEvent<KeyboardEvent>(window, 'keyup').pipe(
    map((e) => e.key),
    filter((key) => '+-*/=.'.indexOf(key) > -1 || /^\d$/.test(key)),
    map((key) => key.replace('/', '÷').replace('*', '×').replace('-', '−')),
    tap((key) => this.appendOrSolveExpression(key))
  );

  constructor(private calculator: CalculatorService) {}

  onButtonClick(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const text = target.innerText.replace('·', '.');
    this.appendOrSolveExpression(text);
  }

  private appendOrSolveExpression(text: string) {
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
