// 文字列型
let hello = "Hello World";
alert(hello);

// 数値型
let number1 = 123;
let number2 = 1.5;

// 真偽型
let isChecked = true;
if (isClecked) {
  console.log("trueの場合の処理");
}

//null
let foo = null;

//リテラル
const array = [1,2,3,4];
//newで作成する
const array2 = new Array(1,2,3,4);

//サイズが3の配列ができる
const array1 = new Array(3);
//1,2が入った配列ができる
const array2 = new Array(1,2);

//要素を持たない空の配列
const array3 = [];
const array4 = new Array();

const array = [1,2,3];
console.log(array[0]); //1
console.log(array[1]); //2
console.log(array[2]); //3

const array = [1,2,3];
array[1] = 6;  //2番目に6を代入する
console.log(array);  //[1,6,3]

const array = [1,2,3];
array.push(4);  //配列に4を追加
console.log(array); //[1,2,3,4]

//オブジェクト
let user = {
  name: "山田太郎",
  age: 30,
  birthday: "1991/7/21"
  hobby: ["ゲーム","スポーツ"],
  getAge: function() {
    return this.age;
  }
}

user.name = "田中次郎"

console.log(user.name);  //山田太郎
console.log(user.age);  //30
console.log(user.birthday);  //1991/7/21
console.log(user.name);  //田中次郎

//ホイスティング
var str = "Hello";

function foo() {
  console.log(str);
  var str = "Hello World";
  console.log(str);
}

foo();

