const ReplConstants = {
  REPL_HISTORY_SIZE: 1000,
  REPL_ENCODING: 'utf8',
  TAB_WIDTH: 2,
  BABEL_OPTIONS: {
    filename: 'repl',
    highlightCode: false,
    ast: false,
    stage: 0,
    retainLines: true,
    blacklist: ["strict"],
    env: process.env,
    optional:[
      'runtime',
      'es7.asyncFunctions',
      'es7.classProperties',
      'es7.comprehensions',
      'es7.decorators',
      'es7.doExpressions',
      'es7.exponentiationOperator',
      'es7.exportExtensions',
      'es7.functionBind',
      'es7.objectRestSpread',
      'es7.trailingFunctionCommas',
      ]
  }
};

export default ReplConstants;
