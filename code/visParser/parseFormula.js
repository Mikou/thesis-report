function parseFormula () {
  while(!ts.eof() && ts.peek().type !== 'EOL' ){
    return {type:'formula', value: maybe_binary(maybePath(parseAtom()), 0)};
  }
}