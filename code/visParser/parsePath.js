function parsePath(expr) {
  var tok = ts.peek();
  var path = { 
    type: 'path',
    content: expr
  };  
  if(expr.type == 'id') {
    if(isPunc("[")) {
      path.index = delimited("[", "]", parseAtom);
    }   
    if(isPunc(".") || isPunc("!")) path.next = parsePath(ts.next());
  } else if(expr.type == 'punc') {
    if(tok.type=='id') path.next = parsePath(ts.next());
  }
  return path;
}
