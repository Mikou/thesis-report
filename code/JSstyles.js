// object oriented approach

(function () {

  function Transformer (numbers) {
    this.numbers = numbers;
  }

  Transformer.prototype.adder = function (number, value) {
    return Number(number) + Number(value);
  }

  Transformer.prototype.addToAll = function (value) {
    var result = []; 

    for(var i=0, len=this.numbers.length; i<len; i++) {
      result.push(this.adder(this.numbers[i], value));
    }   

    return result.join(' ');

  }

  var t = new Transformer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(t.addToAll(10));
}());


// functional approach

(function () {

  function adder (number, value) {
    return Number(number) + Number(value);
  }

  function transform (action, numbers, value) {
    return numbers.map(function(n) {
      return action(n, value);
    }).join(' ');
  }

  var t = transform(adder, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
  console.log(t);
}());
