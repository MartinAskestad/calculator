// AUTOGENERATED FILE
// This file was generated from calculator.ohm by `ohm generateBundles`.

import {
  ActionDict,
  Grammar,
  IterationNode,
  Node,
  NonterminalNode,
  Semantics,
  TerminalNode
} from 'ohm-js';

export interface CalculatorActionDict<T> extends ActionDict<T> {
  AddExpr_add?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  AddExpr_sub?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  AddExpr?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  MulExpr_mul?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  MulExpr_div?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  MulExpr?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  number?: (this: NonterminalNode, arg0: IterationNode, arg1: TerminalNode, arg2: IterationNode | TerminalNode) => T;
}

export interface CalculatorSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: CalculatorActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: CalculatorActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: CalculatorActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: CalculatorActionDict<T>): this;
}

export interface CalculatorGrammar extends Grammar {
  createSemantics(): CalculatorSemantics;
  extendSemantics(superSemantics: CalculatorSemantics): CalculatorSemantics;
}

declare const grammar: CalculatorGrammar;
export default grammar;

