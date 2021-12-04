var id = 5;
var company = 'Traversy Media';
var isPublished = true;
var x = 'Hello';
var ids = [1, 2, 3, 4];
var arr = [1, true, 'Hello'];
var person = [12, 'brad', true];
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Juill']
];
var pid;
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
var user = {
    id: 1,
    name: 'John'
};
//Type assertion
var cid = 1;
var customId = cid;
//Functions
var addNum = function (x, y) {
    return x + y;
};
console.log(addNum(2, 3));
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var roman = new Person(1, 'roman meredith');
console.log(roman);
