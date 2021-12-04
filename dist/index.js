"use strict";
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
let person = [12, 'brad', true];
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Juill']
];
let pid;
pid = '22';
//enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'John'
};
//Type assertion
let cid = 1;
let customId = cid;
//Functions
let addNum = (x, y) => {
    console.log(x, y);
    return x + y;
};
console.log(addNum(2, 3));
