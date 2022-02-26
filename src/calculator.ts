import { FactoryProvider, InjectionToken } from '@angular/core';
import ohm, { NonterminalNode, TerminalNode } from 'ohm-js';
import {
  CalculatorActionDict,
  CalculatorGrammar,
  CalculatorSemantics,
} from './calculator.ohm-bundle';

type MathSymbol = '+' | '−' | '×' | '÷';

type MathExpression = (
  this: NonterminalNode,
  lhs: NonterminalNode,
  op: TerminalNode,
  rhs: NonterminalNode
) => number;

const grammarSource = String.raw`
Calculator {
  AddExpr =
    | AddExpr "+" MulExpr -- add
    | AddExpr "−" MulExpr -- sub
    | MulExpr

  MulExpr =
    | MulExpr "×" number -- mul
    | MulExpr "÷" number -- div
    | number

  number =
    | digit+ "." digit+ -- float
    | digit+     -- integer
}`;

const mathExpr: MathExpression = function (lhs, op, rhs) {
  const opSymbol = op.sourceString as MathSymbol;
  switch (opSymbol) {
    case '−':
      return lhs['calc']() - rhs['calc']();
    case '+':
      return lhs['calc']() + rhs['calc']();
    case '×':
      return lhs['calc']() * rhs['calc']();
    case '÷':
      return lhs['calc']() / rhs['calc']();
  }
};

const calculatorActions: CalculatorActionDict<number> = {
  number: function (a) {
    return parseFloat(this.sourceString);
  },
  AddExpr_add: mathExpr,
  AddExpr_sub: mathExpr,
  MulExpr_mul: mathExpr,
  MulExpr_div: mathExpr,
};

function grammarFactory(): CalculatorGrammar {
  return ohm.grammar(grammarSource);
}

export function semanticsFactory(g: CalculatorGrammar): CalculatorSemantics {
  const semantics: CalculatorSemantics = g.createSemantics();
  semantics.addOperation('calc', calculatorActions);
  return semantics;
}

export const CALCULATOR_GRAMMAR = new InjectionToken<CalculatorGrammar>(
  'grammar'
);
export const CALCULATOR_SEMANTICS = new InjectionToken<CalculatorSemantics>(
  'semantics'
);

export const grammarProvider: FactoryProvider = {
  provide: CALCULATOR_GRAMMAR,
  useFactory: grammarFactory,
};

export const semanticsProvider: FactoryProvider = {
  provide: CALCULATOR_SEMANTICS,
  useFactory: semanticsFactory,
  deps: [CALCULATOR_GRAMMAR],
};
