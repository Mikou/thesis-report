function maybePath(expr) {
  return (isPunc(".") || isPunc("!")) ? parsePath(expr) : expr;
}