const PRECEDENCE = {
  "WHERE": 1,
  "-<": 2, ">-": 2,
  "=": 3, ":": 3, "&": 3,
  "<": 7, ">": 7,
  "+": 10, "-": 10,
  "*": 20, "/": 20, "%": 20,
};
