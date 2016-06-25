function maybeBinary(left, myPrec) {
  var tok = isOp();
  if (tok) {
    var hisPrec = PRECEDENCE[tok.value];
    if (hisPrec > myPrec) {
      ts.next();
      var right = maybeBinary(maybePath(parseAtom()), hisPrec);

      return maybeBinary({
        type     : "binary",
        operator : tok.value,
        left     : left,
        right    : right
      }, myPrec);
    }   
  }
  return left;
}