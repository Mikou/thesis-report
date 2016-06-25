function preEvaluate (exp, env) {
  // [...]

  switch(exp.type) {
    case 'formula':
      const relation = preEvaluate(exp.value, env);
      bindRelation(exp, env);
      break;

    case 'binary':
      const left  = preEvaluate(exp.left,  env);
      const right = preEvaluate(exp.right, env);
      return applyOp(exp.operator, left, right, env);

    case 'path':
      const pathReader = createPathReader(exp);
      const walkTo = preEvaluate(pathReader.next(), env);
      return walkTo(pathReader, env);

    case 'num':
    case 'str':
      return exp.value;

    case 'id':
      if(exp.value === 'index') return null;
      if(exp.value === 'Map') return walkToMap;
      if(exp.value === 'Form') return walkToForm;
      if(exp.value === 'Parent') return walkToParent;

      return exp.value;

    case 'punc':
      return exp.value;

    case 'datetime':
      return exp.value.toString();
  }
}