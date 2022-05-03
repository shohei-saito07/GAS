// サンプル5-2-1
const sayHello_ = function() {
 console.log('Hello!'); 
};

function sayGoodBye() {
 sayHello_();
 console.log('Good bye.'); 
}

function myFunction05_02_02() {
 console.log(`長方形の面積: ${calcArea_(3, 4)}`); //長方形の面積: 12
}

const calcArea_ = function(x, y) {
 return x * y;
};

function myFunction05_02_06() {
 console.log(`正方形の面積: ${calcSquareArea_(3)}`); //正方形の面積: 9
}

const calcSquareArea_ = x => x ** 2;
