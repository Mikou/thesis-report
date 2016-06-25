function readNext() {
    readWhile(isWhitespace);
    if (input.eof()) return null;
    var ch = input.peek();
    // COMMENT (skip it)
    if (ch === "'") {
      skipComment();
      return readNext();
    }
    // DATETIME
    if (ch === "#")     return readDatetime();
    // STRING
    if (ch === '"')     return readString();
    // NUMBER
    if (isDigit(ch))    return readNumber();
    // IDENT OR PATH
    if (isIdStart(ch))  return readIdentOrPath();
    // OPERATOR
    if(isOpChar(ch))    return readOperator();
    // EOL
    if (ch === "\n")    return { type:"EOL", value: input.next() }
    input.croak("Can't handle character: " + ch);
}