let declaredVariable;  // замменил на let потому что ругался редактор, const должна иметь значение
const someData = 99;
const obj = {age: 33};

typeof 37;  // Number
typeof obj; // Object
typeof true;  // Boolean
typeof 3.14;  // Number
typeof obj.name; // Undefined
typeof 42;  // Number
typeof "";  // String
typeof "bla"; // String
typeof Boolean(1);  //Boolean
typeof !!1; //  Boolean
typeof obj.age;  // Number
typeof Infinity;  // Number  вначале не понял потом погуглил что это обозначает бесконечность в числовом выражении
typeof NaN; // Number
typeof (someData + " Wisen"); // String
typeof Number("1"); // Number
typeof Number("shoe");  // Number принудительно можно назначить тим, также можно сделать и Objectом
typeof `template literal`;  // String
typeof "1";  // String
typeof typeof 1;  // String я так понял потому что результат от "функции" (typeof) відаеться стрингой.
typeof false; // Boolean
typeof String(1); // String
typeof undefined;  // undefined
typeof { a: 1 };  //Object
typeof declaredVariable; // Undefined
typeof [1, 2, 4];  //Object
typeof null;  // Object
typeof "John";  // String
typeof ([] + '1'); // String
typeof (1 + '1');  //  String
typeof (10 * '2');  // Number