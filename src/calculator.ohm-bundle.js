'use strict';const ohm=require('ohm-js');const result=ohm.makeRecipe(["grammar",{"source":"Calculator {\r\n\tAddExpr = AddExpr \"+\" MulExpr -- add\r\n\t\t| AddExpr \"-\" MulExpr -- sub\r\n\t\t| MulExpr\r\n\r\n\tMulExpr = MulExpr \"*\" number -- mul\r\n\t\t| MulExpr \"/\" number -- div\r\n\t        | number\r\n\r\n\tnumber = digit+ \".\" digit+\r\n\t\t| digit+ \"\" \"\"\r\n}"},"Calculator",null,"AddExpr",{"AddExpr_add":["define",{"sourceInterval":[25,51]},null,[],["seq",{"sourceInterval":[25,44]},["app",{"sourceInterval":[25,32]},"AddExpr",[]],["terminal",{"sourceInterval":[33,36]},"+"],["app",{"sourceInterval":[37,44]},"MulExpr",[]]]],"AddExpr_sub":["define",{"sourceInterval":[57,83]},null,[],["seq",{"sourceInterval":[57,76]},["app",{"sourceInterval":[57,64]},"AddExpr",[]],["terminal",{"sourceInterval":[65,68]},"-"],["app",{"sourceInterval":[69,76]},"MulExpr",[]]]],"AddExpr":["define",{"sourceInterval":[15,96]},null,[],["alt",{"sourceInterval":[25,96]},["app",{"sourceInterval":[25,44]},"AddExpr_add",[]],["app",{"sourceInterval":[57,76]},"AddExpr_sub",[]],["app",{"sourceInterval":[89,96]},"MulExpr",[]]]],"MulExpr_mul":["define",{"sourceInterval":[111,136]},null,[],["seq",{"sourceInterval":[111,129]},["app",{"sourceInterval":[111,118]},"MulExpr",[]],["terminal",{"sourceInterval":[119,122]},"*"],["app",{"sourceInterval":[123,129]},"number",[]]]],"MulExpr_div":["define",{"sourceInterval":[142,167]},null,[],["seq",{"sourceInterval":[142,160]},["app",{"sourceInterval":[142,149]},"MulExpr",[]],["terminal",{"sourceInterval":[150,153]},"/"],["app",{"sourceInterval":[154,160]},"number",[]]]],"MulExpr":["define",{"sourceInterval":[101,186]},null,[],["alt",{"sourceInterval":[111,186]},["app",{"sourceInterval":[111,129]},"MulExpr_mul",[]],["app",{"sourceInterval":[142,160]},"MulExpr_div",[]],["app",{"sourceInterval":[180,186]},"number",[]]]],"number":["define",{"sourceInterval":[191,235]},null,[],["alt",{"sourceInterval":[200,235]},["seq",{"sourceInterval":[200,217]},["plus",{"sourceInterval":[200,206]},["app",{"sourceInterval":[200,205]},"digit",[]]],["terminal",{"sourceInterval":[207,210]},"."],["plus",{"sourceInterval":[211,217]},["app",{"sourceInterval":[211,216]},"digit",[]]]],["seq",{"sourceInterval":[223,235]},["plus",{"sourceInterval":[223,229]},["app",{"sourceInterval":[223,228]},"digit",[]]],["terminal",{"sourceInterval":[230,232]},""],["terminal",{"sourceInterval":[233,235]},""]]]]}]);module.exports=result;