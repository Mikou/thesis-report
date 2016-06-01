var adder = function (x) { 
  return function (y) {           
    return x + y;                            
  };                          
};                       
add = adder(3);
console.log(add(1) === 4);