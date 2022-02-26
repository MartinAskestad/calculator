import { Inject, Injectable } from '@angular/core';
import { CALCULATOR_GRAMMAR, CALCULATOR_SEMANTICS } from 'src/calculator';
import {
  CalculatorGrammar,
  CalculatorSemantics,
} from 'src/calculator.ohm-bundle';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(
    @Inject(CALCULATOR_GRAMMAR) private grammar: CalculatorGrammar,
    @Inject(CALCULATOR_SEMANTICS) private semantics: CalculatorSemantics
  ) {}

  calculate(expression: string): number {
    const m = this.grammar.match(expression);
    if (m.succeeded()) {
      const res: number = this.semantics(m)['calc']();
      console.log('res', res);
      return res;
    } else {
      console.error(m.message);
    }
    return 0;
  }
}
