//サンプル23-2-1
/** 人を表すクラス */
class Person {
  /**
   * Personオブジェクトを生成する
   * @param {string} name - 名前
   * @param {number} age - 年齢
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  /**
   * あいさつ文をログ出力する
   */
  greet(){
    console.log(`Hello! I'm ${this.name}!`);  
  }
}

/**
 * Personクラスのインスタンスを生成して返すファクトリ関数
 *
 * @param {String} name - 名前
 * @param {Number} age ｰ 年齢（既定値は0.1）
 * @return {Person} - 生成したPersonオブジェクト
 */
function createPerson(name, age) {
  return new Person(name, age);
}

/**
 * 税込み価格を返す関数
 *
 * @param {Number} price - 価格
 * @param {Number} taxRate - 税率（既定値は0.1）
 * @return {Number} 税込価格
 */
function includeTax(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}

function test() {
  const p = createPerson('Bob', 25);
  console.log(p);
  p.greet();
  
  console.log(includeTax(1000));
  console.log(includeTax(1000, 0.08));

}

function myFunction23_02_02() {
  const p = MyLibrary.createPerson('Bob', 25); 
  console.log(p); //{ name: 'Bob', age: 25 }
  p.greet(); //Hello! I'm Bob!
  
  console.log(MyLibrary.includeTax(1000)); //1100
  console.log(MyLibrary.includeTax(1000, 0.08)); //1080
}